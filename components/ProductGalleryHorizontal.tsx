import React from 'react';

import boloMorango from '../src/assets/products/morangotrufado.webp';
import brownie from '../src/assets/products/brownie.webp';
import cone from '../src/assets/products/conetrufado.webp';
import bombons from '../src/assets/products/bombonsregionais.webp';
import docinhos from '../src/assets/products/docinhos-transformed.webp';
import bolosPersonalizados from '../src/assets/products/bolo_moana.webp';

const products = [
    {
        id: 1,
        name: "Morango Trufado",
        description: "A combinação perfeita de creme de trufa branca com morangos frescos e suculentos.",
        image: boloMorango,
    },
    {
        id: 2,
        name: "Brownie Gourmet",
        description: "Chocolate intenso, casquinha crocante e interior super úmido.",
        image: brownie,
    },
    {
        id: 3,
        name: "Cone Trufado",
        description: "Cone crocante recheado com os nossos melhores cremes e chocolates.",
        image: cone,
    },
    {
        id: 4,
        name: "Brigadeiros Artesanais",
        description: "O clássico brasileiro em sua melhor versão: chocolate belga e granulados nobres.",
        image: docinhos,
    },
    {
        id: 5,
        name: "Bombons Regionais",
        description: "Sabores autênticos da nossa região em delicados bombons artesanais.",
        image: bombons,
    },
    {
        id: 6,
        name: "Bolos Personalizados",
        description: "Transformamos seu tema favorito em um bolo delicioso e exclusivo.",
        image: bolosPersonalizados,
    },
];

const ProductGallery: React.FC = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-cursive text-brandPink mb-4">Nossas Delícias</h2>
                <div className="w-24 h-1 bg-brandMint mx-auto rounded-full"></div>
                <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
                    Cada produto é feito artesanalmente com ingredientes selecionados para garantir o melhor sabor e a melhor experiência para você.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="group bg-white rounded-2xl p-4 shadow-md hover:shadow-xl transition-all duration-300 flex items-center gap-6 border border-gray-100"
                    >
                        {/* Image Container */}
                        <div className="relative w-32 h-32 flex-shrink-0 sm:w-40 sm:h-40 rounded-xl overflow-hidden shadow-sm">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                            <h3 className="text-xl font-bold text-gray-800 mb-2 truncate group-hover:text-brandPink transition-colors">
                                {product.name}
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed mb-3 line-clamp-2 sm:line-clamp-none">
                                {product.description}
                            </p>
                            <a
                                href="https://wa.me/5591982875970"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center text-sm font-bold text-brandPink hover:text-brandMint transition-colors"
                            >
                                Peça agora <span className="ml-1 text-lg leading-none">&rarr;</span>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductGallery;
