import "./about.css";
// import Me from "../../img/me.png"
const About =()=>{
    
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_1280.jpg"
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
            
         Chandigarh college Of Engineering And Technology,Chandigarh ,Sector-26
        </p>
        <p>Computer Science Enginnering with 7.5 CGPA</p>
        <p>Dear Sir/Madam
          </p>
        <p className="a-desc">
          I Looking for an Internship in the Development Domain.<br></br>
          <p>I'm Fully confidence in Frontend Development</p>
        <b>I have Done</b>

        <p>Java-Scripts, HTML,  CSS ,OOps, Java ,  Frontend-Library
        And Data structure & algorithm With Java.
        </p>
        </p>
        <div className="a-award">
          {/* <img src={Me} alt="" className="a-award-img" /> */}
          <div className="a-award-texts">
            <h4 className="a-award-title">Intermediate Vollyball Award 2018</h4>
            <p className="a-award-desc">
                <div className="a-skill">
                   
                <button className="a-project">Projects</button>  
                <button  className="a-program">Prgoramming</button> 
                <button className="a-fram">Framwork</button>
                <button  className="a-data">Data Base</button>
                </div>
                <div>
               <a href="https://surendra936.github.io/SpotifyClone.github.io/">Spotify</a><br />
               <a href="http://localhost:3000/">Portfolio</a>
               <a href="http://localhost:3001/">picsportio</a>
               </div>

               
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;