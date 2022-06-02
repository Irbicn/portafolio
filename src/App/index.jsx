import React from "react";
import { Profile } from "comp/Profile";
import { Header } from "comp/Header";
import { Skills } from "comp/Skills";
import { Portfolio } from "comp/Portfolio/Index";
import useApp from "./useApp";
import "./App.scss";

const PortfolioList = [
  {
    link: "https://irbicn.github.io/S-Target-app/",
    name: "STarget",
    topics: [{ name: "React.js", class: "react" }],
    description: "Una aplicacion de tareas hecha con React",
  },
  {
    link: "https://irbicn.github.io/weather/",
    name: "Weater app",
    topics: [
      { name: "Javascript", class: "js" },
      { name: "APIs", class: "api" },
    ],
    description:
      "Una aplicacion del tiempo hecha consumiendo una API y JavaScript vanilla",
  },
  {
    link: "https://irbicn.github.io/Single-Page-Aplication/",
    name: "Rick and Morty API",
    topics: [
      { name: "Javascript", class: "js" },
      { name: "SPA", class: "spa" },
      { name: "APIs", class: "api" },
    ],
    description: "Una Aplicacion que muestra datos traidos de una API",
  },
  {
    link: "https://irbicn.github.io/Zona3B/",
    name: "Zona 3B copia",
    topics: [
      { name: "HTML", class: "html" },
      { name: "CSS", class: "css" },
    ],
    description: "Una pagina copiada con fines didacticos",
  },
  {
    link: "https://irbicn.github.io/sunnyside-landing/",
    name: "Sunnyside",
    topics: [
      { name: "HTML", class: "html" },
      { name: "CSS", class: "css" },
    ],
    description: "Una landing page",
  },
  {
    link: "https://irbicn.github.io/first-project/",
    name: "Batatabit",
    topics: [
      { name: "HTML", class: "html" },
      { name: "CSS", class: "css" },
    ],
    description: "Mi primer Landing Page",
  },
  {
    link: "https://irbicn.github.io/la-card/",
    name: "La Card",
    topics: [
      { name: "Web Components", class: "wc" },
      { name: "Javascript", class: "js" },
    ],
    description: "Un web Component realizado con JavaScript Vanilla",
  },
];
function App() {
  const { mode, toggleMode } = useApp();
  return (
    <main className={`App ${mode}`}>
      <Header mode={mode} toggleMode={toggleMode} />
      <Profile mode={mode} />
      <Skills mode={mode} />
      <Portfolio mode={mode} PortfolioList={PortfolioList} />
    </main>
  );
}
export default App;
