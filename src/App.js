// CSS
import './App.css';

// Components
import Index from "./Index.jsx"
import Navbar from "./components/navbar/Navbar"
import Music from "./components/sound/Sound"
import Rights from "./components/rights/Rights"
import Loader from "./components/loader/Loader"

// Dependencies
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { lazy, Suspense} from "react"
import pMinDelay from 'p-min-delay';

function App() {
  const About = lazy(() => pMinDelay(import('./components/about/About'), 0)); //5000
  const Skills = lazy(() => pMinDelay(import('./components/skills/Skills'), 0));
  const Portfolio = lazy(() => pMinDelay(import('./components/portfolio/Portfolio'), 0));
  const Contact = lazy(() => pMinDelay(import('./components/contact/Contact'), 0));
  return (
    <div>
      <Router>
        <Navbar/>
        <Music/>
        <Rights/>
        <Routes>
          <Route exact path="/" element={
            <Suspense fallback={<Loader/>}>
              <Index/>
            </Suspense>
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
