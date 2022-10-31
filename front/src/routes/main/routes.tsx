import Home from "../../pages/Home";
import NotFound from "../../pages/NotFound";
import Search from "../../pages/Search";
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
  {
    path: "/search",
    component: <Search />,
  },
];

export default routes;
