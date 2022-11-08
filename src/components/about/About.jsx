// CSS
import './about.css'

// Dependencies
import React from "react";
import TagCloud from 'TagCloud' 

const About = () => {
  //About
  React.useEffect(() => {
    const myTags = [
      'JavaScript', 'Java','CSS', 
      'HTML', 'React', 'Node.js',
      'Python', 'Matlab', 'Git',
      'Data Analysis', 'OpenCV',
      'MySQL', 'jQuery',
    ];
    
    /* eslint-disable no-unused-vars */
    var tagCloud = TagCloud('.tagcloud', myTags,{

      // radius in px
      radius: 400,
      
      // animation speed
      // slow, normal, fast
      maxSpeed: 'normal',
      initSpeed: 'normal',
      
      // 0 = top
      // 90 = left
      // 135 = right-bottom
      direction: 135,
      
      // interact with cursor move on mouse out
      keep: true,
    }); 
    var colors = ['purple'];
    var random_color = colors[Math.floor(Math.random() * colors.length)];
    document.querySelector('.tagcloud').style.color = random_color;

    var tagCloudMobile = TagCloud('#tagcloudMobile', myTags,{

      // radius in px
      radius: 150,
      

      // animation speed
      // slow, normal, fast
      maxSpeed: 'normal',
      initSpeed: 'normal',
      
      // 0 = top
      // 90 = left
      // 135 = right-bottom
      direction: 135,
      
      // interact with cursor move on mouse out
      keep: true,
    }); 
    document.querySelector('.tagcloud').style.color = random_color;
    let rootEl = document.querySelector('.tagcloud');
    rootEl.addEventListener('click', function clickEventHandler(e) {
      if (e.target.className === 'tagcloud--item') {
        window.open(`https://www.google.com/search?q=${e.target.innerText}`, '_blank');
      }
    });
  }, []);

  return (
    <div className="page-outer">
      <span className="tags top-tags">
        &lt;html&gt;
        <br></br>
      </span>
      <div className="page-inner">
        <section className="about">
          <div className="text-zone">
            <div>
              <header>
                <h1 aria-label="Me, Myself and I" className="blast-root">
                  <span className="blast" aria-hidden="true">M</span>
                  <span className="blast" aria-hidden="true">e</span>
                  <span className="blast" aria-hidden="true">,</span>
                  &nbsp;
                  <span className="blast" aria-hidden="true">M</span>
                  <span className="blast" aria-hidden="true">y</span>
                  <span className="blast" aria-hidden="true">s</span>
                  <span className="blast" aria-hidden="true">e</span>
                  <span className="blast" aria-hidden="true">l</span>
                  <span className="blast" aria-hidden="true">f</span>
                  &nbsp;
                  <span className="blast" aria-hidden="true">a</span>
                  <span className="blast" aria-hidden="true">n</span>
                  <span className="blast" aria-hidden="true">d</span>
                  &nbsp;
                  <span className="blast" aria-hidden="true">I</span>
                </h1>
              </header>
              <p>
              Highly skilled and resourceful Entry Level Electrical and Electronic Engineer with a superb work ethic and engineering research background located in Greece. Adept at determining client needs and meeting project goals. 
              <br></br><br></br>
              Problem solver and high attention to detail. Fan of playing games and automating things.
              <br></br><br></br>
              I am looking for an entry level position that will allow me to utilize my strong skills and educational background. I am interested in the whole spectrum of software engineers and to work on ambitious projects with experienced and positive people.
              <br></br><br></br>
              <a rel="work" href="/contact-me/">Let’s make something special together.</a>.
              </p>
            </div>
          </div>
          <div className="skill-charts">
            <span id="tagcloud" className="tagcloud" ></span>
            <span id="tagcloudMobile" className="tagcloudMobile" ></span>
          </div>
        </section>
      </div>
    <span className="tags bottom-tags" id="about-bottom-tags">
      &lt;/html&gt;
      <br></br>
    </span> 
  </div>
)}

export default About;

