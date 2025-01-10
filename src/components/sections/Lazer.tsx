import { useState } from "react";

const Lazer = () => {
  const [activeOption, setActiveOption] = useState(0);

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
        {/* Círculos */}
        <a href="#slideratividades">
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            {options.map((option) => (
              <button
                key={option.id}
                onClick={() => setActiveOption(option.id)}
                className={`w-36 h-36 flex flex-col items-center justify-center border-2 border-dourado text-white hover:bg-dourado hover:text-verde transition-all duration-300 ${
                  activeOption === option.id ? "bg-dourado text-verde" : ""
                }`}
              >
                <div className="flex flex-col items-center">
                  {/* Ícone como imagem */}
                  <img
                    src={option.icon}
                    className="w-14 h-12 object-contain mb-2"
                  />
                  <span className="text-sm font-semibold">{option.title}</span>
                </div>
              </button>
            ))}
          </div>
        </a>

        {/* Slider */}
        <div className="relative bg-white rounded-lg shadow-lg overflow-hidden" id="slideratividades">
          <img
            src={options[activeOption].image}
            alt={options[activeOption].title}
            className="w-full h-full object-cover"
          />
          <button
            onClick={handlePrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-yellow-500 p-3 rounded-full shadow-md hover:bg-yellow-600 transition-all"
          >
            &#8249;
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-yellow-500 p-3 rounded-full shadow-md hover:bg-yellow-600 transition-all"
          >
            &#8250;
          </button>
        </div>
      </div>
    </section>
  );
};

export default Lazer;
