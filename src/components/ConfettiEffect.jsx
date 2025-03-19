const ConfettiEffect = ({ isActive, colors = ['#3b82f6', '#14b8a6', '#6366f1', '#8b5cf6'] }) => {
  if (!isActive) return null;

  const confettiPieces = Array.from({ length: 50 }).map((_, index) => {
    const x = (Math.random() - 0.5) * 150; // Reducido el rango para concentrar más
    const y = (Math.random() - 0.5) * 150; // Reducido el rango para concentrar más
    const finalX = x * 1.5; // Reducido el factor de expansión
    const finalY = y * 1.5; // Reducido el factor de expansión
    const rotation = Math.random() * 360;
    const finalRotation = rotation + Math.random() * 360;
    const color = colors[Math.floor(Math.random() * colors.length)];

    return (
      <div
        key={index}
        className="absolute w-2 h-2 rounded-full animate-confetti"
        style={{
          backgroundColor: color,
          left: '50%',
          top: '50%',
          '--x': `${x}px`,
          '--y': `${y}px`,
          '--final-x': `${finalX}px`,
          '--final-y': `${finalY}px`,
          '--rotation': `${rotation}deg`,
          '--final-rotation': `${finalRotation}deg`,
        }}
      />
    );
  });

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div className="relative w-full h-full">
        {confettiPieces}
      </div>
    </div>
  );
};

export default ConfettiEffect;