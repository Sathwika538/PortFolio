import CollapsibleExample from "./Navbar";
import * as React from "https://cdn.skypack.dev/react@17.0.1";
import * as ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";
import WebIcon from '@mui/icons-material/Web';
import GitHubIcon from '@mui/icons-material/GitHub';
import df from "./df.png";
import {  Link } from "react-router-dom";
function Projects() {
  return (
    <div>
    <CollapsibleExample />
    <div className="wrapper">

      <Card
        img={df}
        title="Data Fetchers"
        description="Take your boring salads up a knotch. This recipe is perfect for lunch
          and only contains 5 ingredients!"
      />

      
    </div>
    </div>
  );
}

function Card(props) {
  return (
    <div className="card">
      <div className="card__body">
        <img src={props.img} class="card__image" alt=""/>
        <h2 className="card__title">{props.title}</h2>
        <p className="card__description">{props.description}</p>
      </div>
      <div className="row row-btns">
      <a  href="https://github.com/Sathwika538" target={"_blank"} rel={"noreferrer"}>
      <button className="card__btn"><GitHubIcon />Github</button>
      </a>
     
      <button className="card__btn"><WebIcon />Website</button>
    </div>
    </div>
  );
  
}

export default Projects;
