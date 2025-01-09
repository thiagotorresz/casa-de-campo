import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

const Hero = () => {
  const slides = [
    {
      type: 'image',
      src: '/casa-de-campo/img/home/HOME-3.jpg',
      alt: 'Home Slider',
    },
    {
      type: 'image',
      src: '/casa-de-campo/img/home/HOME-2.jpg',
      alt: 'Home Slider',
    },
    {
      type: 'image',
      src: '/casa-de-campo/img/home/HOME.jpg',
      alt: 'Home Slider',
    },
    {
      type: 'image',
      src: '/casa-de-campo/img/home/HOME-4.jpg',
      alt: 'Home Slider',
    },
    {
      type: 'image',
      src: '/casa-de-campo/img/home/HOME-5.jpg',
      alt: 'Home Slider',
    },
    {
      type: 'image',
      src: '/casa-de-campo/img/home/HOME-6.jpg',
      alt: 'Home Slider',
    },
    {
      type: 'image',
      src: '/casa-de-campo/img/home/HOME-7.jpg',
      alt: 'Home Slider',
    },
    {
      type: 'image',
      src: '/casa-de-campo/img/home/HOME-8.jpg',
      alt: 'Home Slider',
    },
    
  ];

  return (
    <div className="relative h-screen">
      {/* Swiper para os slides */}
      <Swiper
        modules={[Autoplay, EffectFade]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={1500}
        loop
        className="relative h-full z-0"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative h-full">
            {slide.type === 'image' ? (
              <img
                src={slide.src}
                alt={slide.alt}
                className="w-full h-full object-cover"
              />
            ) : (
              <video
                src={slide.src}
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
              />
            )}
            <div className="absolute inset-0 bg-black/40" />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Texto fixo sobre os slides */}
      <div className="absolute inset-0 flex items-center justify-center z-10" id="home">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 text-center">
          {/* Imagem centralizada e dimensionada */}
          <div className="flex justify-center mb-8">
            <img
              src="/casa-de-campo/img/LOGO_CASADECAMPO.png"
              alt="Logo casa de campo"
              className="w-48 md:w-58 lg:w-60"
            />
          </div>

          {/* Título e parágrafo alinhados */}
          <div className="text-dourado">
            <h1 className="font-adelia font-normal text-shandow sm:mb-6 sm:text-5xl md:text-6xl" style={{fontSize: '2.7rem'}}>
              Você a uma assinatura do paraíso!
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;