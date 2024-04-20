import styled from '@emotion/styled';
import { Toaster } from 'react-hot-toast';
import Router from './router';

const App = () => {
  return (
    <S_Wrapper>
      <Toaster />
      <Router />
    </S_Wrapper>
  );
};

const S_Wrapper = styled.div`
  margin: 0px 20px;
  width: 100vw;
  height: 100vh;
`;

export default App;
