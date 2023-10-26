import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { BookItem } from "../interfaces/bookInterfaces";

interface BookListProps {
  books: BookItem[];
  isWishList: boolean;
  onRemoveBook?: (book: BookItem) => void;
  onAddBook?: (book: BookItem) => void;
  onSelectBook: (book: BookItem) => void;
}

const BookList: React.FC<BookListProps> = ({
  books,
  isWishList,
  onRemoveBook,
  onAddBook,
  onSelectBook,
}) => {
  return (
    <>
      {books.length === 0 ? (
        <Box display="flex" justifyContent="center">
          {!isWishList ? "No Book found" : "No Selected Book"}
        </Box>
      ) : (
        <Grid container spacing={4}>
          {books.map((book: BookItem) => (
            <Grid item xs={10} sm={7} md={5} key={book.isbn} marginLeft={3}>
              <Card key={book.isbn}>
                <CardHeader
                  title={book.title}
                  style={{ background: "beige" }}
                />
                <Divider />
                <CardContent>
                  {book.subtitle && (
                    <Typography variant="body1">{book.subtitle}</Typography>
                  )}
                  <br />
                  <Typography variant="body2">Author: {book.author}</Typography>
                  <br />

                  {book.coverColors.length !== 0 && (
                    <Typography variant="body2">
                      Covers: {book.coverColors.join(", ")}
                    </Typography>
                  )}
                  <Typography
                    variant="body2"
                    style={{ fontFamily: "monospace" }}
                  >
                    ISBN: {book.isbn}
                  </Typography>
                  <br />
                  <Divider />
                  <CardActions>
                    {isWishList && (
                      <Button
                        size="small"
                        color="secondary"
                        variant="contained"
                        onClick={() => onRemoveBook?.(book)}
                      >
                        Remove
                      </Button>
                    )}
                    {!isWishList && (
                      <Button
                        size="small"
                        color="primary"
                        variant="contained"
                        onClick={() => onAddBook?.(book)}
                      >
                        Add
                      </Button>
                    )}
                    <Button
                      size="small"
                      color="primary"
                      onClick={() => onSelectBook(book)}
                    >
                      Detail
                    </Button>
                  </CardActions>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
};

export default BookList;
