import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import BookItem from './BookItem';
import { BookStoreThemeProvider } from '../../context/BookStoreThemeContext';
import { IBook } from '../../model/book.model';
import { formatNumber } from '../../utils/format';
import { getImgSrc } from '../../utils/img';

const dummyBook: IBook = {
  id: 1,
  title: 'dummy title',
  img: 1,
  category_id: 1,
  form: 'dummy form',
  author: 'dummy author',
  isbn: 'dummy isbn',
  pages: 100,
  summary: 'dummy summary',
  detail: 'dummy detail',
  contents: 'dummy contents',
  price: 10000,
  likes: 1,
  pubDate: '2024-05-31',
}

describe('BookItem', () => {
  it('렌더 여부', () => {
    const { getByText, getByAltText } = render(
      <BookStoreThemeProvider>
        <BookItem book={dummyBook} />
      </BookStoreThemeProvider>
    );

    expect(getByText(dummyBook.title)).toBeInTheDocument();
    expect(getByText(dummyBook.summary)).toBeInTheDocument();
    expect(getByText(dummyBook.author)).toBeInTheDocument();
    expect(getByText(formatNumber(dummyBook.price)+"원")).toBeInTheDocument();
    expect(getByText(dummyBook.likes)).toBeInTheDocument();
    expect(getByAltText(dummyBook.title)).toHaveAttribute('src', getImgSrc(dummyBook.img));
  });
})