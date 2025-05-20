import { useDispatch } from "react-redux";
import { deleteBook, toggleFavorite } from "../../redux/books/actionCreators";

const ListItems = ({ book }) => {
  const dispatch = useDispatch();

  const handleDeleteBook = (id) => {
    dispatch(deleteBook(id));
  };

  const handleToggleFavorite = (id) => {
    dispatch(toggleFavorite(id));
  };

  return (
    <li className="flex justify-between items-center p-4 border-b border-gray-300">
      <div>
        <h3 className="text-lg font-semibold">Title: {book.title}</h3>
        <p className="text-gray-700">Author: {book.author}</p>
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => handleDeleteBook(book.id)}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition-colors duration-300"
          aria-label="Delete book"
          title="Delete"
        >
          🗑️
        </button>
        <button
          onClick={() => handleToggleFavorite(book.id)}
          className={`${
            book.isFavorite
              ? "bg-amber-500"
              : "bg-gray-400"
          } text-white px-4 py-2 rounded-md transition-colors duration-300`}
          aria-label="Toggle favorite"
          title="Favorite"
        >
          {book.isFavorite ? "★" : "☆"}
        </button>
      </div>
    </li>
  );
};

export default ListItems;
