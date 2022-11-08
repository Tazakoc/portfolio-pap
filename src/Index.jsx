// CSS
import './index.css'
import DancingLines from './dancinglines.js';

// Work
import Fancybox from "./components/portfolio/fancybox.js";

// About
import React from 'react';
import TagCloud from 'TagCloud'

// Contact
import Map from "./img/map.png"
import emailjs from 'emailjs-com'
import {useRef, useState} from "react"

const Index = () => {

  // About
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
      radius: 300,
      
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
    document.querySelector('.tagcloudMobile').style.color = random_color;
    
    let rootEl = document.querySelector('.tagcloud');
    rootEl.addEventListener('click', function clickEventHandler(e) {
      if (e.target.className === 'tagcloud--item') {
        window.open(`https://www.google.com/search?q=${e.target.innerText}`, '_blank');
      }
    });
  }, []);
  
  // Contact
  const formRef =  useRef()
  const [done, setDone] = useState(false)

  const handleSubmit = (e)=>{
    e.preventDefault();
    emailjs
    .sendForm(
      'service_intly52', 
      'template_36jv9vo', 
      formRef.current, 
      'user_ZyDjQ54v56b10aXLZDX9s'
    )
    .then(
    (result) => {
      console.log(result.text);
      setDone(true)
    }, 
    
    (error) => {
      console.log(error.text);
    }
    );
  }
  
  return (
     <div>
        <div className="page-outer">
          <span className="tags top-tags">
            &lt;html&gt;
            <br></br>
          </span>
          <div className="page-inner">
            <section className="section-home">
              <div className="text-zone">
                <h1 aria-label="Hi, I'm Kostanstantinos, Engineer" className="blast-root">
                  <span className="blast" aria-hidden="true" style={{opacity:"1"}}>H</span>
                  <span className="blast" aria-hidden="true" style={{opacity:"1"}}>i</span>
                  <span className="blast" aria-hidden="true" style={{opacity:"1"}}>,</span>
                  <br></br>
                  <span className="blast" aria-hidden="true" style={{opacity:"1"}}>I</span>
                  <span className="blast" aria-hidden="true" style={{opacity:"1"}}>’</span>
                  <span className="blast" aria-hidden="true" style={{opacity:"1"}}>m</span>
                  &nbsp;
                  <span className="blast" aria-hidden="true" style={{opacity:"1"}}>K</span>
                  <span className="blast" aria-hidden="true" style={{opacity:"1"}}>o</span>
                  <span className="blast" aria-hidden="true" style={{opacity:"1"}}>n</span>
                  <span className="blast" aria-hidden="true" style={{opacity:"1"}}>s</span>
                  <span className="blast" aria-hidden="true" style={{opacity:"1"}}>t</span>
                  <span className="blast" aria-hidden="true" style={{opacity:"1"}}>a</span>
                  <span className="blast" aria-hidden="true" style={{opacity:"1"}}>n</span>
                  <span className="blast" aria-hidden="true" style={{opacity:"1"}}>t</span>
                  <span className="blast" aria-hidden="true" style={{opacity:"1"}}>i</span>
                  <span className="blast" aria-hidden="true" style={{opacity:"1"}}>n</span>
                  <span className="blast" aria-hidden="true" style={{opacity:"1"}}>o</span>
                  <span className="blast" aria-hidden="true" style={{opacity:"1"}}>s</span>
                  <br></br>
                  <span className="blast" aria-hidden="true" style={{opacity:"1"}}>D</span>
                  <span className="blast" aria-hidden="true" style={{opacity:"1"}}>e</span>
                  <span className="blast" aria-hidden="true" style={{opacity:"1"}}>v</span>
                  <span className="blast" aria-hidden="true" style={{opacity:"1"}}>e</span>
                  <span className="blast" aria-hidden="true" style={{opacity:"1"}}>l</span>
                  <span className="blast" aria-hidden="true" style={{opacity:"1"}}>o</span>
                  <span className="blast" aria-hidden="true" style={{opacity:"1"}}>p</span>
                  <span className="blast" aria-hidden="true" style={{opacity:"1"}}>e</span>
                  <span className="blast" aria-hidden="true" style={{opacity:"1"}}>r</span>
                </h1>
                <p className="desc">
                  Msc Electrical & Electronic Engineer
                </p> 
                <a rel="contact-me" href="/contact-me" className="flat-button">
                  <div>
                    <span className="bg"></span>
                    <span className="base"></span>
                    <span className="text">Contact me!</span>
                  </div>
                </a>
              </div>
              <DancingLines></DancingLines>
              <div className="scroll-down">
                <span>Scroll Down</span>
                <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="arrow-down" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="svg-inline--fa fa-arrow-down fa-w-14 fa-5x"><path fill="currentColor" d="M443.5 248.5l-7.1-7.1c-4.7-4.7-12.3-4.7-17 0L241 419.9V44c0-6.6-5.4-12-12-12h-10c-6.6 0-12 5.4-12 12v375.9L28.5 241.4c-4.7-4.7-12.3-4.7-17 0l-7.1 7.1c-4.7 4.7-4.7 12.3 0 17l211 211.1c4.7 4.7 12.3 4.7 17 0l211-211.1c4.8-4.8 4.8-12.3.1-17z" className=""></path></svg>
              </div>
              <div className="scroll-down scroll-down--left">
                <span>Scroll Down</span>
                <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="arrow-down" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="svg-inline--fa fa-arrow-down fa-w-14 fa-5x"><path fill="currentColor" d="M443.5 248.5l-7.1-7.1c-4.7-4.7-12.3-4.7-17 0L241 419.9V44c0-6.6-5.4-12-12-12h-10c-6.6 0-12 5.4-12 12v375.9L28.5 241.4c-4.7-4.7-12.3-4.7-17 0l-7.1 7.1c-4.7 4.7-4.7 12.3 0 17l211 211.1c4.7 4.7 12.3 4.7 17 0l211-211.1c4.8-4.8 4.8-12.3.1-17z" className=""></path></svg>
              </div>
            </section>
        


            <section className="section-work">
              <div className="fake-big">Work</div>
              <div className="text-zone">
                <div>
                  <header>
                    <h2 aria-label="My Portfolio" className="blast-root">
                      <span className="blast" aria-hidden="true" style={{opacity:"1"}}>M</span>
                      <span className="blast" aria-hidden="true" style={{opacity:"1"}}>y</span>
                      &nbsp;
                      <span className="blast" aria-hidden="true" style={{opacity:"1"}}>P</span>
                      <span className="blast" aria-hidden="true" style={{opacity:"1"}}>o</span>
                      <span className="blast" aria-hidden="true" style={{opacity:"1"}}>r</span>
                      <span className="blast" aria-hidden="true" style={{opacity:"1"}}>t</span>
                      <span className="blast" aria-hidden="true" style={{opacity:"1"}}>f</span>
                      <span className="blast" aria-hidden="true" style={{opacity:"1"}}>o</span>
                      <span className="blast" aria-hidden="true" style={{opacity:"1"}}>l</span>
                      <span className="blast" aria-hidden="true" style={{opacity:"1"}}>i</span>
                      <span className="blast" aria-hidden="true" style={{opacity:"1"}}>o</span>
                    </h2>
                  </header>
                  <p>
                  Check out some of my latest work in a small gallery. I have worked on various projects as a student but have no further experience so I do not have projects in a production.
                  You have to be patient to see my growth. Coming Soon..
                  <br></br>
                  Interested to see some more?  Visit 
                  <a rel="work" href="/my-portfolio/"> my work</a> page.
                  </p>
                </div>
              </div>
            </section>

            <div id="grid" className="grid">
              <Fancybox>    
                <div className="grid-item">
                  <figure className="hover-content">
                    <img src="https://images.squarespace-cdn.com/content/v1/55ca787ae4b07d9498906d9e/1551490529737-C7C2LZQ8MSFLT8L632H4/coming-soon-neon-sign-coming-soon-badge-in-vector-21133321.jpg" alt=''/>
                    <figcaption>
                      <div>
                        <h2>Coming <span>Soon</span></h2>
                        <p>Coming Soon...</p>
                      </div>
                      <a 
                        data-fancybox="Coming Soon 2" 
                        href="https://images.squarespace-cdn.com/content/v1/55ca787ae4b07d9498906d9e/1551490529737-C7C2LZQ8MSFLT8L632H4/coming-soon-neon-sign-coming-soon-badge-in-vector-21133321.jpg" 
                        data-caption="
                        <div>
                          <a href='http://google.com'>Coming Soon!</a>
                        </div>">
                      </a>
                    </figcaption>	
                  </figure>
                </div>
                <div className="grid-item">
                  <figure className="hover-content">
                    <img src="https://images.squarespace-cdn.com/content/v1/55ca787ae4b07d9498906d9e/1551490529737-C7C2LZQ8MSFLT8L632H4/coming-soon-neon-sign-coming-soon-badge-in-vector-21133321.jpg" alt=''/>
                    <figcaption>
                      <div>
                        <h2>Coming <span>Soon</span></h2>
                        <p>Coming Soon...</p>
                      </div>
                      <a 
                        data-fancybox="Coming Soon" 
                        href="https://images.squarespace-cdn.com/content/v1/55ca787ae4b07d9498906d9e/1551490529737-C7C2LZQ8MSFLT8L632H4/coming-soon-neon-sign-coming-soon-badge-in-vector-21133321.jpg" 
                        data-caption="
                        <div>
                          <a href='http://google.com'>Coming Soon!</a>
                        </div>">
                      </a>
                    </figcaption>	
                  </figure>
                </div>
              </Fancybox>
            </div>

            <section className="section-about">
              <div className="text-zone">
                <div>
                  <header>
                    <h3 aria-label="Me, Myself and I" className="blast-root">
                      <span className="blast" aria-hidden="true" style={{opacity:"1"}}>M</span>
                      <span className="blast" aria-hidden="true" style={{opacity:"1"}}>e</span>
                      <span className="blast" aria-hidden="true" style={{opacity:"1"}}>,</span>
                      &nbsp;
                      <span className="blast" aria-hidden="true" style={{opacity:"1"}}>M</span>
                      <span className="blast" aria-hidden="true" style={{opacity:"1"}}>y</span>
                      <span className="blast" aria-hidden="true" style={{opacity:"1"}}>s</span>
                      <span className="blast" aria-hidden="true" style={{opacity:"1"}}>e</span>
                      <span className="blast" aria-hidden="true" style={{opacity:"1"}}>l</span>
                      <span className="blast" aria-hidden="true" style={{opacity:"1"}}>f</span>
                      &nbsp;
                      <span className="blast" aria-hidden="true" style={{opacity:"1"}}>a</span>
                      <span className="blast" aria-hidden="true" style={{opacity:"1"}}>n</span>
                      <span className="blast" aria-hidden="true" style={{opacity:"1"}}>d</span>
                      &nbsp;
                      <span className="blast" aria-hidden="true" style={{opacity:"1"}}>I</span>
                    </h3>
                  </header>
                  <p>
                  I'm Entry Level Electrical and Electronic Engineer with an inclination towards to programming with a superb work ethic and engineering research background. Adept at determining client needs and meeting project goals. 
                  <br></br><br></br>
                  These days my time is spent learning and coding. I also im looking for opportunities to start up my career. I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.
                  <br></br><br></br>
                  Out of the office you’ll find me playing games, learning, and automating everything. 
                  <br></br>
                  Interested to see more?  Visit 
                  <a rel="work" href="/my-skills/"> my skills</a> page.
                  </p>
                </div>
              </div>
              <div className="skill-charts">
                <span id="tagcloud" className="tagcloud" ></span>
                <span id="tagcloudMobile" className="tagcloudMobile" ></span>
              </div>
            </section>

            <section className="section-contact">
              <div className="fake-big">@</div>
              <div className="text-zone">
                <div>
                  <header>
                    <h4 aria-label="Contact Me" className="blast-root">
                      <span className="blast" aria-hidden="true" style={{opacity:"1"}}>C</span>
                      <span className="blast" aria-hidden="true" style={{opacity:"1"}}>o</span>
                      <span className="blast" aria-hidden="true" style={{opacity:"1"}}>n</span>
                      <span className="blast" aria-hidden="true" style={{opacity:"1"}}>t</span>
                      <span className="blast" aria-hidden="true" style={{opacity:"1"}}>a</span>
                      <span className="blast" aria-hidden="true" style={{opacity:"1"}}>c</span>
                      <span className="blast" aria-hidden="true" style={{opacity:"1"}}>t</span>
                      &nbsp;
                      <span className="blast" aria-hidden="true" style={{opacity:"1"}}>M</span>
                      <span className="blast" aria-hidden="true" style={{opacity:"1"}}>e</span>
                    </h4>
                  </header>
                  <p>
                  Looking for an Entry Level Software Engineer position that will enable me to use my strong skills and educational background.
                  I’m interested for opportunities to start my career, If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.
                  </p>
                </div>
                <div className="contact-form">
                  <form autoComplete="off" ref={formRef} onSubmit={handleSubmit}>
                  <ul>
                      <li className= "half animated fadeInUp">
                        <input type="text" className="text-name split" placeholder="Name" name="user_name" />
                        <div className="border-box"></div>
                      </li>
                      <li className= "half animated fadeInUp required">
                        <input type="email"className="text-email split" placeholder="Email" name="user_email" />
                      </li>
                      
                      <li className= "animated fadeInUp">
                        <input type="text" className="text-subject full"  placeholder="Subject" name="user_subject" />
                      </li >
                      <textarea className= "animated fadeInUp"  rows="5" placeholder="Message" name="message"/>
                      <button className="flat-button-2 fadeInUp">
                        <div>
                          <span className="bg"></span>
                          <span className="base"></span>
                          <span className="text" >Send Message!</span>
                        </div>
                      </button>
                      {done && "Thank you.."}
                    </ul>
                  </form>
                </div>
              </div>
              <div className="contact-map">
                <img src={Map} alt="" className="map"/>
                <div className="inf-map"> 
                  Kostanstantinos Papakonstantinou,
                  &nbsp;
                  Greece, Athens, 188-63 Perama
                  <br></br>
                  <span>
                    <span>@</span>
                    : kwctas.pap@outlook.com
                  </span>
                </div>
              </div>
            </section>
            
          </div>
          <span className="tags bottom-tags">
            &lt;/html&gt;
            <br></br>
          </span>
        </div>
     </div>
    )
}
export default Index