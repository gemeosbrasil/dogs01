import React from 'react';

const AnimalStories = () => {
  const stories = [
    {
      name: "Noah",
      image: "https://vakinhas.me/wp-content/uploads/2025/05/Vakinhas.me-Instituto-Socorro-Animal-Salve-o-Instituto-06.webp",
      story: "Fui resgatado após a casa dos meus tutores pegar fogo, eu vivia acorrentado, junto com outro amigo, consegui escapar no meio do incêndio, mas ele não 😞 Tive metade do corpo queimado, queimaduras graves nas costas, ferimentos nas patinhas, coxins queimados. Tinha muita dor e febre alta quando cheguei na clínica. Também estava com problemas de pele, sinais de dermatite crônica e possivelmente sarna com feridas abertas no pescoço. As tias terão muito custo com meu tratamento, além da internação, medicamentos fortes, sedação constante para curativos e alimentação especial, você pode ajudar?",
      subtitle: "Noah foi resgatado após sua casa pegar fogo."
    },
    {
      name: "Victor",
      image: "https://vakinhas.me/wp-content/uploads/2025/05/Vakinhas.me-Instituto-Socorro-Animal-Salve-o-Instituto-14.webp",
      story: "Fui resgatado após ser atropelado em uma rodovia, estava com muita dor e não conseguia levantar, as tias do Instituto pediram pra uma tia veterinária ir junto me buscar para eu ser medicado logo. Eu estava com muitas escoriações pelo corpo, com a temperatura baixa e saía sangue no meu xixi. Após os exames de imagem, as tias viram que tinha uma fratura na minha coluna e múltiplas fraturas na pelve e quadril. Vou precisar de duas cirurgias delicadas.",
      subtitle: "Victor foi resgatado após ser encontrado atropelado na rodovia"
    }
  ];

  return (
    <section id="stories" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Conheça as
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent"> Histórias</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cada animal tem uma história de superação. Suas doações fazem toda a diferença na recuperação deles.
          </p>
        </div>

        <div className="space-y-20">
          {stories.map((story, index) => (
            <div key={index}>
              <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">
                <div className="md:grid md:grid-cols-2">
                  <div className="relative">
                    <img
                      src={story.image}
                      alt={story.name}
                      className="w-full h-64 md:h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  </div>
                  <div className="p-8 md:p-12">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                      Conheça a História do {story.name}
                    </h3>
                    <div className="bg-blue-50 p-6 rounded-2xl mb-6">
                      <p className="text-gray-700 leading-relaxed italic">
                        "{story.story}"
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-center text-gray-600 mt-4 italic">
                {story.subtitle}
              </p>
              
              {/* Separator Image */}
              {index < stories.length - 1 && (
                <div className="mt-16 text-center">
                  <img
                    src="https://vakinhas.me/wp-content/uploads/2025/05/Vakinhas.me-Instituto-Socorro-Animal-Salve-o-Instituto-03.webp"
                    alt="Separador"
                    className="w-full max-w-2xl mx-auto h-64 object-cover rounded-2xl shadow-lg"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnimalStories;
