import React from "react";
import { Navbar,Hero,Intro,Projects,Skills ,Contact} from "./components/index";

function App() {
  return (
    <div>
       <Navbar/>
       <Hero/>
       <Intro/>
       <Projects/>
       <Skills/>
       <Contact/>
    </div>
  );
}

export default App;
