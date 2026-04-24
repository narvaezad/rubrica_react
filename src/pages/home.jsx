import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="hero">
      <div>
        <span className="hero-eyebrow">Para devs en busca de empleo</span>

        <h1>
          Aprender a programar <em>no garantiza</em> conseguir trabajo
        </h1>

        <p className="hero-subtitle">
          El conocimiento técnico es solo la mitad de la ecuación.
          Descubre qué separa a los programadores que consiguen empleo
          de los que no.
        </p>

        <div className="hero-actions">
          <Link to="/problema" className="btn btn-primary">
            Ver el problema →
          </Link>
          <Link to="/soluciones" className="btn btn-outline">
            Ver soluciones
          </Link>
        </div>
      </div>

      <div className="hero-scroll-hint">
        <span>Scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
}
