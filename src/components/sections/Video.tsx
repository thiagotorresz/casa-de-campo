import React, { useRef, useState } from "react";
import Player from "@vimeo/player";

const Video = () => {
  const videoRef = useRef(null); // Referência para o iframe
  const [isPlaying, setIsPlaying] = useState(false); // Estado de reprodução
  const [showButton, setShowButton] = useState(true); // Estado do botão

  // Alterna o estado de play/pause
  const togglePlayPause = (e) => {
    e.stopPropagation(); // Previne cliques duplicados
    const player = new Player(videoRef.current);

    if (isPlaying) {
      player.pause();
      setIsPlaying(false);
    } else {
      player.play();
      setIsPlaying(true);
      setTimeout(() =>setIsPlaying(false), 2000);
      setTimeout(() => setShowButton(false), 2600); // Oculta o botão após 3 segundos
    }

    setShowButton(true); // Mostra o botão ao clicar
  };

  return (
    <section
      className="bg-verde relative w-[100vw] h-[30vh] mb-[0vh] md:h-[45vh] md:mb-[10vh] lg:h-[70vh] lg:mb-[41vh]"
      onClick={togglePlayPause} // Detecta cliques na seção
    >
      {/* Iframe do Vimeo */}
      <iframe
        ref={videoRef}
        src="https://player.vimeo.com/video/1045461245?loop=1&title=0&byline=0&portrait=0"
        allow="fullscreen; picture-in-picture; clipboard-write; encrypted-media"
        title="CASA DE CAMPO"
        className="h-[170%] w-[100%] absolute top-0 left-[50%] -translate-x-[50%] object-cover overflow-hidden mt-[-115px] md:mt-[-10px] lg:mt-[-2px]"
        onClick={togglePlayPause}
      ></iframe>

      {/* Botão gigante cobrindo toda a seção */}
      {showButton && (
        <button
          className="absolute hidden md:block top-0 left-0 w-full h-[111vh] flex items-center justify-center bg-black bg-opacity-25 text-white text-shandow text-7xl cursor-pointer"
        >
          <i className={`fa ${isPlaying ? "fa-pause" : "fa-play"} bg-black p-8 rounded-full bg-opacity-65`} />
        </button>
      )}
    </section>
  );
};

export default Video;
