import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
  *,
  *:before,
  *:after {
    border: none;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html,
  body {
    height: 100%;
    width: 100%;
    line-height: 1.5;
    box-sizing: border-box;
  }
  body {
    overflow-x: hidden;
    font-family: 'Roboto';
  }
  body.fontLoaded {
    font-family: 'Roboto';
  }
  #root {
    min-height: 100%;
    min-width: 100%;
  }
  h1, h2, h3, h4, h5, p, small{
    color: #212429;
  }
  h1{
    font-size: 40px;
    font-weight: 600;
  }
  h2{
    font-weight:500;
    font-size: 30px;
  }
  h3{
    font-size: 20px;
  }
  h4{
    font-size: 21px;
  }
  h5{
    font-weight: 600;
    font-size: 12px;
  }
  p{
    font-size: 14px;
  }
  small{
    font-size: 12px;
  }
  p,
  label {
    font-family: 'Roboto';
    line-height: 1.5em;
  }
  input, select {
    font-family: inherit;
    font-size: inherit;
  }
  ul, ol {
    padding: 0;
    margin: 0;
    list-style: none;
  }
  a {
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    cursor: pointer;
    &:hover,
    &:focus {
      outline: 0;
    }
  }
  button {
    cursor: pointer;
    &:focus,
    &:active {
      outline: none;
    }
  }
`;

export default GlobalStyle;