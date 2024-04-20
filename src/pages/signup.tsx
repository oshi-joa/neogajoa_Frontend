import styled from '@emotion/styled';
import logo from '../assets/image/너가 조아 마니 조아.png';
import { Input } from '../components/common/Input';
import { useState } from 'react';

interface StateType {
  name: string;
  email: string;
  password: string;
  password_check: string;
}

export default function Signup() {
  const [state, setState] = useState<StateType>({
    name: '',
    email: '',
    password: '',
    password_check: '',
  });
  return (
    <S_A>
      <S_LOGO src={logo}></S_LOGO>
      <S_input>
        <Input
          type="text"
          placeholder="이름을 입력해주세요"
          onChange={(e) => {
            setState({ ...state, name: e.target.value });
          }}
        />
        <Input
          type="email"
          placeholder="이메일을 입력해주세요"
          onChange={(e) => {
            setState({ ...state, email: e.target.value });
          }}
        />
        <Input
          type="password"
          placeholder="비밀번호를 입력해주세요"
          onChange={(e) => {
            setState({ ...state, password: e.target.value });
          }}
        />
        <Input
          type="password"
          placeholder="비밀번호를 입력해주세요"
          onChange={(e) => {
            setState({ ...state, password_check: e.target.value });
          }}
        />
      </S_input>
    </S_A>
  );
}

const S_A = styled.div`
  width: 100%;
  height: 100%;
`;

const S_LOGO = styled.img`
  position: fixed;
  top: 100px;
  left: 50%;
  transform: translate(-50%);
`;

const S_input = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
`;
