/* eslint-disable no-unused-vars */
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
  withRouter,
} from "react-router-dom";
import Login from "../Login-component/login";
import Register from "../Register-component/register";
import Reset from "../Reset-component/reset";
import Dashboard from "../Dashboard-component/dashboard";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/reset" element={<Reset />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
