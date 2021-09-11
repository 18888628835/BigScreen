import styled from 'styled-components';

const Wrap = styled.section`
  display: flex;
  flex-direction: column;
  padding-left: 1.129944rem;
  > div {
    flex: 1;
  }
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
  .middle_content {
    height: 100%;
  }
  .bottom_content {
    height: 100%;
    padding-left: 0.564972rem;
    .dv-scroll-board {
      font-size: 0.338983rem;
    }
    .dv-scroll-board .header {
      font-size: inherit;
    }
    .row-item {
      font-size: inherit;
      > .ceil:nth-child(3) {
        color: #3dd7ff;
      }
    }
    .pm {
      border-radius: 50%;
      display: inline-block;
      width: 0.423729rem;
      line-height: 100%;
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
`;
export default Wrap;
