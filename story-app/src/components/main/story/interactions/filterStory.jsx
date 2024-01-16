/* eslint-disable react/prop-types */
import { useState } from 'react';
import DropdownCategory from './dropdownCategory';
import DropdownStatus from './dropdownStatus';

const FilterStory = ({setSortModalStatus, setSortTerm}) => {
  const [sortTermTemp, setSortTermTemp] = useState({
    category: '',
    status: ''
  });

  const handleReset = () => {
    setSortTerm({
      category: '',
      status: ''
    });
    closeSortModal();
  };

  const handleFilter = () => {
    setSortTerm({
      category: sortTermTemp.category,
      status: sortTermTemp.status
    });
    closeSortModal();
  }
  
  const closeSortModal = () => {
    setSortModalStatus(false);
  }
  
  return (
    <div className="absolute rounded-md shadow-lg bg-white border rounded border-gray-500">
      <h3 className='text-xl font-bold flex-none p-5'>Filter</h3>
      <form action="">
        <div className="input-form p-5 bg-gray-100 flex">
          <fieldset className="mr-5 flex flex-col">
            <label htmlFor="category">Category</label>
            <DropdownCategory setFormData={setSortTermTemp}/>
          </fieldset>
          <fieldset className="flex flex-col">
            <label htmlFor="status">Status</label>
            <DropdownStatus setFormData={setSortTermTemp}/>
          </fieldset>
        </div>
        <div className='button-list flex p-3'>
          <input type='button' className='border border-gray-200 p-2 rounded mr-auto' onClick={handleReset} value={"Reset"}/>
          <input type='button' className='border border-gray-200 p-2 rounded mr-3' onClick={closeSortModal} value={"Cancel"}/>
          <input type='button' className='border border-gray-200 p-2 rounded bg-gray-700 hover:bg-gray-500 text-white' onClick={handleFilter} value={"Filter"}/>
        </div>
      </form>
    </div>
  );
};

export default FilterStory;
