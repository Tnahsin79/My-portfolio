import React from "react";
import "./Experience.css";

const Experience = () => {
    return (
        <div className="container-fluid experience" id="experience">
            <br></br>
            <br></br>
            <br></br>
            <div className="row">
                <div className="col col-5"><h2>EXPERIENCE</h2></div>
                <div className="col col-7">
                    <div class="card-deck">
                        <div class="card border-primary mb-3">
                            <div class="card-header">01-June-2018 to 31-July-2018</div>
                            <div class="card-body">
                                <h5 class="card-title">Industrial Training (DESIDOC, DRDO)</h5>
                                <p class="card-text">Trainee at DESIDOC, DRDO to understand and learn about clustering algorithms like K-Means and DB-Scan</p>
                            </div>
                        </div>
                        <div class="card border-primary mb-3">
                            <div class="card-header">20-July-2020 to Present</div>
                            <div class="card-body">
                                <h5 class="card-title">Full Stack web Development Training (GUVI, ZEN)</h5>
                                <p class="card-text">Underwent 4-months of full-stack web Development using MERN stack through GUVI platform.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Experience;