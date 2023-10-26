import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import BookDetail from "../components/BookDetail";
import BookList from "../components/BookList";
import BookSearch from "../components/BookSearch";
import SnackbarNotification from "../components/SnackbarNotification";
import sampleSearchData from "../constants/sampleSearchData";
import { BookItem } from "../interfaces/bookInterfaces";
import { searchFromBooks } from "../utils/search";

const BookSearchContainer: React.FC = () => {
  const [showBookDetail, setShowBookDetail] = useState(false);
  const [selectedBook, setSelectedBook] = useState({} as BookItem);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(
    sampleSearchData as BookItem[]
  );
  const [wishListBooks, setWishListBooks] = useState([] as BookItem[]);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSearch = (newSearchTerm: string) => {
    setSearchTerm(newSearchTerm);
    if (newSearchTerm.length >= 3) {
      setSearchResults(searchFromBooks(newSearchTerm));
    } else {
      setSearchResults([]);
    }
  };

  const handleSelectBook = (book: BookItem) => {
    setSelectedBook(book);
    setShowBookDetail(true);
  };

  const handleRemoveBook = (book: BookItem) => {
    setWishListBooks((prevSelectedBooks) =>
      prevSelectedBooks.filter(
        (selectedBook) => selectedBook.isbn !== book.isbn
      )
    );
  };

  const handleAddBook = (book: BookItem) => {
    if (
      !wishListBooks.some((selectedBook) => selectedBook.isbn === book.isbn)
    ) {
      setWishListBooks((prevSelectedBooks) => [...prevSelectedBooks, book]);
      setErrorMsg("");
    } else {
      setErrorMsg("Same Book can not be added twice");
    }
  };

  return (
    <div>
      {showBookDetail && (
        <BookDetail
          book={selectedBook}
          open={showBookDetail}
          handleClose={() => setShowBookDetail(false)}
        />
      )}
      <SnackbarNotification
        type={errorMsg ? "error" : "success"}
        open={errorMsg ? true : false}
        message={errorMsg}
      />
      <BookSearch
        searchTerm={searchTerm}
        onSearch={(searchTerm) => handleSearch(searchTerm)}
        onSearchTermChange={setSearchTerm}
        onSearchCleared={() => setSearchResults(sampleSearchData)}
      />
      <Box display="flex">
        <Box margin={2} style={{ flex: 1, border: "1px solid #ccc" }}>
          <Typography variant="h5" align="center" margin={2}>
            All Books
          </Typography>
          <BookList
            books={searchResults}
            isWishList={false}
            onAddBook={handleAddBook}
            onSelectBook={handleSelectBook}
          />
        </Box>
        <Box margin={2} style={{ flex: 1, border: "1px solid #ccc" }}>
          <Typography align="center" variant="h5" margin={2}>
            Wishlist Books
          </Typography>
          <BookList
            books={wishListBooks}
            isWishList={true}
            onRemoveBook={handleRemoveBook}
            onSelectBook={handleSelectBook}
          />
        </Box>
      </Box>
    </div>
  );
};

export default BookSearchContainer;
