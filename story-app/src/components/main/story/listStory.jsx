/* eslint-disable react/prop-types */
function ListStory({searchTerm, storyList}) {
  const data = [
    {
      id: 1,
      title: "The Moon that ...",
      writes: "Rara",
      category: "Technology",
      tags: ["Tag1", "Tag2"],
      status: "Publish",
    },
    {
      id: 2,
      title: "The Sun this ...",
      writes: "Mama",
      category: "Art",
      tags: ["Tag1", "Tag2"],
      status: "Draft",
    },
  ];

  const renderTags = (tags) => (
    <td className="py-2 px-4 border-r text-center">
      <span className="bg-gray-500 text-white px-3 py-1 rounded-full mr-1">
        bro
      </span>
      {/* {tags.map((tag, index) => (
        <span key={index} className="bg-gray-500 text-white px-3 py-1 rounded-full mr-1">
          {tag}
        </span>
      ))} */}
    </td>
  );

  const renderStatus = (status) => (
    <td className={`py-2 px-4 border-r text-center`}>
      <span className="bg-gray-500 text-white px-3 py-1 rounded-full mr-1">
        bro
      </span>
      
    </td>
  );

  console.log(storyList)

  return (
    <div className="list-story mt-5" >
      {storyList.length === 0 ? (
        <p className="text-center text-gray-500 m-20">No stories found. Add your stories first!</p>
      ) : (
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr className="bg-gray-100 border-b">
                <th className="py-2 px-4 border-r">Title</th>
                <th className="py-2 px-4 border-r">Writes</th>
                <th className="py-2 px-4 border-r">Category</th>
                <th className="py-2 px-4 border-r">Tags</th>
                <th className="py-2 px-4 border-r">Status</th>
                <th className="py-2 px-4">Action</th>
              </tr>
            </thead>
            <tbody>
              {storyList.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50 border-b">
                  <td className="py-2 px-4 border-r">{item.title}</td>
                  <td className="py-2 px-4 border-r text-center">{item.writerName}</td>
                  <td className="py-2 px-4 border-r text-center">{item.category}</td>
                  {renderTags(item.tags)}
                  {renderStatus(item.status)}
                  <td className="py-2 px-4 border-r text-center">
                    <button className="bg-blue-500 text-white py-1 px-2 rounded">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-three-dots"
                        viewBox="0 0 16 16"
                      >
                        <path
                          d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"
                        />
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
      )}
    </div>
  );
}

export default ListStory;
