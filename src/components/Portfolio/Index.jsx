import React from "react";
import "./Portfolio.scss";
import { Project } from "./Project";

function Portfolio({ PortfolioList, mode }) {
  return (
    <div className="P">
      <h2>Portafolio</h2>
      <div className="Portfolio">
        {PortfolioList.map((item) => (
          <Project key={item.name} mode={mode}>
            <img />
            <div>
              <h3>{item.name}</h3>
              <div className="topics">
                {item.topics.map((topic) => (
                  <div key={item.name + topic.name} className={topic.class}>
                    <p>{topic.name}</p>
                  </div>
                ))}
              </div>
              <div className="buttons">
                <button type="button">ver</button>
                <button type="button">github</button>
              </div>
              <p>{item.description}</p>
            </div>
          </Project>
        ))}
      </div>
    </div>
  );
}
export { Portfolio };
