const Services = () => {
  return (
    <section id="services" className="relative">
      {/* A Casa dos sonhos */}
      <div className="bg-verde py-10 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-dourado mb-6 text-4xl tracking-wide">
            A Casa de Campo dos sonhos <br />
            <span className="font-adelia">sem custos adicionais</span>
          </h1>
          <p className="text-gray-200 indent-7 montserrat max-w-3xl mx-auto leading-relaxed text-left">
            Exclusiva, aconchegante e inovação imobiliária, a Casa de Campo por assinatura
            traz inovação e desfrute imediato. Para que desperdiçar tempo, dinheiro e sonhos em
            família com obras, compras, manutenção e demais despesas que acompanham a
            construção de um sítio, chalé ou chácara?
          </p>
          <p className="text-gray-200 indent-7 montserrat max-w-3xl mx-auto leading-relaxed text-left">
            Com a Casa de Campo do <span className="font-bold">Village Resort</span>, você tem todo conforto, liberdade e
            contato com a natureza com a facilidade do uso imediato no momento da assinatura.
          </p>
        </div>
      </div>

      <div className="h-bg hidden sm:block " style={{ backgroundImage: "url('/casa-de-campo/img/background/services.jpg')", backgroundSize: "cover", backgroundPosition: "right" }}>
        <div className="max-w-4xl sm:relative sm:top-2/3 sm:left-28 py-2 bg-verde opacity-85 px-4 sm:px-6 lg:px-8 text-white ">
          {/* Título central */}
          <div className="">
            <h2 className="text-3xl opacity-100 py-4">
              Como funciona o <br /> <span className="font-adelia ml-12">serviço de assinatura?</span>
            </h2>
          </div>
          <div className="">
            <p className="indent-7 opacity-100">
              A utilização é pré-estabelecida em contrato que assegura o uso do imóvel por 5 ou 10 anos, com cotas de utilização para 3, 5 e 7 dias mensais.
            </p>
            <p className="indent-7 opacity-100">
              A mesma casa poderá ser assinada por diferentes pessoas, que estarão aptas a usufruí-la, de forma individual ou em grupos de amigos e família, em períodos
              agendados conforme estilo de vida e rotina.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
