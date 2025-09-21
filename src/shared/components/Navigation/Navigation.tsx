import { NavLink } from "react-router";
import styles from "./navigation.module.scss";
import type { NavigationProps } from "./navigation.d";
import { componentRoutes, type IRoute } from "../../constants/routes";

export default function Navigation({
  isHamburgerActive,
  toggleHamburger,
}: NavigationProps) {
  return (
    <nav
      className={`${styles.navigator} ${isHamburgerActive ? styles["navigator--active"] : ""}`}
    >
      {componentRoutes.slice(0, -1).map(({ name, path }: IRoute, index) => {
        return (
          <NavLink
            to={path}
            className={({ isActive }) =>
              isActive ? styles["navlink--active"] : ""
            }
            onClick={toggleHamburger}
            key={index}
          >
            {name}
          </NavLink>
        );
      })}
    </nav>
  );
}
