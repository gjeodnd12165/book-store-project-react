import { fetchBanners } from "@/api/banner.api";
import { fetchBestBooks, fetchBooks } from "@/api/books.api";
import { fetchAllReview } from "@/api/review.api";
import { IBanner } from "@/model/banner.model";
import { IBook, IBookReviewItem } from "@/model/book.model";
import { useEffect, useState } from "react";

export const useMain = () => {
  const [reviews, setReviews] = useState<IBookReviewItem[]>([]);
  const [newBooks, setNewBooks] = useState<IBook[]>([]);
  const [bestBooks, setBestBooks] = useState<IBook[]>([]);
  const [banners, setBanners] = useState<IBanner[]>([]);

  useEffect(() => {
    fetchAllReview().then((reviews) => {
      setReviews(reviews);
    });

    fetchBooks({
      categoryId: undefined,
      recentDays: 3650,
      page: 1,
      listNum: 4,
    }).then(({ books }) => {
      setNewBooks(books);
    });

    fetchBestBooks().then((books) => {
      setBestBooks(books);
    });

    fetchBanners().then((banners) => {
      setBanners(banners);
    });
  }, []);

  return { reviews, newBooks, bestBooks, banners };
}