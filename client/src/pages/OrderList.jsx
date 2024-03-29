import { useEffect, useState } from "react";
import "../styles/List.scss";
import Loader from "../components/Loader";
import Navbar from "../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { setOrderList } from "../redux/state";
import ListingCard from "../components/ListingCard";
import Footer from "../components/Footer"

const OrderList = () => {
  const [loading, setLoading] = useState(true);
  const userId = useSelector((state) => state.user._id);
  const orderList = useSelector((state) => state.user.orderList);

  const dispatch = useDispatch();

  const getOrderList = async () => {
    try {
      const response = await fetch(
        `http://localhost:3001/users/${userId}/orders`,
        {
          method: "GET",
        }
      );

      const data = await response.json();
      dispatch(setOrderList(data));
      setLoading(false);
    } catch (err) {
      console.log("Fetch Order List failed!", err.message);
    }
  };

  useEffect(() => {
    getOrderList();
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <>
      <Navbar />
      <h1 className="title-list">Your Orders</h1>
      <div className="list">
        {orderList?.map(({ listingId, hostId, startDate, endDate, totalPrice, booking=true }) => (
          <ListingCard
            listingId={listingId._id}
            creator={hostId._id}
            listingPhotoPaths={listingId.listingPhotoPaths}
            city={listingId.city}
            province={listingId.province}
            country={listingId.country}
            category={listingId.category}
            startDate={startDate}
            endDate={endDate}
            totalPrice={totalPrice}
            booking={booking}
          />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default OrderList;
