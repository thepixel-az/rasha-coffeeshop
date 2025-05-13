import { useEffect, useRef } from "react";
import "./Season.css";

const seasonImages = [
  { src: "/season/1.jpg", alt: "Season 1" },
  { src: "/season/2.jpg", alt: "Season 2" },
  { src: "/season/3.jpg", alt: "Season 3" },
];

const Season = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      if (containerRef.current) {
        const container = containerRef.current;
        const slideWidth = container.clientWidth;
        index = (index + 1) % seasonImages.length;
        container.scrollTo({
          left: slideWidth * index,
          behavior: "smooth",
        });
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="season__container">
      <div className="season__lines">
        <img
          className="season__line"
          src="/icons/line-1.svg"
          alt="Season Line 1"
        />
        <img
          className="season__line"
          src="/icons/line-2.svg"
          alt="Season Line 2"
        />
      </div>
      <div className="season__content">
        <h1 className="season__title">SEASONAL FAVOURITES</h1>
        <div className="season__images" ref={containerRef}>
          {seasonImages.map((img, idx) => (
            <div className="season__image__container" key={idx}>
              <img src={img.src} alt={img.alt} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Season;
