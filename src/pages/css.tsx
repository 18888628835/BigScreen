import styled from 'styled-components';
import './reset.css';
import map from 'public/map/map-new.png';
import jt from 'public/map/jt1.png';

export const Wrap = styled.section`
  --title-fz: 0.564972rem;
  --second-title-fz: 0.39548rem;
  --main-fz: 0.338983rem;
  width: 100%;
  height: 100%;
  overflow: hidden;
  .opacity_zero {
    z-index: -1;
    opacity: 0;
  }
  :root {
    font-size: calc(1vw + 1vh + 0.5vmin); /*  35.4px */
  }
  text-align: center;
  overflow: hidden;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-image: url('/bg-new.png');
  background-size: cover;
  background-repeat: no-repeat;
  -webkit-background-size: cover;
  background-position: center 0;
  > header {
    margin-top: 0.282486rem;
    padding-left: 1.299435rem;
    font-size: 1.073446rem;
    text-align: left;
    > span {
      color: transparent;
      background: linear-gradient(180deg, #ffffff 30.77%, #2688d6 90.38%);
      -webkit-background-clip: text;
      background-clip: text;
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
  /* 中间地图部分 */
  .middle {
    position: relative;
    color: white;

    .switch_wrap {
      position: absolute;
      top: 0px;
      right: 0;
      z-index: 100;
      .ant-switch {
        background-color: #0060e4;
      }
      .ant-switch-checked {
        background-color: #0ba2ee;
      }
    }
    .iframe_container {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 5px;
      box-shadow: 0px 0px 8px 5px rgba(57, 129, 239, 0.9);
      transition: all 1s;
      .iframe {
        width: inherit;
        height: inherit;
        border: none;
        border-radius: 5px;
      }
    }
    .fadeIn {
      z-index: 50;
      opacity: 1;
    }
    .fadeOut {
      z-index: -1;
      opacity: 0;
    }

    .map_container {
      position: relative;
      width: 100%;
      height: 100%;
      transition: transform 1s;
      .info {
        position: fixed;
        z-index: 100;
        display: block;
        box-sizing: border-box;
        max-width: 406px;
        padding: 16px 20px 20px 20px;
        background: rgba(7, 26, 55, 0.8);
        border: 1px solid #3dd7ff;
        border-radius: 2px;
        box-shadow: 0px 2px 8px rgba(61, 215, 255, 0.25);
      }

      .hidden {
        display: none;
      }
      .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-bottom: 16px;
        font-size: 0.508475rem;
        border-bottom: 1px solid rgba(61, 215, 255, 0.2);
        > div {
          cursor: pointer;
        }
      }
      .url_wrap {
        margin-right: auto;
        margin-left: 10px;
        padding-top: 3px;
        color: #3dd7ff;
        font-weight: 500;
        font-size: 14px;
        > span {
          padding-left: 10px;
          border-left: 1px solid rgba(61, 215, 255, 1);
        }
      }
      .content {
        width: 100%;
        padding-bottom: 0px;
        border-bottom: 1px solid rgba(61, 215, 255, 0.2);
        .ant-descriptions-item-label {
          font-size: 14px !important;
        }
        .ant-descriptions-item-content {
          font-size: 14px !important;
        }
      }
      .img_footer {
        padding: 10px 0 20px 0;
        color: #3dd7ff;
        text-align: left;
        .text {
          margin-bottom: 10px;
        }
        .img_wrap {
          img {
            width: 100%;
            max-height: 207px;
          }
        }
      }
    }
    .map_wrap {
      position: relative;
      height: 100%;
    }
    #map {
      position: absolute;
      width: 100%;
      height: 100%;
    }

    .earth,
    .light {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 100%;
      /* border-radius: 50%; */
      transform: translate(-50%, -50%);
      opacity: 0.8;
    }
    .earth {
      height: calc(100%);
      background: url(${map}) no-repeat center center;
      background-size: 95% auto;
      animation: rotate2 20s linear infinite;
    }
    .light {
      height: 100%;
      background: url(${jt}) no-repeat center center;
      background-size: 115%;
      /* animation: rotate2 20s linear infinite; */
    }
    @keyframes rotate1 {
      form {
        transform: translate(-50%, -50%) rotate(0deg);
      }
      to {
        transform: translate(-50%, -50%) rotate(360deg);
      }
    }
    @keyframes rotate2 {
      form {
        transform: translate(-50%, -50%) rotate(0deg);
      }
      to {
        transform: translate(-50%, -50%) rotate(-360deg);
      }
    }
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
      margin-top: 0.677966rem;
      padding-right: 0.282486rem;
      > div {
        flex: 1;
      }
      /* 左上 */
      .l_top {
        flex: 1.2;
        .top_content {
          display: flex;
          flex-direction: column;
          height: 100%;
          margin-bottom: -0.451977rem;
          color: #ffffffbf;
          font-size: var(--main-fz);
          .corner {
            position: absolute;
            width: 0.254237rem;
            height: 0.254237rem;
          }
          .corner1 {
            top: 0;
            left: 0;
            border-top: 2px solid #3dd7ff;
            border-left: 2px solid #3dd7ff;
          }
          .corner2 {
            right: 0;
            bottom: 0;
            border-right: 2px solid #3dd7ff;
            border-bottom: 2px solid #3dd7ff;
          }
          .content_item {
            position: relative;
            display: flex;
            flex: 1;
            align-items: center;
            margin-bottom: 0.451977rem;
            background: rgba(0, 22, 56, 0.9);
            box-shadow: inset 0px 0px 8px rgba(49, 218, 255, 0.5);
          }
          .line {
            width: 1px;
            height: 60%;
            background: linear-gradient(
              180deg,
              rgba(61, 215, 255, 0) 0%,
              #3dd7ff 50.69%,
              rgba(61, 215, 255, 0) 100%
            );
          }
          .icon_wrap {
            flex: 1;
            padding-top: 0.451977rem;
            padding-bottom: 0.451977rem;
            .icon_wrap_top {
              padding-bottom: 0.338983rem;
              img {
                position: relative;
                top: 0.056497rem;
                height: 0.847458rem;
              }
            }
            .icon_wrap_top1 {
              letter-spacing: 0.05em;
              text-align: center;
              > span:nth-child(1) {
                color: #3dd7ff;
                font-weight: bold;
                font-size: 0.677966rem;
              }
              > .last:nth-child(1) {
                color: #ff9c4b;
              }
            }
          }
        }
      }
      /* 左下 */
      .l_bottom {
        margin-top: 0.282486rem;
        .middle_content {
          height: 100%;
        }
      }
    }
    /* 上右 */
    .right {
      display: flex;
      flex-direction: column;
      margin-top: 0.677966rem;
      padding-left: 0.282486rem;
      font-size: 0.338983rem;
      > div {
        flex: 1;
      }
      .right_top_content {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        height: 100%;
        color: rgba(255, 255, 255, 0.75);
        .content_top {
          display: flex;
          flex: 1;
          align-items: center;
          justify-content: space-around;
          > div {
            display: flex;
            flex-direction: column;
            > span {
              margin-bottom: 0.225989rem;
            }
            > div:nth-child(2) > span {
              color: #3dd7ff;
              font-weight: bold;
              font-size: 0.79096rem;
              line-height: 1.016949rem;
              letter-spacing: 0.05em;
            }
          }
        }
        .content_line {
          width: 100%;
          height: 1px;
          margin-top: 0.564972rem;
          margin-bottom: 0.564972rem;
          background: linear-gradient(
            270deg,
            rgba(64, 205, 241, 0) 0%,
            #40cdf1 56.74%,
            rgba(64, 205, 241, 0) 97.67%
          );
        }
        .content_bottom {
          display: flex;
          flex: 1.2;
          align-items: center;
          justify-content: space-around;
          .circle {
            display: flex;
            flex: 1;
            flex-direction: column;
            height: 100%;
            > div {
              flex: 1;
              width: 100%;
              height: 100%;
            }
          }
        }
      }
      .houqifuchi {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
      }
      .legend {
        display: flex;
        width: 100%;
        color: rgba(64, 205, 241, 0.65);
        font-weight: 500;
        span:nth-child(1) {
          padding-right: 0.282486rem;
          padding-left: 0.282486rem;
        }
        span:nth-child(2) {
          margin-right: 3.248588rem;
        }
      }
      .r_bottom {
        margin-top: 0.282486rem;
      }
      .right_bottom_content {
        flex: 1;
        height: 100%;
      }
    }
  }
  /* 下边布局 */
  .bottom {
    display: flex;
    flex: 1;
    margin-top: 0.282486rem;
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
      margin-right: 0.282486rem;
      .bottom_left_content {
        width: 100%;
        height: 100%;

        .header-item {
          height: 1.412429rem;
          color: rgba(64, 205, 241, 0.65);
        }
        .row-item {
          > .ceil:nth-child(3) {
            color: #3dd7ff;
          }
        }
        .pm {
          display: inline-block;
          width: 0.423729rem;
          line-height: 0.423729rem;
          text-align: center;
          border-radius: 50%;
          transform: translateX(-15%);
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
      width: 100%;
      height: 100%;
      margin-right: 0.282486rem;
      .bottom_middle_content {
        width: 100%;
        height: 100%;
        font-size: 0.338983rem;
        .header-item {
          color: rgba(64, 205, 241, 0.65);
          font-weight: 500;
        }
        .rows .row-item .ceil:nth-child(6) {
          color: #3dd7ff;
        }
        .rows .row-item .ceil:nth-child(7) {
          color: #ff9c4b;
        }
      }
    }
    /* 下右 */
    .b_right {
      .b_right_content {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 100%;
        height: 100%;
        > a {
          display: flex;
          width: 100%;
          height: calc(33% - 5px);
          max-height: 50px;
          overflow: hidden;
          > img {
            min-width: 60px;
            max-width: 60px;
            max-height: 60px;
          }
          .title {
            display: flex;
            align-items: center;
            margin-left: 10px;
            overflow: hidden;
            color: white;
            font-size: 16px;
            line-height: 1.4;
            white-space: normal;
            text-align: left;
            text-overflow: ellipsis;
            word-wrap: break-word;
            word-break: break-all;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            -moz-line-clamp: 2;
            -moz-box-orient: vertical;
          }
        }
      }
    }
  }
`;
