import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  colors: {
    primary: 'hsl(172, 67%, 45%)', // strong cyan
    neutral: {
      900: 'hsl(183, 100%, 15%)',
      700: 'hsl(186, 14%, 43%)',
      500: 'hsl(184, 14%, 56%)',
      300: 'hsl(185, 41%, 84%)',
      100: 'hsl(189, 41%, 97%)'
    },
    white: 'hsl(0, 0%, 100%)'

  },
  breakpoint: `(min-width: 900px)`
};
