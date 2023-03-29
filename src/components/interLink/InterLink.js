import React from "react";

const InterLink = ({ link }) => {
  return (
    <div>
      <a href={link} target="_blank" className="btn-outline" rel="noopener noreferrer">
        Visit Website
      </a>
    </div>
  );
};

export default InterLink;