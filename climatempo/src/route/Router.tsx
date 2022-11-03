import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import PrivateRoute from "../privateRouter/PrivateRouter";

function RouterPages() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/Home"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default RouterPages;
