import React from "react";

const SiteStatus = () => {
  return (
    <section className=" site-status section-border">
      <h2>Site Status</h2>
      <ul>
        <li className="site">
          <h3 classNme="site-name">Rancho Relaxo</h3>
          <span>Hours of Operation: 0600 - 1800</span>
          <ul>
            <li>Supervisor: Armani Vuitton</li>
            <li>20 Officers</li>
            <li>Secured: armed</li>
          </ul>
        </li>
        <li className="site">
          <h3 classNme="site-name">Biowaste Unlimited</h3>
          <span>Hours: 0430 - 1600</span>
          <ul>
            <li>Supervisor: Fila Rivera</li>
            <li>10 Officers</li>
            <li>Secured: unarmed</li>
          </ul>
        </li>
      </ul>
    </section>
  );
};

export default SiteStatus;
