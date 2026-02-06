
import React from 'react';

const Footer: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-pastelMint pt-16 pb-8 border-t border-brandMint/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 mb-12">
          {/* Brand Section - Centered as requested */}
          <div className="text-center">
            <span className="text-4xl font-dancing font-bold text-brandPink block mb-1">
              Dodoce's
            </span>
            <p className="text-gray-600 italic text-sm">"Doces artesanais feitos com amor"</p>
          </div>

          {/* Navigation */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-gray-600 font-semibold text-sm uppercase tracking-wider">
            <a href="#inicio" onClick={(e) => scrollToSection(e, 'inicio')} className="hover:text-brandPink transition-colors">Início</a>
            <a href="#produtos" onClick={(e) => scrollToSection(e, 'produtos')} className="hover:text-brandPink transition-colors">Produtos</a>
            <a href="#sobre" onClick={(e) => scrollToSection(e, 'sobre')} className="hover:text-brandPink transition-colors">Sobre</a>
            <a href="#contato" onClick={(e) => scrollToSection(e, 'contato')} className="hover:text-brandPink transition-colors">Contato</a>
          </div>

          {/* Improved Social Buttons */}
          <div className="flex gap-4">
            <a 
              href="https://instagram.com/dodoce.s" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group flex items-center gap-2 bg-white border border-brandPink/20 text-brandPink px-4 py-2 rounded-xl shadow-sm hover:bg-brandPink hover:text-white transition-all duration-300 transform hover:-translate-y-1"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.209-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              <span className="font-bold text-sm">Instagram</span>
            </a>
            
            <a 
              href="https://wa.me/5591982875970" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group flex items-center gap-2 bg-white border border-green-200 text-green-600 px-4 py-2 rounded-xl shadow-sm hover:bg-green-600 hover:text-white transition-all duration-300 transform hover:-translate-y-1"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181 0 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412 0 6.556-5.338 11.892-11.893 11.892-1.996 0-3.956-.502-5.706-1.447l-6.305 1.655zm6.3-1.985l.363.216a9.861 9.861 0 005.032 1.382h.005c5.424 0 9.841-4.416 9.843-9.843 0-2.632-1.023-5.105-2.88-6.963a9.757 9.757 0 00-6.963-2.879c-5.422 0-9.84 4.417-9.842 9.844 0 2.115.554 4.158 1.599 5.947l.238.376-.994 3.633 3.697-.97zM17.472 14.38c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              </svg>
              <span className="font-bold text-sm">WhatsApp</span>
            </a>
          </div>
        </div>

        <div className="border-t border-brandMint/10 pt-8 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Dodoce's Doceria Artesanal. Todos os direitos reservados.</p>
          <p className="mt-1 font-dancing text-brandPink text-lg">Feito com carinho para você</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
