import "./App.css";
import { Routes, Route, NavLink } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> React Routing </h1>
        <div>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/login">Login</NavLink>
          <br />
        </div>
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
