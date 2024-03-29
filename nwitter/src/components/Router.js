import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Auth from "routes/Auth";
import Home from "routes/Home";

function AppRouter({ isLoggedIn }) {
  return (
    <Router>
      <Routes>
        {isLoggedIn ? (
          <>
            <Route exact={true} path={"/"} element={<Home />} />
          </>
        ) : (
          <Route exact={true} path={"/"} element={<Auth />} />
        )}
      </Routes>
    </Router>
  );
}

export default AppRouter;
