import React from "react";

const RecentNotes = ({ recentNotes }) => {
  const mostRecentNotes = recentNotes.map((note) => {
    return <li>{note}</li>;
  });

  return (
    <div className="recent-notes">
      <h2>Most Recent Notes</h2>
      <ul>{mostRecentNotes}</ul>
    </div>
  );
};

export default RecentNotes;
