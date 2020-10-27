//import logo from './logo.svg';
//https://i.pinimg.com/originals/8d/62/1f/8d621f66f551b6a39072473d52280ff0.gif
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import './App.css';

function App() {
  return (
    <div className="App">
      <nav id="navbar-example2" className="navbar fixed-top navbar-light bg-light">
        <a className="navbar-brand" href="#App-header-div">NISHANT SHARMA</a>
        <ul className="nav nav-pills">
          <li className="nav-item">
            <a className="nav-link" href="#about-div">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#education-div">Education</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#skills-div">Skills</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#experience-div">Experience</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#projects-div">Projects</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact-div">Contact Me</a>
          </li>
        </ul>
      </nav>
      <div id="App-header-div" className="row">
        <div className="col col-5">
          <header className="App-header" id="App-header">
            <h1>NISHANT SHARMA</h1>
            <h4>Full stack MERN Developer</h4>
            <a href="https://github.com/Tnahsin79" target="_blank"><button className="btn btn-outline-light">GitHub <i className='fab fa-github'></i></button></a>
          </header>
        </div>
        <div className="col col-7">
          <img className="animation-gif" src="https://i.pinimg.com/originals/8d/62/1f/8d621f66f551b6a39072473d52280ff0.gif"></img>
        </div>

      </div>
      <div id="about-div"><About /></div>
      <div id="education-div"><Education /></div>
      <div id="skills-div"><Skills /></div>
      <div id="experience-div"><Experience /></div>
      <div id="projects-div"><Projects /></div>
      <div id="contact-div"><Contact /></div>
    </div>
  );
}

export default App;
//<img src={logo} className="App-logo" alt="logo" />
