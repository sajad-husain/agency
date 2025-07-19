'use client';

import { useEffect, useRef } from 'react';

export default function MatrixRainEffect() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    function resizeCanvas() {
      canvas.width = canvas.parentElement.offsetWidth;
      canvas.height = canvas.parentElement.offsetHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const matrix = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}".split(''); // Sadece sayılar
    const fontSize = 3;
    let columns = Math.floor(canvas.width / fontSize);
    let drops = Array.from({ length: columns }).map(() => Math.floor(Math.random() * (canvas.height / fontSize)));

    function draw() {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px arial`;
      const colors = ['#fff', '#b8ffb0', '#2a9c22', '#108708']; // beyaz, açık yeşil, yeşil, koyu yeşil

      for (let i = 0; i < drops.length; i++) {
        ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];
        ctx.fillText(matrix[Math.floor(Math.random() * matrix.length)], i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    }

    let interval = setInterval(draw, 20);

    function handleResize() {
      resizeCanvas();
      columns = Math.floor(canvas.width / fontSize);
      drops = Array.from({ length: columns }).map(() => Math.floor(Math.random() * (canvas.height / fontSize)));
    }

    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block z-0 pointer-events-none shadow mx-auto " />
  );
}
