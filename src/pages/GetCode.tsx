import styled from '@emotion/styled';
import { Input } from '../components/common/Input';
import Signupbtn from '../assets/img/btn1.png';
import Signupbtn_n from '../assets/img/btn2.png';
import code from '../assets/image/매칭 코드 발급.png';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

export default function GetCode() {
  const navigate = useNavigate();
  const [state, setState] = useState('');

  const Signup = () => {
    setTimeout(() => {
      toast.success('회원가입이 완료되었습니다.');
      navigate('/login');
    }, 800);
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText('482917');
      console.log('텍스트가 클립보드에 복사되었습니다:', '482917');
      alert('클립보드에 복사되었습니다!');
    } catch (error) {
      console.error('클립보드 복사 실패:', error);
      alert('클립보드 복사에 실패했습니다.');
    }
  };

  return (
    <S_A>
      <div>
        <p className="title">
          애인의 매칭 코드를
          <br /> 발급받기
        </p>
        <S_Text>※ 애인이 매칭코드를 입력해 등록 해야해요.</S_Text>
        <S_Box>
          <p>482917</p>
          <button onClick={copyToClipboard}>복사하기</button>
        </S_Box>
        <S_ButtonWrapper>
          <S_Button>애인에게 공유하기</S_Button>
          <S_Button1 onClick={() => navigate('/home')}>회원가입 완료</S_Button1>
        </S_ButtonWrapper>
      </div>
    </S_A>
  );
}

const S_A = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  > div {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  & .title {
    color: #f66994;
    font-family: Pretendard;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.48px;
  }
  & .input {
    display: flex;
    flex-direction: column;
    algin-itmes: center;
    gap: 10px;
    > p {
      color: #b6b6b6;
      text-align: center;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      letter-spacing: -0.48px;
      text-align: center;
      margin: 10px 0;
    }
  }
`;

const S_Text = styled.p`
  color: #b6b6b6;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: -0.32px;
`;

const S_ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 7px;
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
  top: 600px;
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
  top: 680px;
  left: 50%;
  transform: translate(-50%);
`;

const S_Box = styled.div`
  width: 100%;
  height: 200px;
  flex-shrink: 0;
  border-radius: 30px;
  background: #fef1f5;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  > p {
    color: #000;
    text-align: center;
    font-family: Pretendard;
    font-size: 36px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 7.2px;
  }
  > button {
    margin-top: 10px;
    color: #f66994;
    text-align: center;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.48px;
  }
`;
