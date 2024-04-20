import styled from '@emotion/styled';
import { Input } from '../components/common/Input';
import Signupbtn from '../assets/image/회원가입 완료.png';
import Signupbtn_n from '../assets/image/회원가입 완료_n.png';
import code from '../assets/image/매칭 코드 발급.png';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

export default function Code() {
  const navigate = useNavigate();
  const [state, setState] = useState('');

  const Signup = () => {
    setTimeout(() => {
      toast.success('회원가입이 완료되었습니다.');
      navigate('/login');
    }, 800);
  };

  return (
    <S_A>
      <div>
        <p className="title">
          애인의 매칭 코드를
          <br /> 아신다면
        </p>
        <div className="input">
          <Input
            type="number"
            placeholder="매칭 코드를 적어주세요."
            onChange={(e) => {
              setState(e.target.value);
            }}
          />
          <img
            onClick={() => {
              if (state !== '') {
                Signup();
              }
            }}
            src={state !== '' ? Signupbtn : Signupbtn_n}
            alt=""
          />
          <p>혹은</p>
          <img src={code} alt="" onClick={() => {}} />
        </div>
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
