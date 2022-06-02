import React from "react";
function Project({ children, mode }) {
  return <div className={`Project ${mode}`}>{children}</div>;
}
export { Project };
