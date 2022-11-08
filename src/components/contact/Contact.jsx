// CC
import "./contact.css"

// Dependencies
import mark from '../../img/mark-logo.png'
import mapStyles from "./mapStyles.js"
import emailjs from 'emailjs-com'
import {useRef, useState } from "react"
import{ 
  GoogleMap, 
  useLoadScript, 
  Marker,
} from "@react-google-maps/api"


const libraries = ["places"]

const mapContainerStyle = {
  width: "100%",
  height: "99.4vh",
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
                  <span className="blast" aria-hidden="true">C</span>
                  <span className="blast" aria-hidden="true">o</span>
                  <span className="blast" aria-hidden="true">n</span>
                  <span className="blast" aria-hidden="true">t</span>
                  <span className="blast" aria-hidden="true">a</span>
                  <span className="blast" aria-hidden="true">c</span>
                  <span className="blast" aria-hidden="true">t</span>
                  &nbsp;
                  <span className="blast" aria-hidden="true">M</span>
                  <span className="blast" aria-hidden="true">e</span>
                </h1>
              </header>  
            </div>
            <p>
            Looking for an Entry Level Software Engineer position that will enable me to use my strong skills and educational background.
            I’m interested for opportunities to start my career, If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.
            </p>
            <div className="form">
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
          </div>
        </section>
      </div>
      <span className="tags bottom-tags" id='contact-bottom-tags'>
        &lt;/html&gt;
        <br></br>
      </span> 
    </div>  
  )  
}

export default Contact;