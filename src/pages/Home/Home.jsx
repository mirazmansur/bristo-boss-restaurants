import Banner from "./Banner";
import Catagory from "./Catagory";
import Featured from "./Featured";
import PopularMenu from "./PopularMenu/PopularMenu";
import Testimonias from "./Testimonials/Testimonias";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Catagory></Catagory>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
            <Testimonias></Testimonias>
        </div>
    );
};

export default Home;