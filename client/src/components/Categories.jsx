import { categories } from "../data";
import "../styles/Categories.scss"
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="categories">
      <h1>Explore Top Categories</h1>
      <p>
      The agriculture tools rental system facilitates access to vital farming equipment through an innovative platform. Offering convenience and efficiency, it empowers farmers to rent essential tools, fostering collaboration and resource-sharing. By leveraging modern technology, it enhances productivity and sustainability in agricultural practices, driving progress and prosperity in farming communities.
      </p>

      <div className="categories_list">
        {categories?.slice(1, 7).map((category, index) => (
          <Link to={`/properties/category/${category.label}`}>
            <div className="category" key={index} >
              <img src={category.img} alt={category.label} />
              <div className="overlay"></div>
              <div className="category_text">
                <div className="category_text_icon" >{category.icon}</div>
                <p>{category.label}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
