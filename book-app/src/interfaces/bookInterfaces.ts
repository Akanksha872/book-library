export interface CoverColor {
  name: string;
  hex: string;
}

export interface BookItem {
  isbn: string;
  title: string;
  subtitle: string;
  author: string;
  published: string;
  publisher: string;
  pages: number;
  description: string;
  coverColors: string[];
}
