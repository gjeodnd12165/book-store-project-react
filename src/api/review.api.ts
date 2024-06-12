import { IBookReviewItem, TBookReviewItemWrite } from "@/model/book.model";
import { requestHandler } from "./http"

export const fetchBookReview = async (bookId: string) => {
  return await requestHandler<IBookReviewItem[]>('get', `/reviews/${bookId}`);
}

interface AddBookReviewResponse {
  message: string;
}

export const addBookReview = async (bookId: string, data: TBookReviewItemWrite) => {
  return await requestHandler<AddBookReviewResponse>('post', `/reviews/${bookId}`, data);
}

export const fetchAllReview = async () => {
  return await requestHandler<IBookReviewItem[]>('get', `/reviews`);
}