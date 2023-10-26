import { Box, Button, TextField } from "@mui/material";
import React from "react";

interface BookSearchProps {
  searchTerm: string;
  onSearch: (searchTerm: string) => void;
  onSearchTermChange: (term: string) => void;
  onSearchCleared: () => void;
}

const BookSearch: React.FC<BookSearchProps> = ({
  searchTerm,
  onSearch,
  onSearchTermChange,
  onSearchCleared,
}) => {
  const handleBlur = () => {
    if (searchTerm === "") {
      onSearchCleared();
    }
  };
  return (
    <>
      <Box display="flex" justifyContent="center" marginTop={2}>
        <TextField
          label="Search"
          placeholder="Search for books by title, subtitle, author, or ISBN"
          variant="outlined"
          value={searchTerm}
          onChange={(e) => onSearchTermChange(e.target.value)}
          onBlur={handleBlur}
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
      </Box>
    </>
  );
};

export default BookSearch;
