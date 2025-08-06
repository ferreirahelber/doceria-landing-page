import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause, Instagram, MessageCircle, X } from 'lucide-react';
import './App.css';

// IMPORTAR SUAS IMAGENS (substitua pelos nomes reais dos seus arquivos)
import logo from './assets/logo.png';
import doce1 from './assets/morangotrufado.jpeg';
import doce2 from './assets/tacarecheada.jpeg';
import doce3 from './assets/tacarecheada2.jpeg';
import doce4 from './assets/fatiabolo.png';
import doce5 from './assets/conetrufado.jpg';
import doce6 from './assets/brownie.jpg';
import bolo1 from './assets/bombonsregionais.jpeg';
import cupcake1 from './assets/bolopote01.jpg';
import brigadeiro1 from './assets/bolopote2.jpeg';
import torta1 from './assets/morango1.jpeg';
import sobremesa1 from './assets/morango2.jpeg';
import sobremesa2 from './assets/morango3.jpeg';

// IMAGENS DO CARROSSEL
const carouselImages = [doce1, doce2, doce3, doce4, doce5, doce6];

// PRODUTOS DO MENU
const products = [
  {
    id: 1,
    name: "Bombons Variados",
    description: "Nossos bombons regionais são feitos com a polpa dos nossos frutos, temos: Bacuri, Cupuaçu. Temos támbem de Queijo Cuia, Brigadeiro Belga e o carro chefe Bombom de Morango.",
    image: bolo1
  },
  {
    id: 2,
    name: "Cupcakes Gourmet",
    description: "Cupcakes coloridos e saborosos, perfeitos para festas e eventos. Diversos sabores e decorações criativas.",
    image: cupcake1
  },
  {
    id: 3,
    name: "Brigadeiros Artesanais",
    description: "Brigadeiros gourmet com chocolate belga e coberturas especiais. Tradição brasileira com toque sofisticado.",
    image: brigadeiro1
  },
  {
    id: 4,
    name: "Tortas Especiais",
    description: "Tortas doces com recheios cremosos e frutas frescas. Sobremesas irresistíveis para qualquer momento.",
    image: torta1
  },
  {
    id: 5,
    name: "Doces Variados",
    description: "Seleção especial de doces tradicionais e modernos. Perfeitos para presentear ou saborear em família.",
    image: sobremesa1
  },
  {
    id: 6,
    name: "Sobremesas Premium",
    description: "Sobremesas elaboradas com técnicas refinadas e ingredientes premium. Experiência gastronômica única.",
    image: sobremesa2
  }
];

function App() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [enlargedImage, setEnlargedImage] = useState(null);

  // Auto-play do carrossel
  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => 
          prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000);
      
      return () => clearInterval(interval);
    }
  }, [isPlaying]);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1
    );
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleImageClick = (image) => {
    setEnlargedImage(image);
  };

  const closeEnlargedImage = () => {
    setEnlargedImage(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
      
      {/* CABEÇALHO */}
      <header className="bg-header-background shadow-lg"> {/* A cor de fundo do cabeçalho é definida pela variável --header-background no App.css */}
        <div className="container mx-auto px-4 py-1">
          <div className="flex justify-center items-center space-x-2"> 
            <img 
              src={logo} 
              alt="Logo da Dodoce's" 
              style={{ height: '200px'}} /* Posiciona a logo e os dizeres no topo da página */
            />
            {/* Slogan com novos estilos */}
            <p className="slogan-text"> {/* Adicionada a classe 'slogan-text' para aplicar os estilos no App.css */}
              Doces artesanais feitos com amor.
            </p>
          </div>
        </div>
      </header>

      {/* CARROSSEL */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="section-title"> {/* Adicionada a classe 'section-title' para aplicar os estilos no App.css */}
            {/* Nossos Deliciosos Doces */}
          </h2>
          
          <div className="relative max-w-4xl mx-auto">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              {/* Imagem do carrossel com classe específica para controle de dimensões */}
              <img
                src={carouselImages[currentImageIndex]}
                alt={`Doce ${currentImageIndex + 1}`}
                className="carousel-image cursor-pointer transition-transform duration-300 hover:scale-105"
                onClick={() => handleImageClick(carouselImages[currentImageIndex])}
              />
              
              {/* Controles do carrossel */}
              <div className="absolute inset-0 flex items-center justify-between p-4">
                <button
                  onClick={prevImage}
                  className="bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
                >
                  <ChevronLeft size={24} />
                </button>
                
                <button
                  onClick={nextImage}
                  className="bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
              
              {/* Botão Play/Pause */}
              <div className="absolute bottom-4 left-4">
                <button
                  onClick={togglePlayPause}
                  className="bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
                >
                  {isPlaying ? <Pause size={20} /> : <Play size={20} />}
                </button>
              </div>
              
              {/* Indicadores */}
              <div className="absolute bottom-4 right-4 flex space-x-2">
                {carouselImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                      index === currentImageIndex 
                        ? 'bg-white scale-125' 
                        : 'bg-white/50 hover:bg-white/75'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MENU DE PRODUTOS */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title"> {/* Adicionada a classe 'section-title' para aplicar os estilos no App.css */}
            Nossos Produtos
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="flex">
                  <div className="w-1/3">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="product-image cursor-pointer"
                      onClick={() => handleImageClick(product.image)}
                    />
                  </div>
                  <div className="w-2/3 p-6">
                    <h3 className="product-card-title"> {/* Adicionada a classe 'product-card-title' para aplicar os estilos no App.css */}
                      {product.name}
                    </h3>
                    <p className="product-card-description"> {/* Adicionada a classe 'product-card-description' para aplicar os estilos no App.css */}
                      {product.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RODAPÉ com Redes Sociais */}
      <footer className="bg-[#72c5c4] text-white py-4">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-6">Entre em Contato</h3>
            <p className="text-lg mb-8">Siga-nos nas redes sociais e faça seu pedido!</p>
            
            <div className="flex justify-center space-x-8">
              <a
                href="https://instagram.com/dodoce.s"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 bg-white/20 hover:bg-white/30 px-6 py-3 rounded-full transition-all duration-200 hover:scale-110"
              >
                <Instagram size={24} />
                <span className="font-semibold">@dodoce.s</span>
              </a>
              
              <a
                href="https://wa.me/5591982875970"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 bg-white/20 hover:bg-white/30 px-6 py-3 rounded-full transition-all duration-200 hover:scale-110"
              >
                <MessageCircle size={24} />
                <span className="font-semibold">WhatsApp</span>
              </a>
            </div>
            
            <div className="mt-8 pt-8 border-t border-white/20">
              <p className="text-sm opacity-80">
                © 2025 Dodoce's - Doceria Artesanal. Todos os direitos reservados.
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* MODAL PARA IMAGEM AMPLIADA */}
      {enlargedImage && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-4xl max-h-full">
            <img
              src={enlargedImage}
              alt="Imagem ampliada"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <button
              onClick={closeEnlargedImage}
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-200"
            >
              <X size={24} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
