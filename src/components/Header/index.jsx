import React from "react";
import "./Header.scss";
import { Button } from "../Button";
import { Icon } from "../Icon";
function Header({ mode, children, toggleMode }) {
  return (
    <header className={`Header ${mode}`}>
      <p>Irbicn</p>
      {children}
      <Button type="mode" mode={mode} onClick={toggleMode}>
        {mode == "light" && <Icon icon="sun" />}
        {mode == "dark" && <Icon icon="moon" />}
      </Button>
    </header>
  );
}

export { Header };
