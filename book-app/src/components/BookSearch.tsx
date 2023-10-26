import { Button, TextField } from "@mui/material";
import React from "react";
import "../styles/BookSearch.css";

interface BookSearchProps {
  searchTerm: string;
  onSearch: (searchTerm: string) => void; 
  onSearchTermChange: (term: string) => void;
}

const BookSearch: React.FC<BookSearchProps> = ({
  searchTerm,
  onSearch,
  onSearchTermChange,
}) => {
  return (
    <>
      <div className="search">
        <TextField
          label="Search for books..."
          variant="outlined"
          value={searchTerm}
          onChange={(e) => onSearchTermChange(e.target.value)}
          style={{ width: "50%" }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={() => onSearch(searchTerm)} 
          style={{ marginLeft: "1%", height: "50%" }}
        >
          Search
        </Button>
      </div>
    </>
  );
};

export default BookSearch;
