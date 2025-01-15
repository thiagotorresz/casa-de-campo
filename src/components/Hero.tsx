import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

const slides = [
  '/casa-de-campo/img/home/HOME-3.jpg',
  '/casa-de-campo/img/home/HOME-2.jpg',
  '/casa-de-campo/img/home/HOME.jpg',
  '/casa-de-campo/img/home/HOME-4.jpg',
  '/casa-de-campo/img/home/HOME-5.jpg',
  '/casa-de-campo/img/home/HOME-6.jpg',
  '/casa-de-campo/img/home/HOME-7.jpg',
  '/casa-de-campo/img/home/HOME-8.jpg',
];

const Hero = () => {
  return (
    <div className="relative h-screen">
      {/* Swiper para os slides */}
      <Swiper
        modules={[Autoplay, EffectFade]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        effect="fade"
        speed={1500}
        loop
        className="h-full z-0"
      >
        {slides.map((src, index) => (
          <SwiperSlide key={index} className="h-full">
            <img src={src} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/20" />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Texto fixo sobre os slides */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-center mt-20" id="home">
        <img
          src="/casa-de-campo/img/LOGO_CASADECAMPO.png"
          alt="Logo Casa de Campo"
          className="w-48 md:w-58 lg:w-64 mb-8 drop-shadow-2xl md:mt-64"
        />
        <h1 className="font-adelia font-normal text-shandow text-dourado mb-6 text-4xl md:text-[2.7rem]">
          Você a uma assinatura do paraíso!
        </h1>
        <a href="#form" className="w-8/12 md:w-4/12 lg:w-4/12">
          <img src="/casa-de-campo/img/home/receba.png" alt="Saiba mais" />
        </a>
      </div>
    </div>
  );
};

export default Hero;