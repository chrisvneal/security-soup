import React from "react";

const Officers = ({ officers }) => {
  const officerList = officers.map((officer) => (
    <li key={officer.id}>{officer.name}</li>
  ));

  return (
    <section className="section-border officers">
      <h2>Officers</h2>
      <ul className="officers-list">{officerList}</ul>
    </section>
  );
};

export default Officers;
