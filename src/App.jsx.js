import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Instagram, MessageCircle, X } from 'lucide-react';
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

/// DADOS DO CARROSSEL - Estrutura de dados para o novo carrossel
const carouselData = [
  { cover: doce1, title: "Morango Trufado" },
  { cover: doce2, title: "Taça Recheada" },
  { cover: doce3, title: "Taça Especial" },
  { cover: doce4, title: "Fatia de Bolo" },
  { cover: doce5, title: "Cone Trufado" },
  { cover: doce6, title: "Brownie Gourmet" }
];

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

// COMPONENTE DO CARROSSEL CUSTOMIZADO COM EFEITO DE PILHA
function StackedCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0); // Índice do slide atual
  const [isAnimating, setIsAnimating] = useState(false); // Controla se está animando
  const [isAutoPlaying, setIsAutoPlaying] = useState(true); // Controla se o auto-play está ativo

  // Auto-play: avança automaticamente a cada 4 segundos
  useEffect(() => {
    if (!isAutoPlaying || isAnimating) return; // Não executa se auto-play desabilitado ou animando
    
    const interval = setInterval(() => {
      setIsAnimating(true);
      setCurrentIndex((prev) => (prev + 1) % carouselData.length);
      setTimeout(() => setIsAnimating(false), 500);
    }, 4000); // Muda slide a cada 4 segundos
    
    return () => clearInterval(interval); // Limpa o interval quando componente desmonta
  }, [isAutoPlaying, isAnimating]); // Reexecuta quando auto-play ou animação muda

  // Função para ir para o próximo slide
  const goNext = () => {
    if (isAnimating) return; // Previne múltiplos cliques durante animação
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % carouselData.length);
    setTimeout(() => setIsAnimating(false), 500); // Duração da animação
  };
  
  // Função para ir para o slide anterior
  const goPrev = () => {
    if (isAnimating) return; // Previne múltiplos cliques durante animação
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + carouselData.length) % carouselData.length);
    setTimeout(() => setIsAnimating(false), 500); // Duração da animação
  };
  
  // Função para ir para um slide específico
  const goToSlide = (index) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 500);
  };
  
  // Função para calcular a posição e escala de cada slide
  const getSlideStyle = (index) => {
    let diff = index - currentIndex; // Diferença do slide atual
    
    // Lógica para loop infinito contínuo
    const totalSlides = carouselData.length;
    
    // Se a diferença for maior que metade dos slides, ajusta para o caminho mais curto
    if (diff > totalSlides / 2) {
      diff = diff - totalSlides; // Vai pela esquerda
    } else if (diff < -totalSlides / 2) {
      diff = diff + totalSlides; // Vai pela direita
    }
    
    const absIndex = Math.abs(diff); // Valor absoluto da diferença

    // Configurações de posicionamento e escala
    let translateX = diff * 120; // Deslocamento horizontal
    let scale = 1 - absIndex * 0.15; // Escala diminui conforme se afasta do centro
    let zIndex = carouselData.length - absIndex; // Z-index para empilhamento
    let opacity = absIndex > 2 ? 0 : 1 - absIndex * 0.3; // Opacidade
    
    // Limita a escala mínima
    scale = Math.max(scale, 0.7);
    
    return {
      transform: `translateX(${translateX}px) scale(${scale})`,
      zIndex: zIndex,
      opacity: opacity,
      transition: 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
    };
  };
  
  return (
    <div className="stacked-carousel-container">
      {/* Container dos slides */}
      <div className="stacked-carousel-track">
        {carouselData.map((item, index) => (
          <div
            key={index}
            className={`stacked-slide ${index === currentIndex ? 'active' : ''}`}
            style={getSlideStyle(index)}
            onClick={() => goToSlide(index)}
          >
            <div className="slide-content">
              <img
                src={item.cover}
                alt={item.title}
                className="slide-image"
                draggable={false}
              />
              <div className="slide-overlay">
                <h3 className="slide-title">{item.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Botões de navegação */}
      <button
        className="carousel-nav-button carousel-nav-left"
        onClick={goPrev}
        disabled={isAnimating}
        aria-label="Slide anterior"
      >
        <ChevronLeft size={24} />
      </button>
      
      <button
        className="carousel-nav-button carousel-nav-right"
        onClick={goNext}
        disabled={isAnimating}
        aria-label="Próximo slide"
      >
        <ChevronRight size={24} />
      </button>
      
      {/* Indicadores de posição */}
      <div className="carousel-indicators">
        {carouselData.map((_, index) => (
          <button
            key={index}
            className={`carousel-indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            disabled={isAnimating}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

function App() {
  const [enlargedImage, setEnlargedImage] = useState(null);

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

      {/* NOVO CARROSSEL COM EFEITO DE PILHA */}
      <section className="py-12">
        <div className="container mx-auto px-4">

          {/* Mensagem de saudação */}
          <div className="greeting-message">
            <h2>Bem-vindos à Dodoce's!</h2>
            <p>
              Sou uma empreendedora apaixonada por transformar ingredientes selecionados
              em doces que encantam e conquistam paladares. Na Dodoce's, cada produto é
              confeccionado de forma artesanal, com todo o carinho e dedicação, pensando
              em levar até você uma experiência única. Cada sabor é cuidadosamente
              escolhido para garantir a melhor qualidade e aquele gostinho de feito em casa.
            </p>
            <p>
              Se você busca doces que além de sabor trazem amor em cada pedaço, está no
              lugar certo. Seja um bombom, um bolo ou qualquer outra delícia, tudo é
              preparado como se fosse para alguém da família.
            </p>
            <p>
              Bem-vindos à Dodoce's, onde o doce é feito com o coração!
            </p>
            <p><strong>por Karen Bandeira</strong></p>
          </div>

          {/* Título da seção de doces */}    
          <h2 className="section-title">
           {/* Nossos Deliciosos Doces */}
          </h2>
          
          {/* Carrossel customizado */}
          <StackedCarousel />
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
