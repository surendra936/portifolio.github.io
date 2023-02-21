import "./intro.css"
import Me from "../../img/me.png"

const Intro = () => {
    return (
      <div className="i">
        <div className="i-left"></div>
        <div className="i-left-wrapper">
        <h2 className="i-intro">Hello,My Name is</h2>
        <h1 className="i-name">Surendra</h1>
        <div className="i-title">
        <div className="i-title-wrapper">
          <div className="i-title-item">Web Developer</div> 
          <div className="i-title-item">React-JS Developer</div> 
          <div className="i-title-item">Software Developer</div>  
        </div>
        </div>
        <div className="i-discription">
            <p>
        I intend to be a part of an organization as a software developer.
        where I can make best use of my technical skills 
        for the growthof the company while consistently learning <br></br>
        and developing my knowledge.
        </p>
        </div>
        </div>
       
        <div className="i-right"></div>
        <div className="i-bg"></div>
        <img src={Me}alt="" className="i-img"></img>
      </div>
    );
  };
  
  export default Intro;