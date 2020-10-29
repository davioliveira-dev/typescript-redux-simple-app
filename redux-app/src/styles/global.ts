import { createGlobalStyle } from 'styled-components';
import '@rmwc/fab/styles';
import '@rmwc/icon/styles';
import 'fontsource-roboto';
import './index.css';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font: 15px 'Roboto';
    background-color: ${props => props.theme.background};
    color: ${props => props.theme.text}
  }
`;