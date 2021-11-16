import React from "react";
import SuggestionBox from "../suggestionBox";
import { Hint } from 'react-autocomplete-hint';

const SearchInput = ({ suggestions, placeholder, value, onChange, onSubmit, onReset, inputDisabled, buttonDisabled, setSearchQuery, resetSuggestions }) => {
  return (
    <div className="flex items-center flex-col justify-center my-6 relative">
      <div className="flex border-2 border-gray-200 rounded-xl bg-white">
        <Hint options={suggestions} allowTabFill>
          <input
            value={value}
            onChange={onChange}
            onMouseLeave={resetSuggestions}
            type="text"
            className="px-4 focus:outline-none py-2 md:w-80 sm:w-auto input-with-hint"
            placeholder={placeholder}
            disabled={inputDisabled}
          />
        </Hint>
        <button 
          className="px-4 text-white bg-green-600" 
          onClick={onSubmit}
          disabled={buttonDisabled}
        >
          Search
        </button>
      </div>
      {suggestions && 
        <div className='absolute w-full rounded-xl overflow-hidden' style={{top: 50}}>
          <SuggestionBox suggestions={suggestions} setSearchQuery={setSearchQuery} />
        </div>
      }
    </div>
  );
};

export default SearchInput;
