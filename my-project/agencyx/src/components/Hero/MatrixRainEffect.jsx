'use client';

import { useEffect, useRef } from 'react';

export default function MatrixRainEffect() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const fontSize = 10;

    function setCanvasSize() {
      if (!canvas || !canvas.parentElement) return false;
      const w = canvas.parentElement.offsetWidth;
      const h = canvas.parentElement.offsetHeight;
      if (w > 0 && h > 0) {
        canvas.width = w;
        canvas.height = h;
        return true;
      }
      return false;
    }

    // Canvas boyutu 0 ise, mount olana kadar tekrar dene
    function ensureSizeAndStart() {
      if (setCanvasSize()) {
        startMatrix();
      } else {
        requestAnimationFrame(ensureSizeAndStart);
      }
    }

    let animationFrameId;
    let drops = [];
    let columns = 0;

    function startMatrix() {
      columns = Math.floor(canvas.width / fontSize);
      drops = Array.from({ length: columns }).map(() => Math.floor(Math.random() * (canvas.height / fontSize)));

      function draw() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.font = `${fontSize}px arial`;
        const colors = ['#fff', '#304a29', '#1d5c0d', '#152c45'];
        for (let i = 0; i < drops.length; i++) {
          ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];
          ctx.fillText('•', i * fontSize, drops[i] * fontSize);
          if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
          }
          drops[i]++;
        }
        // Gradyan mask
        const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
        gradient.addColorStop(0, 'rgba(0,0,0,0.1)');
        gradient.addColorStop(0.4, 'rgba(0,0,0,0.8)');
        gradient.addColorStop(1, 'rgba(0,0,0,1)');
        ctx.globalCompositeOperation = 'destination-in';
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.globalCompositeOperation = 'source-over';
        animationFrameId = requestAnimationFrame(draw);
      }
      draw();
    }

    ensureSizeAndStart();



    function applyGradientMask() {
      if (!canvas) return;
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, 'rgba(0,0,0,0.1)'); // üstte neredeyse tamamen şeffaf
      gradient.addColorStop(0.4, 'rgba(0,0,0,0.8'); // ortalara doğru yarı görünür
      gradient.addColorStop(1, 'rgba(0,0,0,1)'); // altta tam görünür
      ctx.globalCompositeOperation = 'destination-in';
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = 'source-over';
    }

    // Canvas'a sürekli efekt çiziliyorsa, animasyon loop'una inject etmeliyiz
    // 50ms'de bir gradyan uygula (veya mevcut animasyon loop'unun sonuna eklenebilir)
    const interval = setInterval(applyGradientMask, 5);
    return () => clearInterval(interval);
  }, []);

  return (
    <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block pointer-events-none shadow mx-auto z-10" />
  );
}
