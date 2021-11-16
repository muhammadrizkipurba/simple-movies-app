import React from "react";

const DetailsList = ({ label, description }) => {
  return (
    <div className="mt-2 flex">
      <label
        className="text-gray-400 text-md italic mr-3"
        style={{ minWidth: 80 }}
      >
        {label}
      </label>
      <p className="">{description}</p>
    </div>
  );
};

export default DetailsList;
