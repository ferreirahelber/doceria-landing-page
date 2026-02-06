
import React from 'react';
import logoImg from '../src/assets/logo.webp';

interface HeroProps {
  onOpenMenu: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenMenu }) => {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-white pt-20">
      {/* Mantendo apenas os degradês e elementos suaves solicitados */}
      <div className="absolute -top-24 -left-24 w-64 h-64 bg-pastelPink rounded-full blur-3xl opacity-60 animate-pulse"></div>
      <div className="absolute bottom-10 right-1/4 w-32 h-32 bg-brandPink/10 rounded-full blur-2xl"></div>

      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8 z-10">
        {/* Lado Esquerdo: Conteúdo Textual */}
        <div className="flex-1 text-center md:text-left order-2 md:order-1 max-w-xl">
          {/* Informação "Doceria Artesanal" removida como solicitado */}

          <h1 className="text-3xl md:text-4xl font-dancing text-brandPink mb-4 font-bold leading-tight">
            Doces artesanais feitos com amor
          </h1>
          <div className="w-24 h-1 bg-brandMint rounded-full mb-8"></div>

          <p className="text-gray-600 text-lg mb-10 leading-relaxed font-medium">
            Transformamos ingredientes premium em momentos inesquecíveis. Conheça nossas delícias feitas para adoçar o seu dia.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center md:justify-start">
            <button
              onClick={onOpenMenu}
              className="group relative px-10 py-4 bg-brandPink text-white rounded-full text-lg font-bold shadow-xl hover:shadow-brandPink/30 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10">Ver Cardápio</span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity"></div>
            </button>

            <a
              href="https://wa.me/5591982875970"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 px-10 py-4 bg-white border-2 border-brandMint text-brandMint rounded-full text-lg font-bold hover:bg-brandMint hover:text-white transition-all duration-300 shadow-lg"
            >
              <span>Fazer Pedido</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>

        {/* Lado Direito: Logo Redimensionada */}
        <div className="flex-1 flex justify-center md:justify-end order-1 md:order-2">
          <div className="relative group">
            {/* Brilho suave atrás da logo */}
            <div className="absolute inset-0 bg-brandMint/20 rounded-full blur-3xl scale-110 group-hover:scale-125 transition-transform duration-700"></div>

            {/* Logo Container - Tamanho ideal */}
            <div className="relative w-64 h-64 md:w-[350px] md:h-[350px] transform transition-all duration-500 hover:scale-105">
              <img
                src={logoImg}
                alt="Logo Dodoce's"
                className="w-full h-full object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
