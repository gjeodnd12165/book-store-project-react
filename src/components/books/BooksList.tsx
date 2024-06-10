import styled from 'styled-components'
import BookItem from './BookItem'
import { IBook } from '@/model/book.model'
import { useLocation } from 'react-router-dom';
import { QUERYSTRING } from '@/constants/querystring';
import { useEffect, useState } from 'react';
import { TViewMode } from './BooksViewSwitcher';

interface Props {
  books?: IBook[];
}

function BooksList({ books }: Props) {
  const [view, setView] = useState<TViewMode>('grid');
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get(QUERYSTRING.VIEW)) {
      setView(params.get(QUERYSTRING.VIEW) as TViewMode ?? 'grid');
    }
  }, [location.search])

  return (
    <BooksListStyle view={view}>
      {
        books?.map((item) => (
          <BookItem key={item.id} book={item} view={view} />
        ))
      }
    </BooksListStyle>
  )
}

interface BooksListStyleProps {
  view: TViewMode
}

const BooksListStyle = styled.div<BooksListStyleProps>`
  display: grid;
  grid-template-columns: ${({ view }) => view === 'grid' ? 'repeat(4, 1fr)' : 'repeat(1, 1fr)'};
  gap: 24px;

  /* Don't know why this isn't work at all. */
  /* transition: grid-template-columns 0.5s ease; */
`;

export default BooksList