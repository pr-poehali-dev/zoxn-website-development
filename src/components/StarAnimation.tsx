import { useEffect, useState } from "react";

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
}

export const StarAnimation = () => {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    // Создаем начальные звезды
    const initialStars = Array.from({ length: 20 }, (_, i) => createStar(i));
    setStars(initialStars);

    // Анимация звезд
    const interval = setInterval(() => {
      setStars(prevStars => 
        prevStars.map(star => {
          const updatedStar = {
            ...star,
            x: star.x - star.speed,
            opacity: star.x < window.innerWidth * 0.8 ? star.opacity - 0.005 : star.opacity
          };
          
          // Если звезда вышла за пределы экрана или стала прозрачной, создаем новую
          if (updatedStar.x < -50 || updatedStar.opacity <= 0) {
            return createStar(star.id);
          }
          
          return updatedStar;
        })
      );
    }, 30);

    return () => clearInterval(interval);
  }, []);

  // Функция для создания новой звезды
  const createStar = (id: number): Star => ({
    id,
    x: window.innerWidth + Math.random() * 100,
    y: Math.random() * window.innerHeight,
    size: 10 + Math.random() * 15,
    speed: 1 + Math.random() * 3,
    opacity: 0.5 + Math.random() * 0.5
  });

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {stars.map(star => (
        <div
          key={star.id}
          className="absolute"
          style={{
            left: `${star.x}px`,
            top: `${star.y}px`,
            opacity: star.opacity,
            transform: `rotate(${star.id * 45}deg)`,
            transition: 'opacity 0.3s ease-out'
          }}
        >
          <svg
            width={star.size}
            height={star.size}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 0L14.59 8.41L23 12L14.59 15.59L12 24L9.41 15.59L1 12L9.41 8.41L12 0Z"
              fill="#EA384C"
            />
          </svg>
        </div>
      ))}
    </div>
  );
};

export default StarAnimation;
