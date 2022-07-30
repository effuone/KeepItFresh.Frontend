import React from "react";
import useBem from "../../../hooks/useBem";
import { generatePath, Link, NavLink } from "react-router-dom";
import {
  ROUTE_ROOT,
  ROUTE_NOT_FOUND,
  ROUTE_SUBSCRIPTION,
  ROUTE_LOGIN, ROUTE_REGSITER
} from "../../../routes";
import { useSelector } from "../../../hooks/useSelector";
import ContentContainer from "../ContentContainer";

import "./Header.scss";

export default function Header() {
  const { bemBlock, bemElement } = useBem("Header");

  const isAuthorizedUser = useSelector((state) => state.auth.isLoggedIn);

  return (
    <header className={bemBlock()}>
      <ContentContainer className={bemElement("content-container")}>

        {isAuthorizedUser ? (
          <NavLink to={ROUTE_NOT_FOUND}>Profile</NavLink>
        ) : (
          <div className={bemElement("auth-routes-container")}>
            <Link to={ROUTE_LOGIN}>
              Войти
            </Link>
            <Link to={ROUTE_REGSITER}>
              Регистрация
            </Link>
          </div>
        )}
        <div className={bemElement("logo-container")}>
          <Link to={generatePath(ROUTE_ROOT, {page: '1'})}>
            <img src="/logos/keepitfresh.png" alt="one-family-logo" />
          </Link>
        </div>
        <div className={bemElement("routes-container")}>
          <NavLink className={bemElement("link")} to={ROUTE_ROOT}>
            <img src="/images/kosmetikaRoute.svg" alt="one-family-logo" />
          </NavLink>
          <NavLink className={bemElement("link")} to={ROUTE_SUBSCRIPTION}>
            <img src="/images/Katalog.svg" alt="one-family-logo" />
          </NavLink>
        </div>
      </ContentContainer>
    </header>
  );
}
