import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Main from "./components/main/Main";
import Skills from "./components/skills/Skills";


function App() {

  
  return (
    <div className="container">
      <Header/>
      <Hero/>
      <div className="divider" />
      <Skills/>
      <div className="divider" />
      <Main/>
      <div className="divider" />
      <Contact/>
      <div className="divider" />
      <Footer/>
    </div>
  );
}

export default App;
