import { useLocation } from "react-router-dom"
import { IBook } from "../model/book.model";
import { IPagination } from "../model/pagenation.model";
import { useEffect, useState } from "react";
import { fetchBooks } from "../api/books.api";
import { QUERYSTRING } from "../constants/querystring";
import { LIST_NUM } from "../constants/pagination";

export const useBooks = () => {
  const location = useLocation();

  const [books, setBooks] = useState<IBook[]>([]);
  const [pagination, setPagination] = useState<IPagination>({
    totalBooks: 0,
    listNum: 20,
    currentPage: 1,
  });
  const [isEmpty, setIsEmpty] = useState(true);

  useEffect(() => {
    const params = new URLSearchParams(location.search);

    fetchBooks({
      categoryId: params.get(QUERYSTRING.CATEGORY_ID) ? Number(params.get(QUERYSTRING.CATEGORY_ID)) : undefined,
      recentDays: params.get(QUERYSTRING.RECENT_DAYS) ? Number(params.get(QUERYSTRING.RECENT_DAYS)) : undefined,
      page: params.get(QUERYSTRING.PAGE) ? Number(params.get(QUERYSTRING.PAGE)) : 1,
      listNum: LIST_NUM,
    }).then(({ books, pagination }) => {
      setBooks(books);
      setPagination(pagination);
      setIsEmpty(books.length === 0);
    })
  }, [location.search]);

  return { books, pagination, isEmpty };
}