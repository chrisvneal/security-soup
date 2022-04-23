import React from "react";

const OfficerList = ({ officers }) => {
  const officerList = officers.map((officer) => (
    <li key={officer.id}>{officer.name}</li>
  ));

  return <ul className="officer-list">{officerList}</ul>;
};

export default OfficerList;
