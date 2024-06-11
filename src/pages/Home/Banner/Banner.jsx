
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { EffectFade, Autoplay, Pagination, Navigation } from 'swiper/modules';
import './Banner.css'
const Banner = () => {
    return (
        <div className='w-full relative'>
            <Swiper
        spaceBetween={30}
        speed={4000}
        allowTouchMove={false}
        centeredSlides={true}
        autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
        effect={'fade'}
        modules={[EffectFade, Autoplay, Pagination, Navigation]}
        className="h-[700px]"
      >
        <SwiperSlide>
        <img src="https://i.ibb.co/VjqLfV2/banner-1.jpg" className='w-full overflow-hidden h-[700px]' style={{objectFit: 'cover'}}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/X20x7b7/banner-5.jpg" className='w-full overflow-hidden h-[700px]' style={{objectFit: 'cover'}}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/gzbzMGx/banner-2.jpg" className='w-full overflow-hidden h-[700px]' style={{objectFit: 'cover'}}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/mb9WrJq/banner-4.jpg" className='w-full overflow-hidden h-[700px]' style={{objectFit: 'cover'}}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/YP103Dx/banner-3.jpg" className='w-full overflow-hidden h-[700px]' style={{objectFit: 'cover'}}/>
        </SwiperSlide>
      </Swiper>
      
      <div className='bg-gradient-to-b from-[#1f1f1f] via-transparent to-[#1f1f1f] w-full h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 flex items-center justify-center'>
        <div className='bg-purple-400 bg-opacity-10 rounded-full flex flex-col items-center text-white p-2'>
          <span className='text-2xl font-medium'>#1 MATRIMONY</span>
          <br />
          <span className='text-4xl font-semibold'>Find your</span>
          <br />
          <p className='text-5xl font-bold'>
          <span className='text-red-500'>Right Match</span> <span>here</span>
          </p>
          <br />
          <span className='text-xl'>Most trusted Matrimony Brand in the World.</span>
        </div>
      </div>
        </div>
    );
};

export default Banner;