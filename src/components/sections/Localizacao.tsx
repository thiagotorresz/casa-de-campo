const Localização = () => {
  return (
    <section id="localizacao" className="bg-[#cec5b3] py-12 md:py-0 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col relative md:flex-row items-center gap-8">
          {/* Texto à esquerda */}
          <div className="md:w-1/4 text-verde text-center md:text-left flex flex-col justify-center">
            <h2 className=" text-4xl md:text-6xl font-adelia mb-8">Localização</h2>
            <p className="text-base leading-relaxed indent-5">
              As Casas de Campo estão localizadas dentro do <span className="font-bold">Village Resort</span>, na cidade de Jaboticatubas, a aproximadamente 52 km de Belo Horizonte, a 42 km do Aeroporto de Confins e a 29 km da Pista de Paraquedismo da Serra do Cipó, em uma área de preservação dentro do Parque Nacional da Serra do Cipó com acesso por vias asfaltadas.
            </p>
            <a
              href="https://www.google.com/maps/dir//Village+Resort+Fazenda+Coqueiral,+84+-+Zona+Rural+Jaboticatubas+-+MG+35830-000/@-19.5483762,-43.7769748,16z/data=!4m8!4m7!1m0!1m5!1m1!1s0xa5d84614aa7683:0x21c1267eb285da7!2m2!1d-43.7769748!2d-19.5483762?entry=ttu&g_ep=EgoyMDI1MDEwOC4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              className="block mx-auto mt-4 md:mt-0 md:absolute md:top-[80%] bg-verde text-dourado py-3 px-6 font-bold text-center w-max hover:bg-green-800 transition"
              rel="noopener noreferrer"
            >
              <i className="fas fa-map-marker-alt px-1 mr-1"></i> COMO CHEGAR
            </a>
          </div>

          {/* Imagem à direita */}
          <div className="md:w-3/4 flex justify-center">
            <img
              src="/casa-de-campo/img/mapa.png"
              alt="Imagem da localização"
              className="w-full h-auto"
            />
          </div>
        </div>
        <div className="py-4 justify-center mt-[-2%]">
          <img
            src="/casa-de-campo/img/plantaalta.jpg"
            alt="Imagem da localização"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Localização;
