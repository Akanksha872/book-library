import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import BookList from "../components/BookList";
import BookSearch from "../components/BookSearch";
import SnackbarNotification from "../components/SnackbarNotification";
import { BookItem } from "../interfaces/bookInterfaces";
import { searchFromBooks } from "../utils/search";

const BookSearchContainer: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([] as BookItem[]);
  const [selectedBooks, setSelectedBooks] = useState([] as BookItem[]);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSearch = (newSearchTerm: string) => {
    setSearchTerm(newSearchTerm);
    if (newSearchTerm.length >= 3) {
      setSearchResults(searchFromBooks(newSearchTerm));
    } else {
      setSearchResults([]);
    }
  };

  const handleRemoveBook = (book: BookItem) => {
    setSelectedBooks((prevSelectedBooks) =>
      prevSelectedBooks.filter(
        (selectedBook) => selectedBook.isbn !== book.isbn
      )
    );
  };

  const handleSelectBook = (book: BookItem) => {
    if (
      !selectedBooks.some((selectedBook) => selectedBook.isbn === book.isbn)
    ) {
      setSelectedBooks((prevSelectedBooks) => [...prevSelectedBooks, book]);
      setErrorMsg("");
    } else {
      setErrorMsg("Same Book can not be added twice");
    }
  };

  return (
    <div>
      <SnackbarNotification
        type={errorMsg ? "error" : "success"}
        open={errorMsg ? true : false}
        message={errorMsg}
      />
      <BookSearch
        searchTerm={searchTerm}
        onSearch={(searchTerm) => handleSearch(searchTerm)}
        onSearchTermChange={setSearchTerm}
        onSearchCleared={() => setSearchResults([])}
      />
      <Box display="flex">
        <Box margin={2} style={{ flex: 1, border: "1px solid #ccc" }}>
          <Typography variant="h5" align="center" margin={2}>
            Searched Books
          </Typography>
          <BookList
            books={searchResults}
            selectedBooks={false}
            onSelectBook={handleSelectBook}
          />
        </Box>
        <Box margin={2} style={{ flex: 1, border: "1px solid #ccc" }}>
          <Typography align="center" variant="h5" margin={2}>
            Selected Books
          </Typography>
          <BookList
            books={selectedBooks}
            selectedBooks={true}
            onRemoveBook={handleRemoveBook}
          />
        </Box>
      </Box>
    </div>
  );
};

export default BookSearchContainer;
