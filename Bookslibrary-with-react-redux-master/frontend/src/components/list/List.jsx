import {
  selectTitleFilter,
  selectAuthorFilter,
  selectOnlyFavoriteFilter,
} from "../../redux/slices/filterSlice";
import ListItems from "../listItems/ListItems";
import { selectState } from "../../redux/slices/booksSlice";
import { useSelector } from "react-redux";

const List = () => {
  const books = useSelector(selectState);
  const filteredTitle = useSelector(selectTitleFilter);
  const filteredAuthor = useSelector(selectAuthorFilter);
  const onlyFavorites = useSelector(selectOnlyFavoriteFilter);

  const filteredBooks = books.filter((book) => {
    const matchesTitle = book.title
      .toLowerCase()
      .includes(filteredTitle.toLowerCase());
    const matchesAuthor = book.author
      .toLowerCase()
      .includes(filteredAuthor.toLowerCase());
    const matchesOnlyFavorite = onlyFavorites ? book.isFavorite : true;

    return matchesTitle && matchesAuthor && matchesOnlyFavorite;
  });

  const markedMatch = (text, filter) => {
    if (!filter) return text;
    const regExp = new RegExp(`(${filter})`, "gi");
    return text.split(regExp).map((section, i) =>
      section.toLowerCase() === filter.toLowerCase() ? (
        <span key={i} className="bg-yellow-200">
          {section}
        </span>
      ) : (
        section
      )
    );
  };

  return (
    <div className="w-full p-4 m-4 bg-[#f2f2f2] rounded-md shadow-md">
      <h2> Book List</h2>

      <ul>
        {!filteredBooks.length ? (
          <p>No books available</p>
        ) : (
          filteredBooks.map((book) => (
            <ListItems
              key={book.id}
              book={book}
              markedMatch={markedMatch}
              filteredTitle={filteredTitle}
              filteredAuthor={filteredAuthor}
            />
          ))
        )}
      </ul>
    </div>
  );
};

export default List;
