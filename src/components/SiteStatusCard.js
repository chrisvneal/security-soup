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
          <li>Supervisor: {supervisor}</li>
          <li>Hours of Operation: {hours}</li>
          <li>
            <span className="officer-count">{totalOfficers}</span> Officers
          </li>
        </ul>
      </li>
    </>
  );
};

export default SiteStatusCard;
