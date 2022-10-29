import { Routes, Route } from "react-router-dom";
import routes from "./routes";

function MainRoutes() {
  return (
    <Routes>
      {routes.map(({ path, component }) => (
        <Route path={path} element={component} key={path} />
      ))}
    </Routes>
  );
}

export default MainRoutes;
