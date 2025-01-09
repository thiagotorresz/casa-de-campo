const Localização = () => {
  return (
    <section id="localizacao" className="py-8 bg-[#cec5b3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Texto à esquerda */}
          <div className="md:w-1/2 text-black text-center md:text-left flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-verde font-adelia mb-4">Localização</h2>
            <p className="text-lg leading-relaxed indent-5">
              As Casas de Campo  estão localizadas dentro do <span className="font-bold">Village Resort</span>, na cidade de Jaboticatubas, a aproximadamente 52 km de Belo Horizonte, a 42 km do Aeroporto de Confins e a 29 km da Pista de Paraquedismo da Serra do Cipó, em uma área de preservação dentro do Parque Nacional da Serra do Cipó com acesso por vias asfaltadas.
            </p>
          </div>

          {/* Imagem à direita */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src="/casa-de-campo/img/mapa.jpg" // Substitua pelo caminho da sua imagem
              alt="Imagem da localização"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </div>
        <div className="py-4 justify-center">
            <img
              src="/casa-de-campo/img/plantaalta.jpg" // Substitua pelo caminho da sua imagem
              alt="Imagem da localização"
              className="w-full h-auto rounded-lg"
            />
          </div>
      </div>
    </section>
  );
};

export default Localização;
