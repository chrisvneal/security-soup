import React, { useEffect } from "react";
import OfficerDetails from "./OfficerDetails";

const Officers = ({ officers }) => {
  useEffect(() => {
    const officerListItem = Array.from(
      document.querySelectorAll(".officers-list li")
    );

    const officerBios = Array.from(
      document.querySelectorAll(".officer-details .officer-bio")
    );

    const hideItems = () => {
      officerBios.forEach((item) => {
        item.classList.add("hidden");
        // console.log(item)
      });
    };
    hideItems();

    officerListItem.forEach((item) => {
      item.addEventListener("click", (e) => {
        // e.stopPropagation();
        e.stopImmediatePropagation();

        // make all bios hidden
        hideItems();

        e.currentTarget.lastChild.lastChild.classList.remove("hidden");
        // e.currentTarget.lastChild.classList.toggle("show");
        // console.log(e.currentTarget.lastChild.lastChild);
      });
    });

    // console.log(officerBios)
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
