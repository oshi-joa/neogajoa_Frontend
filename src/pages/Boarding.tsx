import logo from '../assets/img/BigLogo.png';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

export default function Boarding() {
  const navigate = useNavigate();
  return (
    <S_A>
      <S_LOGO src={logo}></S_LOGO>
      <S_Text>너가 조아</S_Text>
      <S_ButtonWrapper>
        <S_Button onClick={() => navigate('/login')}>로그인</S_Button>
        <S_Button1 onClick={() => navigate('/signup')}>회원가입</S_Button1>
      </S_ButtonWrapper>
    </S_A>
  );
}

const S_A = styled.div`
  width: 100vw;
  height: 100%;
`;

const S_LOGO = styled.img`
  position: fixed;
  top: 250px;
  left: 50%;
  transform: translate(-50%);
`;

const S_ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 7px;
`;

const S_Text = styled.p`
  position: fixed;
  top: 380px;
  left: 50%;
  transform: translate(-50%);
  color: #f66994;
  text-align: center;
  font-size: 18px;
  font-weight: 400;
  letter-spacing: -0.36px;
`;

const S_Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 70px;
  border-radius: 35px;
  background: radial-gradient(100% 100% at 50% 0%, #f6b2b3 0%, #f35eaf 100%);
  color: #fff;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: -0.6px;
  position: fixed;
  top: 500px;
  left: 50%;
  transform: translate(-50%);
`;

const S_Button1 = styled.button`
  width: 90%;
  height: 70px;
  border-radius: 35px;
  background: #fef1f5;
  color: #f66994;
  text-align: center;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: -0.6px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 580px;
  left: 50%;
  transform: translate(-50%);
`;
