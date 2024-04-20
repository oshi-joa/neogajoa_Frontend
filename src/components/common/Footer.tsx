import {
  HomePage,
  MyInfo,
  Community,
  Clothes,
  OX,
  PinkOX,
  PinkMyInfo,
  PinkCommunity,
  PinkClothes,
  PinkHomePage,
} from '../../assets';
import styled from '@emotion/styled';
import { useNavigate, useLocation } from 'react-router-dom';

const NavigationBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <S_Wrapper>
      <S_TabMenu onClick={() => navigate('/balance')}>
        <img
          src={location.pathname === '/balance' ? PinkOX : OX}
          alt="밸런스게임 이미지"
        />
      </S_TabMenu>
      <S_TabMenu onClick={() => navigate('/community')}>
        <img
          src={location.pathname === '/community' ? PinkCommunity : Community}
          alt="커뮤니티 이미지"
        />
      </S_TabMenu>
      <S_TabMenu onClick={() => navigate('/home')}>
        <img
          src={location.pathname === '/home' ? PinkHomePage : HomePage}
          alt="홈 이미지"
        />
      </S_TabMenu>
      <S_TabMenu onClick={() => navigate('/clothes-style')}>
        <img
          src={location.pathname === '/clothes-style' ? PinkClothes : Clothes}
          alt="스타일 이미지"
        />
      </S_TabMenu>
      <S_TabMenu onClick={() => navigate('/my-info')}>
        <img
          src={location.pathname === '/my-info' ? PinkMyInfo : MyInfo}
          alt="내정보 이미지"
        />
      </S_TabMenu>
    </S_Wrapper>
  );
};

const S_Wrapper = styled.footer`
  background: #fff;
  width: 100%;
  height: 70px;
  padding-top: 15px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: auto;
  border-top: 1px solid #dcdcdc;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 5;
`;

const S_TabMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50px;
  height: 50px;
`;

export default NavigationBar;
