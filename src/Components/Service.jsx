import { GoArrowUpRight } from "react-icons/go";
import SectionTitle from "../Shared/SectionTitle";

const Service = () => {
    return (
        <section className="bg-[#FFFFF5] p-8 lg:mt-40 mt-20 rounded-[20px]">
            <div className="grid grid-cols-2 justify-between gap-20">
                <div className="">
                    <div>
                        <SectionTitle subtitle="Service" title="Empowering Health, Enriching Lives" />
                    </div>
                    <p className="mt-5 text-[#4D4C7B]">
                        We are committed to providing high-quality, compassionate care to every patient we serve. Whatever your healthcare needs may be, you can trust us to be your partner in health and wellness.
                    </p>
                    <button className="btn bg-[#FFC637]  md:text-lg  text-black mt-8">Appointment
                        <GoArrowUpRight /></button>
                </div>
                <div className="flex justify-end ">
                    <div className="relative w-full">
                        <img src="/public/Rectangle 27-2.png" alt="" className="rounded-[20px] w-full" />
                        <div className="absolute bottom-5 left-5">
                            <div className="bg-[#020043] rounded-[20px] p-5 h-[144px] max-w-xs opacity-50 flex">
                                <div>
                                    <h4 className="text-2xl font-medium text-white ">
                                        Our mission is simple
                                    </h4>
                                    <p className="text-[14px] text-[#FFFFFFCC] ">
                                        To provide high-quality healthcare services that are accessible, personalized, and patient-centered.
                                    </p>
                                </div>
                                <div className="justify-end items-end flex">
                                    <button className="btn btn-circle bg-[#FFC637] text-white"><GoArrowUpRight /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex ">
                    <div className="relative w-full">
                        <img src="/public/Rectangle 27-1.png" alt="" className="rounded-[20px] w-full" />
                        <div className="absolute bottom-5 left-5">
                            <div className="bg-[#020043] rounded-[20px] p-5 h-[144px] max-w-xs opacity-50 flex">
                                <div>
                                    <h4 className="text-2xl font-medium text-white ">
                                    Online Doctor Meet
                                    </h4>
                                    <p className="text-[14px] text-[#FFFFFFCC] ">
                                    Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision
                                    </p>
                                </div>
                                <div className="justify-end items-end flex">
                                    <button className="btn btn-circle bg-[#FFC637] text-white"><GoArrowUpRight /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex ">
                    <div className="relative w-full">
                        <img src="/public/Rectangle 27.png" alt="" className="rounded-[20px] w-full" />
                        <div className="absolute bottom-5 left-5">
                            <div className="bg-[#020043] rounded-[20px] p-5 h-[144px] max-w-xs opacity-50 flex">
                                <div>
                                    <h4 className="text-2xl font-medium text-white ">
                                    Consultancy your health
                                    </h4>
                                    <p className="text-[14px] text-[#FFFFFFCC] ">
                                    Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision
                                    </p>
                                </div>
                                <div className="justify-end items-end flex">
                                    <button className="btn btn-circle bg-[#FFC637] text-white"><GoArrowUpRight /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </section>
    );
};

export default Service;