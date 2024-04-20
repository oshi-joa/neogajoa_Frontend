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

interface Props {
  selected: boolean;
  onClick: () => void;
}

const NavigationBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <S_Wrapper>
      <S_TabMenu
        selected={location.pathname === '/balance'}
        onClick={() => navigate('/balance')}
      >
        <img src={OX} alt="밸런스게임 이미지" />
      </S_TabMenu>
      <S_TabMenu
        selected={location.pathname === '/community'}
        onClick={() => navigate('/community')}
      >
        <img src={Community} alt="커뮤니티 이미지" />
      </S_TabMenu>
      <S_TabMenu
        selected={location.pathname === '/home'}
        onClick={() => navigate('/home')}
      >
        <img src={HomePage} alt="홈 이미지" />
      </S_TabMenu>
      <S_TabMenu
        selected={location.pathname === '/clothes-style'}
        onClick={() => navigate('/clothes-style')}
      >
        <img src={Clothes} alt="스타일 이미지" />
      </S_TabMenu>
      <S_TabMenu
        selected={location.pathname === '/my-info'}
        onClick={() => navigate('/my-info')}
      >
        <img src={MyInfo} alt="내정보 이미지" />
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
`;

const S_TabMenu = styled.div<Props>`
  display: flex;
  flex-direction: column;
  align-items: center;
  > img {
    width: 50px;
    height: 50px;
  }
`;

export default NavigationBar;
