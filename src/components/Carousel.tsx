import React, { useState, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselItem {
  title: string;
  description: string;
  imageUrl: string;
  alt: string;
}

const carouselItems: CarouselItem[] = [
  {
    title: '"No caería en jugadores puntuales"',
    description: "",
    imageUrl: "./src/assets/lucas-pusineri.jpg",
    alt: "lucas pusineri",
  },
  {
    title: "Comenzar la semana cabeza arriba",
    description: "",
    imageUrl: "./src/assets/entrenamiento.webp",
    alt: "lucas pusineri",
  },
];

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
    );
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1
    );
  }, []);

  return (
    <div className="relative w-full mx-auto overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {carouselItems.map((item, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0 flex items-center bg-white relative"
          >
            <div className="flex flex-col md:flex-row items-center gap-8 w-full">
              <div className="w-full relative">
                <a href="#">
                  <h2 className="text-3xl md:text-5xl hover:text-gray-100 z-10 text-center font-bold absolute top-3/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4 text-white md:underline sm:no-underline">
                    {item.title}
                  </h2>
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-[400px] sm:h-[500px] object-cover object-top brightness-75"
                  />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all"
      >
        <ChevronLeft className="w-6 h-6 text-gray-800" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all"
      >
        <ChevronRight className="w-6 h-6 text-gray-800" />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {carouselItems.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              currentIndex === index ? "bg-gray-800 w-4" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
