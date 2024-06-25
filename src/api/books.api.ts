import { IBook, IBookDetail } from "../model/book.model";
import { IPagination } from "../model/pagination.model";
import { httpClient } from "./http";

interface IFetchBooksParams {
  categoryId?: number;
  recentDays?: number;
  page?: number;
  listNum?: number;
}

interface IFetchBooksResponse {
  books: IBook[];
  pagination: IPagination
}

export const fetchBooks = async (params: IFetchBooksParams): Promise<IFetchBooksResponse> => {
  try {
    const response = await httpClient.get<IFetchBooksResponse>('/books', {
      params: params,
    });
    
    return response.data;
  } catch (error) {
    return {
      books: [],
      pagination: {
        totalBooks: 0,
        listNum: 8,
        currentPage: 1,
      }
    }
  }
}

export const fetchBook = async (bookId: string) => {
  const response = await httpClient.get<IBookDetail>(`/books/${bookId}`);
  
  return response.data;
}

export const addLike = async (bookId: number) => {
  const response = await httpClient.post(`/likes/${bookId}`);
  
  return response.data;
}

export const deleteLike = async (bookId: number) => {
  const response = await httpClient.delete(`/likes/${bookId}`);

  return response.data;
}

export const fetchBestBooks = async () => {
  const response = await httpClient.get('/books/best');

  return response.data;
}