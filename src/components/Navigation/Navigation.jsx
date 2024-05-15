import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import { clsx } from "clsx";

export default function Navigation() {
  const changeActivePage = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };

  return (
    <nav className={css.nav}>
      <ul className={css.navList}>
        <li>
          <NavLink className={changeActivePage} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={changeActivePage} to="/contacts">
            Contacts
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
