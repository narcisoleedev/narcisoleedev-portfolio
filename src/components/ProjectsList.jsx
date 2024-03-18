import { useEffect, useState } from "react";

import "./styles/ProjectsList.css";

const ProjectsList = () => {

  const languageColor = {
    "C": "lightgray",
    "C++": "gray",
    "Python": "blue",
    "JavaScript": "yellow",
    "Jupyter Notebook": "orange",
    "Java": "orange",
  };

  const [list, setList] = useState([]);

  useEffect(()=>{
    fetch("https://api.github.com/users/narcisoleedev/repos")
      .then((res) => {return(res.json())})
      .then((data) => {
        const listData = data.map((row) => ({
            name: row.name,
            photo: "",
            description: row.description,
            technologies: row.language,
            url: row["html_url"]
        }));
        setList(listData);
      }).catch((err)=>{console.error(err)})},
    [],
  );

  const getLanguageColor = (language) => languageColor[language] || "white";

  return (
    <div className="projectslist">
      {list.map((row) => (
        <div key={row.id} className="projectslistelement">
          <div className="projectscardbox">
            <div className="pc-header">
              <div className="pc-title">
                  <a href={row.url}><h1>{row.name}</h1></a>
              </div>
              <div className="pc-technologies">
                <div className="pc-circle" style={{borderColor: getLanguageColor(row.technologies), backgroundColor: getLanguageColor(row.technologies)}}></div>
                <p>{row.technologies}</p>
              </div>
            </div>
            <div className="pc-description">
              <p>{row.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectsList;
