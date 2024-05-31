import { IBook } from "../model/book.model";
import { IPagination } from "../model/pagenation.model";
import { httpClient } from "./http";

interface IFetchBooksParams {
  categoryId?: number;
  recentDays?: number;
  page?: number;
  listNum: number;
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