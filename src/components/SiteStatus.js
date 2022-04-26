import React from "react";

const SiteStatus = () => {
  return (
    <section className=" site-status">
      <h2>Site Status</h2>
      <ul>
        <li className="site">
          <h3 className="site-name">Rancho Relaxo</h3>

          <ul>
            <li>Hours of Operation: 0600 - 1800</li>
            <li>Supervisor: Armani Vuitton</li>
            <li>20 Officers</li>
            <li>Secured: armed</li>
          </ul>
        </li>
        <li className="site">
          <h3 className="site-name">Biowaste Management</h3>

          <ul>
            <li>Hours: 0430 - 1600</li>
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
