import React from "react";
import useBem from "../../../hooks/useBem";
import { generatePath, Link, NavLink } from "react-router-dom";
import {
  ROUTE_ROOT,
  ROUTE_NOT_FOUND,
  ROUTE_SUBSCRIPTION,
  ROUTE_LOGIN,
  ROUTE_REGSITER,
  ROUTE_PROFILE,
  ROUTE_SENTIMENT,
  ROUTE_PRODUCTS,
} from "../../../routes";
import { useSelector } from "../../../hooks/useSelector";
import ContentContainer from "../ContentContainer";

import "./Header.scss";

export default function Header() {
  const { bemBlock, bemElement } = useBem("Header");

  const isAuthorizedUser = useSelector((state) => state.auth.isLoggedIn);

  function Logout() {
    localStorage.removeItem("user");
    window.location.reload();
  }

  return (
    <header className={bemBlock()}>
      <ContentContainer className={bemElement("content-container")}>
        {isAuthorizedUser ? (
          <div>
            <NavLink to={ROUTE_PROFILE} style={{ marginRight: "20px" }}>
              Profile
            </NavLink>
            <NavLink
              to={ROUTE_LOGIN}
              onClick={() => Logout()}
              style={{ marginRight: "20px" }}
            >
              Logout
            </NavLink>
            <NavLink to={ROUTE_SENTIMENT}>Sentiment</NavLink>
          </div>
        ) : (
          <div className={bemElement("auth-routes-container")}>
            <Link to={ROUTE_LOGIN}>Войти</Link>
            <Link to={ROUTE_REGSITER} style={{ marginRight: "20px" }}>
              Регистрация
            </Link>
            <NavLink to={ROUTE_SENTIMENT}>Sentiment</NavLink>
          </div>
        )}
        <div className={bemElement("logo-container")}>
          <Link to={generatePath(ROUTE_ROOT, { page: "1" })}>
            <img src="/logos/keepitfresh.png" alt="one-family-logo" />
          </Link>
        </div>
        <div className={bemElement("routes-container")}>
          <NavLink className={bemElement("link")} to={"products/1"}>
            <div className={bemElement("section-button")}>
              <img src="/logos/search grey.svg" alt="house_grey.svg" />
              Каталог
            </div>
          </NavLink>
          <NavLink
            className={bemElement("link")}
            to={generatePath(ROUTE_PRODUCTS, { page: "1" })}
          >
            <div className={bemElement("section-button")}>
              <img src="/logos/cosmetics_grey.svg" alt="cosmetics_grey.svg" />
              Косметичка
            </div>
          </NavLink>
        </div>
      </ContentContainer>
    </header>
  );
}
