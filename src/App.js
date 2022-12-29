// Components
import Index from "./Index.jsx"
import Navbar from "./components/navbar/Navbar"
import Music from "./components/sound/Sound"
import Loader from "./components/loader/Loader"
import Template from "./components/theme-template/Template"

// Dependencies
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { lazy, Suspense} from "react"
import pMinDelay from 'p-min-delay';
import { useGLobalContext } from './hooks/contextAPI'

function App() {
  const colorTheme = lazy(() => pMinDelay(useGLobalContext, 0));

  const About = lazy(() => pMinDelay(import('./pages/about/About'), 5000)); //5000
  const Skills = lazy(() => pMinDelay(import('./pages/skills/Skills'), 5000));
  const Portfolio = lazy(() => pMinDelay(import('./pages/portfolio/Portfolio'), 5000));
  const Contact = lazy(() => pMinDelay(import('./pages/contact/Contact.jsx'), 5000));

  return (
    <div style={{backgroundColor: colorTheme === 'light-mode' ? "var(--clr-primary-bg)" : "var(--clr-primary-bg)"}}>
      <Router>
        <Navbar/>
        <Music/>
        <Template/>
        <Routes>
          <Route exact path="/" element={
            <Index/>
          }/>
          <Route exact path="/about-me" element={
            <Suspense fallback={<Loader/>}>
              <About/>
            </Suspense>
          }/>
          <Route exact path="/my-skills" element={
            <Suspense fallback={<Loader/>}>
              <Skills/>  
            </Suspense>
          }/>
          <Route exact path="/my-portfolio" element={
            <Suspense fallback={<Loader/>}>
              <Portfolio/> 
            </Suspense>
          }/>
          <Route exact path="/contact-me" element={
            <Suspense fallback={<Loader/>}>
              <Contact/> 
            </Suspense>
          }/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
