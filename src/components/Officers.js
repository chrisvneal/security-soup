import React from "react";

const Officers = ({ officers }) => {
  const officerList = officers.map((officer) => (
    <li key={officer.id}>
      <span className="officer-name">{officer.name}</span>
      <span className="officer-post">{officer.post}</span>
    </li>
  ));

  return (
    <section className="officers-on-shift">
      <h2>
        Officers on Shift:{" "}
        <span className="officers-on-shift-number">{officers.length}</span>
      </h2>
      <ul className="officers-list">{officerList}</ul>
    </section>
  );
};

export default Officers;
