import styled from '@emotion/styled';
import React, { useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

gsap.registerPlugin(useGSAP);

const BottomSheet = () => {
  const [isOpen, setIsOpen] = useState(true);

  const HandleMoveBottomSheet = () => {
    if (isOpen) {
      gsap.to('#bottom-sheet', {
        bottom: 0,
        onComplete: () => setIsOpen(false),
      });
    } else {
      gsap.to('#bottom-sheet', {
        top: 0,
        onComplete: () => setIsOpen(true),
      });
    }
  };
  return (
    <S_Wrapper>
      <div>
        <S_Container id="bottom-sheet">
          <div>
            <S_Bar onClick={HandleMoveBottomSheet}>
              <div />
            </S_Bar>
            <h2>
              내 상대가 답한
              <br />
              조아를 확인 해 보세요
            </h2>
            <p>+3</p>
          </div>
        </S_Container>
      </div>
    </S_Wrapper>
  );
};

const S_Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: fixed;
  top: 0;
  > div {
    width: 100%;
    height: 100%;
    position: relative;
  }
`;

const S_Container = styled.div`
  width: 100vw;
  background-color: #f5f5f5;
  padding: 29px 20px;
  border-radius: 20px 20px 0 0;
  position: absolute;
  bottom: 0;
  > div {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
  }
  & h2 {
    font-weight: 700;
    font-size: 20px;
    color: #141414;
  }
  & p {
    font-weight: 700;
    font-size: 20px;
    color: #e8427e;
  }
`;

const S_Bar = styled.div`
  position: absolute;
  top: -20px;
  left: 50%;
  transform: translateX(-50%);
  width: 50%;
  height: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  > div {
    width: 110px;
    height: 5px;
    border-radius: 10px;
    background-color: #dcdcdc;
  }
`;

export default React.memo(BottomSheet);
