import styled from 'styled-components';

export const Wrap = styled.section`
  text-align: center;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: url('/bg.png');
  > header {
    margin-bottom: 1.073446rem;
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
  border: 1px solid black;
  > section {
    flex: 1;
  }
  > section:nth-child(2) {
    flex: 1.5;
  }
`;
