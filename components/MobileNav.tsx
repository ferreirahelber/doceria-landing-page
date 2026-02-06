import React, { useEffect } from 'react';

interface MobileNavProps {
    isOpen: boolean;
    onClose: () => void;
    onOpenMenu: () => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onClose, onOpenMenu }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isOpen]);

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        onClose();
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

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[60] flex justify-end">
            {/* Overlay backdrop */}
            <div
                className="absolute inset-0 bg-black/20 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            ></div>

            {/* Menu Content */}
            <div className="relative w-[300px] h-full bg-white shadow-2xl flex flex-col p-6 transform transition-transform animate-in slide-in-from-right duration-300">

                {/* Header with Close Button */}
                <div className="flex justify-between items-center mb-10 border-b border-gray-100 pb-4">
                    <span className="font-playlist text-2xl text-brandPink">Dodoce's</span>
                    <button
                        onClick={onClose}
                        className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors text-gray-600"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Navigation Links */}
                <nav className="flex flex-col space-y-6">
                    <a href="#inicio" onClick={(e) => scrollToSection(e, 'inicio')} className="text-xl font-medium text-gray-700 hover:text-brandPink transition-colors">Início</a>
                    <a href="#produtos" onClick={(e) => scrollToSection(e, 'produtos')} className="text-xl font-medium text-gray-700 hover:text-brandPink transition-colors">Produtos</a>
                    <a href="#sobre" onClick={(e) => scrollToSection(e, 'sobre')} className="text-xl font-medium text-gray-700 hover:text-brandPink transition-colors">Sobre</a>
                    <a href="#contato" onClick={(e) => scrollToSection(e, 'contato')} className="text-xl font-medium text-gray-700 hover:text-brandPink transition-colors">Contato</a>
                </nav>

                {/* Separator */}
                <div className="my-8 border-t border-gray-100"></div>

                {/* CTA Button */}
                <button
                    onClick={() => {
                        onClose();
                        onOpenMenu();
                    }}
                    className="w-full bg-brandPink text-white py-3 rounded-xl font-bold shadow-md hover:bg-opacity-90 transition-all flex items-center justify-center gap-2"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    Ver Cardápio Completo
                </button>

                {/* Footer Info */}
                <div className="mt-auto pt-6 text-center">
                    <a href="https://instagram.com/dodoce.s" target="_blank" className="text-brandPink text-sm font-medium hover:underline">
                        @dodoce.s
                    </a>
                </div>
            </div>
        </div>
    );
};

export default MobileNav;
