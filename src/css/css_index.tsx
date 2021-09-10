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
  border: 1px solid black;
  > section {
    flex: 1;
  }
  > section:nth-child(2) {
    flex: 1.5;
  }
`;
