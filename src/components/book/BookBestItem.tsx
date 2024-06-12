import { IBook } from "@/model/book.model";
import styled from "styled-components"
import BookItem, { BookItemStyle } from "../books/BookItem";

interface Props {
  book: IBook;
  itemIndex: number;
}

function BookBestItem({ book, itemIndex }: Props) {
  return (
    <BookBestItemStyle>
      <div className="rank">{itemIndex + 1}</div>
      <BookItem book={book} view="grid" />
    </BookBestItemStyle>
  )
}

const BookBestItemStyle = styled.div`
  ${BookItemStyle} {  
    .summary,
    .price,
    .likes {
      display: none;
    }

    h2 {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  position: relative;

  .rank {
    position: absolute;
    top: -10px;
    left: -10px;
    width: 30px;
    height: 30px;
    background-color: ${({ theme }) => theme.color.primary};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.25rem;
    color: #fff;
    font-weight: 700;
    font-style: italic;
  }
`;

export default BookBestItem