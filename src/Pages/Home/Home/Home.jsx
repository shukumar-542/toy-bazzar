import Banner from "../Banner/Banner";
import Gallary from "../Gallary/Gallary";
import TabCategory from "../TabCategory/TabCategory";
import ToyCard from "../ToyCard/ToyCard";
import ToyCategory from "../ToyCategory/ToyCategory";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallary></Gallary>
            <TabCategory></TabCategory>
            <ToyCategory></ToyCategory>
            <ToyCard></ToyCard>
        </div>
    );
};

export default Home;