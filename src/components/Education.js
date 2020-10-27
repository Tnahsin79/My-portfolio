import React from "react";
import "./Education.css";

const Education = () => {
    return (
        <div className="container-fluid education" id="education">
            <br></br>
            <br></br>
            <br></br>
            <div className="row">
                <div className="col col-5"><h2>EDUCATION</h2></div>
                <div className="col col-7">
                    <div class="card-deck">
                        <div class="card border-primary mb-3">
                            <div class="card-header">High School (10+2)</div>
                            <div class="card-body">
                                <h5 class="card-title">NUTAN VIDYA MANDIR SR. SEC. SCHOOL, DELHI</h5>
                                <p class="card-text">Class 10th: CGPA = 9.4/10.0</p>
                                <p class="card-text">Class 12th: Percentage = 87.3%</p>
                            </div>
                        </div>
                        <div class="card border-primary mb-3">
                            <div class="card-header">UG B.Tech (CSE)</div>
                            <div class="card-body">
                                <h5 class="card-title">Dr. Akhilesh Das Gupta Institute of Technology and Management (formerly NORTHERN INDIA ENGINEERING COLLEGE)</h5>
                                <p class="card-text">CGPA = 8.37/10.0</p>
                                <p class="card-text">Equivalent Percentage = 83.7%</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Education;