import { useEffect, useRef } from "react";

export default function Problema() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.15 }
    );

    ref.current?.querySelectorAll(".fade-in-up").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref}>
      <section className="section">
        <p className="section-label fade-in-up">El diagnóstico</p>
        <h2 className="fade-in-up">El problema real</h2>
        <p className="section-intro fade-in-up">
          No es falta de talento ni de dedicación. Es una brecha entre
          lo que enseñan los cursos y lo que el mercado laboral exige.
        </p>

        <div className="problema-block fade-in-up">
          <div className="problema-accent-line" />
          <p className="problema-body">
            Muchas personas invierten meses aprendiendo programación con
            cursos en línea, bootcamps o tutoriales de YouTube. Terminan
            sabiendo <strong>sintaxis</strong> y <strong>conceptos teóricos</strong>,
            pero sin la capacidad de demostrar ese conocimiento en un
            entorno profesional real.
            <br /><br />
            El mercado no contrata a quienes saben programar en teoría.
            Contrata a quienes <strong>han demostrado que pueden construir</strong>,
            colaborar y resolver problemas con código.
          </p>
        </div>

        <div className="stat-row fade-in-up">
          <div className="stat-item">
            <div className="stat-number">73%</div>
            <div className="stat-label">de developers junior no tienen<br />proyectos propios en su portafolio</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">6+</div>
            <div className="stat-label">meses en promedio buscando<br />primer empleo sin proyectos</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">3×</div>
            <div className="stat-label">más probabilidad de entrevista<br />con portafolio activo en GitHub</div>
          </div>
        </div>
      </section>
    </div>
  );
}
