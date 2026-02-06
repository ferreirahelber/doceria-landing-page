
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-cursive text-brandPink mb-4">Fale Conosco</h2>
          <div className="w-24 h-1 bg-brandMint rounded-full mb-8"></div>
          <p className="text-gray-600 text-lg mb-8">
            Quer encomendar algo especial ou tirar dúvidas sobre nossos produtos? Estamos prontos para te atender e deixar seu dia mais doce!
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-pastelMint p-3 rounded-full text-brandMint">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-gray-800">WhatsApp</h4>
                <a href="https://wa.me/5591982875970" target="_blank" rel="noopener noreferrer" className="text-brandPink hover:underline">
                  (91) 98287-5970
                </a>
              </div>
            </div>



            <div className="flex items-start gap-4">
              <div className="bg-pastelMint p-3 rounded-full text-brandMint">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-gray-800">Visite nosso Quiosque</h4>
                <p className="text-gray-600">Rua São Diogo - Largo São João</p>
                <p className="text-gray-600 text-sm mb-2">Cidade Velha, Belém - PA</p>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=-1.4573223929908448,-48.50296503036182"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-bold text-brandPink hover:underline bg-brandPink/10 px-3 py-1 rounded-full transition-colors hover:bg-brandPink/20"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Ver no Mapa
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-pastelMint p-3 rounded-full text-brandMint">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-gray-800">Horário de Pedidos</h4>
                <p className="text-gray-600">Segunda a Sábado: 09h às 18h</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-pastelMint p-8 rounded-3xl shadow-inner border-2 border-brandMint/20">
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-1">Seu Nome</label>
              <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brandPink focus:ring-2 focus:ring-brandPink/20 outline-none transition-all" placeholder="Como podemos te chamar?" />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Assunto</label>
              <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brandPink focus:ring-2 focus:ring-brandPink/20 outline-none transition-all">
                <option>Orçamento para festa</option>
                <option>Pedido imediato</option>
                <option>Dúvida sobre produtos</option>
                <option>Outros</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Mensagem</label>
              <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brandPink focus:ring-2 focus:ring-brandPink/20 outline-none transition-all" placeholder="Conte-nos o que você deseja..."></textarea>
            </div>
            <button type="button" className="w-full bg-brandPink text-white py-4 rounded-xl font-bold shadow-md hover:bg-opacity-90 transition-all">
              Enviar pelo Site (Em breve)
            </button>
            <p className="text-center text-xs text-gray-500 mt-2 italic">Dica: O atendimento pelo WhatsApp é mais rápido!</p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
