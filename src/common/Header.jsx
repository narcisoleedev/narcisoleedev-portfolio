import { Link } from "react-router-dom";

import resumeFile from "../assets/Resume (ENG).pdf"

const HomeHeader = () => {
  //const tabsItems = ["projects", "resume"];

  return (
    <>
      <div id="nome">
        <Link to={"/"}>
          <p style={{ fontWeight: "bold" }}>Guilherme Lee</p>
        </Link>
      </div>
      <nav id="tabs">
        <ul id="tabs-list">
          {/* {tabsItems.map((row) => {
            return (
              <li key={row.indexOf} className="tabs-items">
                <Link to={`/${row}`}>{row}</Link>
              </li>
            );
          })}*/}
          <li className="tabs-items">
                <Link to={`/projects`}>projects</Link>
          </li>
          <li className="tabs-items">
                <a href={resumeFile} download={"Resume ENG.pdf"}>resume</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default HomeHeader;
