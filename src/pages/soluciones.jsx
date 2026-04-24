import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const soluciones = [
  {
    tag: "Fundacional",
    title: "Construir proyectos reales",
    desc: "Elige un problema que conozcas y construye una solución. No importa si es pequeño, importa que sea tuyo.",
  },
  {
    tag: "Visibilidad",
    title: "Subir todo a GitHub",
    desc: "Cada commit cuenta una historia. Un historial activo demuestra consistencia y progreso a reclutadores.",
  },
  {
    tag: "Marca personal",
    title: "Crear un portafolio",
    desc: "Una página simple con tus proyectos y descripción de lo que haces vale más que cien certificados.",
  },
  {
    tag: "Disciplina",
    title: "Practicar todos los días",
    desc: "No necesitas horas. 30 minutos diarios de código real construyen más en 6 meses que un curso intensivo.",
  },
];

export default function Soluciones() {
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
        <p className="section-label fade-in-up">El camino</p>
        <h2 className="fade-in-up">Soluciones</h2>
        <p className="section-intro fade-in-up">
          No hay atajos, pero sí hay un camino claro. Estas cuatro prácticas
          separan a los developers que consiguen empleo de los que siguen buscando.
        </p>

        <div className="card-grid fade-in-up">
          {soluciones.map((sol, i) => (
            <div className="card" key={i}>
              <div className="card-number">0{i + 1}</div>
              <div className="card-text">{sol.title}</div>
              <p style={{ marginTop: "0.6rem", fontSize: "0.875rem", fontWeight: 300, color: "var(--text-muted)", lineHeight: 1.65 }}>
                {sol.desc}
              </p>
              <span className="card-tag">{sol.tag}</span>
            </div>
          ))}
        </div>

        <div className="fade-in-up" style={{ marginTop: "3rem", padding: "2rem", border: "1px solid var(--border-hover)", borderRadius: "8px", background: "rgba(232,201,126,0.04)" }}>
          <p style={{ fontFamily: "var(--serif)", fontSize: "1.3rem", color: "var(--text-primary)", lineHeight: 1.4, marginBottom: "1.25rem" }}>
            "El mejor momento para empezar a construir fue ayer.<br />
            El segundo mejor momento es <em>hoy</em>."
          </p>
          <Link to="/errores" className="btn btn-outline" style={{ display: "inline-flex" }}>
            Revisa los errores a evitar
          </Link>
        </div>
      </section>
    </div>
  );
}
