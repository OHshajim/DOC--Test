import About from "../Components/About";
import Banner from "../Components/Banner";
import CareOfPatient from "../Components/CareOfPatient";
import Nav from "../Components/Nav";
import Service from "../Components/Service";
import Testimonial from "../Components/Testimonial";
import FAQ from "../Components/FAQ";
import Footer from "../Components/Footer";
import Discount from "../Components/Discount";

const Home = () => {
    return (
        <div className="relative z-50">
            <img src="/public/Frame.png" alt="" className="absolute top-14 z-0 opacity-30" />
            <img src="/public/Frame (1).png" alt="" className="absolute top-14 right-0 z-0 opacity-30" />
            <div className="container mx-auto z-50 ">
                <Nav />
                <Banner />
                <CareOfPatient />
                <About />
                <Service/>
                <Testimonial/>
                <FAQ/>
                <Discount/>
            </div>
                <Footer/>
        </div>
    );
};

export default Home;