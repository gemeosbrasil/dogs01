import React, { useState } from 'react';
import { AlertTriangle, Heart, Clock } from 'lucide-react';

const UrgentSection = () => {
  const [playVideo, setPlayVideo] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="urgent" className="py-20 bg-gradient-to-br from-red-50 to-orange-50">
      <div className="container mx-auto px-4">
        {/* Urgent Alert */}
        <div className="bg-red-500 text-white p-6 rounded-2xl mb-12 shadow-2xl">
          <div className="flex items-center justify-center mb-4">
            <AlertTriangle className="h-8 w-8 mr-3 animate-pulse" />
            <h2 className="text-2xl md:text-3xl font-bold">URGENTE!</h2>
          </div>
          <p className="text-center text-lg md:text-xl font-semibold">
            Os animais do abrigo estão há mais de 3 dias sem alimentos
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                A Situação é Desesperadora
              </h3>
            </div>

            <div className="space-y-6 text-lg text-gray-700 leading-relaxed mb-8">
              <p>
                Amigos, a situação é desesperadora. Nossos cães e gatos estão há mais de 3 dias sem comida, 
                e já não temos mais como comprar ração. Eles foram resgatados das ruas, muitos com traumas e 
                histórias de sofrimento, e agora correm o risco de sentir novamente a dor da fome dentro do 
                abrigo que deveria ser seu refúgio.
              </p>
              
              <p className="bg-green-50 p-6 rounded-2xl border-l-4 border-green-500">
                🐾 <strong>Cada doação, por menor que seja, pode significar uma refeição a mais, uma barriguinha 
                cheia e um coração aliviado.</strong> Não podemos deixar que eles passem fome.
              </p>

              <p>
                Ajude-nos a continuar salvando animais vítimas de maus-tratos. Cada doação é uma chance de 
                recomeço para um animal que já sofreu demais.
              </p>
            </div>

            {/* Vídeo com Thumb Fake */}
            <div className="relative overflow-hidden pb-[56.25%] mb-8 rounded-2xl shadow-xl">
              {!playVideo ? (
                <div 
                  className="absolute top-0 left-0 w-full h-full flex items-center justify-center cursor-pointer group" 
                  onClick={() => setPlayVideo(true)}
                >
                  {/* Thumbnail do YouTube */}
                  <img 
                    src="https://img.youtube.com/vi/7jNvjZhcrTk/maxresdefault.jpg" 
                    alt="Thumbnail do vídeo"
                    className="w-full h-full object-cover rounded-2xl group-hover:brightness-75 transition"
                  />
                  {/* Botão Play */}
                  <div className="absolute bg-red-600 text-white rounded-full p-4 shadow-lg group-hover:scale-110 transition">
                    ▶
                  </div>
                </div>
              ) : (
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-2xl"
                  src="https://www.youtube.com/embed/7jNvjZhcrTk?autoplay=1"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              )}
            </div>

            {/* Situation Cards */}
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-red-50 p-6 rounded-2xl border border-red-200">
                <div className="flex items-center mb-4">
                  <Heart className="h-6 w-6 text-red-500 mr-3" />
                  <h4 className="text-xl font-bold text-red-800">💔 A Situação</h4>
                </div>
                <p className="text-gray-700">
                  Somos um abrigo que resgata, trata e cuida com muito amor de cães e gatos abandonados, 
                  muitos deles vítimas de maus-tratos ou negligência. Enfrentamos altos custos com alimentação, 
                  medicamentos, internações e cirurgias — e, infelizmente, as doações caíram muito nos últimos meses.
                </p>
              </div>

              <div className="bg-orange-50 p-6 rounded-2xl border border-orange-200">
                <div className="flex items-center mb-4">
                  <Clock className="h-6 w-6 text-orange-500 mr-3" />
                  <h4 className="text-xl font-bold text-orange-800">🆘 Por que precisamos de você</h4>
                </div>
                <p className="text-gray-700">
                  Hoje, temos dezenas de animais sob os nossos cuidados, e estamos com dificuldades para manter 
                  os atendimentos e despesas básicas. Precisamos arrecadar <strong>R$ 15.000,00</strong> para manter 
                  os atendimentos e despesas básicas dos próximos meses.
                </p>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-2xl">
              <h4 className="text-2xl font-bold text-gray-800 mb-4">
                🙌 Toda ajuda é bem-vinda
              </h4>
              <p className="text-lg text-gray-700 mb-6">
                Mesmo uma doação de R$ 1,00 faz diferença. E se não puder doar, compartilhe com amigos, 
                grupos e familiares. Juntos, conseguimos transformar sofrimento em esperança!
              </p>
              <p className="text-xl font-bold text-red-600 mb-6">
                O tempo está contra nós, e cada minuto faz diferença para essas vidas que dependem 
                unicamente da nossa solidariedade.
              </p>
              <button
                onClick={() => scrollToSection('pix')}
                className="bg-gradient-to-r from-green-400 to-green-600 text-white px-12 py-4 rounded-full text-xl font-bold hover:from-green-500 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Doar Agora via PIX
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UrgentSection;
