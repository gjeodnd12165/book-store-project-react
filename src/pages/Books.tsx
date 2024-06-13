import styled from 'styled-components'
import Title from '../components/common/Title'
import BooksFilter from '../components/books/BooksFilter'
import BooksList from '../components/books/BooksList'
import BooksEmpty from '../components/books/BooksEmpty'
import BooksViewSwitcher from '../components/books/BooksViewSwitcher'
import Loading from '@/components/common/Loading'
import { useBooksInfinite } from '@/hooks/useBooksInfinite'
import Button from '@/components/common/Button'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

function Books() {
  const {
    books,
    pagination,
    isEmpty,
    isBooksLoading,
    fetchNextPage,
    hasNextPage
  } = useBooksInfinite();

  const loadMore = () => {
    if (!hasNextPage) return;
    fetchNextPage();
  }

  const { targetRef: moreRef } = useIntersectionObserver((entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        loadMore();
      }
    })
  });

  if (isEmpty) {
    return <BooksEmpty />;
  }

  if (!books || !pagination || isBooksLoading) {
    return <Loading />;
  }

  return (
    <>
      <Title size='large'>도서 검색 결과</Title>
      <BooksStyle>
        <div className="filter">
          <BooksFilter />
          <BooksViewSwitcher />
        </div>
        {!isEmpty && books && <BooksList books={books} />}
        <div className="more" ref={moreRef}>
          <Button size='medium' schema='normal' onClick={() => fetchNextPage()} disabled={!hasNextPage}>
            {hasNextPage ? '더보기' : '마지막'}
          </Button>
        </div>
      </BooksStyle>
    </>
  )
}

const BooksStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 24px;

  .filter {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
  }

  @media screen AND (${({ theme }) => (theme.mediaQuery.mobile)}) {
    .filter {
      flex-direction: column;
      align-items: end;
    }
  }
`

export default Books