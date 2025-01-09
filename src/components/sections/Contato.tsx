const Teste = () => {
  return (
    <section id="contato" className="py-20 bg-[#cec5b3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center m-auto">
          <h1 className="font-bold font-adelia text-4xl text-verde">
            Nossas Redes Sociais
          </h1>
          <div className="card">
            <a className="socialContainer containerOne" target="_blank" href="https://www.instagram.com/villageresortmg">
              <i className="fa-brands fa-instagram socialSvg instagramSvg"></i>
            </a>
            <a className="socialContainer containerTwo" target="_blank" href="https://www.facebook.com/villageresortminasgerais">
              <i className="fa-brands fa-facebook socialSvg facebookSvg"></i>
            </a>

            <a className="socialContainer containerThree" target="_blank" href="https://www.linkedin.com/company/villageresort/posts/?feedView=all">
              <i className="fa-brands fa-linkedin socialSvg linkdinSvg"></i>
            </a>
            <a className="socialContainer containerFour" target="_blank" href="#">
                <i className="fa-brands fa-whatsapp socialSvg whatsappSvg" ></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Teste;