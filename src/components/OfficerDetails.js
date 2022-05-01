import React from "react";

const OfficerDetails = ({ bio, name, post }) => {
  return (
    <div className="officer-details">
      <span className="officer-name">{name}</span>
      <span className="officer-post">{post}</span>
      <p className="officer-bio">{bio}</p>
    </div>
  );
};

export default OfficerDetails;
