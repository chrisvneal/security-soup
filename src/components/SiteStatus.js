import React from "react";
import SiteStatusCard from "./SiteStatusCard";

const SiteStatus = () => {
  return (
    <section className=" site-status">
      <h2>Site Status</h2>
      <ul>
        <SiteStatusCard
          site="Rancho Relaxo"
          hours="0600 - 1800"
          supervisor="Armani Vuitto"
          totalOfficers={20}
          security="armed"
        />

        <SiteStatusCard
          site="BioWaste Management"
          hours="0430 - 1600"
          supervisor="Champion Rivera"
          totalOfficers={13}
          security="armed"
        />
      </ul>
    </section>
  );
};

export default SiteStatus;
