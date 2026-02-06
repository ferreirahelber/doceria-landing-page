import React from 'react';

import instagramPrint from '../src/assets/instagramPRINT.webp';

const InstagramSection: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">

        {/* Text Content Side */}
        <div className="text-center lg:text-left max-w-lg order-2 lg:order-1">
          <h2 className="text-4xl md:text-5xl font-cursive text-brandPink mb-4">
            Acompanhe nossas doçuras
          </h2>
          <div className="w-24 h-1 bg-brandMint mx-auto lg:mx-0 rounded-full mb-8"></div>

          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            Siga nosso perfil e fique por dentro das novidades, bastidores da produção e promoções exclusivas que rolam por lá!
          </p>
          <a
            href="https://instagram.com/dodoce.s"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-brandPink text-white px-8 py-4 rounded-full font-bold shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all text-lg group"
          >
            <svg
              className="w-6 h-6 group-hover:rotate-12 transition-transform"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M7.75 2h8.5C19.55 2 22 4.45 22 7.75v8.5c0 3.3-2.45 5.75-5.75 5.75h-8.5C4.45 22 2 19.55 2 16.25v-8.5C2 4.45 4.45 2 7.75 2zM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm5.25-3.5a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5z" />
            </svg>
            Seguir no Instagram
          </a>
        </div>

        {/* Phone Mockup Side */}
        <div className="relative order-1 lg:order-2 transform hover:rotate-2 transition-transform duration-500">
          {/* Phone Border Details */}
          <div className="relative mx-auto border-gray-900 bg-gray-900 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-2xl flex flex-col items-center overflow-hidden">
            <div className="h-[32px] w-[3px] bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
            <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
            <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
            <div className="h-[64px] w-[3px] bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>

            {/* Screen */}
            <div className="rounded-[2rem] overflow-hidden w-full h-full bg-white relative flex flex-col">

              {/* Single Image Scrollable Container */}
              <div className="flex-1 overflow-y-auto overflow-x-hidden no-scrollbar bg-white">
                <img
                  src={instagramPrint}
                  alt="Doceira Instagram Profile"
                  className="w-full h-auto block"
                  style={{ backfaceVisibility: 'hidden', transform: 'translateZ(0)' }}
                />
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default InstagramSection;
