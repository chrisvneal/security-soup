import React from "react";
import RecentNotes from "./RecentNotes";

const Notes = () => {
  const recentNotes = ["take out the trash", "wash the clothes"];
  return (
    <section className="notes">
      <h2>Notes</h2>
      <textarea className="note-space"></textarea>
      <button className="savenote-btn">Save note</button>
      <RecentNotes recentNotes={recentNotes} />
    </section>
  );
};

export default Notes;
