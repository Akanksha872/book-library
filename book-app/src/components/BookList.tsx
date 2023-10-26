import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Typography,
} from "@mui/material";
import React from "react";
import { BookItem } from "../interfaces/bookInterfaces";
import "../styles/BookSearch.css";
import { formatDate } from "../utils/date";

interface BookListProps {
  books: BookItem[];
  onRemoveBook: (book: BookItem) => void;
}

const BookList: React.FC<BookListProps> = ({ books, onRemoveBook }) => {
  return (
    <div className="flex-row">
      {books.map((book: BookItem) => (
        <Card key={book.isbn} style={{ maxWidth: 300, margin: "16px" }}>
          <CardHeader title={book.title} />
          <Divider />
          <CardContent>
            {book.subtitle && (
              <Typography variant="subtitle1">{book.subtitle}</Typography>
            )}
            <Typography variant="body2">by {book.author}</Typography>
            <br />
            <Typography style={{ fontFamily: "monospace" }}>
              ISBN: {book.isbn}
            </Typography>
            <Typography>No of Pages: {book.pages}</Typography>
            <Typography>
              Published by {book.publisher} on {formatDate(book.published)}
            </Typography>
            <CardActions>
              <Button size="small" onClick={() => onRemoveBook(book)}>
                Remove
              </Button>
            </CardActions>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default BookList;
