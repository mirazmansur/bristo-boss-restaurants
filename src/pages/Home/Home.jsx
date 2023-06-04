import { Helmet } from "react-helmet";
import Banner from "./Banner";
import Catagory from "./Catagory";
import Contact from "./Contact/contact";
import Featured from "./Featured";
import PopularMenu from "./PopularMenu/PopularMenu";
import SpecialOrder from "./SpecialOrder/SpecialOrder";
import Testimonias from "./Testimonials/Testimonias";


const Home = () => {
    return (
        <div>
            <Helmet>
        <title>Bisro Boss | Home </title>
      </Helmet>
      <h1>Hello World</h1>
            <Banner></Banner>
            <Catagory></Catagory>
            <PopularMenu></PopularMenu>
            <Contact></Contact>
            <SpecialOrder></SpecialOrder>
            <Featured></Featured>
            <Testimonias></Testimonias>
        </div>
    );
};

export default Home;