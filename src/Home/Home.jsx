import Banner from "../Components/Banner";
import Nav from "../Components/Nav";

const Home = () => {
    return (
        <div>
            <div className="container mx-auto">
            <Nav/>
            <Banner/>
            </div>
        </div>
    );
};

export default Home;