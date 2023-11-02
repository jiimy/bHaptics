import cls from "classnames";
import { useState } from "react";
import { Link } from "react-router-dom";
import s from "./header.module.scss";

const Header = () => {
  const [nav, setNav] = useState(0);

  return (
    <div className={s.header}>
      <div className={s.logo} />
      <div className={s.menu}>
        <ul>
          <li
            onClick={() => setNav(0)}
            className={cls("", {
              [s.is_active]: nav === 0,
            })}
          >
            <Link to="">TactSuit</Link>
          </li>
          <li
            onClick={() => setNav(1)}
            className={cls("", {
              [s.is_active]: nav === 1,
            })}
          >
            <Link to="">Compatibility</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
