import { TiStarFullOutline } from "react-icons/ti";

const CareOfPatient = () => {
    return (
        <div className="flex lg:flex-row flex-col  lg:mt-16 mt-10">
            <div className="bg-[#FBFBFB] border border-[#02004333] w-[250px] p-6 rounded-3xl ">
                <h3 className="text-[#020043] font-semibold text-4xl ">90%</h3>
                <p className="text-[#0200437a] text-sm mb-4 mt-2">Patient satisfaction rate, reflecting our commitment.</p>
                <img src="/public/Group 12.png" alt="chart" />
            </div>

            <div className="w-full">
                <h2 className="text-[#020043] font-semibold text-5xl text-center">Comprehensive Care <br /> for Every Patient</h2>
                <div className="flex mt-4 justify-evenly  w-full">
                    {/* 1st */}
                    <div className="bg-[#FFFFF5] border border-[#02004333] w-[216px] p-6 rounded-3xl">
                        <h3 className="text-[#020043] font-semibold text-3xl ">50+</h3>
                        <p className="text-[#0200437a] text-sm ">Free lesson video for patient</p>
                        <div className="flex justify-end items-end " >
                            <img src="/public/Icons.png" alt="certificate" />
                        </div>
                    </div>
                    {/* 2nd */}
                    <div className="flex  items-end">
                        <div className="bg-[#FBFBFB] border border-[#02004333] w-[216px] h-[162px] p-6 rounded-3xl ">
                            <h3 className="text-[#020043] font-semibold text-3xl flex ">4.8 <TiStarFullOutline className="text-yellow-400" /></h3>
                            <p className="text-[#0200437a] text-sm mb-3">Over 20,000 Patient</p>
                            <img src="/public/Group 7.png" alt="users" />
                        </div>
                    </div>
                    {/* 3rd */}
                    <div className="bg-[#FFFFF5] border border-[#02004333] w-[216px] p-6 rounded-3xl">
                        <h3 className="text-[#020043] font-semibold text-3xl ">$5000</h3>
                        <p className="text-[#0200437a] text-sm ">Money spend for poor patient</p>
                        <div className="flex justify-end items-end " >
                            <img src="/public/group.png" alt="money" />
                        </div>
                    </div>
                </div>

            </div>

            <div className="bg-[#FBFBFB] border border-[#02004333] w-[250px] p-6 rounded-3xl">
                <h3 className="text-[#020043] font-semibold text-4xl ">50+</h3>
                <p className="text-[#0200437a] text-sm mb-10 mt-2">Free lesson video for patient</p>
                <img src="/public/Group (1).png" alt="video" />
            </div>
        </div >

    );
};

export default CareOfPatient;