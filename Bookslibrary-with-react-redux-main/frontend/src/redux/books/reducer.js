import * as actionTypes from "./actionTypes";

const initialState = [
  {
    id: 1,
    title: "The Hunger Games",
    author: "Suzanne Collins",
    isFavoriite: false,
  },
  {
    id: 2,
    title: " Games",
    author: " Collins",
    isFavoriite: false,
  },
  {
    id: 3,
    title: "The Hunger Games",
    author: "Suzanne Collins",
    isFavorite: false,
  },
];

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_BOOK:
      return [...state, action.payload];
    case actionTypes.DELETE_BOOK:
      return state.filter((book) => book.id !== action.payload);
    case actionTypes.TOGGLE_FAVORITE:
      return state.map((book) =>
        book.id === action.payload
          ? { ...book, isFavorite: !book.isFavorite }
          : book
      );
    default:
      return state;
  }
};

export default booksReducer;
