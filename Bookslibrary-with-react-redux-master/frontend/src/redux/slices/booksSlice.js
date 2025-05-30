import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import createBooksWithId from "../../utils/createBooksWithId";
import axios from "axios";


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

export const fetchBook = createAsyncThunk("books/fetchBook", async () => {
  const res = await axios.get("http://localhost:8888/random-book");
  console.log("Fetched book:", res.data);

  return res.data;
});

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
  extraReducers: (builder) => {
    builder.addCase(fetchBook.fulfilled, (state, action) => {
      if(action.payload && action.payload.title && action.payload.author){
         state.push(createBooksWithId(action.payload, "via api"));
      }
        // Create a book with an ID and add it to the state
     
    });
  },
});
// Action creators and selectors
export const { addBook, deleteBook, toggleFavorite } = booksSlice.actions;

// Thunk function to add a random book via API
// export const thunkFunction = async (dispatch, getState) => {
//   getState();
//   try {
//     const res = await axios.get("http://localhost:8888/random-book");
//     if (res.data && res.data.title && res.data.author) {
//       dispatch(addBook(createBooksWithId(res.data, "via API")));
//     }
//   } catch (e) {
//     console.log(e);
//   }
//   getState();
// };

// state
export const selectState = (state) => state.books;

export default booksSlice.reducer;
