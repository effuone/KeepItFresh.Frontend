import * as React from "react";
import IndexPage from "./IndexPage";
import LoginPage from "./LoginPage";
import NotFoundPage from "./NotFoundPage";
import RegisterPage from "./RegisterPage";
import ProfilePage from "./ProfilePage";
import SentimentPage from "./SentimentPage";

export interface IRouteProps {
  path: string;
  element: React.ReactNode;
  items?: IRouteProps[];
}

export const ROUTE_ROOT = "/products/:page";
export const ROUTE_NOT_FOUND = "*";
export const ROUTE_SUBSCRIPTION = "/subscription";
export const ROUTE_LOGIN = "/login";
export const ROUTE_REGSITER = "/register";
export const ROUTE_PROFILE = "/profile";
export const ROUTE_SENTIMENT = "/sentiment";

export const publicRoutes: IRouteProps[] = [
  {
    path: ROUTE_NOT_FOUND,
    element: <NotFoundPage />,
  },
  {
    path: "",
    element: <IndexPage />,
  },
  {
    path: ROUTE_ROOT,
    element: <IndexPage />,
  },
  {
    path: ROUTE_SUBSCRIPTION,
    element: <NotFoundPage />,
  },
  {
    path: ROUTE_LOGIN,
    element: <LoginPage />,
  },
  {
    path: ROUTE_REGSITER,
    element: <RegisterPage />,
  },
  {
    path: ROUTE_PROFILE,
    element: <ProfilePage />,
  },
  {
    path: ROUTE_SENTIMENT,
    element: <SentimentPage />,
  },
];
