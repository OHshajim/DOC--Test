import { GoArrowUpRight } from "react-icons/go";
import SectionTitle from "../Shared/SectionTitle";

const About = () => {
    return (
        <div className="flex justify-between gap-10 lg:flex-row flex-col lg:mt-40 mt-20">
            <div className="flex-1">
                <div>
                    <SectionTitle subtitle="Who we are" title="We Help To Get  Solutions" />
                </div>
                <p className="mt-5 text-[#4D4C7B]">
                    We are proud to be a trusted healthcare provider in our community, and we look forward to serving you and your family with excellence, integrity, and compassion. Your health is our priority, and we are here for you every step of the way. We believe in treating each patient with dignity, respect, and empathy, ensuring that they receive the attention and care they deserve.
                </p>
                <button className="btn bg-[#FFC637]  md:text-lg  text-black mt-8">Learn more
                        <GoArrowUpRight /></button>
            </div>
            <div className="relative">
                <img src="/public/Rectangle 24.png" alt="" />
                <div className="absolute -bottom-14 -left-14">
                    <div className="bg-[#343268] rounded-[32px] p-9 h-[210px] max-w-sm">
                        <h4 className="text-2xl font-medium text-white ">
                        Our mission is simple
                        </h4>
                        <p className="text-base text-[#FFFFFFCC] ">
                        To provide high-quality healthcare services that are accessible, personalized, and patient-centered.  
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;