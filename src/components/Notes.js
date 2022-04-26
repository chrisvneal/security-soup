import React from "react";
import RecentNotes from "./RecentNotes";

const Notes = () => {
  return (
    <section className="section-border notes">
      <h2>Notes</h2>
      <textarea className="section-border note-space"></textarea>
      <button>Save note</button>
      <RecentNotes />
    </section>
  );
};

export default Notes;
