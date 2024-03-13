import React, { useState } from "react";
import "../styles.css";

const HomeHeader = () => {
  const tabsItems = ["projects", "resume"];
  
  const [isUnderlined, setIsUnderlined] = useState(false);

  function handleIsUnderlined(){
    setIsUnderlined(true);
  }
  return (
    <>
      <div id="nome">
        <p style={{ fontWeight: "bold" }}>Guilherme Lee</p>
      </div>
      <nav id="tabs">
        <ul id="tabs-list">
          {tabsItems.map((row) => {
            return (
              <li key={row.indexOf} className={isUnderlined? "tabs-items-selected" : "tabs-items"} onClick={handleIsUnderlined}> 
                {row}
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default HomeHeader;
