// CSS
import './index.scss'

// Work
import Fancybox from "./pages/portfolio/fancybox.js";

// About
import TagCloud from 'TagCloud'

// Contact
import Map from "./img/map.png"
import emailjs from '@emailjs/browser'
import React, {useRef, useState} from "react"
import { BsExclamationLg, BsPatchCheckFill } from 'react-icons/bs'
import { RiSendPlane2Fill } from 'react-icons/ri'

// Dependencies
import DancingLines from './components/dancinglines/dancingLines.js';
import Reveal from 'react-reveal/Reveal'
import Fade from 'react-reveal/Fade'
import Typed from 'typed.js';

const Index = () => {
  
  const [letterClass, setLetterClass] = useState('text-animate')
  const [letterClassSecondary, setLetterClassSecondary] = useState('text-animate-secondary')

  React.useEffect(() => {
    setTimeout(() => {
      setLetterClass('blast')
      setLetterClassSecondary('blast')
    }, 4000)
  }, [])

  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);
  // Create reference to store the Typed instance itself
  const typed = React.useRef(null);

  React.useEffect(() => {
    const options = {
      strings: [
        'MSc Electrical and Electronic Engineer',
        'Developer',
        ''
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };
    
    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options);
    
    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy();
    }
  }, [])

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
    
    let rootEl = document.querySelector('.tagcloud');
    rootEl.addEventListener('click', function clickEventHandler(e) {
      if (e.target.className === 'tagcloud--item') {
        window.open(`https://www.google.com/search?q=${e.target.innerText}`, '_blank');
      }
    });
  }, []);
  
  // Contact
  const [validInpt, setValidInpt] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setValidInpt((preValue) => {
      return { ...preValue, [name]: value }
    })
  }

  // select all the input with useRef Hook
  const emailRef = useRef(null)
  const TextAreaRef = useRef(null)
  const MessageRef = useRef(null)

  const formRef = useRef(null)

  // show Message function
  const showMessage = (message, updateColor) => {
    const divContent = document.createElement('div')
    divContent.textContent = message
    divContent.classList.add('div-content')
    MessageRef.current.prepend(divContent)
    divContent.style.backgroundColor = updateColor

    MessageRef.current.style.transform = `translateX(${'0'}%)`
    MessageRef.current.style.visibility = 'visible'
    setTimeout(() => {
      divContent.classList.add('hide')
      divContent.addEventListener('transitionend', () => {
        divContent.remove()
      })
      divContent.style.transform = `translateX(${'0'}%)`
      // MessageRef.current.style.visibility = 'visible'
      emailRef.current.parentElement.classList.remove('error')
      TextAreaRef.current.parentElement.classList.remove('error')
      emailRef.current.parentElement.classList.remove('success')
      TextAreaRef.current.parentElement.classList.remove('success')
    }, 5000)
  }

  // Error function
  const setError = (inputRef) => {
    if (inputRef.current.parentElement.classList.contains('success')) {
      inputRef.current.parentElement.classList.remove('success')
    } else {
      inputRef.current.parentElement.classList.add('error')
    }
  }

  // success Function
  const setSuccess = (inputRef) => {
    if (inputRef.current.parentElement.classList.contains('error')) {
      inputRef.current.parentElement.classList.remove('error')
    } else {
      inputRef.current.parentElement.classList.add('success')
    }
  }

  const onSubmit = (e) => {
    e.preventDefault()
    
    const { email, message } = validInpt
    // const pattern = /^[^]+@[^]+\.[a-z]{2,3}$/
    const pattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
    if (!email && !message) {
      setError(emailRef)
      setError(TextAreaRef)
      showMessage('Pls! fill in the required inputs')
    } else if (!email && message) {
      setError(emailRef)
      showMessage("Oops! Email can't be empty")
    } else if (!email.match(pattern)) {
      setError(emailRef)
      showMessage('Oops! Email not valid')
    } else if (!message && email.match(pattern)) {
      setError(TextAreaRef)
      showMessage('Leave a message pls!')    
    } else if (email && message) {
      emailjs.sendForm(
        process.env.REACT_APP_GMAIL_SERVICE_ID,
        process.env.REACT_APP_FORM_TEMPLATE_ID,
        formRef.current,
        process.env.REACT_APP_FORM_USER_ID,
      ).then((result) => {
        console.log(result.text);
        setSuccess(emailRef)
        setSuccess(TextAreaRef)
        showMessage('Message sent successfully', 'green')
      }, (error) => {
        console.log(error.text);
      });
      setValidInpt({
        name: '',
        email: '',
        subject: '',
        message: '',
      })
    }
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
                  <span className={`${letterClass} _1`} aria-hidden="true" style={{opacity:"1"}}>H</span>
                  <span className={`${letterClass} _2`} aria-hidden="true" style={{opacity:"1"}}>i</span>
                  <span className={`${letterClass} _3`} aria-hidden="true" style={{opacity:"1"}}>,</span>
                  <br></br>
                  <span className={`${letterClass} _4`} aria-hidden="true" style={{opacity:"1"}}>I</span>
                  <span className={`${letterClass} _5`} aria-hidden="true" style={{opacity:"1"}}>’</span>
                  <span className={`${letterClass} _6`} aria-hidden="true" style={{opacity:"1"}}>m</span>
                  &nbsp;
                  <span className={`${letterClass} _7`} aria-hidden="true" style={{opacity:"1"}}>K</span>
                  <span className={`${letterClass} _8`} aria-hidden="true" style={{opacity:"1"}}>o</span>
                  <span className={`${letterClass} _9`} aria-hidden="true" style={{opacity:"1"}}>n</span>
                  <span className={`${letterClass} _10`} aria-hidden="true" style={{opacity:"1"}}>s</span>
                  <span className={`${letterClass} _11`} aria-hidden="true" style={{opacity:"1"}}>t</span>
                  <span className={`${letterClass} _12`} aria-hidden="true" style={{opacity:"1"}}>a</span>
                  <span className={`${letterClass} _13`} aria-hidden="true" style={{opacity:"1"}}>n</span>
                  <span className={`${letterClass} _14`} aria-hidden="true" style={{opacity:"1"}}>t</span>
                  <span className={`${letterClass} _15`} aria-hidden="true" style={{opacity:"1"}}>i</span>
                  <span className={`${letterClass} _16`} aria-hidden="true" style={{opacity:"1"}}>n</span>
                  <span className={`${letterClass} _17`} aria-hidden="true" style={{opacity:"1"}}>o</span>
                  <span className={`${letterClass} _18`} aria-hidden="true" style={{opacity:"1"}}>s</span>
                  <br></br>
                  <span className={`${letterClass} _19`} aria-hidden="true" style={{opacity:"1"}}>D</span>
                  <span className={`${letterClass} _20`} aria-hidden="true" style={{opacity:"1"}}>e</span>
                  <span className={`${letterClass} _21`} aria-hidden="true" style={{opacity:"1"}}>v</span>
                  <span className={`${letterClass} _22`} aria-hidden="true" style={{opacity:"1"}}>e</span>
                  <span className={`${letterClass} _23`} aria-hidden="true" style={{opacity:"1"}}>l</span>
                  <span className={`${letterClass} _24`} aria-hidden="true" style={{opacity:"1"}}>o</span>
                  <span className={`${letterClass} _25`} aria-hidden="true" style={{opacity:"1"}}>p</span>
                  <span className={`${letterClass} _26`} aria-hidden="true" style={{opacity:"1"}}>e</span>
                  <span className={`${letterClass} _27`} aria-hidden="true" style={{opacity:"1"}}>r</span>
                </h1>
                <p className="desc">
                  I'am &nbsp;
                  <span className= 'typing' style={{ whiteSpace: 'pre' }} ref={el} />
                </p> 
                <Reveal>
                  <a rel="contact-me" href="/contact-me" className="flat-button">
                    <div>
                      <span className="bg"></span>
                      <span className="base"></span>
                      <span className="text">Contact me!</span>
                    </div>
                  </a>
                </Reveal>
              </div>
              <DancingLines></DancingLines>
              <svg className="scroll-down">
                <path className="a1" d="M0 0 L30 32 L60 0"></path>
                <path className="a2" d="M0 20 L30 52 L60 20"></path>
                <path className="a3" d="M0 40 L30 72 L60 40"></path>
              </svg>
            </section>

            <section className="section-work">
              <Reveal>
                <div className="fake-big">Work</div>
              </Reveal>
              <div className="text-zone">
                <div>
                  <header>
                    <h2 aria-label="My Portfolio" className="blast-root">
                      <span className={`${letterClassSecondary} _1`} aria-hidden="true" style={{opacity:"1"}}>M</span>
                      <span className={`${letterClassSecondary} _2`} aria-hidden="true" style={{opacity:"1"}}>y</span>
                      &nbsp;
                      <span className={`${letterClassSecondary} _3`} aria-hidden="true" style={{opacity:"1"}}>P</span>
                      <span className={`${letterClassSecondary} _4`} aria-hidden="true" style={{opacity:"1"}}>o</span>
                      <span className={`${letterClassSecondary} _5`} aria-hidden="true" style={{opacity:"1"}}>r</span>
                      <span className={`${letterClassSecondary} _6`} aria-hidden="true" style={{opacity:"1"}}>t</span>
                      <span className={`${letterClassSecondary} _7`} aria-hidden="true" style={{opacity:"1"}}>f</span>
                      <span className={`${letterClassSecondary} _8`} aria-hidden="true" style={{opacity:"1"}}>o</span>
                      <span className={`${letterClassSecondary} _9`} aria-hidden="true" style={{opacity:"1"}}>l</span>
                      <span className={`${letterClassSecondary} _10`} aria-hidden="true" style={{opacity:"1"}}>i</span>
                      <span className={`${letterClassSecondary} _11`} aria-hidden="true" style={{opacity:"1"}}>o</span>
                    </h2>
                  </header>
                  <Fade bottom>
                    <p>
                    Check out some of my latest work in a small gallery. I have worked on various projects as a student but have no further experience so I do not have projects in a production.
                    You have to be patient to see my growth. Coming Soon..
                    <br></br>
                    Interested to see some more?  Visit 
                    <a rel="work" href="/my-portfolio/"> my work</a> page.
                    </p>
                  </Fade>
                </div>
              </div>
            </section>
            <Fade bottom>
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
            </Fade>
            <section className="section-about">
              <div className="text-zone">
                <div>
                  <header>
                    <h3 aria-label="Me, Myself and I" className="blast-root">
                      <span className={`${letterClassSecondary} _1`} aria-hidden="true" style={{opacity:"1"}}>M</span>
                      <span className={`${letterClassSecondary} _2`} aria-hidden="true" style={{opacity:"1"}}>e</span>
                      <span className={`${letterClassSecondary} _3`} aria-hidden="true" style={{opacity:"1"}}>,</span>
                      &nbsp;
                      <span className={`${letterClassSecondary} _4`} aria-hidden="true" style={{opacity:"1"}}>M</span>
                      <span className={`${letterClassSecondary} _5`} aria-hidden="true" style={{opacity:"1"}}>y</span>
                      <span className={`${letterClassSecondary} _6`} aria-hidden="true" style={{opacity:"1"}}>s</span>
                      <span className={`${letterClassSecondary} _7`} aria-hidden="true" style={{opacity:"1"}}>e</span>
                      <span className={`${letterClassSecondary} _8`} aria-hidden="true" style={{opacity:"1"}}>l</span>
                      <span className={`${letterClassSecondary} _9`} aria-hidden="true" style={{opacity:"1"}}>f</span>
                      &nbsp;
                      <span className={`${letterClassSecondary} _10`} aria-hidden="true" style={{opacity:"1"}}>a</span>
                      <span className={`${letterClassSecondary} _11`} aria-hidden="true" style={{opacity:"1"}}>n</span>
                      <span className={`${letterClassSecondary} _12`} aria-hidden="true" style={{opacity:"1"}}>d</span>
                      &nbsp;
                      <span className={`${letterClassSecondary} _13`} aria-hidden="true" style={{opacity:"1"}}>I</span>
                    </h3>
                  </header>
                  <Fade bottom>
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
                  </Fade>
                </div>
              </div>
              <div className="skill-charts">
                <span id="tagcloud" className="tagcloud" ></span>
                <span id="tagcloudMobile" className="tagcloudMobile" ></span>
              </div>
            </section>

            <section className="section-contact">
              <Reveal>
                <div className="fake-big">@</div>
              </Reveal>
              <div className="text-zone">
                <div>
                  <header>
                    <h4 aria-label="Contact Me" className="blast-root">
                      <span className={`${letterClassSecondary} _1`} aria-hidden="true" style={{opacity:"1"}}>C</span>
                      <span className={`${letterClassSecondary} _2`} aria-hidden="true" style={{opacity:"1"}}>o</span>
                      <span className={`${letterClassSecondary} _3`} aria-hidden="true" style={{opacity:"1"}}>n</span>
                      <span className={`${letterClassSecondary} _4`} aria-hidden="true" style={{opacity:"1"}}>t</span>
                      <span className={`${letterClassSecondary} _5`} aria-hidden="true" style={{opacity:"1"}}>a</span>
                      <span className={`${letterClassSecondary} _6`} aria-hidden="true" style={{opacity:"1"}}>c</span>
                      <span className={`${letterClassSecondary} _7`} aria-hidden="true" style={{opacity:"1"}}>t</span>
                      &nbsp;
                      <span className={`${letterClassSecondary} _8`} aria-hidden="true" style={{opacity:"1"}}>M</span>
                      <span className={`${letterClassSecondary} _9`} aria-hidden="true" style={{opacity:"1"}}>e</span>
                    </h4>
                  </header>
                </div>
                <Fade bottom>
                  <p>
                    Looking for an Entry Level Software Engineer position that will enable me to use my strong skills and educational background.
                    I’m interested for opportunities to start my career, If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.
                  </p>
                  <div className="contact-form">
                    <form autoComplete="off" ref={formRef} onSubmit={onSubmit}>
                      <ul className= "">
                        <li className= "half">
                          <input 
                            autoComplete="off" 
                            type="text" 
                            className="text-name" 
                            placeholder="Name" 
                            name="name"  
                            value={validInpt.name}
                            onChange={handleChange}
                          />
                          <BsExclamationLg className="exclamation" />
                          <BsPatchCheckFill className="checkCircle" />
                        </li>
                        <li className= "half">
                          <input 
                            autoComplete="false"
                            ref={emailRef}
                            type="email"
                            className="text-email" 
                            placeholder="Email" 
                            name="email" 
                            value={validInpt.email}
                            onChange={handleChange}
                          />
                          <BsExclamationLg className="exclamation" />
                          <BsPatchCheckFill className="checkCircle" />
                        </li>
                        <li>
                          <input 
                            autoComplete="false"
                            type="text" 
                            className="text-subject full"  
                            placeholder="Subject" 
                            name="subject" 
                            value={validInpt.subject}
                            onChange={handleChange}
                          />
                          <BsExclamationLg className="exclamation" />
                          <BsPatchCheckFill className="checkCircle" />
                        </li>
                        <li>
                          <textarea 
                            autoComplete="false"
                            ref={TextAreaRef}  
                            type="text"
                            rows="5" 
                            placeholder="Message" 
                            name="message"
                            value={validInpt.message}
                            onChange={handleChange}
                          />
                          <BsExclamationLg className="exclamation" />
                          <BsPatchCheckFill className="checkCircle" />
                        </li>
                        <button className="flat-button-2" type="submit">
                          <div>
                            <span className="bg"></span>
                            <span className="base"></span>
                            <span className="text" >
                              Send Message!
                            <RiSendPlane2Fill className="message-deliver"/>  
                            </span>
                          </div>
                        </button>
                        <div ref={MessageRef} className="message"></div> 
                      </ul>
                    </form>
                  </div>
                </Fade>
              </div>
              <div className="contact-map">
                <img src={Map} alt="" className="map"/>
                <Reveal>
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
                </Reveal>
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