/* eslint-disable react/prop-types */
import { useState } from 'react';
import DropdownCategory from './interactions/dropdownCategory';
import DropdownStatus from './interactions/dropdownStatus';

function AddStory({isOpen, setAddStoryModalStatus, updateStoryList}) {
  const closeAddStoryModal = () => {
    setAddStoryModalStatus(false);
  }

  const [formData, setFormData] = useState({
    title: '',
    writerName: '',
    synopsis: '',
    category: '',
    tags: '',
    coverImage: null,
    status: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateStoryList(formData);
    setAddStoryModalStatus(false);
  };

  return (
    <div className="addStory-modal w-4/5 p-5" style={{ display: isOpen ? 'block' : 'none' }}>
      <div className="flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-arrow-left m-1 mr-2"
          viewBox="0 0 16 16"
        >
          <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
        </svg>
        <input 
            type="button"
            className='underline font-bold cursor-pointer hover:opacity-75' 
            value="List Story"
            onClick={closeAddStoryModal}
        />
      </div>

      <h1 className="text-3xl font-bold mr-20 flex-none pt-5 pb-5">Add Story</h1>
      
      <form onSubmit={handleSubmit}>
        <div className="input-form border rounded border-gray-500 p-5 bg-gray-100">
          <div className="flex space-x-4 mb-3">
            <fieldset className="flex flex-col flex-1">
              <label htmlFor="title">Title</label>
              <input type="text" id="title" placeholder="Title" value={formData.title} onChange={handleChange} className="border border-gray-300 p-2 rounded-md"/>
            </fieldset>
            <fieldset className="flex flex-col flex-1">
              <label htmlFor="writerName">Writer Name</label>
              <input type="text" id="writerName" placeholder="Writer Name" value={formData.writerName} onChange={handleChange} className="border border-gray-300 p-2 rounded-md"/>
            </fieldset>
          </div>

          <fieldset className="flex flex-col mb-3">
            <label htmlFor="synopsis">Synopsis</label>
            <input type="text" id="synopsis" placeholder="Synopsis" value={formData.synopsis} onChange={handleChange} className="border border-gray-300 p-2 rounded-md"/>
          </fieldset>

          <div className="flex space-x-4 mb-3">
            <fieldset className="flex flex-col flex-1">
              <label htmlFor="category">Category</label>
              <DropdownCategory setFormData={setFormData}/>
            </fieldset>
            <fieldset className="flex flex-col flex-1">
              <label htmlFor="tags">Tag/Keyword Story</label>
              <div>

              </div>
              <input
                type="text"
                className="border border-gray-300 p-2 rounded-md"
                placeholder="Add a tag..."
              />
            </fieldset>
          </div>

          <div className="flex space-x-4 mb-3">
            <fieldset className="flex flex-col flex-1">
              <label htmlFor="coverImage">Cover Image</label>
              <input type="file" id="coverImage" 
                className="file:mr-4 file:py-2 file:px-4 file:border-0
                file:text-sm file:font-semibold
                file:cursor-pointer
                file:bg-gray-200
                hover:file:bg-gray-300 border border-gray-300 rounded"
                />
            </fieldset>
            <fieldset className="flex flex-col flex-1">
              <label htmlFor="status">Status</label>
              <DropdownStatus setFormData={setFormData}/>
            </fieldset>
          </div>
        </div>
        <div className='button-list flex p-3 flex justify-end'>
          <button className='border border-gray-200 p-2 rounded mr-3' onClick={closeAddStoryModal} >Cancel</button>
          <button className='border border-gray-200 p-2 rounded bg-gray-700 hover:bg-gray-500 text-white'>Save</button>
        </div>
      </form>
    </div>
  );
}

export default AddStory;
