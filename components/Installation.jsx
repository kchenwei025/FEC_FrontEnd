import React, { useState } from 'react';

const install = () => {
  const [forceRender, setForceRender] = useState(false);

  const learnButton = () => {
    // Update the state to trigger a re-render
    setForceRender(!forceRender);
  }
}

const Installation = () => {
  return (
  <div className="grid2col">
  <a href="#" className="card grid2card">
    <img
      src="https://assets.thdstatic.com/images/v1/home-services/personalized-home-services/php_professionalInstallation_services.jpg"
      className="grid2icon"
      alt="..."
    />
    <hr />
    <div className="grid2card-body">
      <h4 className="grid2card-subtitle">
      Leave Your Next Project to Us
      </h4>
      <h5 className="grid2card-title">Professional Installation & Services</h5>
      <p className="grid2card-text">
      Get the job done right—The Home Depot adds peace of mind to all your projects
      </p>
      <ul>
        <li>
        Trusted pros at your Fingertips
        </li>
        <li>
        Support every step of the way
        </li>
      </ul>
      <button onClick= {install}
      >Learn More</button>
    </div>
  </a>
</div>
);
};

export default Installation;
