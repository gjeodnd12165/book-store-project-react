import { IBook } from "@/model/book.model";
import styled from "styled-components"
import BookBestItem from "../book/BookBestItem";

interface Props {
  books: IBook[];
}

function MainBestBooks({ books }: Props) {
  return (
    <MainBestBooksStyle>
      {books.map((book, index) => (
        <BookBestItem key={book.id} book={book} itemIndex={index}/>
      ))}
    </MainBestBooksStyle>
  )
}

const MainBestBooksStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 12px;

  @media screen AND ${({ theme }) => (theme.mediaQuery.mobile)} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export default MainBestBooks