import styled from '@emotion/styled';
import Plus from '../assets/image/플러스.png';
import P from '../assets/image/스타일 이미지들.png';

const ClothesStyle = () => {
  return (
    <S_A>
      <div>
        <p>
          내 스타일
          <br />
          위시리스트
        </p>
        <div>
          <p>추가 리스트</p>
          <img src={Plus} />
        </div>
      </div>
      <img src={P} />
    </S_A>
  );
};

const S_A = styled.div`
  width: 100%;
  height: 100%;
  padding: 50px 0;
  > img {
    margin-top: 20px;
  }
  & p {
    color: #000;
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.6px;
    margin: none;
  }
  > div {
    display: flex;
    justify-content: space-between;
    align-items: start;
    > div {
      display: flex;
      align-items: center;
      gap: 4px;
      > p {
        color: #b2b2b2;
        text-align: right;
        font-family: Pretendard;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: -0.6px;
      }
      > img {
        width: 16px;
        height: 16px;
      }
    }
  }
`;

export default ClothesStyle;
