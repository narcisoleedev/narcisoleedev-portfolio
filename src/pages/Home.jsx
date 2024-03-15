import "../styles.css";

import Header from "../common/Header";
import Description from "../components/Description";
import AboutMe from "../components/AboutMe";
import ProgrammingSkills from "../components/ProgrammingSkills";
import OtherSkills from "../components/OtherSkills";
import Hobbies from "../components/Hoobies";
import HomeFooter from "../common/Footer";

const Home = () => {
  return (
    <>
      <header>
        <Header/>
      </header>
      <main>
        <AboutMe/>
        <Description/>
        <ProgrammingSkills/>
        <OtherSkills/>
        <Hobbies/>
      </main>
      <footer>
        <HomeFooter/>
      </footer>
    </>
  );
};

export default Home;
