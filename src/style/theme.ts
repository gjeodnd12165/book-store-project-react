export type TThemeName = 'light' | 'dark';
type TColor = 'primary' | 'background' | 'secondary' | 'third';

interface ITheme {
  name: TThemeName;
  color: Record<TColor, string>;
}

export const light: ITheme = {
  name: 'light',
  color: {
    primary: 'brown',
    background: 'lightgray',
    secondary: 'blue',
    third: 'green'
  }
};

export const dark: ITheme = {
  name: 'dark',
  color: {
    primary: 'coral',
    background: 'midnightblue',
    secondary: 'darkblue',
    third: 'darkgreen'
  }
}

export const getTheme = (themeName: TThemeName): ITheme => {
  switch (themeName) {
    case 'light':
      return light;
    case 'dark':
      return dark;
  }
}