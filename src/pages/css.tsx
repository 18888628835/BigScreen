import styled from 'styled-components';

export const Wrap = styled.section`
  text-align: center;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-image: url('/bg.png');
  background-size: cover;
  background-repeat: no-repeat;
  -webkit-background-size: cover;
  background-position: center 0;
  > header {
    margin-bottom: 1.073446rem;
    margin-top: 0.282486rem;
    > span {
      background: linear-gradient(180deg, #ffffff 30.77%, #2688d6 90.38%);
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
    }
  }
`;
export const Main = styled.main`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding-left: 1.129944rem;
  padding-right: 1.129944rem;
  > section {
    flex: 1;
  }
  > section:nth-child(1) {
    flex: 3;
  }
  .middle {
    color: white;
    border: 1px solid red;
  }
  /* 上边布局 */
  .top {
    display: flex;
    > div {
      flex: 1;
    }
    /* 上中 */
    .middle {
      flex: 1.65;
    }
    /* 上左 */
    .left {
      display: flex;
      flex-direction: column;
      > div {
        flex: 1;
      }
      /* 左上 */
      .l_top {
        flex: 1.2;
        .top_content {
          height: 100%;
          color: #ffffffbf;
          font-size: var(--main-fz);
          display: flex;
          flex-direction: column;
          margin-bottom: -0.451977rem;
          .corner {
            position: absolute;
            width: 0.254237rem;
            height: 0.254237rem;
          }
          .corner1 {
            border-left: 2px solid #3dd7ff;
            border-top: 2px solid #3dd7ff;
            top: 0;
            left: 0;
          }
          .corner2 {
            border-right: 2px solid #3dd7ff;
            border-bottom: 2px solid #3dd7ff;
            bottom: 0;
            right: 0;
          }
          .content_item {
            position: relative;
            flex: 1;
            display: flex;
            align-items: center;
            margin-bottom: 0.451977rem;
            background: rgba(0, 22, 56, 0.9);
            box-shadow: inset 0px 0px 8px rgba(49, 218, 255, 0.5);
          }
          .line {
            height: 60%;
            width: 1px;
            background: linear-gradient(
              180deg,
              rgba(61, 215, 255, 0) 0%,
              #3dd7ff 50.69%,
              rgba(61, 215, 255, 0) 100%
            );
          }
          .icon_wrap {
            padding-top: 0.451977rem;
            padding-bottom: 0.451977rem;
            flex: 1;
            .icon_wrap_top {
              margin-bottom: 0.225989rem;
              letter-spacing: 0.05em;
              text-align: center;
              > span:nth-child(1) {
                color: #3dd7ff;
                font-weight: bold;
                font-size: 0.79096rem;
              }
              > .last:nth-child(1) {
                color: #ff9c4b;
              }
            }

            img {
              width: 0.75113rem;
            }
          }
        }
      }
      /* 左下 */
      .l_bottom {
        .middle_content {
          height: 100%;
        }
      }
    }
    /* 上右 */
    .right {
      display: flex;
      flex-direction: column;
      font-size: 0.338983rem;
      > div {
        flex: 1;
      }
      .right_top_content {
        height: 100%;
        color: rgba(255, 255, 255, 0.75);
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        .content_top {
          display: flex;
          flex: 1;
          justify-content: space-around;
          align-items: center;
          > div {
            display: flex;
            flex-direction: column;
            > span {
              margin-bottom: 0.225989rem;
            }
            > div:nth-child(2) > span {
              font-size: 0.79096rem;
              line-height: 1.016949rem;
              color: #3dd7ff;
              letter-spacing: 0.05em;
              font-weight: bold;
            }
          }
        }
        .content_line {
          background: linear-gradient(
            270deg,
            rgba(64, 205, 241, 0) 0%,
            #40cdf1 56.74%,
            rgba(64, 205, 241, 0) 97.67%
          );
          height: 1px;
          width: 100%;
          margin-bottom: 0.564972rem;
          margin-top: 0.564972rem;
        }
        .content_bottom {
          flex: 1.2;
          display: flex;
          justify-content: space-around;
          align-items: center;
          .circle {
            display: flex;
            flex: 1;
            height: 100%;
            flex-direction: column;
            > div {
              flex: 1;
              width: 100%;
              height: 100%;
            }
          }
        }
      }
      .legend {
        color: white;
        width: 100%;
        display: flex;
        span:nth-child(1) {
          padding-left: 0.282486rem;
          padding-right: 0.282486rem;
        }
        span:nth-child(2) {
          margin-right: 3.248588rem;
        }
      }
      .right_bottom_content {
        height: 100%;
      }
    }
  }
  /* 下边布局 */
  .bottom {
    flex: 1;
    display: flex;
    > div {
      flex: 1;
      width: 100%;
    }
    .dv-scroll-board {
      font-size: 0.338983rem;
    }
    .dv-scroll-board .header {
      font-size: inherit;
    }
    .row-item {
      font-size: inherit;
    }
    /* 左下 */
    .b_left {
      .bottom_left_content {
        width: 100%;
        height: 100%;
        padding-left: 0.564972rem;
        .row-item {
          > .ceil:nth-child(3) {
            color: #3dd7ff;
          }
        }
        .pm {
          border-radius: 50%;
          display: inline-block;
          width: 0.423729rem;
          line-height: 1;
          text-align: center;
        }
        .pm1 {
          background: linear-gradient(180deg, #f1c94e 0%, #ee9a3a 100%);
        }
        .pm2 {
          background: linear-gradient(180deg, #d1cfd8 0%, #9696a2 100%);
        }
        .pm3 {
          background: linear-gradient(180deg, #e6a999 0%, #c5816c 100%);
        }
      }
    }
    /* 下中 */
    .b_middle {
      flex: 1.65;
      height: 100%;
      .bottom_middle_content {
        height: 100%;
        font-size: 0.338983rem;
      }
    }
    /* 下右 */
    .b_right {
      .container {
        padding-bottom: 0;
      }
      .b_right_content {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        color: white;
        > a {
          flex: 1;
          display: flex;
          text-align: center;
          align-items: center;
          cursor: pointer;
        }
        .img_wrap {
          width: 2.118644rem;
          line-height: 1;
          margin-right: 0.282486rem;
        }
        p {
          flex: 4;
          text-align: left;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          > div:nth-child(1) {
            font-size: 0.39548rem;
            line-height: 1.4;
          }
          > div:nth-child(2) {
            font-size: 0.338983rem;
            line-height: 1.4;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            overflow: hidden;
            -webkit-box-orient: vertical;
          }
        }
      }
    }
  }
`;
