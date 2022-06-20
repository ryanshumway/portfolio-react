import {NavBar} from './Navigation/NavBar'
import styled from 'styled-components';

const StyledBody = styled.body`
  margin: 0;
  padding: 0;
  line-height: 1.5;
  box-sizing: border-box;
`

function App() {
  return (
    <StyledBody>
      <NavBar />
      
    </StyledBody>
  );
}

export default App;
