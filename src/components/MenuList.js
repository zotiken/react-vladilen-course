import * as React from "react";
import classes from "./MenuList.module.scss";
import { NavLink } from "react-router-dom";

const links = [
  { to: "/quizList", label: "Список", exact: true },
  { to: "/quizcreate", label: "Создать", exact: false },
  { to: "/auth", label: "Авторизация", exact: false }
];
export const MenuList = ({ state, onClickHAndler }) => {
  let cls = [classes.menuList];
  if (state) {
    cls = [...cls, classes.active];
  }

  const renderLinkList = () => {
    return links.map((link, i) => (
      <li key={i}>
        <NavLink
          className={classes.Link}
          exact={link.exact}
          to={link.to}
          children={link.label}
          activeClassName={classes.activeLink}
          onClick={onClickHAndler}
        >
        </NavLink>
      </li>
    ));
  };
  return (
    <div className={cls.join(" ")}>
      <ul>{renderLinkList()}</ul>
    </div>
  );
};
export default MenuList;
