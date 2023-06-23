import React, { useEffect, useState } from "react";

const ToolRental = () => {
  return (
    <div className="grid3col">
      <a className="card grid3card">
        <img
          src="https://images.ctfassets.net/7rldri896b2a/017C54e7KPq8SfQUzzII1f/2d8a309c8505cd7d4c1f3bd2d1622a09/Saw.svg"
          className="grid3icon"
          alt="..."
        />
        <hr />
        <div className="grid3card-body">
          <h5 className="grid3card-title">TOOL & TRUCK RENTAL</h5>
          <p className="grid3card-text">
            Rent the tools and equipment you need to get the job done
          </p>
        </div>
      </a>
    </div>
  );
};

export default ToolRental;
