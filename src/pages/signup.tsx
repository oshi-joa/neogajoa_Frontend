import styled from "@emotion/styled";
import logo from "../assets/image/너가 조아 마니 조아.png";
export default function Signup() {
  return (
    <S_A>
      <S_LOGO src={logo}></S_LOGO>
    </S_A>
  );
}

const S_A = styled.div`
  width: 100vw;
  height: 100vh;
`;

const S_LOGO = styled.img`
  position: fixed;
  top: 100px;
  left: 50%;
  transform: translate(-50%);
`;
