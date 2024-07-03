import About from "../Components/About";
import Banner from "../Components/Banner";
import CareOfPatient from "../Components/CareOfPatient";
import Nav from "../Components/Nav";
import Service from "../Components/Service";

const Home = () => {
    return (
        <div className="relative z-50">
            <img src="/public/Frame.png" alt="" className="absolute top-20 z-0 opacity-50" />
            <img src="/public/Frame (1).png" alt="" className="absolute top-20 right-0 z-0 opacity-50" />
            <div className="container mx-auto z-50 ">
                <Nav />
                <Banner />
                <CareOfPatient />
                <About />
                <Service/>
            </div>
        </div>
    );
};

export default Home;