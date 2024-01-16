/* eslint-disable react/prop-types */
// import { useState } from 'react';
import DropdownCategory from './dropdownCategory';
import DropdownStatus from './dropdownStatus';

const FilterStory = ({setIsOpen}) => {
  const closeSortModal = () => {
    setIsOpen(false);
  }

  return (
    <div className="absolute rounded-md shadow-lg bg-white border rounded border-gray-500">
      <h3 className='text-xl font-bold flex-none p-5'>Filter</h3>
      <form action="">
        <div className="input-form p-5 bg-gray-100 flex">
          <fieldset className="mr-5 flex flex-col">
            <label htmlFor="category">Category</label>
            <DropdownCategory />
          </fieldset>
          <fieldset className="flex flex-col">
            <label htmlFor="status">Status</label>
            <DropdownStatus />
          </fieldset>
        </div>
        <div className='button-list flex p-3'>
          <button className='border border-gray-200 p-2 rounded mr-auto'>Reset</button>
          <button className='border border-gray-200 p-2 rounded mr-3' onClick={closeSortModal}>Cancel</button>
          <button className='border border-gray-200 p-2 rounded bg-gray-500 text-white'>Filter</button>
        </div>
      </form>
    </div>
  );
};

export default FilterStory;
