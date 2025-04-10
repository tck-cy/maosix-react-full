import React from "react";

const SectionHeader = ({ title, subtitle }) => {
  return (
    <div className="section-header mb-5">
      <h2 className="fw-bold">{title}</h2>
      {subtitle && <p className="text-muted">{subtitle}</p>}
    </div>
  );
};

export default SectionHeader;
