import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Button from './Button';
import { BookStoreThemeProvider } from '../../context/BookStoreThemeContext';

describe('Button 컴포넌트 테스트', () => {
  it('렌더를 확인', () => {
    // 1. 렌더링
    const { container } = render(
      <BookStoreThemeProvider>
        <Button size="large" schema="normal">제목</Button>
      </BookStoreThemeProvider>
    );
    expect(container?.firstChild).toBeInTheDocument();
    expect(screen.getByRole('button')).toHaveStyle({
      fontSize: '1.5rem'
    });
  });
});