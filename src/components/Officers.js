import React, { useEffect } from "react";
import OfficerDetails from "./OfficerDetails";

const Officers = ({ officers }) => {
  useEffect(() => {
    const officerBios = Array.from(
      document.querySelectorAll(".officers-list .officer-bio")
    );
    const officerDetails = Array.from(
      document.querySelectorAll(".officers-list li")
    );

    officerDetails.forEach((item) => {
      item.addEventListener("click", (e) => {
        e.stopImmediatePropagation();
        console.log(e.target);
      });
    });
    officerBios.forEach((item) => {
      item.classList.add("hidden");
    });
  }); // end useEffect

  const officerList = officers.map((officer) => (
    <li key={officer.id}>
      <div className="officer-avatar">
        <img
          src={officer.avatar}
          alt="profile pic"
          className="officer-avatar"
        />
      </div>
      <OfficerDetails
        bio={officer.bio}
        name={officer.name}
        post={officer.post}
      />
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
