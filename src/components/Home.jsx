import React from "react";
import * as animationData from "./hi-wink.json";
import Lottie from "lottie-react";
import "bootstrap/dist/css/bootstrap.min.css";
function Home(){
  return(
    <div className="row container-fluid">
    <div className="container col-lg-5 texts" style={{
        paddingLeft:"10px"
        }}>
          <h1 style={{ fontSize: "4.25rem", 
                       fontWeight: "bold",
                       paddingBottom:"5px"
                        }}>Hi there!</h1>
          <h1 style={{ fontSize: "3.25rem",paddingBottom:"15px" }}>I'm Sathwika</h1>
          <h2 style={{ fontSize: "2.25rem" }}>
            Full-stack Web Developer who's keen on building end-to-end Web Projects.
          </h2>
        </div>
        <div className="container col-lg-6 title-image">
          <Lottie animationData={animationData} />;
        </div>
        </div>
  )
}
export default Home;