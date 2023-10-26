import {
  Box,
  List,
  ListItem,
  ListItemText,
  Modal,
  Typography,
} from "@mui/material";
import React from "react";
import { BookItem } from "../interfaces/bookInterfaces";
import { formatDate } from "../utils/date";

interface BookDetailProps {
  book: BookItem;
  open: boolean;
  handleClose: () => void;
}

const BookDetail: React.FC<BookDetailProps> = ({ book, open, handleClose }) => {
  console.log(open, book);

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 3,
        }}
      >
        <Typography variant="h5" gutterBottom>
          Book Details
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary={`Title: ${book.title}`} />
          </ListItem>
          <ListItem>
            <ListItemText primary={`Subtitle: ${book.subtitle}`} />
          </ListItem>
          <ListItem>
            <ListItemText primary={`Author: ${book.author}`} />
          </ListItem>
          <ListItem>
            <ListItemText primary={`ISBN: ${book.isbn}`} />
          </ListItem>
          <ListItem>
            <ListItemText primary={`Published by: ${book.publisher}`} />
          </ListItem>
          <ListItem>
            <ListItemText
              primary={`Published on: ${formatDate(book.published)}`}
            />
          </ListItem>
          <ListItem>
            <ListItemText primary={`Pages: ${book.pages}`} />
          </ListItem>
          <ListItem>
            <ListItemText primary={`Description: ${book.description}`} />
          </ListItem>
          {book.coverColors.length !== 0 && (
            <ListItem>
              <ListItemText
                primary={`Cover Colors: ${book.coverColors.join(", ")}`}
              />
            </ListItem>
          )}
        </List>
      </Box>
    </Modal>
  );
};

export default BookDetail;
