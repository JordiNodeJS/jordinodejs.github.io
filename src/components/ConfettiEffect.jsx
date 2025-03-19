const ConfettiEffect = ({ isActive, colors = ['#3b82f6', '#14b8a6', '#6366f1', '#8b5cf6'] }) => {
  if (!isActive) return null;

  const confettiPieces = Array.from({ length: 100 }).map((_, index) => {
    const x = (Math.random() - 0.5) * window.innerWidth;
    const y = (Math.random() - 0.5) * window.innerHeight;
    const finalX = x * 2;
    const finalY = y * 2;
    const rotation = Math.random() * 360;
    const finalRotation = rotation + Math.random() * 720;
    const color = colors[Math.floor(Math.random() * colors.length)];
    const scale = Math.random() * 2 + 1;

    return (
      <div
        key={index}
        className="fixed w-2 h-2 rounded-full animate-[confetti-explosion_0.8s_ease-out_forwards]"
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
          transform: `scale(${scale})`,
        }}
      />
    );
  });

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-[9999]">
      <div className="relative w-full h-full">
        {confettiPieces}
      </div>
    </div>
  );
};

export default ConfettiEffect;