import { useState } from 'react';
import ListStory from './story/listStory'
import AddStory from './story/addStory';
import FilterStory from './story/interactions/filterStory';

function Canvas() {
  const [addStoryModalStatus, setAddStoryModalStatus] = useState(false);
  const [sortModalStatus, setsortModalStatus] = useState(false);
  const [storyList, setStoryList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortTerm, setSortTerm] = useState([]);

  const openAddStoryModal = () => {
    setAddStoryModalStatus(true);
  }

  const openSortModal = () => {
    setsortModalStatus(true);
  };

  const updateStoryList = (newStory) => {
    setStoryList((prevStoryList) => [
      ...prevStoryList,
      newStory,
    ]);
  };

  return (
    <>
      <div className='canvas w-4/5 p-5' style={{ display: addStoryModalStatus ? 'none' : 'block', minHeight: '100vh' }}>
        <div className='list-header flex'>
          <h2 className='text-3xl font-bold mr-20 flex-none'>List Story</h2>

          <input 
            type="text" 
            className='border border-gray-300 p-2 rounded-md ml-20 mr-5 px-10 flex-grow'
            placeholder="Search by writer's name/title story" 
            value={""}
          />
          <div className="inline-block text-left mr-5">
            <button
              onClick={openSortModal}
              type="button"
              className="inline-flex justify-between px-4 py-3 text-sm hover:opacity-50"
              id="options-menu"
              aria-haspopup="true"
              aria-expanded="true"
            >
              Sort
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="16" 
                height="16" 
                fill="currentColor" 
                className="bi bi-funnel -mr-1 ml-2 h-5 w-5" 
                viewBox="0 0 16 16"
              >
                <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2z"/>
              </svg>
            </button>

            {sortModalStatus && (
              <FilterStory setsortModalStatus={setsortModalStatus}/>
            )}
          </div>
          

          <div className='cursor-pointer flex mr-10 bg-gray-700 text-white pl-3 pr-3 rounded hover:bg-gray-500'>
            <input 
              type="button"
              className='cursor-pointer' 
              value="Add Story"
              onClick={openAddStoryModal}
            />
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="16" 
              height="16" 
              fill="currentColor" 
              className="bi bi-file-earmark-plus mt-3 ml-3" 
              viewBox="0 0 16 16"
            >
              <path d="M8 6.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V11a.5.5 0 0 1-1 0V9.5H6a.5.5 0 0 1 0-1h1.5V7a.5.5 0 0 1 .5-.5"/>
              <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5z"/>
            </svg>
          </div>

        </div>

        <ListStory searchTerm={searchTerm} sortTerm={sortTerm} storyList={storyList}/>
      </div>
      <AddStory isOpen={addStoryModalStatus} setAddStoryModalStatus={setAddStoryModalStatus} updateStoryList={updateStoryList}/>
      {/* untuk list story filter, nanti bakal pass parameter 
      dari input text search lalu pass sebagai props 
      ke list story */}
    </>
  )
}

export default Canvas;
