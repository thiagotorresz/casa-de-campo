const Contact = () => {
  const whatsappMessage = encodeURIComponent(
    'Olá! Estava no site da Casa de Campo e Gostaria de saber mais sobre a assinatura.'
  );

  return (
    <div className="flex justify-center" id='contact'>
      {/* Informações de Contato */}
      <div className="text-center sm:text-left">
        <ul className="mt-2 space-y-6">
          <a href="tel:3131577573" className="flex flex-col items-center gap-3 sm:flex-row sm:items-center sm:justify-start" target="_blank">
            <li className="flex flex-col items-center gap-3 sm:flex-row sm:items-center sm:gap-4">
              <i className="text-4xl fas fa-phone"></i>
              <span className="font-bold text-2xl">(31) 3157-7573</span>
            </li>
          </a>
          <a href={`https://wa.me/5531984760195?text=${whatsappMessage}`} className="flex flex-col items-center gap-3 sm:flex-row sm:items-center sm:justify-start" target="_blank">
            <li className="flex flex-col items-center gap-3 sm:flex-row sm:items-center sm:gap-4">
              <i className="text-4xl fab fa-whatsapp"></i>
              <span className="font-bold text-2xl">(31)9 8476-0195</span>
            </li>
          </a>
          <a href="https://www.youtube.com/" className="flex flex-col items-center gap-3 sm:flex-row sm:items-center sm:justify-start" target="_blank">
            <li className="flex flex-col items-center gap-3 sm:flex-row sm:items-center sm:gap-4">
              <i className="text-4xl fab fa-youtube"></i>
              <span>casadecampo</span>
            </li>
          </a>
          <a href="https://www.instagram.com/villageresortmg" className="flex flex-col items-center gap-3 sm:flex-row sm:items-center sm:justify-start" target="_blank">
            <li className="flex flex-col items-center gap-3 sm:flex-row sm:items-center sm:gap-4">
              <i className="text-4xl fab fa-instagram"></i>
              <span>@villageresortmg</span>
            </li>
          </a>
          <a href="https://www.facebook.com/villageresortminasgerais" className="flex flex-col items-center gap-3 sm:flex-row sm:items-center sm:justify-start" target="_blank">
            <li className="flex flex-col items-center gap-3 sm:flex-row sm:items-center sm:gap-4">
              <i className="text-4xl fa-brands fa-facebook"></i>
              <span>casadecampo</span>
            </li>
          </a>
          <li className="flex flex-col items-center gap-3 sm:flex-row sm:items-center sm:gap-4">
            <i className="text-4xl fas fa-map-marker-alt"></i>
            <span>
              Fazenda Coqueiral, 84 Z. Rural, Jaboticatubas-MG <br />
              CEP: 35830-000, Brasil
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
