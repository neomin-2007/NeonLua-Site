import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

/**
 * NEON LUA - Image Carousel Component
 * Design: Cyberpunk Neon Futurista
 * Carrossel automático de imagens com navegação manual
 */

interface ImageCarouselProps {
  images: string[];
  autoPlayInterval?: number;
  showControls?: boolean;
}

export default function ImageCarousel({
  images,
  autoPlayInterval = 5000,
  showControls = true,
}: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  // Auto-play
  useEffect(() => {
    if (!isAutoPlay || images.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [isAutoPlay, images.length, autoPlayInterval]);

  const handlePrevious = () => {
    setIsAutoPlay(false);
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setIsAutoPlay(false);
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handleDotClick = (index: number) => {
    setIsAutoPlay(false);
    setCurrentIndex(index);
  };

  if (images.length === 0) {
    return (
      <div className="w-full h-96 rounded-lg bg-card border-2 border-dashed border-primary/50 flex items-center justify-center">
        <p className="text-muted-foreground">Nenhuma imagem disponível</p>
      </div>
    );
  }

  return (
    <div className="relative w-full group">
      {/* Main Carousel Container */}
      <div className="relative w-full overflow-hidden rounded-lg neon-border bg-background/50">
        {/* Images */}
        <div className="relative w-full h-96 md:h-[500px]">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                index === currentIndex
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-95"
              }`}
            >
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
            </div>
          ))}
        </div>

        {/* Navigation Controls */}
        {showControls && images.length > 1 && (
          <>
            {/* Previous Button */}
            <button
              onClick={handlePrevious}
              onMouseEnter={() => setIsAutoPlay(false)}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-primary/20 border border-primary/50 text-primary hover:bg-primary/40 hover:neon-border transition-all duration-300 opacity-0 group-hover:opacity-100"
              aria-label="Imagem anterior"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Next Button */}
            <button
              onClick={handleNext}
              onMouseEnter={() => setIsAutoPlay(false)}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-primary/20 border border-primary/50 text-primary hover:bg-primary/40 hover:neon-border transition-all duration-300 opacity-0 group-hover:opacity-100"
              aria-label="Próxima imagem"
            >
              <ChevronRight size={24} />
            </button>

            {/* Dot Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-primary w-8 neon-glow"
                      : "bg-primary/40 hover:bg-primary/60"
                  }`}
                  aria-label={`Ir para slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Image Counter */}
            <div className="absolute top-4 right-4 z-20 px-3 py-1 rounded-full bg-background/60 border border-primary/30 text-sm text-primary font-semibold">
              {currentIndex + 1} / {images.length}
            </div>
          </>
        )}
      </div>

      {/* Auto-play Indicator */}
      <div className="mt-4 flex items-center justify-center gap-2">
        <button
          onClick={() => setIsAutoPlay(!isAutoPlay)}
          className={`px-4 py-2 rounded-lg border transition-all duration-300 text-sm font-semibold ${
            isAutoPlay
              ? "bg-primary/20 border-primary/50 text-primary neon-glow"
              : "bg-card border-border text-muted-foreground hover:border-primary/50"
          }`}
        >
          {isAutoPlay ? "▶ Auto" : "⏸ Pausado"}
        </button>
      </div>
    </div>
  );
}
