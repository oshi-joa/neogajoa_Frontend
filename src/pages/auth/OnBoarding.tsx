import React from 'react';
import { Onboarding } from '../../assets';
import styled from '@emotion/styled';
import { Input } from '../../components/common/Input';

const OnBoarding = () => {
  return (
    <>
      <S_Text>
        너가 조아 <br /> 마니 조아
      </S_Text>
      <Input type="text" placeholder="이름" />
    </>
  );
};

const S_Text = styled.p`
  font-family: HSJiptokki;
  font-size: 36px;
  font-style: normal;
  font-weight: 900;
  letter-spacing: -1.08px;
  background: radial-gradient(100% 100% at 50% 0%, #f6b2b3 0%, #f35eaf 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export default OnBoarding;
