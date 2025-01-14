import React, { useState } from "react";

const chales = [
  {
    id: 1,
    name: "Chalé 01 Suíte",
    area: "120",
    description: "Chalé aconchegante com 1 suíte.",
    ambientes: ["Suíte máster: 44,11m²", "WC social: 4,28m²", "Área de serviço: 3,21m²", "Sala: 23,46m²", "Cozinha: 19,76m²", "Piscina: 16,7m²"],
    diferenciais: ["Sauna e piscina privada;", "Lareira interna;", "464m² em área verde;", "Piscina aquecida;", "Praça de fogo com lareira externa;"],
    images: ["/casa-de-campo/img/plantas/foto_suite_2.jpg", "/casa-de-campo/img/plantas/plantabaixa1.jpg", "/casa-de-campo/img/plantas/foto_suite_2.jpg"],
  },
  {
    id: 2,
    name: "Chalé 02 Suítes",
    area: "120",
    description: "Chalé espaçoso com 2 suítes.",
    ambientes: ["Suíte máster: 44,11m²", "WC social: 4,28m²", "Área de serviço: 3,21m²", "Sala: 23,46m²", "Cozinha: 19,76m²", "Piscina: 16,7m²"],
    diferenciais: ["Sauna e piscina privada;", "Lareira interna;", "464m² em área verde;", "Piscina aquecida;", "Praça de fogo com lareira externa;"],
    images: ["/casa-de-campo/img/plantas/foto_suite_2.jpg", "/casa-de-campo/img/plantas/plantabaixa2.jpg", "/casa-de-campo/img/plantas/foto_suite_2.jpg"],
  },
  {
    id: 3,
    name: "Chalé 03 Suítes",
    area: "120",
    description: "Chalé luxuoso com 3 suítes.",
    ambientes: ["Suíte máster: 45,22m²", "Sala: 21,37m²", "Área de serviço: 4,54m²", "Circulação: 8,35m²", "Cozinha: 19,76m²", "Piscina: 16,7m²", "Suíte 02: 30,84m²", "Suíte 03: 29,40m²", "Lavabo: 3,23m²", "Sauna: 3,35m²"],
    diferenciais: ["Sauna e piscina privada;", "Lareira interna;", "464m² em área verde;", "Piscina aquecida;", "Praça de fogo com lareira externa;"],
    images: ["/casa-de-campo/img/plantas/foto_suite_3.jpg", "/casa-de-campo/img/plantas/plantabaixa3.jpg", "/casa-de-campo/img/plantas/foto_suite_3.jpg"],
  },
  {
    id: 4,
    name: "Chalé 04 Suítes",
    area: "120",
    description: "Chalé amplo com 4 suítes.",
    ambientes: ["Suíte máster: 44,11m²", "WC social: 4,28m²", "Área de serviço: 3,21m²", "Sala: 23,46m²", "Cozinha: 19,76m²", "Piscina: 16,7m²"],
    diferenciais: ["Sauna e piscina privada;", "Lareira interna;", "464m² em área verde;", "Piscina aquecida;", "Praça de fogo com lareira externa;"],
    images: ["/casa-de-campo/img/plantas/foto_suite_4.jpg", "/casa-de-campo/img/plantas/plantabaixa4.jpg", "/casa-de-campo/img/plantas/foto_suite_4.jpg"],
  },
];

