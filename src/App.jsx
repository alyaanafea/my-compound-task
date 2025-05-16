import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);
  return (
    <>
      <BrowserRouter>
        <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          <Route
            path="/login"
            element={<Login setIsLoggedIn={setIsLoggedIn} />}
          />
          <Route
            path="/profile"
            element={
              isLoggedIn ? <Profile /> : <Login setIsLoggedIn={setIsLoggedIn} />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
