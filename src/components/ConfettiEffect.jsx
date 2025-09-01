const ConfettiEffect = ({ isActive, colors = ['#3b82f6', '#14b8a6', '#6366f1', '#8b5cf6'], origin = { x: window.innerWidth / 2, y: window.innerHeight / 2 } }) => {
  if (!isActive) return null;

  const confettiPieces = Array.from({ length: 200 }).map((_, index) => {
    const angle = (Math.random() * 360) * (Math.PI / 180);
    // Aumentamos la velocidad y distancia para mayor dispersión
    const velocity = Math.random() * 50 + 30;
    const distance = Math.random() * window.innerWidth * 0.8; // Usar hasta el 80% del ancho de la pantalla

    const finalX = Math.cos(angle) * distance;
    const finalY = Math.sin(angle) * distance;
    
    const rotation = Math.random() * 360;
    const finalRotation = rotation + Math.random() * 1080; // 3 rotaciones completas
    const color = colors[Math.floor(Math.random() * colors.length)];
    const scale = Math.random() * 2 + 0.5; // Mayor variación en el tamaño
    const size = Math.random() * 10 + 4; // Tamaños entre 4px y 14px

    return (
      <div
        key={index}
        className="absolute animate-confetti"
        style={{
          backgroundColor: color,
          width: `${size}px`,
          height: `${size}px`,
          borderRadius: Math.random() > 0.5 ? '50%' : '2px', // Mezcla de círculos y cuadrados
          left: `${origin.x}px`,
          top: `${origin.y}px`,
          '--final-x': `${finalX}px`,
          '--final-y': `${finalY}px`,
          '--rotation': `${rotation}deg`,
          '--final-rotation': `${finalRotation}deg`,
          transform: `scale(${scale})`,
          opacity: Math.random() * 0.5 + 0.5, // Variación en la opacidad
        }}
      />
    );
  });

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-[9999]">
      {confettiPieces}
    </div>
  );
};

export default ConfettiEffect;