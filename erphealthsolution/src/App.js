import React from "react";
import { Routes, Route } from "react-router-dom";
import routes from "./routes/index";
const App = () => {
  return (
    <>
      <Routes>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={<route.component />}
          ></Route>
        ))}
      </Routes>
    </>
  );
};

export default App;
