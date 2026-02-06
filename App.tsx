
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductGallery from './components/ProductGalleryHorizontal';
import InstagramSection from './components/InstagramSection';
import Contact from './components/Contact';
import WhatsAppButton from './components/WhatsAppButton';
import Footer from './components/Footer';
import MenuModal from './components/MenuModal';
import MobileNav from './components/MobileNav';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white selection:bg-brandPink selection:text-white">
      <Header
        scrolled={scrolled}
        onOpenMenu={() => setIsMenuOpen(true)}
        onOpenMobileNav={() => setIsMobileNavOpen(true)}
      />

      <main>
        <section id="inicio">
          <Hero onOpenMenu={() => setIsMenuOpen(true)} />
        </section>

        <section id="produtos" className="py-20 bg-pastelMint">
          <ProductGallery />
        </section>

        <section id="sobre" className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-4xl md:text-5xl font-cursive text-brandPink mb-4">Nossa Doce História</h2>
            <div className="w-24 h-1 bg-brandMint mx-auto rounded-full mb-8"></div>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              A <strong>Dodoce's</strong> nasceu de um sonho em transformar ingredientes simples em momentos de pura felicidade.
              Especializada em doces artesanais, cada receita é preparada com um toque especial de carinho e dedicação.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              De bolos temáticos personalizados a brownies irresistíveis, nosso objetivo é estar presente nas suas melhores comemorações,
              adoçando a vida com qualidade e muito amor.
            </p>
          </div>
        </section>

        <section id="social" className="py-20 bg-pastelPink">
          <InstagramSection />
        </section>

        <section id="contato" className="py-20 bg-white">
          <Contact />
        </section>
      </main>

      <Footer />
      <WhatsAppButton />

      <MobileNav
        isOpen={isMobileNavOpen}
        onClose={() => setIsMobileNavOpen(false)}
        onOpenMenu={() => setIsMenuOpen(true)}
      />

      {/* Modal do Cardápio */}
      <MenuModal isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </div>
  );
};

export default App;
