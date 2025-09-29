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
      className="relative h-screen w-full flex items-center justify-center bg-black"
    >
      {/* Vídeo de fundo */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="https://cdn.coverr.co/videos/coverr-working-with-a-dog-while-lying-on-the-grass-0062/1080p.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Overlay escuro para contraste */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Conteúdo */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-white flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* Texto da esquerda */}
        <div className="max-w-xl text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Amparo Animal
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Cuidando e protegendo nossos amigos de quatro patas com amor e dedicação.
          </p>
          <button
            onClick={() => scrollToSection("about")}
            className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-full font-semibold transition"
          >
            Saiba Mais <ArrowDown className="w-5 h-5" />
          </button>
        </div>

        {/* Estatísticas (3 colunas sempre lado a lado) */}
        <div className="grid grid-cols-3 gap-6 text-center w-full">
          <div>
            <h2 className="text-4xl font-bold">150+</h2>
            <p className="text-sm">Animais Resgatados</p>
          </div>
          <div>
            <h2 className="text-4xl font-bold">60+</h2>
            <p className="text-sm">Nos Canis</p>
          </div>
          <div>
            <h2 className="text-4xl font-bold">10+</h2>
            <p className="text-sm">Anos de História</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
