import styled from '@emotion/styled';
import { Arrow, Main2, Main3, Main4 } from '../assets';
import BottomSheet from '../components/BottomSheet';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navi = useNavigate();
  return (
    <>
      <S_BannerWrapper>
        <S_Banner
          onClick={() => {
            navi('/community');
          }}
        >
          <p className="gift">
            여자친구 선물을 <br /> 못 고르겠어요
          </p>
          <p className="popular">
            오늘의 <br />
            마니 인기 글
          </p>
          <img src={Arrow} alt="" />
        </S_Banner>
        <S_img src={Main2} alt="" />
      </S_BannerWrapper>
      <S_WishList>
        <p className="wish">내 스타일 위시리스트</p>
        <p className="want">여자친구가 이렇게 입었으면...</p>
        <button
          className="add"
          onClick={() => {
            navi('/clothes-style');
          }}
        >
          추가하러 가기
        </button>
        <S_imgWrapper>
          <img src={Main3} alt="" />
          <img src={Main4} alt="" />
        </S_imgWrapper>
      </S_WishList>
      <BottomSheet />
    </>
  );
};

const S_BannerWrapper = styled.div`
  padding-top: 100px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const S_Banner = styled.div`
  position: relative;
  border-radius: 20px;
  background: radial-gradient(100% 100% at 50% 0%, #f6b2b3 0%, #f35eaf 100%);
  width: 100%;
  height: 100px;
  flex-shrink: 0;
  > .gift {
    position: absolute;
    top: 20px;
    color: #fff;
    font-size: 24px;
    font-weight: 500;
    padding-left: 20px;
  }
  > .popular {
    position: absolute;
    top: 40px;
    right: 60px;
    color: #fff;
    font-size: 16px;
    font-weight: 400;
  }
  > img {
    position: absolute;
    width: 18px;
    height: 12px;
    top: 58px;
    left: 290px;
  }
`;

const S_img = styled.img`
  width: 100%;
`;

const S_WishList = styled.div`
  margin-top: 32px;
  width: 100%;
  height: 300px;
  border-radius: 20px;
  background: linear-gradient(180deg, rgba(245, 245, 245, 0) 0%, #f5f5f5 100%);
  > .wish {
    color: #000;
    padding-left: 20px;
    padding-bottom: 7px;
    font-weight: 500;
    letter-spacing: -0.8px;
  }
  > .want,
  .add {
    color: #ababab;
    padding-left: 20px;
    font-size: 16px;
    font-weight: 500;
  }
  .add {
    margin-left: 63%;
    background-color: #fff;
    text-align: right;
    padding-right: 20px;
    position: relative;
  }
`;

const S_imgWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 5px;
  padding-top: 15px;
  padding-left: 10px;
  > .img {
    border-radius: 10px;
  }
`;

export default Home;
