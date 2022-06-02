import React, {useState} from "react";
import { Contact } from "comp/Contact";
import { Icon } from "comp/Icon";
import { Skill } from "./Skill";
import "./Skills.scss";

const SkillNames = ["HTML5", "CSS3", "JavaScript", "React"];

function Skills({ mode }) {
  const [openSkill, setOpenSkill] = useState(-1);
  const handleView = (name)=>()=>{
    const idx = SkillNames.indexOf(name);
    setOpenSkill(idx);
  }
  return (
    <React.Fragment>
      <section className="Skills-container">
        <div>
          <ul className={`Skills ${mode}`}>
            <div className="title">
              <Icon icon="code" mode={mode} />
              <h3>
                Frontend Developer <br />
                <p>M&aacute;s de 1 año</p>
              </h3>
            </div>
            {SkillNames.map((skill) => (
              <Skill
                skill={skill}
                mode={mode}
                key={skill}
                onView={handleView}
                view={SkillNames.indexOf(skill) === openSkill}
              />
            ))}
          </ul>
          <Contact mode={mode} />
        </div>
      </section>
    </React.Fragment>
  );
}
export { Skills };
