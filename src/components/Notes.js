import React from "react";
import RecentNotes from "./RecentNotes";

const Notes = () => {
  return (
    <section className="notes">
      <h2>Notes</h2>
      <textarea className="section-border note-space"></textarea>
      <button className="savenote-btn">Save note</button>
      <RecentNotes />
    </section>
  );
};

export default Notes;
