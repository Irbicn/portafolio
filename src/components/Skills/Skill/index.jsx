import React from "react";
import { Icon } from "comp/Icon";

const SkillsList = {
  html5: [
    "etiquetas",
    "semantica",
    "modelo de caja",
    "posicionamiento",
    "selectores",
    "flexbox - grid",
  ],
  css3: [
    "propiedades y selectores",
    "responsive design",
    "variables",
    "media queries",
  ],
  javascript: [
    "objetos",
    "Scope",
    "closure",
    "POO",
    "abstraccion",
    "encapsulamiento",
    "herencia",
    "polimorfismo",
    "asincronismo",
    "callbacks, promesas y Async/await",
    "manipulacion del DOM",
    "consumo de APIs con AJAX y Fetch ",
    "web Components",
    "estructuras de datos",
    "manejo de estructuras de datos lineales y no lineales",
  ],
  react: [
    "componentes, elementos y etiquetas",
    "React hooks",
    "patrones Render props y HOCs",
    "Composicion de componentes",
  ],
};
function Skill({ skill, view, onView}) {
  return (
    <li className="Skill" >
      <h2>{skill}</h2>
      <div className={`details ${view}`}>
        {SkillsList[skill.toLowerCase()].map((k) => (
          <p key={k}>{k}</p>
        ))}
      </div>
      <span className={`detailsBtn ${view}`} onClick={onView(view ? -1 : skill)}>
        <Icon icon="down" />
      </span>
    </li>
  );
}
export { Skill };
