import styled from 'styled-components';

const Wrap = styled.section`
  display: flex;
  flex-direction: column;
  padding-left: 1.129944rem;
  > div {
    border: 1px solid red;
  }
  .top_content {
    height: 100%;
    color: #ffffffbf;
    font-size: var(--main-fz);
    display: flex;
    flex-direction: column;
    margin-bottom: -16px;
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
`;
export default Wrap;
