export type TThemeName = 'light' | 'dark';
export type TColorKey = 'primary' | 'background' | 'secondary' | 'third' | 'border' | 'text';
export type THeadingSize = 'large' | 'medium' | 'small';
export type TButtonSize = 'large' | 'medium' | 'small';
export type TButtonSchema = 'primary' | 'normal' | 'like';
export type TLayoutWidth = 'large' | 'medium' | 'small';
export type TMediaQuery = 'mobile' | 'tablet' | 'desktop';

export interface ITheme {
  name: TThemeName;
  color: Record<TColorKey, string>;
  heading: {
    [key in THeadingSize]: {
      fontSize: string;
    }
  };
  button: {
    size: {
      [key in TButtonSize]: {
        fontSize: string;
        padding: string;
      }
    },
    schema: {
      [key in TButtonSchema]: {
        color: string;
        backgroundColor: string;
      }
    }
  };
  borderRadius: {
    default: string;
  };
  layout: {
    width: {
      [key in TLayoutWidth]: string;
    }
  },
  mediaQuery: {
    [key in TMediaQuery]: string;
  }
}

export const light: ITheme = {
  name: 'light',
  color: {
    primary: '#ff5000',
    secondary: '#5f5f5f',
    background: '#f5f5f5',
    third: 'green',
    border: 'gray',
    text: 'black'
  },
  heading: {
    large: {
      fontSize: '2rem',
    },
    medium: {
      fontSize: '1.5rem',
    },
    small: {
      fontSize: '1rem'
    },
  },
  button: {
    size: {
      large: {
        fontSize: '1.5rem',
        padding: '1rem 2rem',
      },
      medium: {
        fontSize: '1rem',
        padding: '0.5rem 1rem',
      },
      small: {
        fontSize: '0.75rem',
        padding: '0.25rem 0.5rem',
      },
    },
    schema: {
      primary: {
        color: 'white',
        backgroundColor: 'midnightblue'
      },
      normal: {
        color: 'black',
        backgroundColor: 'lightgray'
      },
      like: {
        color: 'white',
        backgroundColor: 'coral'
      }
    }
  },
  borderRadius: {
    default: '4px'
  },
  layout: {
    width: {
      large: '1020px',
      medium: '760px',
      small: '320px'
    }
  },
  mediaQuery: {
    mobile: '(max-width: 768px)',
    tablet: '(max-width: 1024px)',
    desktop: '(min-width: 1025px)'
  }
};

export const dark: ITheme = {
  ...light,
  name: 'dark',
  color: {
    primary: 'coral',
    background: '#424242',
    secondary: 'darkblue',
    third: 'darkgreen',
    border: 'gray',
    text: 'white'
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