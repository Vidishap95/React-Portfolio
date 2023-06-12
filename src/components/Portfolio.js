import React from "react";
import Project from "./Project";
import  "bootstrap/dist/css/bootstrap.min.css";
import "../style/Portfolio.css";


function Portfolio () {
    return (
        <div className="portfolio-wrapper">
      <h1 className="portfolio-title">Portfolio</h1>
      <div className="container">
        <div className="row">
            {[
                {
                    title: "",
                    description: "",
                    githubLink: "",
                }
            ].map ((project, index) => (
                <div className="col-12 col-md-6 col-lg-4 my-2" key={index}>
                    <Project
                    title={project.title}
                    description={project.description}
                    githubLink={project.githubLink}
                    />
                    </div>
            ))}
            </div>
            </div>
            </div>
  );
}

//export portfolio
export default Portfolio;