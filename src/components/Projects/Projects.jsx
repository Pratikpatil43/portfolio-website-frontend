import React from 'react';
import './Projects.css';
import { Card, CardContent, Typography } from '@mui/material';

const Projects = () => {
  return (
    <div className="#section3" id='section3'>
    <div className="section3">
      <center><h1>MY PROJECTS</h1></center>

      <div className="projects-container">
        <div className="project-card">
          <Card className="project-card">
            <CardContent>
              <Typography variant="h5" component="div">
                Project 1: <br /> Weather App
              </Typography>
              <Typography variant="body2" color="text.secondary">
                I have developed Weather Application which is developed in HTML CSS and JAVASCRIPT and the API are conected to it through API it will show the Temperature of searched City.
              </Typography>
            </CardContent>
          </Card>
        </div>

        <div className="project-card">
          <Card className="project-card">
            <CardContent>
              <Typography variant="h5" component="div">
                Project 2: <br /> Genx Solution Site
              </Typography>
              <Typography variant="body2" color="text.secondary">
                This site is developed by me,site is developed for Organization/company this site has mainly the core data part.and Backend Connected to it as gmail form data connected as user fills the form and sumbit it the company owner gets Email what information user has provided.
              </Typography>
            </CardContent>
          </Card>
        </div>

        <div className="project-card">
          <Card className="project-card">
            <CardContent>
              <Typography variant="h5" component="div">
                Project 3: <br /> Food Delivery Web Applicaion
              </Typography>
              <Typography variant="body2" color="text.secondary">
                This Food Delivery Web Appliation is developed for core delivery of food I have used core programming languages as MERN Languages as nodejs express monogdb React as this all frameworks I have used to build it.
              </Typography>
            </CardContent>
          </Card>
        </div>

        <div className="project-card">
          <Card className="project-card">
            <CardContent>
              <Typography variant="h5" component="div">
                Project 4: <br /> School Website
              </Typography>
              <Typography variant="body2" color="text.secondary">
                School Website that is core build in HTML CSS and JAVASCRIPT and school website name is Shri Radhakrishna Education School which is developed in the month of december in 2023 also we have connected backend as form filling for users and also I have used the map API to Enable Map on the website to see the school location.
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Projects;
