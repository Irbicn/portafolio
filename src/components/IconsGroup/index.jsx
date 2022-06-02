import React from "react";
import "./IconsGroup.scss";
import { Icon } from "comp/Icon";

const Links = {
  github: "https://github.com/irbicn",
  linkedin: "https://linkedin.com/in/irbicn",
};
function IconsGroup({ mode }) {
  return (
    <div className={`I-G ${mode}`}>
      <a
        href={Links.github}
        className="Icons--icon"
        target="_blank"
        rel="noreferrer"
      >
        <Icon mode={mode} icon="github" />
      </a>
      <a
        href={Links.linkedin}
        className="Icons-icon"
        target="_blank"
        rel="noreferrer"
      >
        <Icon mode={mode} icon="linkedin" />
      </a>
    </div>
  );
}
export { IconsGroup };
