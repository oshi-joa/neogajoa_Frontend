import styled from '@emotion/styled';
import TITLE from '../assets/image/내 색시와 연애 중.png';
import 현재상태 from '../assets/image/현재 상태.png';
import 커뮤니티 from '../assets/image/커뮤니티.png';
import 상태변경 from '../assets/image/상태 변경.png';

const MyInfo = () => {
  return (
    <S_ASD>
      <div className='kk'>
        <img src={TITLE} />
        <p>D+1164</p>
      </div>
      <div className='lll'>
        <img src={현재상태} />
        <img src={커뮤니티} />
        <img src={상태변경} />
      </div>
    </S_ASD>
  );
};

const S_ASD = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  padding: 60px 0;
  background: radial-gradient(
      62.44% 65.1% at 12.31% 37.87%,
      #f5b2b2 0%,
      rgba(243, 93, 174, 0) 100%
    ),
    radial-gradient(263.74% 77.15% at 58.97% 76.63%, #f5b2b2 0%, #f35dae 100%);
  > .kk {
    display: flex;
    justify-content: space-between;
    align-items: end;
    padding: 0 20px 20px 20px;
    color: white;
  }
        <img src={현재상태} />
  > .lll {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }
`;

export default MyInfo;
