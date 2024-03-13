import React, { useState } from "react";
import "../styles.css";

import Description from "./HomeMain/Description";
import AboutMe from "./HomeMain/AboutMe";
import ProgrammingSkills from "./HomeMain/ProgrammingSkills";
import OtherSkills from "./HomeMain/OtherSkills";
import Hobbies from "./HomeMain/Hoobies";

const HomeMain = () => {
  return (
    <>
      <AboutMe/>
      <Description/>
      <ProgrammingSkills/>
      <OtherSkills/>
      <Hobbies/>
    </>
  );
};

export default HomeMain;
