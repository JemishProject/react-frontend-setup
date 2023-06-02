import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import routes from './route';
import Layout from './components/layout';

function App() {
  return (
    <Layout>
      <Router>
        <Routes>
          {routes.map((route, index) => {
            if(route.isAuth) {
              return <Route key={index} {...route} element={localStorage.getItem("isLogin") ? route.element :  <Navigate to="/login" replace />} />;
            } else {
              return <Route key={index} {...route} element={(route.path === "/login" && localStorage.getItem("isLogin")) ? <Navigate to="/profile" replace /> : route.element} />
            }
            }
          )}
        </Routes>
      </Router>
    </Layout>
  );
}

export default App;
