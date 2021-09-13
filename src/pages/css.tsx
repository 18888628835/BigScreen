import styled from 'styled-components';

export const Wrap = styled.section`
  text-align: center;
  height: 100%;
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
    border: 1px solid red;
  }
  > section:nth-child(1) {
    flex: 3;
  }
  /* 上边布局 */
  .top {
    display: flex;
    > div {
      flex: 1;
      border: 1px solid red;
    }
    .middle {
      flex: 1.5;
    }
    .left {
      display: flex;
      flex-direction: column;

      > div {
        flex: 1;
      }
      .l_top {
        flex: 1.2;
        border: 1px solid white;
        .top_content {
          height: 100%;
          color: #ffffffbf;
          font-size: var(--main-fz);
          display: flex;
          flex-direction: column;
          margin-bottom: -0.451977rem;
          .content_item {
            flex: 1;
            display: flex;
            align-items: center;
            margin-bottom: 0.451977rem;
            background: rgba(0, 22, 56, 0.9);
            box-shadow: inset 0px 0px 8px rgba(49, 218, 255, 0.5);
          }
          .icon_wrap {
            padding-top: 0.451977rem;
            padding-bottom: 0.451977rem;
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            .top {
              margin-bottom: 0.225989rem;
              display: flex;
              align-items: center;
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
      .l_bottom {
        .middle_content {
          height: 100%;
        }
      }
    }
  }
  /* 下边布局 */
  .bottom {
    display: flex;
    > div {
      flex: 1;
      border: 1px solid red;
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
    .b_middle {
      flex: 1.5;
      height: 100%;
      .bottom_left_content {
        height: 100%;
      }
      .bottom_middle_content {
        height: 100%;
        font-size: 0.338983rem;
      }
    }
  }
`;
