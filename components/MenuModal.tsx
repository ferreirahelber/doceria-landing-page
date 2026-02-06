
import React, { useEffect } from 'react';

interface MenuModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuCategories = [
  {
    title: "Bolos & Tortas",
    items: [
      { name: "Bolo Vulcão de Ninho", price: "R$ 45,00", desc: "Massa amanteigada com cobertura generosa." },
      { name: "Torta Holandesa", price: "R$ 15,00/fatia", desc: "Creme leve com base de biscoito e chocolate." },
      { name: "Bolo de Pote (Diversos)", price: "R$ 12,00", desc: "Vários sabores: Brigadeiro, Ninho, Morango." }
    ]
  },
  {
    title: "Doces & Brigadeiros",
    items: [
      { name: "Cento de Brigadeiros", price: "R$ 120,00", desc: "Tradicional, Ninho com Nutella, Churros." },
      { name: "Caixa Presente (6 unid)", price: "R$ 22,00", desc: "Uma doce lembrança com sabores variados." },
      { name: "Beijinho de Coco", price: "R$ 1,50/un", desc: "O clássico feito com coco fresco." }
    ]
  },
  {
    title: "Especiais Dodoce's",
    items: [
      { name: "Brownie Recheado", price: "R$ 8,00", desc: "Muito recheio de doce de leite ou brigadeiro." },
      { name: "Copo da Felicidade", price: "R$ 18,00", desc: "Camadas de puro sabor em um copo generoso." },
      { name: "Cookies Artesanais", price: "R$ 6,00", desc: "Crocantes por fora, macios por dentro." }
    ]
  }
];

const MenuModal: React.FC<MenuModalProps> = ({ isOpen, onClose }) => {
  // Prevenir scroll do corpo quando o modal estiver aberto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Overlay com Blur */}
      <div 
        className="absolute inset-0 bg-brandMint/40 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      ></div>

      {/* Janela do Cardápio */}
      <div className="relative bg-white w-full max-w-2xl max-h-[85vh] rounded-3xl shadow-2xl overflow-hidden flex flex-col transform transition-all duration-300 scale-100 animate-in fade-in zoom-in-95">
        
        {/* Header do Cardápio */}
        <div className="bg-brandPink p-6 text-white flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-dancing font-bold">Nosso Cardápio</h2>
            <p className="text-sm opacity-90">Escolha suas doçuras favoritas</p>
          </div>
          <button 
            onClick={onClose}
            className="bg-white/20 hover:bg-white/40 p-2 rounded-full transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Lista de Itens (Scrollable) */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-10">
          {menuCategories.map((category, idx) => (
            <div key={idx}>
              <h3 className="text-2xl font-cursive text-brandMint border-b-2 border-pastelMint pb-2 mb-4">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.items.map((item, iIdx) => (
                  <div key={iIdx} className="flex justify-between items-start group">
                    <div className="flex-1 pr-4">
                      <h4 className="font-bold text-gray-800 group-hover:text-brandPink transition-colors">{item.name}</h4>
                      <p className="text-xs text-gray-500 italic">{item.desc}</p>
                    </div>
                    <div className="text-right">
                      <span className="block font-bold text-brandPink whitespace-nowrap">{item.price}</span>
                      <a 
                        href={`https://wa.me/5591982875970?text=Olá! Gostaria de pedir o ${item.name}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-[10px] text-brandMint font-bold hover:underline uppercase tracking-tighter"
                      >
                        Pedir agora
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer do Modal */}
        <div className="p-6 bg-pastelPink text-center">
          <p className="text-xs text-gray-600 mb-4">Valores sujeitos a alteração. Consulte disponibilidade diária.</p>
          <a 
            href="https://wa.me/5591982875970" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brandMint text-white px-8 py-3 rounded-full font-bold shadow-md hover:bg-opacity-90 transition-all"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.634 1.437h.005c6.558 0 11.897-5.335 11.9-11.894a11.83 11.83 0 00-3.41-8.423z"/>
            </svg>
            Personalizar meu pedido
          </a>
        </div>
      </div>
    </div>
  );
};

export default MenuModal;
