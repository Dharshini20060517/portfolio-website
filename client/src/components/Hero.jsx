import "../styles/Hero.css";
import profileImg from "../assets/profile.jpeg";
import resume from "../assets/resume/Dharshini_T_Resume.pdf";


function Hero() {
  return (
    <section className="hero" id="home">
      <img src={profileImg} alt="Profile" className="profile-img" />
      <h1>Hi, I'm Dharshini</h1>

      <h2>Full Stack Developer</h2>

      <p>
        Passionate about building responsive web applications
        using React, Node.js, Express and MySQL.
      </p>
<a href={resume} download>
    <button>Download Resume</button>
</a>
    </section>
  );
}

export default Hero;