import 'styled-components';
import palette from "./ui/theme/palette";


  
declare module 'styled-components' {
    export interface DefaultTheme {
      colors: {
        primary: string
        secondary: string
        tertiary: string;
        white: string;
        black: string;
        transparent: string;
        warning: string;
        background: string;


      }
    }
  }