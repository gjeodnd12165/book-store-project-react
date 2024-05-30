export interface IBook {
  id: number;
  img: number;
  title: string;
  summary: string;
  autho: string;
  price: number;
  likes: number;
  pubDate: string;
}

export interface IBookDetail extends IBook {
  categoryName: string;
  liked: boolean;
}