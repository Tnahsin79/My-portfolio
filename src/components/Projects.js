import React from "react";
import "./Projects.css";

const Projects = () => {
    return (
        <div className="container-fluid projects" id="projects">
            <br></br>
            <br></br>
            <br></br>
            <div>
                <h2>PROJECTS</h2>
                <div className="container">
                    <div className="card-deck">
                        <div className="card border-primary mb-3 proj">
                            <div className="card-header">Project title</div>
                            <div className="card-body">
                                <h5 className="card-title">Project link</h5>
                                <p className="card-text">Project Description</p>
                            </div>
                        </div>
                        <div className="card border-primary mb-3 proj">
                            <div className="card-header">Project title</div>
                            <div className="card-body">
                                <h5 className="card-title">Project link</h5>
                                <p className="card-text">Project Description</p>
                            </div>
                        </div>
                    </div>
                    <div className="card-deck">
                        <div className="card border-primary mb-3 proj">
                            <div className="card-header">Project title</div>
                            <div className="card-body">
                                <h5 className="card-title">Project link</h5>
                                <p className="card-text">Project Description</p>
                            </div>
                        </div>
                        <div className="card border-primary mb-3 proj">
                            <div className="card-header">Project title</div>
                            <div className="card-body">
                                <h5 className="card-title">Project link</h5>
                                <p className="card-text">Project Description</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Projects;