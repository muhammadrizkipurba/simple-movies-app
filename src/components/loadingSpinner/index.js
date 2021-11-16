import React from "react";
import MDSpinner from "react-md-spinner";

const LoadingSpinner = ({ wrapperClassName }) => {
  return (
    <div className={wrapperClassName}>
      <MDSpinner 
        className="mr-3" 
        singleColor="#059669" 
        borderSize={3}
        size={26}
        
      />
      <p className="mb-0">Loading...</p>
    </div>
  );
};

export default LoadingSpinner;
