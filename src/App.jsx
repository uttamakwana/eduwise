import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import { useEffect, useState } from "react";
import AllRoutes from "./pages/Routes/AllRoutes";

function App() {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    if (theme === "light") {
      document.documentElement.style.setProperty("--sixty-pr-color", "#f1f1f1");
      document.documentElement.style.setProperty(
        "--thirty-pr-color",
        "#2F327D"
      );
      document.documentElement.style.setProperty("--ten-pr-color", "#545AE7");
    } else {
      document.documentElement.style.setProperty("--sixty-pr-color", "#2C1F4A");
      document.documentElement.style.setProperty("--thirty-pr-color", "#F1F1F1");
      document.documentElement.style.setProperty("--ten-pr-color", "#545AE7");
    }
  });

  return (
    <div className="app">
      <BrowserRouter>
        <AllRoutes theme={theme} setTheme={setTheme} />
      </BrowserRouter>
    </div>
  );
}

export default App;
