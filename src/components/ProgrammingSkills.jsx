import py from "../assets/img/py.png";
import sql from "../assets/img/sql.png";
import js from "../assets/img/js.png";
import cs from "../assets/img/cs.webp";

const ProgrammingSkills = () => {
  return (
    <>
      <div id="programmingskills">
        <h4>Programming Languages</h4>
        <p>
          These are some programming languages (and its main
          libraries/frameworks) in descending order on how much proficieny I
          have using it:
        </p>
        <div id="programmingskills-flexbox">
          <ul className="no-list">
            <div className="no-list-div">
              <li>
                <b>Python</b>
                <ul>
                  <li>Numpy</li>
                  <li>Pandas</li>
                  <li>Scikit-learn</li>
                </ul>
              </li>
              <div className="align-imgs">
                <img
                  className="pl-img"
                  src={py}
                  width="70px"
                  height="76.70px"
                />
              </div>
              <div className="space-imgs"></div>
            </div>

            <div className="no-list-div">
              <li>
                <b>SQL</b>
                <ul>
                  <li>PostgreSQL</li>
                  <li>SQL Server</li>
                  <li>HiveQL</li>
                </ul>
              </li>
              <div className="align-imgs">
                <img
                  className="pl-img"
                  src={sql}
                  width="70px"
                  height="76.70px"
                />
              </div>
              <div className="space-imgs"></div>
            </div>

            <div className="no-list-div">
              <li>
                <b>Javascript</b>
                <ul>
                  <li>NodeJS</li>
                  <li>Express</li>
                  <li>React</li>
                </ul>
              </li>
              <div className="align-imgs">
                <img
                  className="pl-img"
                  src={js}
                  width="70px"
                  height="76.70px"
                />
              </div>
              <div className="space-imgs"></div>
            </div>

            <div className="no-list-div">
              <li>
                <b>C</b>{" "}
              </li>
            </div>
            <div className="no-list-div">
              <li>
                <b>C++</b>{" "}
              </li>
            </div>
            <div className="no-list-div">
              <li>
                <b>C#</b>
                <ul>
                  <li>Microsoft Visual Studio: Windows Form App</li>
                  <li>.NET</li>
                </ul>
              </li>
              <div className="align-imgs">
                <img
                  className="pl-img"
                  src={cs}
                  width="70px"
                  height="76.70px"
                />
              </div>
              <div className="space-imgs"></div>
            </div>
          </ul>
        </div>
        <p>
          Some other languages Ive used just a few times: Mips Assembly, Java
        </p>
      </div>
    </>
  );
};

export default ProgrammingSkills;