const Chales = () => {
  const [selectedChale, setSelectedChale] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleChaleClick = (chaleId: number) => {
    const chaleSelecionado = chales.find(
      (chale) => chale.id === chaleId
    );
    if (chaleSelecionado) {
      setSelectedChale(chaleSelecionado);
      setCurrentImageIndex(0); // Reseta o índice da imagem ao abrir o modal
    }
  };

  const handleNextImage = () => {
    if (selectedChale) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === selectedChale.images.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  const handlePrevImage = () => {
    if (selectedChale) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? selectedChale.images.length - 1 : prevIndex - 1
      );
    }
  };

  return (
    <section id="chales" className="py-8 pt-24 bg-verde text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className=" text-4xl md:text-6xl font-adelia text-dourado">Tipos de Chalés</h2>
          <p className="mt-6 text-gray-300 text-base">
            Clique nos chalés para ver mais detalhes e fotos.
          </p>
        </div>

        <div className="relative hidden sm:block">
          <img
            src="/casa-de-campo/img/chale.jpg"
            alt="Chalé"
            className="w-full h-auto"
          />

          {/* Links clicáveis sobre a imagem */}
          <div className="absolute top-0 left-0 w-full h-full">

            {/* CHALÉ 1 SUÍTE */}

            {/* Chalé 01 Superior*/}
            <div
              onClick={() => handleChaleClick(1)}
              className="absolute cursor-alias"
              style={{
                top: "24%",
                left: "27%",
                width: "8%",
                height: "15%",
              }}
            ></div>
            {/* Chalé 01 Inferior*/}
            <div
              onClick={() => handleChaleClick(1)}
              className="absolute cursor-alias"
              style={{
                top: "59%",
                left: "27%",
                width: "8%",
                height: "15%",
              }}
            ></div>


            {/* CHALÉ 2 SUÍTES */}

            {/* Chalé 02 Superior*/}
            <div
              onClick={() => handleChaleClick(2)}
              className="absolute cursor-alias"
              style={{
                top: "24%",
                left: "39%",
                width: "8%",
                height: "15%",
              }}
            ></div>
            {/* Chalé 02 Inferior*/}
            <div
              onClick={() => handleChaleClick(2)}
              className="absolute cursor-alias"
              style={{
                top: "59%",
                left: "39%",
                width: "8%",
                height: "15%",
              }}
            ></div>


            {/* CHALÉ 3 SUÍTES */}

            {/* Chalé 03 Superior*/}
            <div
              onClick={() => handleChaleClick(3)}
              className="absolute cursor-alias"
              style={{
                top: "24%",
                left: "51%",
                width: "9%",
                height: "15%",
              }}
            ></div>
            {/* Chalé 03 Inferior*/}
            <div
              onClick={() => handleChaleClick(3)}
              className="absolute cursor-alias"
              style={{
                top: "59%",
                left: "51%",
                width: "9%",
                height: "15%",
              }}
            ></div>


            {/* CHALÉ 4 SUÍTES */}

            {/* Chalé 04 Superior*/}
            <div
              onClick={() => handleChaleClick(4)}
              className="absolute cursor-alias"
              style={{
                top: "24%",
                left: "66%",
                width: "10%",
                height: "15%",
              }}
            ></div>
            {/* Chalé 04 Inferior*/}
            <div
              onClick={() => handleChaleClick(4)}
              className="absolute cursor-alias"
              style={{
                top: "59%",
                left: "66%",
                width: "10%",
                height: "15%",
              }}
            ></div>
          </div>
        </div>

        {/* MOBILE */}

        <div className="relative block sm:hidden mb-4">
          <img
            src="/casa-de-campo/img/chale-mobile.jpg"
            alt="Chalé"
            className="w-full h-auto"
          />

          {/* Links clicáveis sobre a imagem */}
          <div className="absolute top-0 left-0 w-full h-full">

            {/* CHALÉ 1 SUÍTE */}

            {/* Chalé 01 Superior*/}
            <div
              onClick={() => handleChaleClick(1)}
              className="absolute cursor-alias"
              style={{
                top: "20%",
                left: "19%",
                width: "8%",
                height: "15%",
              }}
            ></div>
            {/* Chalé 01 Inferior*/}
            <div
              onClick={() => handleChaleClick(1)}
              className="absolute cursor-alias"
              style={{
                top: "59%",
                left: "19%",
                width: "8%",
                height: "15%",
              }}
            ></div>


            {/* CHALÉ 2 SUÍTES */}

            {/* Chalé 02 Superior*/}
            <div
              onClick={() => handleChaleClick(2)}
              className="absolute cursor-alias"
              style={{
                top: "20%",
                left: "39%",
                width: "8%",
                height: "15%",
              }}
            ></div>
            {/* Chalé 02 Inferior*/}
            <div
              onClick={() => handleChaleClick(2)}
              className="absolute cursor-alias"
              style={{
                top: "59%",
                left: "39%",
                width: "8%",
                height: "15%",
              }}
            ></div>


            {/* CHALÉ 3 SUÍTES */}

            {/* Chalé 03 Superior*/}
            <div
              onClick={() => handleChaleClick(3)}
              className="absolute cursor-alias"
              style={{
                top: "20%",
                left: "55%",
                width: "10%",
                height: "15%",
              }}
            ></div>
            {/* Chalé 03 Inferior*/}
            <div
              onClick={() => handleChaleClick(3)}
              className="absolute cursor-alias"
              style={{
                top: "59%",
                left: "55%",
                width: "10%",
                height: "15%",
              }}
            ></div>


            {/* CHALÉ 4 SUÍTES */}

            {/* Chalé 04 Superior*/}
            <div
              onClick={() => handleChaleClick(4)}
              className="absolute cursor-alias"
              style={{
                top: "20%",
                left: "75%",
                width: "12%",
                height: "15%",
              }}
            ></div>
            {/* Chalé 04 Inferior*/}
            <div
              onClick={() => handleChaleClick(4)}
              className="absolute cursor-alias"
              style={{
                top: "59%",
                left: "75%",
                width: "12%",
                height: "15%",
              }}
            ></div>
          </div>
        </div>



        {/* Chalés Grid */}
        <div className="relative grid grid-cols-2 gap-8 md:grid-cols-4">
          {chales.map((chale) => (
            <button
              key={chale.id}
              onClick={() => {
                setSelectedChale(chale);
                setCurrentImageIndex(0); // Reseta o índice da imagem ao abrir o modal
              }}
              className="relative bg-[#0f2112] hover:bg-green-600 rounded-lg shadow-lg p-6 text-center transition"
            >
              <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-10 hover:opacity-20 rounded-lg"></div>
              <h3 className="text-lg font-bold uppercase mb-2">{chale.name}</h3>
              {/* <p className="text-sm">{chale.description}</p> */}
            </button>
          ))}
        </div>

        {/* Modal */}
        {selectedChale && (


          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            onClick={(e) => {
              if (e.target === e.currentTarget) setSelectedChale(null);
            }}
          >

            {/* Botão de fechar */}
            <button
              onClick={() => setSelectedChale(null)}
              className="absolute top-2 right-8 text-7xl text-white hover:text-gray-400 z-10"
            >
              &times;
            </button>

            <div className="relative w-[80%] sm:h-[80%] bg-white rounded-lg overflow-hidden">

              {/* Slider de Imagens */}
              <div className="relative w-full sm:h-full">
                {currentImageIndex === 0 && (
                  <div className="relative w-full h-full">
                    {/* Primeira imagem cobrindo toda a área */}
                    <img
                      src={selectedChale.images[0]}
                      alt={`Imagem do ${selectedChale.name}`}
                      className="w-full h-full object-cover"
                    />
                    {/* Nome do Chalé na parte inferior */}
                    <h3 className="md:absolute bottom-0 w-full italic text-white text-center bg-black bg-opacity-60 text-3xl font-bold py-4">
                      {selectedChale.name}
                    </h3>
                  </div>
                )}

                {currentImageIndex === 1 && (
                  <div className="flex flex-col md:flex-row w-full max-h-screen md:h-full overflow-y-auto">
                  {/* Informações de ambientes e diferenciais à esquerda */}
                  <div className="w-full md:w-1/3 bg-verde text-white p-8 flex flex-col justify-center">
                    <h4 className="text-2xl md:text-3xl font-bold italic uppercase">{selectedChale.name}</h4>
                    <h4 className="text-base md:text-lg font-bold mb-4 italic">{selectedChale.area} m² construídos</h4>
                    <h4 className="text-base md:text-lg font-bold">Ambientes:</h4>
                    <ul className="list-disc list-inside text-sm md:text-base">
                      {selectedChale.ambientes.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                
                    <h4 className="text-base md:text-lg font-bold mt-6">Diferenciais:</h4>
                    <ul className="list-disc list-inside text-sm md:text-base">
                      {selectedChale.diferenciais.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                
                  {/* Segunda imagem à direita */}
                  <div className="w-full md:w-2/3 bg-verde flex justify-center items-center">
                    <img
                      src={selectedChale.images[1]}
                      alt={`Imagem do ${selectedChale.name}`}
                      className="w-full max-h-[40vh] md:max-h-full object-contain"
                    />
                  </div>
                </div>
                
                )}

                {currentImageIndex > 1 && (
                  <div className="relative w-full h-full">
                    {/* Outras imagens cobrindo toda a área */}
                    <img
                      src={selectedChale.images[currentImageIndex]}
                      alt={`Imagem do ${selectedChale.name}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                {/* Botões de navegação */}
                <button
                  onClick={handlePrevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-shandow hover:text-dourado"
                >
                  <i className="fa-solid fa-angle-left text-5xl"></i>
                </button>
                <button
                  onClick={handleNextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-shandow hover:text-dourado"
                >
                  <i className="fa-solid fa-angle-right text-5xl"></i>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Chales;
