/* eslint-disable react/prop-types */
import { useState } from 'react';

const DropdownStatus = ({setFormData}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const options = ['Publish', 'Draft'];

  const toggleDropdownStatus = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setFormData((prevData) => ({
      ...prevData,
      status: option,
    }));

    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdownStatus}
        type="button"
        className="inline-flex justify-between w-full px-4 py-2 text-sm  bg-white border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-grey-200"
        id="options-menu"
        aria-haspopup="true"
        aria-expanded="true"
      >
        {selectedOption || 'Status'}
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="16" 
          height="16" 
          fill="currentColor" 
          className="bi bi-chevron-expand -mr-1 ml-2 h-5 w-5" 
          viewBox="0 0 16 16"
        >
          <path fillRule="evenodd" d="M3.646 9.146a.5.5 0 0 1 .708 0L8 12.793l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708m0-2.292a.5.5 0 0 0 .708 0L8 3.207l3.646 3.647a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 0 .708"/>
        </svg>
      </button>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleOptionClick(option)}
                className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 text-left"
                role="menuitem"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownStatus;
