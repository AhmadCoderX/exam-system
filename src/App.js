import React from "react";
import "./App.css";
import routes from "./routes";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const renderRoutes = (routes) => (
    <Routes>
      {routes.map((route, index) => (
        <Route key={index} path={route.path} element={<route.component />}>
          {route.children &&
            route.children.map((childRoute, childIndex) => (
              <Route
                key={childIndex}
                path={childRoute.path}
                element={<childRoute.component />}
              />
            ))}
        </Route>
      ))}
    </Routes>
  );
  return <Router>{renderRoutes(routes)}</Router>;
}

export default App;
