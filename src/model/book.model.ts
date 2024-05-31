export interface IBook {
  id: number;
  title: string;
  img: number;
  category_id: number;
  form: string;
  author: string;
  isbn: string;
  pages: number;
  summary: string;
  detail: string;
  contents: string;
  price: number;
  likes: number;
  pubDate: string;
}

export interface IBookDetail extends IBook {
  categoryName: string;
  liked: boolean;
}