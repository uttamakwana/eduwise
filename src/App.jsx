import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import { useEffect, useState } from "react";
import AllRoutes from "./pages/Routes/AllRoutes";

function App() {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    if (theme === "light") {
      document.documentElement.style.setProperty("--sixty-pr-color", "#fff2e1");
      document.documentElement.style.setProperty(
        "--thirty-pr-color",
        "#2b4560"
      );
      document.documentElement.style.setProperty("--ten-pr-color", "#2f6d80");
    } else {
      document.documentElement.style.setProperty("--sixty-pr-color", "#000");
      document.documentElement.style.setProperty("--thirty-pr-color", "#fff");
      document.documentElement.style.setProperty("--ten-pr-color", "#8E05C2");
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
