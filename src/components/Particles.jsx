import "./Particles.css";

function Particles() {
  return (
    <div className="particles-background">
      {Array.from({ length: 45 }).map((_, index) => (
        <span
          key={index}
          className="particle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 8}s`,
            animationDuration: `${5 + Math.random() * 8}s`,
          }}
        />
      ))}
    </div>
  );
}

export default Particles;