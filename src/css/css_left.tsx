import styled from 'styled-components';

const Wrap = styled.section`
  display: flex;
  flex-direction: column;
  padding-left: 1.129944rem;
  > div {
    border: 1px solid red;
    flex: 1;
  }
  .top {
    border: 1px solid white;
  }
  .title_right {
    color: rgba(64, 205, 241, 0.4);
    > ul {
      display: flex;
      align-items: center;
    }
    li {
      font-size: var(--second-title-fz);
      margin-right: 0.451977rem;
      padding-bottom: 0.169492rem;
    }
    .active {
      color: #3dd7ff;
      border-bottom: 2px solid currentColor;
    }
  }
`;
export default Wrap;
