import React from "react";

const SiteStatusCard = ({
  site,
  hours,
  supervisor,
  totalOfficers,
  security
}) => {
  return (
    <>
      <li className="site">
        <h3 className="site-name">
          {site}
          <span className={security === "armed" ? "armed" : "unarmed"}>
            {security}
          </span>
        </h3>
        <ul>
          <li>Hours of Operation: {hours}</li>
          <li>Supervisor: {supervisor}</li>
          <li>{totalOfficers} Officers</li>
        </ul>
      </li>
    </>
  );
};

export default SiteStatusCard;
