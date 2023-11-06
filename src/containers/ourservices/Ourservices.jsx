import React from 'react';
import './ourservices.css';
import Services1 from '../../assets/medical_record1.png'
import Services2 from '../../assets/donate_blood.png'
import Services3 from '../../assets/healthcare1.png'

const Services = () => {
  return (
    <div className="medisync__ourservices">
      <hr /><h1>WHAT WE OFFER</h1>
      <div className="medisync__ourservices_tabs">
        <div className="medisync__ourservices_tabs-tab">
          <div className="medisync__ourservices_tabs-tab-image">
            <img src={Services1} alt="Services" />
          </div>
          <h2>Secure Medical Record</h2>
          <p>
            Medisync  offers full privacy to users  logged in on the platform;
            by allowing them to grant access to second and third parties when authorized
          </p>
        </div>

        <div className="medisync__ourservices_tabs-tab">
          <div className="medisync__ourservices_tabs-tab-image">
            <img src={Services2} alt="Services" />
          </div>
          <h2>Token and NFT Incentives</h2>
          <p>
            Unique addresses are assigned to each user making them difficult to identify 
            there by keeping them safe 
          </p>
        </div>

        <div className="medisync__ourservices_tabs-tab">
          <div className="medisync__ourservices_tabs-tab-image">
            <img src={Services3} alt="Services" />
          </div>
          <h2>Subsizized Healthcare</h2>
          <p>
            Your personal details are protected from hackers and the blockchain 
            ensures your information is secure.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Services