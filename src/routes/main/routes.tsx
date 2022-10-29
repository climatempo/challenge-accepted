import Home from "../../pages/Home";
import NotFound from "../../pages/NotFound";
import Weather from "../../pages/Weather";

const routes = [
  {
    path: "*",
    component: <NotFound />,
  },
  {
    path: "/",
    component: <Home />,
  },
  {
    path: "/weather/:id",
    component: <Weather />,
  },
];

export default routes;
