import styled from "@emotion/styled";
import { useState } from "react";
import CEN from "../assets/image/CEN.png";
import O from "../assets/image/O.png";
import Submit from "../assets/image/Submit.png";
import X from "../assets/image/X.png";

const Btn = ({ selec, setSelect }: { selec: number; setSelect: any }) => {
  const ONSubmit = () => {};

  if (selec) {
    return (
      <S_PO>
        <textarea placeholder="왜 그렇게 생각했나요?"></textarea>
        <div className="kjk">
          <img src={CEN} alt="O" onClick={() => setSelect(0)}></img>
          <img src={Submit} alt="X" onClick={ONSubmit}></img>
        </div>
      </S_PO>
    );
  }
  return (
    <S_C>
      <img
        src={O}
        onClick={() => {
          if (selec === 1) setSelect(0);
          else setSelect(1);
        }}
      />
      <img
        src={X}
        onClick={() => {
          if (selec === 2) setSelect(0);
          else setSelect(2);
        }}
      />
    </S_C>
  );
};

const S_PO = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  > textarea {
    border-radius: 20px;
    background-color: #F6F6F6;
    border: none;
    outline: none;
    height: 143px;
    padding: 24px;
  }
  > .kjk {
    width: 100%;
    display: flex;
    justify-content: space-between;
    > img {
      width: 49%;
    }
  }
`;

const Temp = () => {
  const [selec, setSelec] = useState(0);
  return (
    <div>
      <S_B>
        <S_C>
          <p className="title">결혼 전 동거가 좋다고 생각하나요?</p>
          <p className="asd">응답률 36%</p>
        </S_C>
        <Btn selec={selec} setSelect={setSelec} />
      </S_B>
      <hr />
    </div>
  );
};

export default function Gamepage() {
  return (
    <S_A>
      <Temp />
      <Temp />
      <Temp />
    </S_A>
  );
}

const S_A = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  & hr {
    margin-top: 35px;
    border: 1px solid #fef1f5;
  }
  > div {
    margin-top: 30px;
  }
`;

const S_B = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const S_C = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: end;
  > img {
    width: 48%;
  }
  > .title {
    max-width: 60%;
    color: #f66994;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.6px;
  }
  > .asd {
    color: #f3a0be;
    text-align: right;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.6px;
  }
`;
