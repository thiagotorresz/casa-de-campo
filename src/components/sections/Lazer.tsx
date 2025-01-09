import { useState } from "react";

const Lazer = () => {
  const [activeOption, setActiveOption] = useState(0);

  const options = [
    { id: 0, title: "RECREAÇÃO", icon: "public/img/icons/recreacao.png", image: "public/img/atividades/recreacao.png" },
    { id: 1, title: "PASSEIO A CAVALO", icon: "public/img/icons/passeio.png", image: "public/img/atividades/cavalo.png" },
    { id: 2, title: "FAZENDINHA", icon: "public/img/icons/fazendinha.png", image: "public/img/atividades/fazendinha.png" },
    { id: 3, title: "PISCINAS", icon: "public/img/icons/piscinas.png", image: "public/img/atividades/pool.png" },
    { id: 4, title: "OFURÔS", icon: "public/img/icons/ofuros.png", image: "public/img/atividades/ofuro.jpg" },
    { id: 5, title: "QUADRAS", icon: "public/img/icons/quadras.png", image: "public/img/atividades/sport.png" },
    { id: 6, title: "SINUCA", icon: "public/img/icons/sinuca.png", image: "public/img/atividades/sinuca.png" },
    { id: 7, title: "BOLICHE", icon: "public/img/icons/boliche.png", image: "public/img/atividades/boliche.png" },
    { id: 8, title: "ESPAÇO KIDS", icon: "public/img/icons/kids.png", image: "public/img/atividades/kids.png" },
    { id: 9, title: "CINEMA", icon: "public/img/icons/cinema.png", image: "public/img/atividades/cine.png" },
    { id: 10, title: "PRAIA VILLAGE", icon: "public/img/icons/praia.png", image: "public/img/atividades/beach.png" },
    { id: 11, title: "ADVENTURE", icon: "public/img/icons/adventure.png", image: "public/img/atividades/adventure.png" },
    { id: 12, title: "SPA", icon: "public/img/icons/spa.png", image: "public/img/atividades/spa.png" },
    { id: 13, title: "RESTAURANTES", icon: "public/img/icons/restaurantes.png", image: "public/img/atividades/restaurante.png" },
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
                className={`w-40 h-40 flex flex-col items-center justify-center rounded-full border-2 border-dourado text-white hover:bg-dourado hover:text-verde transition-all duration-300 ${
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
