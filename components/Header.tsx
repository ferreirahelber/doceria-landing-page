import React from 'react';
interface HeaderProps {
  scrolled: boolean;
  onOpenMenu: () => void;
  onOpenMobileNav: () => void;
}

const Header: React.FC<HeaderProps> = ({ scrolled, onOpenMenu, onOpenMobileNav }) => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const navLinks = [
    { name: 'Início', id: 'inicio' },
    { name: 'Produtos', id: 'produtos' },
    { name: 'Sobre', id: 'sobre' },
    { name: 'Contato', id: 'contato' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
        }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <a
          href="#inicio"
          onClick={(e) => scrollToSection(e, 'inicio')}
          className="font-playlist text-3xl text-brandPink transition-colors hover:opacity-80 pb-2"
        >
          Dodoce's
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => scrollToSection(e, link.id)}
              className="font-medium text-gray-600 transition-colors hover:text-brandPink relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brandPink transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={onOpenMenu}
            className="px-6 py-2 bg-brandPink text-white rounded-full font-bold shadow-md hover:bg-opacity-90 transition-all transform hover:-translate-y-0.5"
          >
            Ver Cardápio
          </button>
        </div>

        {/* Mobile menu icon */}
        <div
          onClick={onOpenMobileNav}
          className="md:hidden text-brandPink p-2 hover:bg-brandPink/5 rounded-lg transition-colors cursor-pointer"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </div>
      </div>
    </header>
  );
};

export default Header;
