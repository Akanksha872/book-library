import sampleSearchData from "../constants/sampleSearchData";
import { BookItem } from "../interfaces/bookInterfaces";

export const searchFromBooks = (searchTerm: string): BookItem[] => {
  const results: BookItem[] = sampleSearchData.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return results;
};
