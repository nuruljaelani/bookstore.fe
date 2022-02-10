import { Navigation, Autoplay, Pagination } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import banner1 from "public/banners/3fa9cb0e7e983e28cc7d082fb622b6b8.png"
import banner2 from "public/banners/70c75dd877579e21ecb2369f9b8973e8.jpeg"
import banner3 from "public/banners/820a9934c6c45bf4b84246d623489b1c.jpeg"
import banner4 from "public/banners/9991a4de198e36d5197a4c75b5356f0b.jpeg"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/autoplay"

export default function Banner() {
    return (
        <div className="flex w-full my-2">
            <Swiper
                modules={[Navigation, Autoplay, Pagination]}
                spaceBetween={50}
                slidesPerView={1}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false
                }}
                pagination={true}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>
                    <Image src={banner1} alt="Banner 1" className="rounded-lg" />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={banner2} alt="Banner 2" className="rounded-lg" />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={banner3} alt="Banner 3" className="rounded-lg" />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={banner4} alt="Banner 3" className="rounded-lg" />
                </SwiperSlide>
                ...
            </Swiper>
        </div>
    )
}