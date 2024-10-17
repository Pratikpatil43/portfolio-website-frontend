import React from 'react';
import './Resume.css';
import instagram from '../../../public/instagram.svg';
import telegram from '../../../public/telegram.svg';
import facebook from '../../../public/facebook.svg';
import { Card, CardContent, CardMedia, Typography, Grid, Container } from '@mui/material';

const Resume = () => {
  return (
    <div className="section2" id='section2'>
      <div className="social-icons">
        <img className="instagram" src={instagram} alt="instagram" />
        <img className="telegram" src={telegram} alt="telegram" />
        <img className="facebook" src={facebook} alt="facebook" />
      </div>

      <center><h1>MY RESUME</h1></center>

      <Container><br />
        <Grid container spacing={3} className="main-container">
          <Grid item xs={12} sm={6}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div">
                  Name: Pratik Patil
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Email: pratikpatil1311@gmail.com
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Phone No: +91-8088379279
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div">
                  Work Experience: 1+ years
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Location: Nipani,Karnataka
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Education: Computer Science in Diploma
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div">
                  Hobbies
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Swimming, coding, playing games, cricket
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div">
                  Description about Me
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  With 1+ years of experience, I deliver professional, high-quality solutions, ensuring seamless integration, optimal performance, and scalability while adhering to best practices and agile methodologies. In every project, I strive to exceed client expectations, delivering reliable and efficient solutions. My commitment to continuous learning keeps me updated with the latest industry trends and technologies, making me a valuable asset to any development team.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Resume;
