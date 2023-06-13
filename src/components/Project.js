import React from "react";
import "../style/Project.css";

//project component
function Project (props) {
    return (
        //card container for each project
        <div className="card">
            <h5 className="card-title">{props.title}</h5>
            <a href={props.deployedLink} target="_blank" rel="noreferrer">
            </a>
            <div className="card-body">
                <p className="card-text">{props.description}</p>
                <a
                href={props.githubLink}
                target="_blank"
                rel="noreferrer"
                className="btn btn-repo">
                </a>
            </div>
        </div>
    );
}

//export project
export default Project;