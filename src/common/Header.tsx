import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary bg-dark text-white navbar-dark"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <NavLink to={"/"} className="navbar-brand">
          Reforzamiento
        </NavLink>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink
              to={"typescript"}
              className={(isActive) => `nav-link ${isActive ? "active" : ""}`}
            >
              TypeScript
            </NavLink>
            <NavLink
              className={(isActive) =>
                `nav-link ${isActive ? "active" : "disabled"}`
              }
              to={"hooks"}
            >
              Hooks
            </NavLink>
            <NavLink
              className={(isActive) => `nav-link ${isActive ? "active" : ""}`}
              to={"default"}
            >
              Default
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}
