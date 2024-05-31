import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import Title from './Title';
import { BookStoreThemeProvider } from '../../context/BookStoreThemeContext';

describe('Title 컴포넌트 테스트', () => {
  it('렌더를 확인', () => {
    // 1. 렌더링
    const { container } = render(
      <BookStoreThemeProvider>
        <Title size="large" >제목</Title>
      </BookStoreThemeProvider>
    );
    expect(container?.firstChild).toHaveStyle({
      fontSize: "2rem"
    });
  });
});