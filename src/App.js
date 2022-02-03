import React from 'react';

import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Teaching from './components/Teaching';
import Contact from './components/Contact';
import Copyright from './components/Copyright';

function App() {
  return (
    <React.Fragment>
        <div className="wrapper">

          <About />
          <Experience />
          <Projects />
          <Teaching />
          <Contact />
          <Copyright />
          
        </div>

    </React.Fragment>
  );
}

export default App;
