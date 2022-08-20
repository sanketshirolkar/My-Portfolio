import "./intro.scss";


const Intro = () => {
  return (
    <div className="intro" id="intro">
      <div className="left_intro">
        <div className="imageContainer">
          <img src="assets/avataaars.png" alt="Avataar"/>
        </div>
      </div>
      <div className="right_intro">
        <div className="wrapper_intro">
          <h2>Hi There, I'm</h2>
          <h1>Sanket Shirolkar</h1>
          <h3>
            I Love <span>Table Tennis</span> 
          </h3>
        </div>
      </div>
    </div>
  )
}

export default Intro;