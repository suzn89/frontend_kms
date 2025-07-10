// src/components/layout/Header.tsx
import styled from 'styled-components';

import headerLogo from '../../assets/icons/logo.png';

const HeaderWrapper = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #eee;
  background-color: white;
`;

const HeaderCont = styled.div`
  width: 1140px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  ul {
    li {
      display: inline-block;
      margin-left: 20px;
      color: #787878;
    }
  }
`;

const Nav = styled.li`
  font-size: 14px;
  cursor: pointer;
  list-style: none;
`;

const LinkGroupware = styled.li`
  font-size: 14px;
  color: #2D2926;
  list-style: none;
  cursor: pointer;
  span {
    color: #FF6900;
  }
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderCont>
        <img src={headerLogo} alt="ABLE KMS로고" />
        <ul>
          <LinkGroupware><span>ABLE</span> C&C 그룹웨어</LinkGroupware>
          <Nav>관리자키 입력</Nav>
        </ul>
      </HeaderCont>
    </HeaderWrapper>
  );
};

export default Header;