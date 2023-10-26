import React, { useState } from "react";
import BookList from "../components/BookList";
import BookSearch from "../components/BookSearch";
import { BookItem } from "../interfaces/bookInterfaces";
import { searchFromBooks } from "../utils/search";

const BookSearchContainer: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([] as BookItem[]);

  const handleSearch = (newSearchTerm: string) => {
    setSearchTerm(newSearchTerm);
    if (newSearchTerm.length >= 3) {
      setSearchResults(searchFromBooks(newSearchTerm));
    } else {
      setSearchResults([]);
    }
  };

  // const onSelectBook = (book: BookItem) => {
  //   console.log(book);
  // };

  const handleRemoveBook = (book: BookItem) => {
    console.log(book);
  };

  return (
    <div>
      <BookSearch
        searchTerm={searchTerm}
        onSearch={(searchTerm) => handleSearch(searchTerm)}
        onSearchTermChange={setSearchTerm}
      />

      {/* {searchResults.length > 0 && (
        <ul>
          {searchResults.map((book: BookItem) => (
            <li key={book.isbn} onClick={() => onSelectBook(book)}>
              {book.title}
            </li>
          ))}
        </ul>
      )} */}
      <BookList books={searchResults} onRemoveBook={handleRemoveBook} />
    </div>
  );
};

export default BookSearchContainer;
