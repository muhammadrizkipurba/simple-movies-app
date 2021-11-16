import React from "react";

const SearchInput = ({ placeholder, value, onChange, onSubmit, onReset, inputDisabled, buttonDisabled }) => {
  return (
    <div className="flex items-center justify-center my-6">
      <div className="flex border-2 border-gray-200 rounded-xl">
        <input
          value={value}
          onChange={onChange}
          type="text"
          className="px-4 focus:outline-none py-2 md:w-80 sm:w-auto"
          placeholder={placeholder}
          disabled={inputDisabled}
        />
        <button 
          className="px-4 text-white bg-green-600" 
          onClick={onSubmit}
          disabled={buttonDisabled}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchInput;
