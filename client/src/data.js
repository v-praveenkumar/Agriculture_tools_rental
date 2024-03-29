import { ReactComponent as Emi } from './icons/Emi.svg';
import { ReactComponent as Bank } from './icons/Bank.svg';
import { ReactComponent as Maintanence } from './icons/Maintenance.svg';
import { LuAxe } from "react-icons/lu";
import { RiCaravanLine } from "react-icons/ri";
import { 
  GiFarmTractor,
   GiFarmer,
   GiPizzaCutter,
   GiWateringCan,
   GiDigDug,GiKneePad,
   GiNeedleDrill,
   GiFertilizerBag,
   GiTestTubes,
   GiDrill } from "react-icons/gi";
import { PiPottedPlantBold,PiKnifeDuotone } from "react-icons/pi";
import { TbRulerMeasure } from "react-icons/tb";
import { FaTractor } from "react-icons/fa6";
import { BiFork } from "react-icons/bi";
import {
  BiWorld,
} from "react-icons/bi";
import { LiaBroomSolid } from "react-icons/lia";
export const categories = [
  {
    label: "All",
    icon: <BiWorld  />,
  },
  {
    img: "assets/shovel.jpg",
    label: "DiggingTools",
    icon:<GiDigDug/>,
    description: "The shovel, a humble tool, turns soil with the promise of growth and the labor of cultivation",
  },
  {
    img: "assets/pruningshear.jpg",
    label: "PruningTools",
    icon: <GiPizzaCutter />,
    description: "This Tool is used for Cutting purpose!",
  },
  {
    img: "assets/hoe.jpg",
    label: "WeedingTools",
    icon:<LiaBroomSolid />,
    description: "This Tools is used in agriculture!",
  },
  {
    img: "assets/dibble.jpg",
    label: "PlantingTools",
    icon:<PiPottedPlantBold/>,
    description: "Essential for precision planting and soil cultivation in agriculture",
  },
  {
    img: "assets/sprinkler.jpg",
    label: "Irrigation",
    icon:<GiWateringCan/>,
    description: "Efficiently distributes water for crop hydration and soil moisture management!",
  },
  {
    img: "assets/soilphmeter.jpg",
    label: "Measuringkit",
    icon:<TbRulerMeasure/>,
    description: "Essential for accurate assessment of soil pH, moisture levels, and other crucial agricultural parameters!",
  },
  {
    img: "assets/sickle.jpg",
    label: "HarvestingTools",
    icon: <GiFarmer/>,
    description: "Facilitates efficient crop harvesting and collection during agricultural operations.!",
  },
  {
    img: "assets/kneepad.jpg",
    label: "Protectivekit",
    icon:<GiKneePad/>,
    description: "Ensures safety during agricultural tasks, shielding farmers from hazards such as sharp objects and harmful chemicals.!",
  },
  {
    img: "assets/rototiller.jpg",
    label: "TillingTools",
    icon:<GiNeedleDrill />,
    description: "Essential for soil preparation, facilitating the cultivation and aeration of land for optimal crop growth",
  },
  {
    img: "assets/threshingboard.jpg",
    label: "ThreshingTools",
    icon:<FaTractor />,
    description: "Streamlines the process of separating grains from harvested crops, ensuring efficient grain extraction for further processing",
  },
  {
    img: "assets/graftingknife.webp",
    label: "Graftingkit",
    icon:<PiKnifeDuotone />,
    description: "Precision tool for cutting and grafting plant tissues, enabling successful propagation and hybridization in horticulture!",
  },
  {
    img: "assets/wheelbarrow.jpg",
    label: "Transportation",
    icon: <GiFarmTractor />,
    description: "Facilitates the movement of agricultural produce, equipment, and personnel, vital for logistics and operational efficiency in farming!",
  },
  {
    img: "assets/mulchfork.jpg",
    label: "MulchingTools",
    icon:<BiFork />,
    description: "Practice of covering soil with organic or synthetic materials to conserve moisture, suppress weeds, and regulate soil temperature, enhancing plant growth and soil health!",
  },
  {
    img: "assets/soiltestkit.jpg",
    label: "SoilTestkit",
    icon:<GiTestTubes/>,
    description: "Essential for analyzing soil fertility, pH levels, and nutrient composition, aiding in informed decision-making for optimal crop management!",
  },
  {
    img: "assets/broadcastspreader.jpeg",
    label: "Fertilizingkit",
    icon:<GiFertilizerBag />,
    description: "Method of uniformly distributing seeds, fertilizers, or pesticides over a large area, promoting even crop establishment and growth!",
  },
];

export const types = [
  {
    name: "Hand Tools",
    icon:<LuAxe />,
    description: "Operated manually",
  },
  {
    name: "Power Tools",
    icon:<GiDrill />,
    description:
      "Less effect Finish work on time ",
  },
  {
    name: "Heavy Machinaries",
    icon:<RiCaravanLine />,
    description:
      "For Large Scale Production",
  },
];

export const facilities = [
  {
    name: "EMI",
    icon: <Emi />,
  },
  {
    name: "Maintenancefree",
    icon: <Maintanence />,
  },
  {
    name: "BankOffers",
    icon: <Bank />,
  },
  
];
