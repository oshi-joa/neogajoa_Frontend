import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Input } from '../../components/common/Input';
import logo from '../../assets/image/너가 조아 마니 조아.png';
import Next from '../../assets/image/다음.png';
import Next_n from '../../assets/image/다음_n.png';

interface StateType {
  email: string;
  password: string;
}

export default function Login() {
  const [state, setState] = useState<StateType>({
    email: '',
    password: '',
  });

  const LoginMutate = () => {};

  return (
    <S_Wrapper>
      <S_LOGO src={logo}></S_LOGO>
      <S_input>
        <Input
          type="text"
          placeholder="이메일"
          onChange={(e) => setState({ ...state, email: e.target.value })}
        />
        <Input
          type="text"
          placeholder="비밀번호"
          onChange={(e) => setState({ ...state, password: e.target.value })}
        />
        <img
          onClick={() => {
            if (state.email && state.password) LoginMutate();
          }}
          alt=""
          src={state.email && state.password ? Next : Next_n}
        />
      </S_input>
    </S_Wrapper>
  );
}

const S_Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const S_input = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  > img {
    width: 100%;
  }
`;

const S_LOGO = styled.img`
  position: fixed;
  top: 100px;
  left: 50%;
  transform: translate(-50%);
`;
