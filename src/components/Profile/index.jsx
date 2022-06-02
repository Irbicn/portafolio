import React from "react";
import { Button } from "comp/Button";
import { IconsGroup } from "comp/IconsGroup";
import "./Profile.scss";

function Profile({ device, mode }) {
  return (
    <div className={`Profile ${device}`}>
      <div className="P-img">
        <img
          src="https://i.postimg.cc/q7vdvwjp/perfil.png"
          className="P--img"
          alt="Mi imagen"
        />
      </div>
      <div className="P-text">
        <h1>Irbicn Robles</h1>
        <h2>Frontend Developer</h2>
        <p className="text">
          Me especializ&oacute; en Tencnolog&iacute;as de Frontend.
        </p>
        <div className="button-container">
          <Button type="resume" mode={mode} />
          <IconsGroup mode={mode} />
        </div>
      </div>
    </div>
  );
}
export { Profile };
