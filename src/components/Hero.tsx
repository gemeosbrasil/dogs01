import React from "react";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 overflow-hidden flex items-center"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-green-500"></div>
        <div className="absolute top-40 right-20 w-16 h-16 rounded-full bg-blue-500"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 rounded-full bg-green-500"></div>
      </div>

      {/* Conteúdo principal */}
      <div className="container mx-auto px-4 py-20 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Texto */}
        <div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight">
            Salve uma{" "}
            <span className="bg-gradient-to-r from-green-500 to-green-700 bg-clip-text text-transparent">
              vida
            </span>
            <br />
            agora mesmo
          </h1>

          <p className="text-xl text-gray-600 leading-relaxed max-w-lg mt-6">
            Nosso abrigo salva vidas todos os dias, mas está com dificuldades
            para manter o cuidado dos animais resgatados. Muitos dependem da sua
            ajuda urgente. Doe qualquer valor e transforme uma vida hoje!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <button
              onClick={() => scrollToSection("pix")}
              className="bg-gradient-to-r from-green-400 to-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-green-500 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Doar via PIX
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 pt-8 border-t border-gray-200 mt-8">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-green-500">
                600+
              </div>
              <div className="text-sm text-gray-600">Animais Resgatados</div>
            </div>

            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-blue-500">
                132
              </div>
              <div className="text-sm text-gray-600">
                Resgatados de Canis clandestinos
              </div>
            </div>

            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-purple-500">
                20
              </div>
              <div className="text-sm text-gray-600">
                Anos resgatando e cuidando de vidas
              </div>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative animate-fadeInRight">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:rotate-0 transition-all duration-500">
            <img
              src="https://i.imgur.com/eSoyc7c.png"
              alt="Cachorro resgatado feliz"
              className="w-full h-96 lg:h-[500px] object-cover"
            />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={() => scrollToSection("animals")}
          className="bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <ArrowDown className="h-6 w-6 text-gray-600" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
