import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../../redux/books/actionCreators";
import { v4 as uuidv4 } from "uuid";
import data from "../data/books.json"; // Assuming data.json is in the same directory

const Form = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && author) {
      
      const book = { id: uuidv4(), title, author, isFavorite: false };
      dispatch(addBook(book));
      setAuthor("");
      setTitle("");
    }
  };
  const handleRandomBook = () => {
    const rndIndex = Math.floor(Math.random() * data.length);
    const rndBook = data[rndIndex];
    const rndBookkWithId = {
      ...rndBook,
      id: uuidv4(),
      isFavorite: false,
    };
    dispatch(addBook(rndBookkWithId));
  };
  return (
    <div className="p-4 m-4 bg-[#f2f2f2] rounded-md shadow-md max-md:w-full">
      <h1>Add a new book</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            className="w-full px-4 py-2 mb-4 border border-gray-400 rounded-md"
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Book Title"
          />
        </div>
        <div>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Book author"
            className="w-full px-4 py-2 mb-4 border border-gray-400 rounded-md"
          />
        </div>
        <div className="flex gap-2 flex-wrap items-center ml-17 max-lg:flex-wrap">
          <div>
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-500 to-indigo-800 text-white px-6 py-2 rounded-full shadow-md hover:shadow-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-300"
            >
              Add a new book
            </button>
          </div>
          <div>
            <button
              onClick={handleRandomBook}
              type="button"
              className="bg-green-500 text-white px-6 py-2 rounded-full shadow-lg hover:bg-green-600 hover:scale-105 hover:shadow-xl transition-all duration-300"
            >
              Random book
            </button>
          </div>
          <div>
            {/* <button
              type="button"
              className="bg-yellow-500 text-white px-6 py-2 rounded-full shadow-lg hover:bg-yellow-600 hover:scale-105 hover:shadow-xl transition-all duration-300"
            >
              Add a new book
            </button> */}
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;