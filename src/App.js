import ContactMe from "./components/ContactMe";
import Skills from "./components/Skills";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import SocialLinks from "./components/SocialLinks";
import Services from "./components/Services";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <Services/>
      <Projects />
      <Skills />
      <ContactMe/>
      
      <SocialLinks />
    </div>
  );
}

export default App;
