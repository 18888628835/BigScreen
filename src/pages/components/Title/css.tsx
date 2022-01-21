import styled from 'styled-components';

const Wrap = styled.div`
  .title_wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 0.141243rem;
    padding-bottom: 0.084746rem;
    padding-left: 0.734463rem;
    background: rgba(12, 49, 83, 0.8);
  }
  .title {
    color: white;
    font-weight: 500;
    font-size: var(--title-fz);
    font-family: PingFang SC;
    line-height: 1.4;
    text-shadow: 1px 1px 8px rgba(49, 218, 255, 0.75);
  }
`;
export default Wrap;
