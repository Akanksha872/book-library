export interface CoverColor {
  name: string;
  hex: string;
}

export interface BookItem {
  // isbn: number;
  isbn: string;
  title: string;
  author: string;
  // coverColors: CoverColor[];
  coverColors: string[];

}
