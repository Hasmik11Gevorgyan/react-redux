import { createSlice } from "@reduxjs/toolkit";

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

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.push(action.payload);
    },
    deleteBook: (state, action) =>
      state.filter((book) => book.id !== action.payload),
    toggleFavorite: (state, action) =>
      state.map((book) =>
        book.id === action.payload
          ? { ...book, isFavorite: !book.isFavorite }
          : book
      ),
  },
});
// Action creators and selectors
export const { addBook, deleteBook, toggleFavorite } = booksSlice.actions;

// state
export const selectState = (state) => state.books;

export default booksSlice.reducer;
