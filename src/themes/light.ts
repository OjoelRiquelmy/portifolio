
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    background: string;
    primary: string;
    secondary: string;
    backgroundButton?: string;
    textButton?: string;
    borderColor?: string;
    
  }
}

import type { DefaultTheme } from 'styled-components';

const light: DefaultTheme = {
    background: '#f0f0f0',
    primary: '#212121ff',
    secondary: '#9c9c9cff',
    backgroundButton: '#447',
    textButton: '#282a35',
    borderColor: '#c1c1c1',
}

export default light