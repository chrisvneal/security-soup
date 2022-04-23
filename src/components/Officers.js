import React from "react";

const Officers = ({ officers }) => {
  const officerList = officers.map((officer) => (
    <li key={officer.id}>{officer.name}</li>
  ));

  return <ul className="officers">{officerList}</ul>;
};

export default Officers;
