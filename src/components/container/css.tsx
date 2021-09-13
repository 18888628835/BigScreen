import styled from 'styled-components';

const Wrap = styled.div`
  &.container {
    padding: 0.451977rem;
    background: #001536;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
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
  .content {
    margin-top: 0.338983rem;
    flex: 1;
    width: 100%;
    height: 100%;
  }
`;
export default Wrap;
