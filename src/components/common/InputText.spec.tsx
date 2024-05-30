import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import InputText from './InputText';
import { BookStoreThemeProvider } from '../../context/BookStoreThemeContext';
import React from 'react';

describe('Button 컴포넌트 테스트', () => {
  it('렌더를 확인', () => {
    // 1. 렌더링
    render(
      <BookStoreThemeProvider>
        <InputText placeholder="여기에 입력" />
      </BookStoreThemeProvider>
    );
    expect(screen.getByPlaceholderText('여기에 입력')).toBeInTheDocument();
  });

  it('forwardRef 테스트', () => {
    const ref = React.createRef<HTMLInputElement>();
    render(
      <BookStoreThemeProvider>
        <InputText placeholder="여기에 입력" ref={ref} />
      </BookStoreThemeProvider>
    );
    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });
});