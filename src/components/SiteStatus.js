import React from "react";
import SiteStatusCard from "./SiteStatusCard";
import { sites } from "../data";

const SiteStatus = () => {
  const siteStatusCards = sites.map((site) => {
    return (
      <SiteStatusCard
        site={site.site}
        hours={site.hours}
        supervisor={site.supervisor}
        totalOfficers={site.totalOfficers}
        security={site.security}
      />
    );
  });
  return (
    <section className=" site-status">
      <h2>Site Status</h2>
      <ul>{siteStatusCards}</ul>
    </section>
  );
};

export default SiteStatus;
