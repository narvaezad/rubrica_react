import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-brand">
        Dev<span>Reality</span>
      </div>

      <ul className="footer-links">
        <li><Link to="/problema">Problema</Link></li>
        <li><Link to="/errores">Errores</Link></li>
        <li><Link to="/soluciones">Soluciones</Link></li>
      </ul>
    </footer>
  );
}
