import {
  selectTitleFilter,
  selectAuthorFilter,
} from "../../redux/slices/filterSlice";
import ListItems from "../listItems/listItems";
import { useSelector } from "react-redux";

const List = () => {
  const books = useSelector((state) => state.books);
  const filteredTitle = useSelector(selectTitleFilter);
  const filteredAuthor = useSelector(selectAuthorFilter);
  const booksByFilteredOnlyFavorite = useSelector(selectOnlyfavoritefilter);

  const filteredBooks = books.filter((book) => {
    const matchesTitle = book.title
      .toLowerCase()
      .includes(filteredTitle.toLowerCase());
    const matchesAuthor = book.author
      .toLowerCase()
      .includes(filteredAuthor.toLowerCase());
    return matchesTitle && matchesAuthor;
  });

  const onLyFavorite = books.filter((book) => book.isFavorite);

  return (
    <div className="w-full p-4 m-4 bg-[#f2f2f2] rounded-md shadow-md">
      <h2>Book List</h2>
      <ul>
        {!filteredBooks.length ? (
          <p>No books available</p>
        ) : (
          filteredBooks.map((book) => <ListItems key={book.id} book={book} />)
        )}
      </ul>
    </div>
  );
};

export default List;
