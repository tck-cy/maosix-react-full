import React from "react";

const Timeline = ({ items }) => {
  return (
    <div className="timeline">
      {items.map((item, index) => (
        <div key={index} className="timeline-item">
          <div className="timeline-marker"></div>
          <div className="timeline-content">
            <h5>{item.year}</h5>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
