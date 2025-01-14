import { useState } from "react";

const Lazer = () => {
  const [activeOption, setActiveOption] = useState(0);

  // Variáveis para rastrear o movimento
  let touchStartX = 0;
  let touchEndX = 0;

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const touchDifference = touchStartX - touchEndX;

    // Determinar a direção do arraste
    if (touchDifference > 50) {
      // Arraste para a esquerda
      handleNext();
    } else if (touchDifference < -50) {
      // Arraste para a direita
      handlePrevious();
    }

    // Resetar valores
    touchStartX = 0;
    touchEndX = 0;
  };


  const options = [
    { id: 0, title: "RECREAÇÃO", icon: "/casa-de-campo/img/icons/recreacao.png", image: "/casa-de-campo/img/atividades/recreacao.jpg" },
    { id: 1, title: "PASSEIO A CAVALO", icon: "/casa-de-campo/img/icons/passeio.png", image: "/casa-de-campo/img/atividades/cavalo.jpg" },
    { id: 2, title: "FAZENDINHA", icon: "/casa-de-campo/img/icons/fazendinha.png", image: "/casa-de-campo/img/atividades/fazendinha.jpg" },
    { id: 3, title: "PISCINAS", icon: "/casa-de-campo/img/icons/piscinas.png", image: "/casa-de-campo/img/atividades/pool.jpg" },
    { id: 4, title: "OFURÔS", icon: "/casa-de-campo/img/icons/ofuros.png", image: "/casa-de-campo/img/atividades/ofuro.jpg" },
    { id: 5, title: "QUADRAS", icon: "/casa-de-campo/img/icons/quadras.png", image: "/casa-de-campo/img/atividades/sport.jpg" },
    { id: 6, title: "SINUCA", icon: "/casa-de-campo/img/icons/sinuca.png", image: "/casa-de-campo/img/atividades/sinuca.jpg" },
    { id: 7, title: "BOLICHE", icon: "/casa-de-campo/img/icons/boliche.png", image: "/casa-de-campo/img/atividades/boliche.jpg" },
    { id: 8, title: "ESPAÇO KIDS", icon: "/casa-de-campo/img/icons/kids.png", image: "/casa-de-campo/img/atividades/kids.jpg" },
    { id: 9, title: "CINEMA", icon: "/casa-de-campo/img/icons/cinema.png", image: "/casa-de-campo/img/atividades/cine.jpg" },
    { id: 10, title: "PRAIA VILLAGE", icon: "/casa-de-campo/img/icons/praia.png", image: "/casa-de-campo/img/atividades/beach.jpg" },
    { id: 11, title: "ADVENTURE", icon: "/casa-de-campo/img/icons/adventure.png", image: "/casa-de-campo/img/atividades/adventure.jpg" },
    { id: 12, title: "SPA", icon: "/casa-de-campo/img/icons/spa.png", image: "/casa-de-campo/img/atividades/spa.jpg" },
    { id: 13, title: "RESTAURANTES", icon: "/casa-de-campo/img/icons/restaurantes.png", image: "/casa-de-campo/img/atividades/restaurante.jpg" },
  ];

  const handleNext = () => {
    setActiveOption((prev) => (prev + 1) % options.length);
  };

  const handlePrevious = () => {
    setActiveOption((prev) => (prev - 1 + options.length) % options.length);
  };

  return (
    <section id="lazer" className="bg-gradient-to-b from-verde to-[#cec5b3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <a href="#slideratividades">
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {options.map((option) => (
              <button
                key={option.id}
                onClick={() => setActiveOption(option.id)}
                className={`w-20 h-20 md:w-36 md:h-36 flex flex-col items-center justify-center text-white transition-all duration-300 transform ${activeOption === option.id
                  ? "bg-dourado text-verde scale-125" // Efeito fixo ao clicar
                  : "hover:scale-125 hover:bg-dourado hover:text-verde"
                  }`}
              >
                <div className="flex flex-col items-center">
                  {/* Ícone como imagem */}
                  <img
                    src={option.icon}
                    className="w-10 h-10 md:w-14 md:h-12 object-contain md:mb-2"
                  />
                  <span className="text-xs md:text-sm font-semibold">{option.title}</span>
                </div>
              </button>
            ))}
          </div>
        </a>


        {/* Slider */}
        <div
          className="relative bg-white rounded-lg shadow-lg overflow-hidden"
          id="slideratividades"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <img
            src={options[activeOption].image}
            alt={options[activeOption].title}
            className="w-full h-full object-cover"
          />
          <button
            onClick={handlePrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-shadow hover:text-dourado transition-all"
          >
            <i className="fa-solid fa-angle-left text-5xl"></i>
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-shadow hover:text-dourado transition-all"
          >
            <i className="fa-solid fa-angle-right text-5xl"></i>
          </button>
        </div>

      </div>
    </section>
  );
};

export default Lazer;
