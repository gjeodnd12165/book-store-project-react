import { useLocation } from "react-router-dom"
import { fetchBooks } from "../api/books.api";
import { QUERYSTRING } from "../constants/querystring";
import { LIST_NUM } from "../constants/pagination";
import { useQuery } from "react-query";

export const useBooks = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const { data: booksData, isLoading: isBooksLoading } = useQuery(['books', location.search], 
    () => 
      fetchBooks({
        categoryId: params.get(QUERYSTRING.CATEGORY_ID) ? Number(params.get(QUERYSTRING.CATEGORY_ID)) : undefined,
        recentDays: params.get(QUERYSTRING.RECENT_DAYS) ? Number(params.get(QUERYSTRING.RECENT_DAYS)) : undefined,
        page: params.get(QUERYSTRING.PAGE) ? Number(params.get(QUERYSTRING.PAGE)) : 1,
        listNum: LIST_NUM,
      })
  );

  return { 
    books: booksData?.books,
    pagination: booksData?.pagination,
    isEmpty: booksData?.books.length === 0,
    isBooksLoading,
  };
}