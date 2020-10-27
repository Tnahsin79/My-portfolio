import React from "react";
import "./Skills.css";
import "./images/nodejs.jpg";


const Skills = () => {
    return (
        <div className="container skills" id="education">
            <br></br>
            <br></br>
            <br></br>
            <h2>SKILLS</h2>
            <div className="card-columns">
                <div className="card w-50 zoom">
                    <div>
                        <img className="card-img-bottom" src="data:image/png;base64,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" alt="nodejs" />
                    </div>
                </div>
                <div className="card w-50 zoom">
                    <div>
                        <img className="card-img-bottom" src="data:image/png;base64,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" alt="nodejs" />
                    </div>
                </div>
                <div className="card w-50 zoom">
                    <div>
                        <img className="card-img-bottom" src="https://obscureproblemsandgotchas.com/wp-content/uploads/2018/06/bootstrap-stack-e1530246058846.png" alt="nodejs" />
                    </div>
                </div>
                <div className="card w-50 zoom">
                    <div>
                        <img className="card-img-bottom" src="https://banner2.cleanpng.com/20190111/thz/kisspng-mongodb-logo-database-nosql-postgresql-how-to-create-an-outstanding-tech-stack-clickup-bl-5c391bdf9cff48.4731136215472465596431.jpg" alt="nodejs" />
                    </div>
                </div>
                <div className="card w-50 zoom">
                    <div>
                        <img className="card-img-bottom" src="https://mpng.subpng.com/20180425/jrw/kisspng-node-js-javascript-web-application-express-js-comp-5ae0f84e2a4242.1423638015246930701731.jpg" alt="nodejs" />
                    </div>
                </div>
                <div className="card w-50 zoom">
                    <div>
                        <img className="card-img-bottom" src="https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/064fc70f-5df3-4333-b9d4-f6abe2f946de/react-wp-app8.png" alt="nodejs" />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Skills;
/*
<div class="card bg-primary w-50 zoom">
                    <p class="card-text">Some text inside the fifth card</p>
                </div>
                <div class="card bg-primary w-50 zoom">
                    <p class="card-text">Some text inside the fifth card</p>
                </div>
*/