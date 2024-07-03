import { GoArrowUpRight } from "react-icons/go";

const Discount = () => {
    return (
        <div className="lg:my-32 my-20 z-0">
            <div className="relative">
            <img src="/Frame.png" alt="" className="absolute top-0 -left-52 z-0 opacity-30" />
            <img src="/Frame (1).png" alt="" className="absolute top-0 -right-2 z-0 opacity-30" />
                <div className="relative">
                    <img src="/Rectangle 32.png" alt="" className="w-full rounded-[32px]" />
                    <div className="absolute rounded-[32px] top-0 w-full h-full bg-gradient-to-r from-[#020043] to-[#0200432a] ">
                        <div className="flex justify-between p-14">
                            <div>
                                <h1 className="text-white font-bold text-6xl  mt-14 leading-[80px]">
                                    Get Your <br />
                                    First Appointment  <br />
                                    at 50% Off!
                                </h1>
                                <div className="flex gap-5">
                                    <button className="btn bg-[#FFC637] border-none md:text-lg  text-black mt-8">Appointment
                                        <GoArrowUpRight /></button>
                                    <button className="btn btn-outline  md:text-lg  text-white mt-8">Learn More
                                        <GoArrowUpRight /></button>
                                </div>
                            </div>
                            <div>
                                <img src="/logo light.png" alt="logo" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Discount;

