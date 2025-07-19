import React from 'react';
import './ShootingStars.css';

const ShootingStars = () => {
  // 50 yıldız için random konum, delay ve animasyon süresi
  const stars = Array.from({ length: 50 }).map(() => {
    const top = Math.random() * 100; // 0-100%
    const left = Math.random() * 100; // 0-100%
    const delay = (Math.random() * 9).toFixed(2); // 0-9s
    const duration = (7 + Math.random() * 4).toFixed(2); // 7-11s
    return { top, left, delay, duration };
  });

  return (
    <div className="stars">
      {stars.map((star, i) => (
        <div
          className="star"
          key={i}
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            animationDelay: `${star.delay}s, ${star.delay}s`,
            animationDuration: `${star.duration}s, ${star.duration}s`,
          }}
        />
      ))}
    </div>
  );
};

export default ShootingStars;
