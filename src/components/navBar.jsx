import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const { pathname } = useLocation();

  const links = [
    { to: "/", label: "Inicio" },
    { to: "/problema", label: "Problema" },
    { to: "/errores", label: "Errores" },
    { to: "/soluciones", label: "Soluciones" },
  ];

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        <span className="navbar-brand-primary">Dev</span>
        <span className="navbar-brand-accent">Reality</span>
      </Link>

      <ul>
        {links.map(({ to, label }) => (
          <li key={to}>
            <Link
              to={to}
              style={pathname === to ? { color: "#e8c97e" } : {}}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
