import React from "react";
import OfficerDetails from "./OfficerDetails";

// Get array of all officer bio elements
const officerBios = Array.from(
  document.querySelectorAll(".officers-list .officer-bio")
);
const officerDetails = Array.from(
  document.querySelectorAll(".officer-details")
);

// for each item, add a class of 'hidden'
officerBios.forEach((item) => {
  item.classList.add("hidden");
});

const showCard = (e) => {
  console.log(e.target.classList);
  // e.target.classList.add("show");
};

officerDetails.forEach((item) => {
  item.addEventListener("click", (e) => showCard(e));
});

const Officers = ({ officers }) => {
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
