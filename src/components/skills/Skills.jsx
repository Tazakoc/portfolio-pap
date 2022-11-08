import './skills.scss'
import jQuery from 'jquery';
import { useEffect } from 'react';
const Skills = () => {
  useEffect(() => {
    ( function( $ ) {

      var $bars = $( ".bar" ),
        methods = {
          init: function() {
            
            // Bind events
            methods.bindEvents();
            
          },
          bindEvents: function() {
    
            // Loop through each of the bars...
            $bars.each( function() {
              
              var $bar = $( this ),
              $pct = $bar.find( ".pct" ),
              data = $bar.data( "bar" );

              setTimeout( function() {
                $bar
                .css( "background-color", data.color )
                .animate({

                  "width": $pct.html()

                }, data.speed || 1000, function() {

                  $pct.css({
                    "color": data.color,
                    "opacity": 1
                  });

                });
  
              }, data.delay || 0 );			
    
            });
          }
        };
      // Initialize on page load
      methods.init();	
    })( jQuery );
  }, []);
  return (
      <div className="page-outer">
        <span className="tags top-tags">
          &lt;html&gt;
          <br></br>
        </span>
        <div className="page-inner">
          <section className="sectionskills">
            <div className="text-zone">
              <div>
                <header>
                  <h1 aria-label="Skills & Experience" className="blast-root">
                    <span className="blast" aria-hidden="true">S</span>
                    <span className="blast" aria-hidden="true">k</span>
                    <span className="blast" aria-hidden="true">i</span>
                    <span className="blast" aria-hidden="true">l</span>
                    <span className="blast" aria-hidden="true">l</span>
                    <span className="blast" aria-hidden="true">s</span>
                    &nbsp;
                    <span className="blast" aria-hidden="true">&</span>
                    <span className="brxsmall"></span>
                    <span className="blast" aria-hidden="true">E</span>
                    <span className="blast" aria-hidden="true">x</span>
                    <span className="blast" aria-hidden="true">p</span>
                    <span className="blast" aria-hidden="true">e</span>
                    <span className="blast" aria-hidden="true">r</span>
                    <span className="blast" aria-hidden="true">i</span>
                    <span className="blast" aria-hidden="true">e</span>
                    <span className="blast" aria-hidden="true">n</span>
                    <span className="blast" aria-hidden="true">c</span>
                    <span className="blast" aria-hidden="true">e</span>
                  </h1>
                </header>
                <p>
                From the  beginning of my journey as a college student, i've done various projects with programming language Python in engineering field.
                <br></br><br></br>
                I successfully created an application with LMS (Least mean squares filter) that removes noise from recorded audio signals. Also i've developed an application for visual detection of corrusion  with Data Stractures (Binary Trees).
                <br></br><br></br>
                After my college years i started with Web Development for educational purposes. The main part of my educational target is front-end development, HTML, CSS, JS, React. My first project is this portfolio inspired by <a rel="jack-website" href="https://jacekjeznach.com/">Jack</a>.
                <br></br><br></br>
                Visit my <a rel="linkedin" href="https://www.linkedin.com/in/kwstaspapakonstantinou/"> Linkedin</a> for more details or just <a rel="contact" href="/contact-me/"> contact</a> me.
                </p>
              </div>
            </div>
            <ul id="skills">	
              <li>
                HTML
                <div className="bar-container">
                  <span className="bar" data-bar='{ "color": "#19f" }'>
                    <span className="pct">80%</span>
                  </span>
                </div>
              </li>
              <li>
                CSS
                <div className="bar-container">
                  <span className="bar" data-bar='{ "color": "#27ae60", "delay": 600 }'>
                    <span className="pct">70%</span>
                  </span>
                </div>
              </li>
              <li>
                JavaScript
                <div className="bar-container">
                  <span className="bar" data-bar='{ "color": "#9b59b6", "delay": 1200 }'>
                    <span className="pct">60%</span>
                  </span>
                </div>
              </li>
              <li>
                ReactJs
                <div className="bar-container">
                  <span className="bar" data-bar='{ "color": "#ae8a33", "delay": 1800 }'>
                    <span className="pct">50%</span>
                  </span>
                </div>
              </li>
              <div className="work">
                <div className="work-box">
                  <header>Bachelor</header>
                  <section>
                    Electrical & Electronic Systems
                    <footer>University of East London</footer>
                    <time>2014 - 2018</time>
                  </section>
                </div>
                <div className="work-box">
                  <header>Master</header>
                  <section>
                    Electrical & Electronic Systems Engineering
                    <footer>University of Portsmuth</footer>
                    <time>2019 - 2020</time>
                  </section>
                </div>
              </div>
            </ul>
          </section>
        </div>
      <span className="tags bottom-tags" id="skills-bottom-tags">
        &lt;/html&gt;
        <br></br>
      </span> 
    </div>
  )
}

export default Skills