import React from "react";

const ValueCard = ({ title, description }) => {
  return (
    <div className="card h-100 shadow-sm border-0">
      <div className="card-body text-center">
        <h4 className="card-title text-primary">{title}</h4>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
};

export default ValueCard;
