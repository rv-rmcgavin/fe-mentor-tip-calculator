// import original module declarations
import 'styled-components';

interface Neutral {
  900: string;
  700: string;
  500: string;
  300: string;
  100: string;
  50: string;
  200: string;
}

interface Colors {
  primary: string;
  neutral: Neutral;
  white: string;
  gray: string;
}

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: Colors;
    breakpoint: string;
  }
}