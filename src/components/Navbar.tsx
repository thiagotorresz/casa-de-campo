import React from 'react';
import { Menu, X } from 'lucide-react';
import { useScrollPosition } from '../hooks/useScrollPosition';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const scrollPosition = useScrollPosition();

  const navbarClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrollPosition > 800
    ? 'nav-color backdrop-blur-sm shadow-sm'
    : 'bg-transparent'
    }`;

  const linkClasses = `transition-colors ${scrollPosition > 800
    ? 'text-white font-semibold hover:text-green-600'
    : 'text-dourado font-semibold text-shandow hover:text-verde'
    }`;

  const buttonClasses = `transition-all ${scrollPosition > 800
    ? 'font-bold text-white font-semibold hover:text-green-600'
    : 'text-dourado font-semibold text-shandow hover:text-verde'
    }`;

  const whatsappMessage = encodeURIComponent(
    "Olá! Gostaria de saber mais sobre os serviços de vocês."
  );

  return (
    <nav className={navbarClasses}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="lg:w-1/4 flex items-center">
            <a href="#home">
              <img
                src="public/img/ICON_SITE.png"
                alt="Casa Campo"
                className="w-12 lg:mt-2 object-contain drop-shadow-md"
              />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 text-nowrap" style={{ fontSize: '13px', letterSpacing: '2.5px' }}>
            <a href="#services" className={linkClasses} >A ASSINATURA</a>
            <a href="#comparativo" className={linkClasses}>BENEFÍCIOS</a>
            <a href="#chales" className={linkClasses}>AS CASAS</a>
            <a href="#sobre" className={linkClasses}>O RESORT</a>
            <a href="#localizacao" className={linkClasses}>LOCALIZAÇÃO</a>
            <a href="#contato" className={linkClasses}>CONTATOS</a>

            <a
              href={`https://wa.me/5591999999999?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
            style={{ marginRight: '-25px' }}>
              <button className={`rounded-lg flex items-center ${buttonClasses}`}>
                {/* Ícone do WhatsApp */}
                  <i className="fa-brands fa-whatsapp text-3xl"></i>
                {/* Texto */}
              </button>
            </a>

            <a
              href="https://www.instagram.com/villageresortmg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className={`rounded-lg flex items-center ${buttonClasses}`}>
                {/* Ícone do Instagram */}
                  <i className="fa-brands fa-instagram text-3xl"></i>
              </button>
            </a>

          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`h-8 w-8 ${scrollPosition > 900 ? 'text-white' : 'text-white'}`}
            >
              {isOpen ? <X className="h-full w-full" /> : <Menu className="h-full w-full" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden w-4/6 m-auto">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 ">
            <a href="#services" className="block px-3 py-2 text-white text-center font-bold border-solid border-2 border-white hover:text-green-600">A ASSINATURA</a>
            <a href="#comparativo" className="block px-3 py-2 text-white text-center font-bold border-solid border-2 border-white hover:text-green-600">BENEFÍCIOS</a>
            <a href="#chales" className="block px-3 py-2 text-white font-bold text-center border-solid border-2 border-white hover:text-green-600">AS CASAS</a>
            <a href="#sobre" className="block px-3 py-2 text-white font-bold text-center border-solid border-2 border-white hover:text-green-600">O RESORT</a>
            <a href="#localizacao" className="block px-3 py-2 text-white font-bold text-center border-solid border-2 border-white hover:text-green-600">LOCALIZAÇÃO</a>
            <a href="#contato" className="block px-3 py-2 text-white font-bold text-center border-solid border-2 border-white hover:text-green-600">CONTATOS</a>
          </div>
        </div>
      )}
    </nav>


  );
};

export default Navbar;