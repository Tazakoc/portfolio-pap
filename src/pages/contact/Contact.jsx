// CC
import "./contact.scss"

// Dependencies
import mark from '../../img/mark-logo.png'
import mapStyles from "./mapStyles.js"
import emailjs from 'emailjs-com'
import Reveal from 'react-reveal/Reveal'
import Fade from 'react-reveal/Fade'
import React, {useRef, useState } from "react"
import { BsExclamationLg, BsPatchCheckFill } from 'react-icons/bs'
import { RiSendPlane2Fill } from 'react-icons/ri'
import{ 
  GoogleMap, 
  useLoadScript, 
  Marker,
} from "@react-google-maps/api"


const libraries = ["places"]

const mapContainerStyle = {
  width: "100%",
  height: "100vh",
}

const mapContainerStyleMobile = {
  width: "100vw",
  height: "80vh",
}

const center = {
  lat: 37.972130,
  lng: 23.578870,
};

const centerMobile = {
  lat: 37.976130,
  lng: 23.568870,
};

const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControls: true,
};


const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate-contact')

  React.useEffect(() => {
    setTimeout(() => {
      setLetterClass('blast')
    }, 4000)
  }, [])

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

  const {isLoaded, loadError} = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  if(loadError) return "Error loading maps";
  if(!isLoaded) return "Loading Maps";

  return (
    <div className="page-outer">
      <span className="tags top-tags">
        &lt;html&gt;
        <br></br>
      </span>
      <div className="page-inner">
        <section className="contact">
          <div className="text-zone">
            <div>
              <header>
                <h1 aria-label="Contact Me" className="blast-root">
                  <span className={`${letterClass} _1`} aria-hidden="true">C</span>
                  <span className={`${letterClass} _2`} aria-hidden="true">o</span>
                  <span className={`${letterClass} _3`} aria-hidden="true">n</span>
                  <span className={`${letterClass} _4`} aria-hidden="true">t</span>
                  <span className={`${letterClass} _5`} aria-hidden="true">a</span>
                  <span className={`${letterClass} _6`} aria-hidden="true">c</span>
                  <span className={`${letterClass} _7`} aria-hidden="true">t</span>
                  &nbsp;
                  <span className={`${letterClass} _8`} aria-hidden="true">M</span>
                  <span className={`${letterClass} _9`} aria-hidden="true">e</span>
                </h1>
              </header>  
            </div>
            <Fade bottom>
              <p>
                Looking for an Entry Level Software Engineer position that will enable me to use my strong skills and educational background.
                I’m interested for opportunities to start my career, If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.
              </p>
              <div className="form">
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
          <div className="GoogleMap" >
            <GoogleMap 
              mapContainerStyle={mapContainerStyle}
              zoom = {15}
              center = {center}
              options = {options}
            >
            <Marker
              icon={{url: mark}}
              position= {{lat:37.967130 , lng:23.563870}}
            ></Marker></GoogleMap>
            <Reveal>
              <div className="inf-map show"> 
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
          <div className="GoogleMapMobile" >
            <GoogleMap 
              mapContainerStyle={mapContainerStyleMobile}
              zoom = {14}
              center = {centerMobile}
              options = {options}
            >
            <Marker
              icon={{url: mark}}
              position= {{lat:37.967130 , lng:23.563870}}
            ></Marker></GoogleMap>
            <Reveal>
              <div className="inf-map show"> 
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
        <div ref={MessageRef} className="message"></div>
      </div>
      <span className="tags bottom-tags" id='contact-bottom-tags'>
        &lt;/html&gt;
        <br></br>
      </span> 
    </div>  
  )  
}

export default Contact;