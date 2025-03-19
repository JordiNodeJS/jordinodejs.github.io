const ConfettiEffect = ({ isActive, colors = ['#3b82f6', '#14b8a6', '#6366f1', '#8b5cf6'], origin = { x: window.innerWidth / 2, y: window.innerHeight / 2 } }) => {
  if (!isActive) return null;

  const confettiPieces = Array.from({ length: 150 }).map((_, index) => {
    const angle = (Math.random() * 360) * (Math.PI / 180);
    const velocity = Math.random() * 30 + 20;
    const distance = Math.random() * 200 + 50; // Distancia mínima de 50px

    const finalX = Math.cos(angle) * distance;
    const finalY = Math.sin(angle) * distance;
    
    const rotation = Math.random() * 360;
    const finalRotation = rotation + Math.random() * 720;
    const color = colors[Math.floor(Math.random() * colors.length)];
    const scale = Math.random() * 1.5 + 0.5;
    const size = Math.random() * 8 + 4; // Tamaño aleatorio entre 4px y 12px

    return (
      <div
        key={index}
        className="absolute animate-confetti"
        style={{
          backgroundColor: color,
          width: `${size}px`,
          height: `${size}px`,
          borderRadius: '50%',
          left: `${origin.x}px`,
          top: `${origin.y}px`,
          '--final-x': `${finalX}px`,
          '--final-y': `${finalY}px`,
          '--rotation': `${rotation}deg`,
          '--final-rotation': `${finalRotation}deg`,
          transform: `scale(${scale})`,
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