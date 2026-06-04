import "../styles/Skills.css";

function Skills() {

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Express.js",
    "MySQL","MangoDB",
    "Git",
    "GitHub",
  ];

  return (
    <section className="skills" id="skills">
  <h2 className="section-title">Skills</h2>

      <div className="skills-container">
        {skills.map((skill,index)=>(
          <div className="skill-card" key={index}>
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;