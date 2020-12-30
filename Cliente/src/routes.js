import React from "react"
import Home from './pages/Home/Home'

const routes = [
  {
    path: "/",
    exact: true,
    main: () => <Home />
  },
  {
    path: "/city/:city",
    exact: true,
    main: () => <Home />
  },
  {
    path: "*",
    main: () => <h1> 404 - Page Not Found! </h1>
  },
]

export default routes;