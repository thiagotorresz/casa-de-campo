const Comparativo = () => {
  return (
    <section id="comparativo" className="pt-16 md:pt-20 bg-verde">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl text-dourado">
            Afinal, vale mais a pena{" "}
            <span className="font-adelia text-dourado">Comprar ou Assinar?</span>
          </h2>
        </div>

        {/* Comparativo */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Comprar */}
          <div className="bg-red-100 shadow-md rounded-lg overflow-hidden">
            <div className="bg-red-600 text-white text-center py-4 font-bold text-lg">
              COMPRAR
            </div>
            <div className="p-6 ">
              <p className="text-gray-800 font-semibold mb-4">Despesas com:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Aquisição do Lote</li>
                <li>Terraplanagem</li>
                <li>Fundação</li>
                <li>Alvenaria</li>
                <li>Laje e/ou Telhado</li>
                <li>Chapisco, Reboco</li>
                <li>Portas e Esquadrias</li>
                <li>Hidráulica e Elétrica</li>
                <li>Revestimentos e Pintura</li>
                <li>Louças e Metais</li>
                <li>Mão de Obra</li>
                <li>Impostos (IPTU, Taxas, etc.)</li>
                <li>Segurança e Manutenção</li>
              </ul>
            </div>
          </div>

          {/* Assinar */}
          <div className=" bg-green-100 shadow-md rounded-lg overflow-hidden">
            <div className="bg-green-700 text-white text-center py-4 font-bold text-lg">
              ASSINAR
            </div>
            <div className="p-6">
              <p className="text-gray-800 font-semibold mb-4">Despesa com:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li> Assinatura do Plano</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Benefícios com texto centralizado DESKTOP*/}
      <div
        className="h-bg text-verde py-16 bg-white flex flex-col lg:flex-row items-center hidden md:block"
        style={{
          backgroundImage: "url('/casa-de-campo/img/background/beneficios.png')",
          backgroundSize: "cover",
          backgroundPosition: "right",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center lg:flex-row lg:items-start ml-[10%]">
          {/* Texto */}
          <div className="text-center lg:text-left bg-opacity-70 p-8 order-2 lg:order-1">
            <h2 className=" text-xl md:text-4xl leading-tight mb-14 max-w-lg">
              Quais são os benefícios
              da Casa de Campo <br />
              <span className="font-adelia ml-16 text-5xl">por assinatura?</span>
            </h2>
            <p className="font-black italic text-xl mb-4">
              SERVIÇOS DE HOTEL NO CONFORTO <br />
              E EXCLUSIVIDADE DA SUA CASA
            </p>
            <ul
              className="list-none italic space-y-3 text-lg uppercase">
              <li>▸ Sem burocracia na contratação;</li>
              <li>▸ Possibilidade de lazer imediato;</li>
              <li>▸ Menos despesas;</li>
              <li>▸ Possibilidade de trocar de casa;</li>
              <li>▸ Acesso aos espaços e serviços do resort.</li>
            </ul>
          </div>
        </div>
      </div>


      {/* Benefícios com imagem ao lado MOBILE*/}
      <div
        className="h-bg text-verde py-16 bg-white flex flex-col lg:flex-row items-center md:hidden overflow-hidden"
        style={{
          backgroundImage: "url('/casa-de-campo/img/background/beneficios-mb.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center lg:flex-row lg:items-start">
          {/* Texto */}
          <div className="text-left bg-opacity-70 p-4 order-2 lg:order-1 mt-[15%] ml-[-6%]">
            <h2 className=" text-lg leading-tight mb-14 max-w-lg">
              Quais são os benefícios
              da Casa de Campo <br />
              <span className="font-adelia text-3xl ml-8">por assinatura?</span>
            </h2>
            <p className="font-black italic text-lg mb-4 text-shandow">
              SERVIÇOS DE HOTEL NO CONFORTO <br />
              E EXCLUSIVIDADE DA SUA CASA
            </p>
            <ul
              className="list-none italic space-y-3 text-base uppercase font-bold text-shandow-white ">
              <li>▸ Sem burocracia na contratação;</li>
              <li>▸ Possibilidade de lazer imediato;</li>
              <li>▸ Menos despesas;</li>
              <li>▸ Possibilidade de trocar de casa;</li>
              <li>▸ Acesso aos espaços e serviços do resort.</li>
            </ul>
          </div>
        </div>
      </div>


    </section>
  );
};

export default Comparativo;