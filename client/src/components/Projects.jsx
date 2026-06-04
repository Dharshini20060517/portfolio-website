import React, { useEffect, useState } from "react";
import API from "../services/api";
import "../styles/Projects.css";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await API.get("/projects");
      setProjects(response.data);
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };

  return (
    <section id="projects" className="projects">
     <h2 className="section-title">Projects</h2>

      <div className="projects-container">
        {projects.map((project) => (
          <div key={project.id} className="project-card">

            {project.image && (
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
            )}

            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <p className="tech-stack">
              <strong>Technologies:</strong> {project.technologies}
            </p>
<div className="project-links">

  <button
    onClick={() => window.open(project.github, "_blank")}
    className="github-btn"
  >
    GitHub
  </button>

  <button
    onClick={() => window.open(project.demo, "_blank")}
    className="demo-btn"
  >
    Live Demo
  </button>

</div>
           
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;