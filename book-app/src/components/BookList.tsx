import React from 'react';
import { BookItem } from '../interfaces/bookInterfaces';

interface BookListProps {
  books: BookItem[];
  onRemoveBook: (book: BookItem) => void;
}

const BookList: React.FC<BookListProps> = ({ books, onRemoveBook }) => {
  return (
    <div>
      <h2>Selected Books</h2>
      <ul>
        {books.map((book) => (
          <li key={book.isbn}>
            {book.title} - {book.author}
            <button onClick={() => onRemoveBook(book)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
