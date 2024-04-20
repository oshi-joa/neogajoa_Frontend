import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <S_Wrapper>
      <h1>Page Not Fount</h1>
      <p onClick={() => navigate('/home')}>Go Home</p>
    </S_Wrapper>
  );
}

const S_Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  align-items: center;
`;
