import React from 'react'
import styled from 'styled-components'
import { TButtonSchema, TButtonSize } from '../../style/theme';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  children: React.ReactNode;
  size: TButtonSize;
  schema: TButtonSchema;
  disabled?: boolean;
  isLoading?: boolean;
}

function Button({ children, size, schema, disabled, isLoading, onSubmit, ...props }: Props) {
  return (
    <ButtonStyle size={size} schema={schema} disabled={disabled} isLoading={isLoading} onSubmit={onSubmit} {...props}>
      {children}
    </ButtonStyle>
  )
}

const ButtonStyle = styled.button<Omit<Props, 'children'>>`
  font-size: ${({ theme, size }) => theme.button.size[size].fontSize};
  padding: ${({ theme, size }) => theme.button.size[size].padding};
  color: ${({ theme, schema }) => theme.button.schema[schema].color};
  background-color: ${({ theme, schema }) => theme.button.schema[schema].backgroundColor};
  border: 0;
  border-radius: ${({ theme }) => theme.borderRadius.default};
  opacity: ${({ disabled }) => disabled ? 0.5 : 1};
  pointer-events: ${({ disabled }) => disabled ? 'none' : 'auto'};
  cursor: ${({ disabled }) => disabled ? 'default' : 'pointer'};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: background-color 0.3s, color 0.3s, opacity 0.3s;
`;

export default Button