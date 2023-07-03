import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import routes from './route';
import Layout from './pages/User/layout';

function App() {
  return (
    <Layout>
      <Router>
        <Routes>
          {routes.map((route: any, index: any) => {
            if(route.isAuth) {
              if(localStorage.getItem("isLogin")) {
                return <Route key={index} {...route} />
              } else {
                return <Route key={index} path={route.path} element={<Navigate to="/login" replace />} />;
              }
            } else {
              if(route.path === "/login" && localStorage.getItem("isLogin")) {
                return <Route key={index} path={route.path} element={<Navigate to="/profile" replace />} />;
              } else {
                return <Route key={index} {...route} />
              }
            }
            }
          )}
        </Routes>
      </Router>
    </Layout>
  );
}

export default App;
