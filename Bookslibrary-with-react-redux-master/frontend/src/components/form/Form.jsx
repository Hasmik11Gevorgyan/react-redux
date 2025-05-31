import { useState } from "react";
import { useDispatch } from "react-redux";
// import { addBook } from "../../redux/books/actionCreators";
import { addBook, randomBook, fetchBook } from "../../redux/slices/booksSlice";
իմպօռտ 
import data from "../../../../data/books.json"; // Assuming data.json is in the same directory
import { setError } from "../../redux/slices/errorSlice";
import createBooksWithID from "../../utils/createBooksWithID"; // Adjust the import path as necessary
// Assuming createBookWithId is a utility function

const Form = () => {
  const [state, setState] = useState({
    title: "",
    author: "",
  });

const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const { title, author } = state;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && author) {
      dispatch(addBook(createBooksWithID({ title, author }, "via form")));
      setState({ title: "", author: "" });
    } else {
      dispatch(setError("Please fill in both fields."));
    }
  };

  const handleAddRandomBook = () => {
    dispatch(
      randomBook(
        createBooksWithID(
          data[Math.floor(Math.random() * data.length)],
          "via random"
        )
      )
    );
  };

  const handleAddRandomBookViaAPI = async () => {
  setLoading(true);
    dispatch(fetchBook("http://localhost:8888/random-book-delayed"));
    setLoading(false);
  };

  return (
    <div className="p-4 m-4 bg-[#f2f2f2] rounded-md shadow-md">
      <h1>Add a new book</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            className="w-full px-4 py-2 mb-4 border border-gray-400 rounded-md"
            type="text"
            id="title"
            value={title}
            onChange={(e) =>
              setState((prevState) => ({ ...prevState, title: e.target.value }))
            }
            placeholder="Book Title"
          />
        </div>
        <div>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) =>
              setState((prevState) => ({
                ...prevState,
                author: e.target.value,
              }))
            }
            placeholder="Book author"
            className="w-full px-4 py-2 mb-4 border border-gray-400 rounded-md"
          />
        </div>
        <div className="flex gap-2 flex-wrap items-center ml-17 max-md:flex-wrap">
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
              onClick={handleAddRandomBook}
              type="button"
              className="bg-green-500 text-white px-6 py-2 rounded-full shadow-lg hover:bg-green-600 hover:scale-105 hover:shadow-xl transition-all duration-300"
            >
              Random book
            </button>
          </div>
          <div>
            <button
              type="button"
              onClick={handleAddRandomBookViaAPI}
              className="bg-yellow-500 text-white px-6 py-2 rounded-full shadow-lg hover:bg-yellow-600 hover:scale-105 hover:shadow-xl transition-all duration-300"
            disabled={loading}
            
            >
              {loading ? "Loading..." : "Random book via API"} 
              Use API
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
