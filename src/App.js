import './App.css';
import LandingPage from './component/LandingPage';
import styled from 'styled-components';

function App() {
  return (
    <AppContainer>
      <LandingPage />
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
