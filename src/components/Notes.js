import React from "react";
import RecentNotes from "./RecentNotes";

const Notes = () => {
  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  const recentNotes = ["take out the trash", "wash the clothes"];
  return (
    <section className="notes">
      <h2>Notes</h2>
      <form action="#" onSubmit={onFormSubmit}>
        <textarea className="note-space"></textarea>
        <button type="submit" className="savenote-btn">
          Save note
        </button>
      </form>
      <RecentNotes recentNotes={recentNotes} />
    </section>
  );
};

export default Notes;
