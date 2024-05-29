import 'sanitize.css'
import { createGlobalStyle } from 'styled-components'
import { TThemeName } from './theme';

interface Props {
  themeName: TThemeName;
}

export const GlobalStyle = createGlobalStyle<Props>`
  body {
    padding: 0;
    margin: 0;
    background-color: ${({ themeName }) => themeName === 'light' ? 'white' : 'black'}
  }

  h1 {
    margin: 0;
  }

  * {
    color: ${({ themeName }) => themeName === 'light' ? 'black' : 'white'}
  }
`;