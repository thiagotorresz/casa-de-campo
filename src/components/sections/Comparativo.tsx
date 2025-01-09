const Comparativo = () => {
  return (
    <section id="comparativo" className="pt-20 bg-gradient-to-b from-green-200 to-verde">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
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

      {/* Benefícios com imagem ao lado */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mt-8 bg-white shadow-lg rounded-lg relative overflow-hidden montserrat">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
              {/* Texto */}
              <div className="p-8 z-10">
                <h2 className="text-lg font-bold text-green-700 mb-4 text-center " style={{ fontSize: "24px" }}>
                  Quais são os benefícios da Casa de Campo por assinatura?
                </h2>
                <ul className="list-none pl-5 text-black space-y-2 font-bold montserrat" style={{ fontSize: "21px" }}>
                  <li> <i className="bi bi-arrow-right-circle-fill text-green-700"></i> Sem burocracia na contratação;</li>
                  <li> <i className="bi bi-arrow-right-circle-fill text-green-700"></i> Possibilidade de lazer imediato;</li>
                  <li> <i className="bi bi-arrow-right-circle-fill text-green-700"></i> Menos despesas;</li>
                  <li> <i className="bi bi-arrow-right-circle-fill text-green-700"></i> Possibilidade de trocar de casa;</li>
                  <li> <i className="bi bi-arrow-right-circle-fill text-green-700"></i> Acesso aos espaços e serviços do resort.</li>
                </ul>
              </div>
              {/* Imagem */}
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1509600110300-21b9d5fedeb7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Substitua pelo caminho real da imagem
                  alt="Casa de Campo"
                  className="h-full w-full object-cover"
                />
                {/* Efeito de sobreposição */}
                <div className="absolute inset-0 bg-white/30 mix-blend-multiply"></div>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
};

export default Comparativo;
