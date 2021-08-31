import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavMenu from './components/NavMenu';
import Home from './Pages/Home';
import About from './Pages/About';
import Experience from './Pages/Experience';
import Skills from './Pages/Skills';
import Services from './Pages/Services';
import Contact from './Pages/Contact';
import Blog from './Pages/Blog';

export default function App() {
  return (
    <>
      <Router>
        <NavMenu />
        <Switch>
          <Route path="/About">
            <About />
          </Route>
          <Route path="/Experience">
            <Experience />
          </Route>
          <Route path="/Skills">
            <Skills />
          </Route>
          <Route path="/Services">
            <Services />
          </Route>
          <Route path="/Contact">
            <Contact />
          </Route>
          <Route path="/Blog">
            <Blog />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
