import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

export default function ReviewSlider() {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    return (
        <section className='py-20 bg-gray-100'>

            <h2 className='text-gray-800 text-center mb-5 text-3xl font-semibold'>Testimonials</h2>

            <div className="container mx-auto relative">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    pagination={{
                        clickable: true,
                        el: '.swiper-pagination',
                        type: 'bullets',
                    }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    onInit={(swiper) => {
                        swiper.params.navigation.prevEl = prevRef.current;
                        swiper.params.navigation.nextEl = nextRef.current;
                        swiper.navigation.init();
                        swiper.navigation.update();
                    }}
                    modules={[Navigation, Pagination, Autoplay]}

                    className="mySwiper h-full py-20 mt-10 md:w-3/5 w-full mx-auto"
                >
                    <SwiperSlide className='m-0 text-center flex items-center justify-center'>
                        <blockquote className='text-center mb-10 text-gray-500 font-normal leading-loose'>“Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.”
                        </blockquote>
                        <div className="author">
                            <figure className='mb-4'><img className='rounded-full mx-auto max-w-[80px]' src="images/person-1.png" alt="" /></figure>
                            <h3 className='text-sm text-center font-bold text-gray-800 py-1'>Maria Jones</h3>
                            <span className='font-normal text-gray-600 text-md'>CEO, Co-Founder, XYZ Inc.</span>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className='m-0 text-center flex items-center justify-center'>
                        <blockquote className='text-center mb-10 text-gray-500 font-normal leading-loose'>“Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.”
                        </blockquote>
                        <div className="author">
                            <figure className='mb-4'><img className='rounded-full mx-auto max-w-[80px]' src="images/person-1.png" alt="" /></figure>
                            <h3 className='text-sm text-center font-bold text-gray-800 py-1'>Maria Jones</h3>
                            <span className='font-normal text-gray-600 text-md'>CEO, Co-Founder, XYZ Inc.</span>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className='m-0 text-center flex items-center justify-center'>
                        <blockquote className='text-center mb-10 text-gray-500 font-normal leading-loose'>“Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.”
                        </blockquote>
                        <div className="author">
                            <figure className='mb-4'><img className='rounded-full mx-auto max-w-[80px]' src="images/person-1.png" alt="" /></figure>
                            <h3 className='text-sm text-center font-bold text-gray-800 py-1'>Maria Jones</h3>
                            <span className='font-normal text-gray-600 text-md'>CEO, Co-Founder, XYZ Inc.</span>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <div className="absolute top-1/2 transform-translate-y-1/2 w-full justify-between px-4 mx-auto md:block hidden">
                    <button ref={prevRef} className="duration-300 static swiper-button-prev hover:bg-[#3b5d50] bg-gray-200 after:text-gray-800 hover:text-white p-6 rounded-full"></button>
                    <button ref={nextRef} className="duration-300 static swiper-button-next hover:bg-[#3b5d50] bg-gray-200 after:text-gray-800 hover:text-white p-6 rounded-full"></button>
                </div>
                <div className="swiper-pagination"></div>
            </div>

        </section>
    );
}
