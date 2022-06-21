import {NavBar} from './Navigation/NavBar'
import styled from 'styled-components';
import { Card } from './Navigation/Card';

const StyledBody = styled.body`
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 0;
  line-height: 1.5;
  box-sizing: border-box;
`



function App() {
  return (
    <StyledBody>
      <NavBar />
      <Card title={"👁 watching"} />
    </StyledBody>
  );
}

export default App;
