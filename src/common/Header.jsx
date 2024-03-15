import { Link } from "react-router-dom";

const HomeHeader = () => {
  const tabsItems = ["projects", "resume"];
  
  return (
    <>
      <div id="nome">
        <p style={{ fontWeight: "bold" }}>Guilherme Lee</p>
      </div>
      <nav id="tabs">
        <ul id="tabs-list">
          {tabsItems.map((row) => {
            return (
              <li key={row.indexOf} className="tabs-items"> 
                <Link to={`${row}`} >{row}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default HomeHeader;
