import { FcRating } from "react-icons/fc";
import SectionTitle from "../Shared/SectionTitle";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';

const Testimonial = () => {
    const feedbacks = [
        {
            _id: 1,
            name: "Sarah D",
            passion: "IT Professional",
            rating: 5,
            image: "/public/Ellipse 10 (2).png",
            title: "Expertise and Compassion Combined",
            comment: "I can't thank enough for their exceptional care. The doctors and staff showed incredible expertise and compassion throughout my treatment journey. I felt truly cared for every step of the way."
        },
        {
            _id: 2,
            name: "Michael R",
            passion: "Business Executive",
            rating: 4,
            image: "/public/Ellipse 10.png",
            title: "Life-Saving Care, Life-Changing Experience",
            comment: "My experience at [Healthcare Provider Name] was life-changing. The prompt and accurate diagnosis, coupled with the advanced treatments they provided, saved my life."
        },
        {
            _id: 3,
            name: "David S",
            passion: "Lawyer",
            rating: 5,
            image: "/public/Ellipse 10 (1).png",
            title: "A Partner in Health and Wellness",
            comment: "As a busy professional, I appreciate the convenience and quality of care I receive at [Healthcare Provider Name]. From telemedicine consultations to routine check-ups, they've become my trusted partner in health and"
        }
        ,
        {
            _id: 1,
            name: "David S",
            passion: "Lawyer",
            rating: 5,
            image: "/public/Ellipse 10 (1).png",
            title: "A Partner in Health and Wellness",
            comment: "As a busy professional, I appreciate the convenience and quality of care I receive at [Healthcare Provider Name]. From telemedicine consultations to routine check-ups, they've become my trusted partner in health and"
        }
    ]
    return (
        <div className="lg:mt-32 mt-20 ">
            <div className="mb-8">
                <SectionTitle subtitle="Testimonial" title="What they say about us" />
            </div>
            <Swiper
                slidesPerView={3}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                loop={true}
                modules={[Pagination]}
                className="mySwiper"
            >
                {feedbacks.map(feedback => <SwiperSlide key={feedback._id}>
                    <div className='flex flex-col items-center pb-10 bg-[#FFFFF5] rounded-2xl h-[241px]'>
                        <div className="w-full  px-7 py-5 " >
                            <h4 className="text-[#020043] text-[19px] font-medium">{feedback.title}</h4>
                            <p className='text-xs sm:text-base my-2 '>{feedback.comment}</p>
                            <div className="flex items-end justify-items-end mt-3">
                                <div

                                    className="flex md:items-center justify-between  flex-col md:flex-row"
                                >
                                    <div className="mx-0 flex items-center gap-4 ">
                                        <img
                                            src={feedback.image}
                                            alt={feedback.name}
                                            className='w-12 h-12 md:h-14  md:w-14 rounded-full p-1 border-2 border-blue-600'
                                        />
                                        <div>

                                            <h4 className='text-sm font-bold'>
                                                {feedback.name} , <span className=' text-[#4D4C7B] font-normal'>{feedback.passion}</span>
                                            </h4>
                                            <FcRating
                                                style={{ maxWidth: 180 }}
                                                value={feedback.rating}
                                                readOnly
                                            />
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default Testimonial;