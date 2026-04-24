import { useEffect, useRef } from "react";

const errores = [
  {
    tag: "Hábito",
    title: "Ver tutoriales sin practicar",
    desc: "Consumir contenido pasivamente da sensación de progreso sin construir habilidades reales.",
  },
  {
    tag: "Comprensión",
    title: "Copiar código sin entender",
    desc: "Stack Overflow y la IA pueden darte la respuesta, pero sin entenderla no podrás aplicarla mañana.",
  },
  {
    tag: "Evidencia",
    title: "No crear proyectos propios",
    desc: "Los ejercicios de cursos no cuentan como experiencia. Los reclutadores necesitan ver qué puedes construir.",
  },
  {
    tag: "Visibilidad",
    title: "No usar GitHub activamente",
    desc: "Tu perfil de GitHub es tu primer CV técnico. Un jardín vacío dice más de lo que crees.",
  },
];

export default function Errores() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll(".fade-in-up").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref}>
      <section className="section">
        <p className="section-label fade-in-up">Los obstáculos</p>
        <h2 className="fade-in-up">Errores comunes</h2>
        <p className="section-intro fade-in-up">
          Patrones que frenan a la mayoría de developers en su búsqueda
          de empleo, aunque a veces no los reconocemos en nosotros mismos.
        </p>

        <div className="card-grid fade-in-up">
          {errores.map((error, i) => (
            <div className="card" key={i}>
              <div className="card-number">0{i + 1}</div>
              <div className="card-text">{error.title}</div>
              <p style={{ marginTop: "0.6rem", fontSize: "0.875rem", fontWeight: 300, color: "var(--text-muted)", lineHeight: 1.65 }}>
                {error.desc}
              </p>
              <span className="card-tag">{error.tag}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
