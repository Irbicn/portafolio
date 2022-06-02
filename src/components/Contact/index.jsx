import React from "react";
import "./Contact.scss";
import { Icon } from "comp/Icon";

function Contact({ mode }) {
  return (
    <div className={`Contact ${mode}`}>
      <h2>Contactame</h2>
      <div className="info">
        <Icon mode={mode} icon="phone" />
        <h3>
          Numero <br /> <p>+54 2281357622 </p>
        </h3>
      </div>
      <div className="info">
        <Icon mode={mode} icon="mail" />
        <h3>
          Email
          <br /> <p>irbicn.r@gmail.com</p>
        </h3>
      </div>
      <div className="info">
        <Icon mode={mode} icon="location" />
        <h3>
          Locacion
          <br /> <p>Tandil, Buenos Aires Argentina </p>
        </h3>
      </div>
    </div>
  );
}
export { Contact };
