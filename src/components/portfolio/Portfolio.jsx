// CSS
import './portfolio.css'

// Dependencies
import Fancybox from "./fancybox.js";

const Portfolio = () => {

  return (
    <div className="grid-wall">
      <Fancybox options={{ infinite: false }}>    
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
                  <a href='http://google.com'>Coming Soon 2!</a>
                </div>">
              </a>
            </figcaption>	
          </figure>
        </div>
      </Fancybox>
    </div> 
  )
}

export default Portfolio;