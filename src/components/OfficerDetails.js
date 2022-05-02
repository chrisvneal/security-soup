import React from "react";

const OfficerDetails = ({ bio, name, post }) => {
  return (
    <div className="officer-details">
      <span className="officer-name">{name}</span>
      <span className="officer-post">{post}</span>
      <div className="officer-bio">
        <p>{bio}</p>
      </div>
    </div>
  );
};

export default OfficerDetails;
