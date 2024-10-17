import React from 'react'
import './Footer.css'
import instagram from '../../../public/instagram.svg';
import telegram from '../../../public/telegram.svg';
import facebook from '../../../public/facebook.svg';

const Footer = () => {
  return (
    <div className="#section4" id='section4'>
    <div className='footer-container'>
        <h1><center>Intrested for Website? Drop us a line</center></h1>
        <h4>Note: <br /> This note is For clients, if clients need the website please <br />click on below button to register for new <br />website development then we will see your requirements and <br />will contact you further</h4>
        <div className="contact">
            <h3>Name:Pratik Patil <br />
                Email:pratikpatil1311@gmail.com <br />
                Phone No:+91 8088379279 <br />
            </h3>

        </div>
        <div className="social-icons">
        <img className="instagram" src={instagram} alt="instagram" />
        <img className="telegram" src={telegram} alt="telegram" />
        <img className="facebook" src={facebook} alt="facebook" />
      </div>

      <div className="email-input">
        <input type="email" name="email" placeholder='write your query in short' id="email" />
        <input type="submit" value="send" />
      </div>
    </div>
    </div>

   
  )
}

export default Footer