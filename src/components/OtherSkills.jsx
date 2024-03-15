//import web from "../assets/img/web.png";
import hadoop from "../assets/img/hadoop.webp";
import linux from "../assets/img/linux.png";
import tools from "../assets/img/tools.png";

const OtherSkills = () => {
  return (
    <>
      <div id="otherskills">
        <h4>Other skills</h4>
        <p>These are some skills/tools I have experience with:</p>
        <ul className="no-list">
          <div className="no-list-div">
            <li>
              <b>Git</b>{" "}
            </li>
          </div>
          {/*}
          <div className="no-list-div">
            <li>
              <b>Web</b>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
              </ul>
            </li>
      
            <div className="align-imgs">
              <img
                className="pl-img"
                src={web}
                width="70px"
                height="76.70px"
              />
            </div>
            <div className="space-imgs"></div>
          </div>
          */}

          <div className="no-list-div">
            <li>
              <b>Big Data</b>
              <ul>
                <li>Apache Hadoop</li>
                <li>SPARQL</li>
                <li>Hive/Beeline</li>
              </ul>
            </li>
            <div className="align-imgs">
              <img
                className="pl-img"
                src={hadoop}
                width="70px"
                height="76.70px"
              />
            </div>
            <div className="space-imgs"></div>
          </div>

          <div className="no-list-div">
            <li>
              <b>Linux</b>
              <ul>
                <li>Bash</li>
                <li>
                  Distros:
                  <ul>
                    <li>ArchLinux</li>
                    <li>Ubuntu</li>
                  </ul>
                </li>
              </ul>
            </li>
            <div className="align-imgs">
              <img
                className="pl-img"
                src={linux}
                width="70px"
                height="76.70px"
              />
            </div>
            <div className="space-imgs"></div>
          </div>

          <div className="no-list-div">
            <li>
              <b>Tools</b>
              <ul>
                <li>Microsoft Excel</li>
                <li>Microsoft PowerBI</li>
                <li>Microsoft SSIS</li>
                <li>Google Data Studio</li>
                <li>Figma</li>
              </ul>
            </li>
            <div className="align-imgs">
              <img
                className="pl-img"
                src={tools}
                width="70px"
                height="76.70px"
              />
            </div>
            <div className="space-imgs"></div>
          </div>
        </ul>
      </div>
    </>
  );
};

export default OtherSkills;
