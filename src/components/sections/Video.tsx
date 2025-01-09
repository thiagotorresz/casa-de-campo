const Video = () => {
  return (
    <section className="bg-verde relative w-[100vw] h-[30vh] mb-[0vh]  md:h-[45vh] md:mb-[10vh] lg:h-[70vh] lg:mb-[41vh]">
      <iframe
        src="https://player.vimeo.com/video/1045461245?controls=1&autoplay=0&loop=1&title=0&byline=0&portrait=0"
        allow="fullscreen; picture-in-picture; clipboard-write; encrypted-media"
        title="CASA DE CAMPO"
        className="h-[170%] w-[100%] absolute top-0 left-[50%] -translate-x-[50%] object-cover overflow-hidden mt-[-115px] md:mt-[-10px] lg:mt-[-2px]"
      ></iframe>
    </section>
  );
};

export default Video;
