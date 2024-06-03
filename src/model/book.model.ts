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
  pub_date: string;
}

export interface IBookDetail extends IBook {
  category_name: string;
  liked: boolean;
}