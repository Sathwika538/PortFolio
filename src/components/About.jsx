import React from "react";
import * as animationData from "./info.json";
import Lottie from "lottie-react";
import CollapsibleExample from "./Navbar";
const About = () => {
    return (
      <div>
        <CollapsibleExample />
        <div className="row container-fluid">
        <div className="container col-lg-6 title-image" style={{padding:"20px"}}>
          <Lottie animationData={animationData} />;
        </div>
    <div className="container col-lg-5 texts" style={{
        paddingLeft:"5px"
        
        }}>
        <h5>
        I am primarily interested in Web Development.
        <br/>
<br/>
Libraries/Frameworks I have experience with Node.js , jQuery, Bootstrap.
<br/>
<br/>
I am also comfortable with git, Github, API's,
<br/>
<br/>
Frameworks I am currently working on: MongoDB , React.js
<br/>
<br/>
Programming Languages I am comfortable in: Javascript , SQL , CSS , HTML , C++ ,JAVA.

        </h5>
          
        </div>
        
        </div>
      </div>
    );
  };
export default About;
