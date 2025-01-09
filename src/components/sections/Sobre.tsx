const Sobre = () => {
  return (
    <section id="sobre" className="py-16 bg-verde">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Título e descrição */}
        <div className="text-center mb-12">
          <h2 className="text-sm uppercase text-dourado tracking-wide">o Resort</h2>
          <h1 className="text-4xl font-bold font-adelia text-dourado">Village Resort</h1>
        </div>

        {/* Texto sobre o local */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="text-gray-200 leading-relaxed montserrat">
            <p>
              O Village Resort está localizado em uma área de preservação natural na Serra do Cipó. Possui 3.600.000m² de área verde com fauna e flora nativas da região. Hoje, conta com aproximadamenre 120.000m² de área construida, com infraestrutura, comodidades, lazer, acessibilidade e espaços pensados igualmente para todos.
            </p>
          </div>
          <div className="text-gray-200 leading-relaxed montserrat">
            <p>
            A Serra do Cipó, em Minas Gerais, é uma região de grande biodiversidade e um importante divisor de águas. O Parque Nacional da Serra do Cipó protege sua rica fauna e flora, incluindo cerrados, cachoeiras e sítios arqueológicos, sendo ideal para atividades ao ar livre e pesquisas científicas.
            </p>
          </div>
        </div>

        {/* Vídeo em destaque */}
        <div className="mt-12">
        <div className="mb-12 relative" style={{ paddingBottom: "42.6%", height: 0 }}>
          <iframe
            src="https://player.vimeo.com/video/1026522815?badge=0&autopause=0&player_id=0&app_id=58479&controls=1&loop=1&title=0&byline=0&portrait=0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
            title="VIDEOSITE 4k"
            className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
          ></iframe>
        </div>
        </div>
      </div>
      <div className="bg-verde py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-dourado mb-6 text-4xl tracking-wide">
            A sua Casa de Campo  <br />
            <span className="font-adelia">dentro de um Resort</span>
          </h1>
          <p className="text-gray-200 indent-7 montserrat max-w-3xl mx-auto leading-relaxed text-left">
              Tenha todo o aconchego e privacidade de uma casa de campo, com o requinte e lazer completo
            de um resort. O <span className="font-bold">Village Resort</span> é o mais novo quintal dos seus sonhos, é a garantia de uma vida de
            diversão e conforto, sem preocupações. Compartilhe momentos inesquecíveis em família com a
            certeza de um mundo de possibilidades que se abre para você.
          </p>
          <p className="text-gray-200 indent-7 montserrat max-w-3xl mx-auto leading-relaxed text-left">
              Variedade em quadras esportivas, ideais para as práticas de diversos esportes, piscinas
            aquecidas, ofurôs e uma praia de água doce a sua disposição para lazer instantâneo e muito
            contato com a natureza. Aproveite a sua Casa de Campo privativa com a tranquilidade de saber
            que seus filhos se divertem, em segurança, com a equipe de recreação infantil. Muito mais do que
            um sítio ou chalé, a Casa de Campo é o seu refúgio na natureza com a comodidade e luxo que só
            um resort pode proporcionar.
          </p>
        </div>
      </div>
    </section>

  );
};

export default Sobre;
