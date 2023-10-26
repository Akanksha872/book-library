export interface CoverColor {
  name: string;
  hex: string;
}

export interface BookItem {
  // isbn: number;
  isbn: string;
  title: string;
  subtitle: string;
  author: string;
  // coverColors: CoverColor[];
  published: string;
  publisher: string;
  pages: number;
  description: string;
  coverColors: string[];


}
