import React, { useState } from "react";
import RecentNotes from "./RecentNotes";

const Notes = () => {
  const [note, setNote] = useState("");
  const [recentNotes, setRecentNotes] = useState([]);

  const onFormSubmit = (e) => {
    e.preventDefault();
    const newNotes = [note, ...recentNotes];
    setNote("");

    setRecentNotes(newNotes.splice(0, 3));
  };

  return (
    <section className="notes">
      <h2>Notes</h2>
      <form action="#" onSubmit={onFormSubmit}>
        <textarea
          onChange={(e) => setNote(e.target.value)}
          className="note-space"
          value={note}
        ></textarea>
        <button type="submit" className="savenote-btn">
          Save note
        </button>
      </form>
      <RecentNotes recentNotes={recentNotes} />
    </section>
  );
};

export default Notes;
