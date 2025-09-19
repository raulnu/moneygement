import { NavLink } from "react-router";
import styles from "./navigation.module.scss";
import type { NavigationProps } from "./navigation.d";

export default function Navigation({ isHamburgerActive }: NavigationProps) {
  return (
    <nav
      className={`${styles.navigator} ${isHamburgerActive ? styles["navigator--active"] : ""}`}
    >
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? styles["navlink--active"] : ""
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/expenses"
        className={({ isActive }) =>
          isActive ? styles["navlink--active"] : ""
        }
      >
        Expenses
      </NavLink>
      <NavLink
        to="/categories"
        className={({ isActive }) =>
          isActive ? styles["navlink--active"] : ""
        }
      >
        Categories
      </NavLink>
      <NavLink
        to="/statistics"
        className={({ isActive }) =>
          isActive ? styles["navlink--active"] : ""
        }
      >
        Statistics
      </NavLink>
      <NavLink
        to="/settings"
        className={({ isActive }) =>
          isActive ? styles["navlink--active"] : ""
        }
      >
        Settings
      </NavLink>
    </nav>
  );
}
