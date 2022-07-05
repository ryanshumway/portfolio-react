import { NavBar } from './Navigation/NavBar'
import styled from 'styled-components';
import { About } from './About';
import '../assets/main.css'
import '../assets/tailwind.css'

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
      <About />
    </StyledBody>
  );
}

export default App;
