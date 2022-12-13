import './App.css';
import yans from './images/yans.png';
import azuki from './images/azuki.png';
import gem from './images/gem.png';
import bakery from './images/bakery.png';
import panda from './images/panda.png';
import { useState } from 'react';

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

function App() {
  return (
    <div>
      <h1 style={{ marginLeft: '15%' }}>
        Hi! Welcome to the portfolio of uwupanda333
      </h1>

      <h2 style={{ marginLeft: '15%', fontWeight: 'normal' }}>
        A Rhode Island-based full-stack programmer 
      </h2>

      <br />
      <img src={panda} style={{ display: "block", margin: "auto" }} width="300" height="250"alt="logo"/>
      <br />

      <h2 style={{ marginLeft: '15%', fontWeight: 'normal' }}>
        Check out my work!
      </h2>

      <br />
      <hr />
      <br />

      <h1 style={{ textAlign: 'center' }}>
        New and improved redesign of <a href="https://www.yansri.com/">Yan's Cuisine</a>'s website
      </h1>
      <img src={yans} alt="logo" className="image"/>
      <br/>
      <div style={{ margin: '0 auto' }}>
        <h2>
          <ul>
            Click these links for:
            <li><a href="https://uwupanda333.github.io/responsive-redesign/">Motivations and process</a></li>
            <li><a href="https://uwupanda333.github.io/responsive-redesign/">Redesigned site</a></li>
          </ul>
      </h2>
      </div>

      <br/>
      <hr/>
      <br/>
      
      <h1 style={{ textAlign: 'center' }}>
        Interactive prototype of <a href="https://www.azuki.com/">Azuki</a>'s application
      </h1>
      <img src={azuki} alt="logo" className="image"/>
      <br/>
      <div style={{ margin: '0 auto' }}>
        <h2>
          <ul>
            Click these links for:
            <li><a href="https://joyousmoose333.github.io/iterative-design/">Motivations and process</a></li>
            <li><a href="https://www.figma.com/proto/EtcflLQTgohIrQWn5ooW6b/Anonymous-Azuki-Hi-Fi?node-id=5%3A1793&starting-point-node-id=5%3A1793&scaling=scale-down">Redesigned site</a></li>
          </ul>
      </h2>
      </div>

      <br/>
      <hr/>
      <br/>
      
      <h1 style={{ textAlign: 'center' }}>
        The One and Only Pattiserie (an interactive bakery frontend)
      </h1>
      <img src={bakery} alt="logo" className="image"/>
      <br/>
      <div style={{ margin: '0 auto' }}>
        <h2>
          <ul>
            Click these links for:
            <li><a href="https://uwupanda333.github.io/development/">The web page</a></li>
          </ul>
      </h2>
      </div>

      <br/>
      <hr/>
      <br/>
      
      <h1 style={{ textAlign: 'center' }}>
        Personifying and storyboarding a Gem Blow Dryer
      </h1>
      <img src={gem} alt="logo" className="image"/>
      <br/>
      <div style={{ margin: '0 auto' }}>
        <h2>
          <ul>
            Click these links for:
            <li><a href="https://uwupanda333.github.io/personas-storyboard/">Motivations and process</a></li>
          </ul>
        </h2>
      </div>

      <br/>
      <hr/>
      <br/>

      <div style={{ textAlign: "center" }}>
        <p> &copy; 2022 | Created by uwupanda333</p>
        <HoverButton />
      </div>
    </div>
  );
}

export default App;
