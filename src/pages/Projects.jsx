import React from "react";

import Header from "../common/Header";
import Footer from "../common/Footer";
import ProjectsList from "../components/ProjectsList";

const Projects = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <ProjectsList />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Projects;
