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
import { formatDate } from "../utils/date";

interface BookListProps {
  books: BookItem[];
  selectedBooks: boolean;
  onRemoveBook?: (book: BookItem) => void;
  onSelectBook?: (book: BookItem) => void;
}

const BookList: React.FC<BookListProps> = ({
  books,
  selectedBooks,
  onRemoveBook,
  onSelectBook,
}) => {
  return (
    <>
      {books.length === 0 ? (
        <Box display="flex" justifyContent="center">
          {!selectedBooks ? "No Book found" : "No Selected Book"}
        </Box>
      ) : (
        <Grid container spacing={5}>
          {books.map((book: BookItem) => (
            <Grid item xs={10} sm={7} md={5} key={book.isbn}>
              <Card key={book.isbn} style={{ height: 380 }}>
                <CardHeader title={book.title} />
                <Divider />
                <CardContent>
                  {book.subtitle && (
                    <Typography variant="body1">{book.subtitle}</Typography>
                  )}
                  <Typography variant="body1">by {book.author}</Typography>
                  <br />
                  <Typography style={{ fontFamily: "monospace" }}>
                    ISBN: {book.isbn}
                  </Typography>
                  {book.coverColors.length !== 0 && (
                    <Typography variant="body2">
                      Covers: {book.coverColors.join(", ")}
                    </Typography>
                  )}
                  <br />
                  <Typography variant="body2">
                    No of Pages: {book.pages}
                  </Typography>
                  <Typography variant="body2">
                    Published by {book.publisher} on{" "}
                    {formatDate(book.published)}
                  </Typography>
                  <CardActions>
                    {selectedBooks && (
                      <Button size="small" onClick={() => onRemoveBook?.(book)}>
                        Remove
                      </Button>
                    )}
                    {!selectedBooks && (
                      <Button size="small" onClick={() => onSelectBook?.(book)}>
                        Add
                      </Button>
                    )}
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
