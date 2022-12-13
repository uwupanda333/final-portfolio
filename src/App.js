import './App.css';
import React, { useRef, useState} from 'react';
import yans from './images/yans.png';
import azuki from './images/azuki.png';
import gem from './images/gem.png';
import bakery from './images/bakery.png';
import panda from './images/panda.png';
import github from './images/github.png';
import linkedin from './images/linkedin.png';

const HoverButton = () => {
  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button       
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={hover ? "pretty-buttonn" : "pretty-button"}
      style={{ float: "right"}} onClick={handleClick}>
      Back to top
    </button>
  );
};

const HoverYans = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <img
      src={yans} 
      alt="logo" 
      className="image"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transition: 'transform 0.5s',
        transform: isHovered ? 'scale(1.1)' : 'scale(1)'
      }}
    />
  );
}

const HoverAzuki = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <img
      src={azuki} 
      alt="logo" 
      className="image"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transition: 'transform 0.5s',
        transform: isHovered ? 'scale(1.1)' : 'scale(1)'
      }}
    />
  );
}

const HoverGem = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <img
      src={gem} 
      alt="logo" 
      className="image"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transition: 'transform 0.5s',
        transform: isHovered ? 'scale(1.1)' : 'scale(1)'
      }}
    />
  );
}

const HoverBakery = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <img
      src={bakery} 
      alt="logo" 
      className="image"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transition: 'transform 0.5s',
        transform: isHovered ? 'scale(1.1)' : 'scale(1)'
      }}
    />
  );
}

function App() {
  const yansRef = useRef(null);
  const azukiRef = useRef(null);
  const bakeryRef = useRef(null);
  const gemRef = useRef(null);
  function TableOfContents() {
  
    // Keep track of which section the user is currently viewing
    const handleSectionChange = (section) => {
      if(section.id === 2){
        azukiRef.current.scrollIntoView({ behavior: 'smooth' });
      }
      else if(section.id === 3){
        bakeryRef.current.scrollIntoView({ behavior: 'smooth' });
      }
      else if(section.id === 4){
        gemRef.current.scrollIntoView({ behavior: 'smooth' });
      }
      else{
      yansRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }
  
    // Create a list of links to the different sections of the page
    const sections = [
      { id: 1, title: 'New and improved redesign of Yan\'s Cuisine\'s website' },
      { id: 2, title: 'Interactive prototype of Azuki\'s application' },
      { id: 3, title: 'The One and Only Pattiserie (an interactive bakery frontend)' },
      { id: 4, title: 'Personifying and storyboarding a Gem Blow Dryer' },
    ];
  
    return (
      <div class="table-of-contents" style={{ position: 'fixed', left: 0, top: 48, width: 200, padding: 10, boxSizing: 'border-box'}}>
        <h3 style={{paddingLeft: 10, paddingRight: 10}}>Table of Contents</h3>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {sections.map((section) => (
            <li key={section.id} style={{ marginBottom: 10 }}>
              <a href={`#${section.id}`} className="link" onClick={() => handleSectionChange(section)}>
                {section.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div>
        <div id="navbar">
         <ul>
           <li><a href="/">Home</a></li>
           <li><a href="about">About</a></li>
         </ul>
       </div>
      <h1 style={{ textAlign: 'center' }}>
        Hi! Welcome to the portfolio of uwupanda333
      </h1>

      <h2 style={{ textAlign: 'center', fontWeight: 'normal' }}>
        A Rhode Island-based full-stack programmer 
      </h2>

      <br />
      <img src={panda} style={{ display: "block", margin: "auto" }} width="300" height="250"alt="logo"/>
      <br />

      <h2 style={{ textAlign: 'center', fontWeight: 'normal' }}>
        Check out my work!
      </h2>

      <br />
      <hr />
      <br />

      <TableOfContents />

      <h1 style={{ textAlign: 'center' }} ref={yansRef}>
        New and improved redesign of <a href="https://www.yansri.com/" className="link">Yan's Cuisine</a>'s website
      </h1>
      <a href="https://uwupanda333.github.io/responsive-redesign/">
        <HoverYans />
      </a>
      <br/>
      <div style={{ margin: '0 auto' }}>
        <h2>
          <ul>
            Click these links for:
            <li><a href="https://uwupanda333.github.io/responsive-redesign/" className="link">Motivations and process</a></li>
            <li><a href="https://uwupanda333.github.io/responsive-redesign/" className="link">Redesigned site</a></li>
          </ul>
      </h2>
      </div>

      <br/>
      <hr/>
      <br/>
      
      <h1 style={{ textAlign: 'center' }} ref={azukiRef}>
        Interactive prototype of <a href="https://www.azuki.com/" className="link">Azuki</a>'s application
      </h1>
      <a href="https://joyousmoose333.github.io/iterative-design/">
        <HoverAzuki />
      </a>
      <br/>
      <div style={{ margin: '0 auto' }}>
        <h2>
          <ul>
            Click these links for:
            <li><a href="https://joyousmoose333.github.io/iterative-design/" className="link">Motivations and process</a></li>
            <li><a href="https://www.figma.com/proto/EtcflLQTgohIrQWn5ooW6b/Anonymous-Azuki-Hi-Fi?node-id=5%3A1793&starting-point-node-id=5%3A1793&scaling=scale-down" className="link">Redesigned site</a></li>
          </ul>
      </h2>
      </div>

      <br/>
      <hr/>
      <br/>
      
      <h1 style={{ textAlign: 'center' }} ref={bakeryRef}>
        The One and Only Pattiserie (an interactive bakery frontend)
      </h1>
      <a href="https://uwupanda333.github.io/development/" className="link">
        <HoverBakery />
      </a>
      <br/>
      <div style={{ margin: '0 auto' }}>
        <h2>
          <ul>
            Click these links for:
            <li><a href="https://uwupanda333.github.io/development/" className="link">The web page</a></li>
          </ul>
      </h2>
      </div>

      <br/>
      <hr/>
      <br/>
      
      <h1 style={{ textAlign: 'center' }} ref={gemRef}>
        Personifying and storyboarding a Gem Blow Dryer
      </h1>
      <a href="https://uwupanda333.github.io/personas-storyboard/" className="link">
        <HoverGem />
      </a>
      <br/>
      <div style={{ margin: '0 auto' }}>
        <h2>
          <ul>
            Click these links for:
            <li><a href="https://uwupanda333.github.io/personas-storyboard/" className="link">Motivations and process</a></li>
          </ul>
        </h2>
      </div>

      <br/>
      <hr/>
      <br/>

      <div style={{ textAlign: "center" }}>
        <p> &copy; 2022 | Created by uwupanda333</p>
        <HoverButton />

        <div style={{margin:'auto', width: '200px'}}>
          <a href="https://www.linkedin.com/">
            <img src={linkedin} style={{ width: '50px', height: '50px' }} alt="LinkedIn" />
          </a>
          <a href="https://github.com/">
            <img src={github} style={{ width: '50px', height: '50px' }} alt="GitHub" />
          </a>
        </div>

      </div>
    </div>
  );
}

export default App;
