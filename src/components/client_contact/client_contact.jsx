import React from 'react'
import './client_contact.css'

const ClientContact = () => {
 
  return (
    <div className="contact_form">
      <h1><center>Contact Us</center></h1>
      <form action='http://localhost:5000/' method='post'>
        <div className="input_container1">
          <label htmlFor="clientname">First Name:</label>
          <input type="text" id="clientFname" placeholder='Enter first Name' name="clientFname" required/>
        </div>
        <div className="input_container2">
          <label htmlFor="clientlname">Last Name:</label>
          <input type="text" id="clientlname" placeholder='Enter last Name' name="clientlname" required/>
        </div>
        <div className="input_container3">
          <label htmlFor="clientemail">Email ID:</label>
          <input type="email" id="clientemail" placeholder='Enter Email id' name="clientemail" required/>
        </div>
        <div className="input_container4">
          <label htmlFor="clientpnumber">Mobile Number:</label>
          <input type="number" id="clientpnumber"  placeholder='No need to add +91 if any out of india country client then add country code' name="clientpnumber" maxLength={10} required/>
        </div>
        <div className="input_container5">
          <label htmlFor="purposesite">Purpose of Site:</label>
          <select name="purposesite" id="purposesite" required>
          <option disabled>Select</option>
            <option value="small scale business">Small Scale Business</option>
            <option value="electronic & communication">Electronic & Communication</option>
            <option value="E-commerce">E-commerce</option>
            <option value="school site">School Site</option>
            <option value="jewelry shop">Jewelry Shop</option>
            <option value="hotel & business site">Hotel & Business Site</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="input_container6">
          <label htmlFor="clientwebsite">Description About Website:</label>
         <textarea id="clientwebsite" placeholder='Enter description about website' name="clientwebsite" required></textarea>
         </div>
        <div className="input_container7">
          <label htmlFor="clienttime">Approximate Time to Deliver Website:</label>
          <input type="text" id="clienttime"  name="clienttime" placeholder="In months only" required/>
        </div>
        <div className="input_container8">
          <label htmlFor="clientbudget">Client Budget:</label>
          <input type="number" id="clientbudget" name="clientbudget" placeholder="In rupees only" required />
          <p className="note">Note: We will provide a cost estimate based on the website or application requirements.</p>
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default ClientContact;
