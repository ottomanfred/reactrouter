import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <NavLink to="/blue">Blue</NavLink>
      <NavLink to="/red">Red</NavLink>
      <NavLink to="/">Home</NavLink>
    </nav>
  );
}