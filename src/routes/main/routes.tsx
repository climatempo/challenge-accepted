import Home from "../../pages/Home";
import NotFound from "../../pages/NotFound";

const routes = [
  {
    path: '/',
    component: <Home />,
  },
  {
    path: '*',
    component: <NotFound />,
  }
];

export default routes;
