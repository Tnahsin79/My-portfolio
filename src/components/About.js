import React from "react";
import "./About.css";

const About = () => {
    return (
        <div className="container-fluid about" id="about">
            <br></br>
            <br></br>
            <br></br>
            <div className="row">
                <div className="col col-5"><h2>ABOUT ME</h2></div>
                <div className="col col-7">
                    <h2>
                        My name is Nishant Sharma. I'm a graduate with a degree of B.Tech in
                        Computer Science and Engineering from Guru Gobind Singh Indraprasstha University.
                        I am a Full Stack MERN Developer, with keen understanding of MongoDB,
                        ExpressJS, ReactJS, NodeJS, Data Structures and Algorithms.
                    </h2>
                    <h2>
                        I have 400+ codekata code submission on GUVI platform. Other than coding,
                        my interest lie in anime, movies and travelling.
                    </h2>
                </div>
            </div>
        </div>
    );
}
export default About;

/*
background: #342A2D;
background: -webkit-linear-gradient(right, #342A2D, #B66E5F);
background: -moz-linear-gradient(right, #342A2D, #B66E5F);
background: linear-gradient(to left, #342A2D, #B66E5F);
*/