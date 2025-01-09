const Footer = () => {
  return (
    <section className="py-32 bg-verde text-dourado">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        <img src="public/img/village.png" alt="" className="m-auto mt-6 w-1/3"/>

        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-12">
          <div className="flex items-center gap-2">
            <i className="fa-solid fa-phone"></i>
            <p>(31) 3157-7573</p>
          </div>
          <div className="flex items-center gap-2">
            <i className="fab fa-whatsapp text-dourado"></i>
            <p>(31) 98476-0195</p>
          </div>
          <div className="flex items-center gap-2">
            <i className="fab fa-instagram text-dourado"></i>
            <a
              href="https://www.instagram.com/villageresortmg"
              className="hover:underline" target="_blank"
            >
              @villageresortmg
            </a>
          </div>
        </div>

        <p className="mt-6 text-sm">
          Fazenda Coqueiral, 84 - Zona Rural, Jaboticatubas, MG - 35830-000,
          Brasil
        </p>
      </div>
    </section>
  );
};

export default Footer;
