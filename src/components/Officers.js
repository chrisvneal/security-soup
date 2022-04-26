import React from "react";

const Officers = ({ officers }) => {
  const officerList = officers.map((officer) => (
    <li key={officer.id}>{officer.name}</li>
  ));

  return (
    <section className="section-border officers">
      <h2>
        Officers on Shift: <span className="officers-on-shift__number">6</span>
      </h2>
      <ul className="officers-list">{officerList}</ul>
    </section>
  );
};

export default Officers;
