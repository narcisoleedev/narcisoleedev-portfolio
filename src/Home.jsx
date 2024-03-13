import React, { useState } from "react";
import "./styles.css";

import HomeHeader from "./Home/HomeHeader";
import HomeMain from "./Home/HomeMain";
import HomeFooter from "./Home/HomeFooter";

const Home = () => {
  return (
    <>
      <header>
        <HomeHeader />
      </header>
      <main>
        <HomeMain/>
      </main>
      <footer>
        <HomeFooter/>
      </footer>
    </>
  );
};

export default Home;
