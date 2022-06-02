import React from "react";
import { Icon } from "../Icon";
import "./Button.scss";

const buttonTypes = {
  resume: ({ mode, type }) => (
    <a href="../../files/Irbicn_Robles-CV.pdf" download="si">
      <button type="button" className={`Button ${mode} ${type}`}>
        Descargar CV <Icon icon="download" mode={mode} />
      </button>
    </a>
  ),
  mode: ({ type, mode, children, onClick }) => (
    <button
      type="button"
      className={`Button ${type} ${mode}`}
      onClick={onClick}
    >
      {children}
    </button>
  ),
};
function Button({ type, mode, children, onClick }) {
  return buttonTypes[type]({ type, mode, children, onClick });
}
export { Button };
