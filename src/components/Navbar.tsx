import React from 'react';
import { Menu, X } from 'lucide-react';
import { useScrollPosition } from '../hooks/useScrollPosition';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const scrollPosition = useScrollPosition();

  // Dynamically set styles based on scroll position
  const isScrolled = scrollPosition > 800;
  const navbarClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 nav-color ${
    isScrolled ? 'backdrop-blur-sm shadow-sm' : ''
  }`;

  const commonLinkClasses = 'transition-colors font-semibold text-white';
  const linkClasses = `${commonLinkClasses} ${
    isScrolled ? 'hover:text-green-600' : 'text-shadow hover:text-dourado'
  }`;

  const commonButtonClasses = 'rounded-lg flex items-center text-white transition-all';
  const buttonClasses = `${commonButtonClasses} ${
    isScrolled ? 'hover:text-green-600' : 'text-shadow hover:text-dourado'
  }`;

  const whatsappMessage = encodeURIComponent(
    'Olá! Estava no site da Casa de Campo e Gostaria de saber mais sobre a assinatura.'
  );

  // Common links for desktop and mobile
  const navLinks = [
    { href: '#services', label: 'A ASSINATURA' },
    { href: '#comparativo', label: 'BENEFÍCIOS' },
    { href: '#chales', label: 'AS CASAS' },
    { href: '#sobre', label: 'O RESORT' },
    { href: '#localizacao', label: 'LOCALIZAÇÃO' },
    { href: '#form', label: 'CONTATOS' },
  ];

  return (
    <nav className={navbarClasses}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="flex items-center space-x-8">
            <a href="#home">
              <img
                src="/casa-de-campo/img/logonav.png"
                alt="Casa Campo"
                className="w-20 object-contain drop-shadow-md"
              />
            </a>
            {/* Desktop Links */}
            <div className="hidden md:flex items-center space-x-8 text-nowrap text-shadow" style={{ fontSize: '13px', letterSpacing: '3px' }}>
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className={linkClasses}>
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Social Icons Section */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href={`https://wa.me/5531984760195?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonClasses}
            >
              <i className="fa-brands fa-whatsapp text-3xl"></i>
            </a>
            <a
              href="https://www.instagram.com/villageresortmg"
              target="_blank"
              rel="noopener noreferrer"
              className={buttonClasses}
            >
              <i className="fa-brands fa-instagram text-3xl"></i>
            </a>
            <a
              href="https://www.facebook.com/villageresortminasgerais"
              target="_blank"
              rel="noopener noreferrer"
              className={buttonClasses}
            >
              <i className="fa-brands fa-facebook text-3xl"></i>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="h-8 w-8 text-white">
              {isOpen ? <X className="h-full w-full" /> : <Menu className="h-full w-full" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden w-4/6 mx-auto">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block px-3 py-2 text-white font-bold text-center border-solid border-2 border-white hover:text-green-600"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
