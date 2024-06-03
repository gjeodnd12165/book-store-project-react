import { useEffect, useState } from "react"
import { IBookDetail } from "../model/book.model";
import { fetchBook, addLike, deleteLike } from "../api/books.api";
import { useAuthStore } from "../store/authStore";
import { useAlert } from "./useAlert";
import { addCart } from "../api/cart.api";


export const useBook = (bookId: string | undefined) => {
  const [book, setBook] = useState<IBookDetail | null>(null);
  const [cartAdded, setCartAdded] = useState<boolean>(false);

  const { isSignedIn } = useAuthStore();
  const showAlert = useAlert();

  const addToCart = (quantity: number) => () =>  {
    if (!book) return;
    addCart({
      bookId: book.id,
      quantity: quantity
    }).then(() => {
      setCartAdded(true);
      setTimeout(() => {
        setCartAdded(false);
      }, 3000);
    })
  }

  const likeToggle = () => {
    // 권한 확인
    if (!isSignedIn) {
      showAlert('로그인이 필요합니다.');
      return;
    }
    
    if (!book) return;

    if (book.liked) {
      // liked
      deleteLike(book.id).then(() => {
        setBook({
          ...book,
          liked: false,
          likes: book.likes - 1,
        });
      })
    } else {
      // unliked
      addLike(book.id).then(() => {
        setBook({
          ...book,
          liked: true,
          likes: book.likes + 1,
        });
      });
    }
  };

  useEffect(() => {
    if (!bookId) return; 

    fetchBook(bookId).then((book: IBookDetail) => {
      setBook(book);
    });
  }, [bookId]);

  return { book, likeToggle, addToCart, cartAdded };
}