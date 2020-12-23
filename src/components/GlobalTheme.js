import { createGlobalStyle } from 'styled-components'
import regularFont from '../assets/fonts/Rubik-Regular.ttf'
import boldFont from '../assets/fonts/Rubik-Bold.ttf'
import lightFont from '../assets/fonts/Rubik-Light.ttf'
import mediumFont from '../assets/fonts/Rubik-Medium.ttf'

export default createGlobalStyle`
  @font-face {
    font-family: Rubik-Regular;
    src: url(${regularFont});
  }

  @font-face {
    font-family: Rubik-Bold;
    src: url(${boldFont});
  }

  @font-face {
    font-family: Rubik-Light;
    src: url(${lightFont});
  }

  @font-face {
    font-family: Rubik-Medium;
    src: url(${mediumFont});
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Rubik-Regular;
  }
`
