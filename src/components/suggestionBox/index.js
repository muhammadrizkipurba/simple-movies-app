import React from 'react'

const SuggestionBox = ({ suggestions, setSearchQuery }) => {
  return (
    <ul className='bg-gray-200'>
      {suggestions.map((suggestion, idx) => {
        if(idx < 5) {
          return (
            <li 
              role='button'
              onClick={() => setSearchQuery(suggestion)}
              key={`suggestion-${idx}`} 
              className={`py-3 px-5 border-b ${idx === 4 || suggestions.length === idx + 1 ? '' : 'border-gray-300'} hover:bg-gray-100 transition-all cursor-pointer`}
            >
              {suggestion}
            </li>
          );
        };
        return null;
      })}
    </ul>
  )
}

export default SuggestionBox
