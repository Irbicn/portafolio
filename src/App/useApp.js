import { useState } from "react";

function useApp() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
    } else {
      setMode("light");
    }
  };
  return { mode, toggleMode };
}

export default useApp;
