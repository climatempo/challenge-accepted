import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { LocationInfo } from "../pages/Location";
import { NotFound } from "../pages/NotFound";

type routesType = {
  path: string;
  component: JSX.Element;
};

export function MainRoutes() {
  const routes: routesType[] = [
    {
      path: "/",
      component: <Home />,
    },
    {
      path: "/weather/:id",
      component: <LocationInfo />,
    },
    {
      path: "*",
      component: <NotFound />,
    },
  ];
  return (
    <Routes>
      {routes.map(({ path, component }) => (
        <Route path={path} element={component} key={path} />
      ))}
    </Routes>
  );
}
