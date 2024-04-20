import React, { useState } from 'react';
import styled from '@emotion/styled';

const Button = ({ children, clicked, setState }: any) => {
  return (
    <S_B clicked={clicked} onClick={setState}>
      {children}
    </S_B>
  );
};

const Community = () => {
  const [state, setState] = useState(0);
  return (
    <S_A>
      <p className="title">
        <span>고민</span> 여자친구 선물을 못 고르겠어요
      </p>
      <p className="sub margin">선물고르기어려워</p>
      <p className="sub">2024.4.21</p>
      <p className="body">{`여자친구 20후반이고 둘다 직장인입니다 여친 생일 얼마뒤에 1주년이라 너무 많이쓰기엔 부담이고 예산을 50이하로 생각하고있는데 누구한테 선물하는건 첨이라 떠오르지가않네요 뭐가 좋을까요ㅠㅠ  우선 생각해본건 1. 디디에두보 목걸이(아래 모델 생각하는데 20후반이 쓰기에 괜찮나요??) 2. 메종키츠네 가디건 3. 아크네 머플러(이건 계절감으로 패스) 4. 디올 마차 스카프(이건 여친이 잘 안할거같아서..)  애플워치는 이미 가지고있어서, 향수는 크리스마스 선물해줘서 패스했어요 조언 부탁드려요!`}</p>
      <div className="ss">
        <Button
          clicked={state === 1}
          setState={() => {
            setState(1);
          }}
        >
          디디에두보 목걸이
        </Button>
        <Button
          clicked={state === 2}
          setState={() => {
            setState(2);
          }}
        >
          메종키츠네 가디건
        </Button>
        <Button
          clicked={state === 3}
          setState={() => {
            setState(3);
          }}
        >
          아크네 머플러
        </Button>
        <Button
          clicked={state === 4}
          setState={() => {
            setState(4);
          }}
        >
          디올 마차 스카프
        </Button>
      </div>
    </S_A>
  );
};

const S_B = styled.div<{ clicked: boolean }>`
  width: 100%;
  padding: 15px 18px;
  background-color: ${({ clicked }) => (clicked ? '#F66994' : '#FFFFFF')};
  border: 1px solid #f66994;
  color: ${({ clicked }) => (clicked ? '#FFFFFF' : '#F66994')};
  border-radius: 100px;
`;

const S_A = styled.div`
  & .ss {
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  width: 100%;
  height: 100%;
  padding-top: 80px;
  > .title {
    color: #141414;
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.6px;
    > span {
      color: #f66994;
    }
  }
  > .sub {
    color: #b5b5b5;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.48px;
  }
  > .margin {
    margin-top: 10px;
  }
  > .body {
    margin-top: 40px;
    color: #000;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%; /* 22.4px */
    letter-spacing: -0.32px;
  }
`;

export default Community;
