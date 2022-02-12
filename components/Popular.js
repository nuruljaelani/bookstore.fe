import { Navigation, Autoplay } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import book1 from "public/books/berdikaribook_I_2019_Feb_10_02_09_51.jpg"
import book2 from "public/books/berdikaribook_I_2019_Feb_10_02_10_34.jpg"
import book3 from "public/books/berdikaribook_I_2019_Feb_10_02_10_49.jpg"
import book4 from "public/books/berdikaribook_I_2019_Feb_10_02_11_07.jpg"
import book5 from "public/books/berdikaribook_I_2019_Feb_10_02_11_22.jpg"
import book6 from "public/books/berdikaribook_I_2019_Feb_10_02_11_55.jpg"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/autoplay"

export default function Popular() {
    return (
        <div className="flex flex-col my-4 md:my-8 lg:my-12 space-y-4 md:space-y-6 px-4 lg:px-0">
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold">Popular Books</p>
            <div className="flex w-full my-0 lg:my-2">
                <Swiper
                    modules={[Navigation, Autoplay]}
                    spaceBetween={10}
                    slidesPerView={5}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false
                    }}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide>
                        <div className="flex flex-col space-y-2 border border-gray-300">
                            <Image src={book1} alt="" />
                            <div className="flex flex-col space-y-2 p-2">
                                <p className="font-semibold tracking-tight">Lorem ipsum dolor sit amet consectetur</p>
                                <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores quo ipsam itaque qui consectetur</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex flex-col space-y-2 border border-gray-300">
                            <Image src={book2} alt="" />
                            <div className="flex flex-col space-y-2 p-2">
                                <p className="font-semibold tracking-tight">Lorem ipsum dolor sit amet consectetur</p>
                                <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores quo ipsam itaque qui consectetur</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex flex-col space-y-2 border border-gray-300">
                            <Image src={book3} alt="" />
                            <div className="flex flex-col space-y-2 p-2">
                                <p className="font-semibold tracking-tight">Lorem ipsum dolor sit amet consectetur</p>
                                <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores quo ipsam itaque qui consectetur</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex flex-col space-y-2 border border-gray-300">
                            <Image src={book4} alt="" />
                            <div className="flex flex-col space-y-2 p-2">
                                <p className="font-semibold tracking-tight">Lorem ipsum dolor sit amet consectetur</p>
                                <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores quo ipsam itaque qui consectetur</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex flex-col space-y-2 border border-gray-300">
                            <Image src={book5} alt="" />
                            <div className="flex flex-col space-y-2 p-2">
                                <p className="font-semibold tracking-tight">Lorem ipsum dolor sit amet consectetur</p>
                                <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores quo ipsam itaque qui consectetur</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex flex-col space-y-2 border border-gray-300">
                            <Image src={book6} alt="" />
                            <div className="flex flex-col space-y-2 p-2">
                                <p className="font-semibold tracking-tight">Lorem ipsum dolor sit amet consectetur</p>
                                <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores quo ipsam itaque qui consectetur</p>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}