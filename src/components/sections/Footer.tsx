const Footer = () => {
  return (
    <footer className="py-2 bg-verde text-dourado" id="footer">
      {/* Rodapé */}
      <div className="text-center">
        <img
          src="/casa-de-campo/img/village.png"
          alt="Village Casa de Campo"
          className="mx-auto w-40"
        />
        <p className="mt-4 text-sm">
          RAZÃO SOCIAL: CASA DE CAMPO EMPREENDIMENTOS IMOBILIÁRIOS <br />
          CNPJ: 26.871.302/0001-29 <br />
          @2025 TODOS OS DIREITOS RESERVADOS
        </p>
      </div>
    </footer>
  );
};

export default Footer;
