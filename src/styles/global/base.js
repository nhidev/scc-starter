import { css } from "styled-components";

import { colors } from "../../styles/theme";
import { respondTo } from "../../styles/mixins"

export default css`

  html {
    font-size: calc((10px + ((100vw - 375px) / 375) * 10));
  }

  @media (min-width: 768px) {
    html {
      font-size: 62.5%; //10px;
    }
  }
  body {
    font-size: 1.6rem;
    line-height: 1.5;
    color: #222222;
    overflow-x: hidden;
    min-height: 100vh;
    width: 100%;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100%;
    position: relative;
  }

  html, input, textarea {
    /* font-family: 'Nunito Sans', sans-serif; */
    -webkit-font-smoothing: antialiased;
    font-family: "Montserrat", "HelveticaNeue", "Helvetica Neue", Helvetica,
      Arial, sans-serif;
  }
  
  b {
    font-weight: 600;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: bold;
    line-height: 1.2;
  }

   h1 {
    font-size: 42px;
  }

  h2 {
    font-size: 36px;
  }

  h3 {
    font-size: 32px;
  }

  h4 {
    font-size: 24px;
  }

  h5 {
    font-size: 18px;
  }

  h6 {
    font-size: 16px;
  }

  .section-title {
    color: ${colors.m01};
    text-transform: uppercase;
    text-align: center;
    position: relative;
    display: flex;
    align-items: baseline;
    justify-content: center;
    font-weight: 900;
    font-size: 50px;
    line-height: normal;
    letter-spacing: 0.04em;
    min-height: 120px;
    grid-column: 1 / 15;
    margin-bottom: 40px;

    ${respondTo.sm`
      font-size: 32px;
      min-height: 76px;
      margin-bottom: 30px;
    `}

    b {
      font-weight: 900;
      margin: 0 10px;

      ${respondTo.sm`
        margin: 0 5px;
      `}
    }

    span {
      color: transparent;
      -webkit-text-stroke: 1px ${colors.m01};
      margin: 0 10px;

      ${respondTo.sm`
        margin: 0 5px;
     `}
    }

    &:before {
      content: "";
      width: 10px;
      height: 40px;
      background-color: ${colors.neu02};
      position: absolute;
      transform: rotate(20deg);
      bottom: 0;

      ${respondTo.sm`
        width: 7px;
        height: 26px;
      `}
    }
  }

  .container {
    display: grid;
    grid-template-columns: repeat(14, 1fr);
    grid-column-gap: 20px;
    width: 100%;
    max-width: 1920px;
    margin: auto;
    ${respondTo.sm`
      grid-column-gap: 10px;
      grid-template-columns: 10px repeat(12, 1fr) 10px;
    `}

    .content {
      grid-column: 3 / 13;
      width: 100%;
      display: grid;
      grid-template-columns: repeat(10, 1fr);
      grid-column-gap: 20px;

      ${respondTo.md`
        grid-column: 2 / 14;
      `}

      ${respondTo.sm`
        grid-template-columns: repeat(1, 1fr);
        grid-column: 2 / 14;
      `}
    }
  }

  .btn {
    border: 0;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    outline: none;
    overflow: hidden;
    padding: 2rem 3rem;
    position: relative;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 1px;
    white-space: nowrap;
    transition: all .2s cubic-bezier(.25,.46,.45,.94);
    span {
      color:rgb(255 255 255);
      display: block;
      line-height: 1;
      transition: all .4s cubic-bezier(.25,.46,.45,.94);
      white-space: normal;
    }
    i {
      display: block;
      width: 1.875rem;
      height: 1px;
      background: rgb(255 255 255);
      margin-left: 6rem;
      position: relative;
      transition: all .2s cubic-bezier(.25,.46,.45,.94);
      &:before {
        content: "";
        width: 15px;
        height: 1px;
        background: rgb(36 187 158);
        margin-left: -20px;
        display: block;
        transition: all .2s cubic-bezier(.25,.46,.45,.94);
      }
      &:after {
        content: "";
        display: block;
        position: absolute;
        top: -5px;
        left: 100%;
        width: 0;
        height: 0;
        border-top: 6px solid rgb(0 0 0 / 0%);
        border-bottom: 6px solid rgb(0 0 0 / 0%);
        border-left: 8px solid rgb(255 255 255);
        transition: all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        border-left-color: rgb(255 255 255);
      }
    }
    &:hover {
      color: rgb(30 36 40);
      /* box-shadow: inset 0 0 0 1px #24bb9e; */
      background: rgb(36 187 158);
      span {
        color: rgb(255 255 255);
        transform: translateX(10px);
      }
      i {
        background: rgb(255 255 255);
        &:before {
            background: rgb(255 255 255);
        }
        &:after {
          border-left-color: rgb(30 36 40)
        }
      }
    }
    @media (min-width: 768px) {
      padding: 2rem 3rem;
    }
  }
  .btn--green {
    background-color: #24bb9e;
    i {
      &:before {
        background: #fff;
      }
    }
    &:hover {
      background: #fff;
      box-shadow: inset 0 0 0 1px #fff;
      span {
        color: #1e2428;
      }
      i {
        background: #1e2428;
        &:before {
          background: #1e2428;
        }
        &:after {
          border-left-color: #1e2428;
        }
      }
    }
  }


  .btn--white {
    &:hover {
      background-color: rgb(255 255 255);
    } 
  }
  .btn--black-keyline {
    box-shadow: inset 0 0 0 1px #1e2428;
    background-color: rgb(0 0 0 / 0%);
    span {
      color: rgb(30 36 40);
    }
    i {
      background: rgb(30 36 40);
      &:after {
        border-left-color: rgb(30 36 40);
      }
    }
    &:hover {
      box-shadow: inset 0 0 0 1px #1e2428;
      background: rgb(30 36 40);
      span {
        color: rgb(255 255 255);
      }
      i {
        background: rgb(255 255 255);
        &:after {
          border-left-color: rgb(255 255 255);
        }
      }
    }
  }  
  .btn--white-keyline {
    box-shadow: inset 0 0 0 1px #fff;
    background-color: rgb(0 0 0 / 0%);
    span {
      color: #fff;
    }
    &:hover {
      box-shadow: inset 0 0 0 1px #24bb9e;
      background: rgb(36 187 158);
      span {
        color: rgb(255 255 255);
      }
      i {
        background: #fff;
        &:after {
          border-left-color:#fff;
        }
      }
    }
  } 
`;
