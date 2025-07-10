// src/components/layout/Header.tsx
import styled from 'styled-components';

import headerLogo from '../../assets/icons/logo.png';
import { useState } from 'react';
import InputModal from '../ui/InputModal';

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

  // * 모달 레이어 팝업 상태 관리
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAdminSubmit = (code: string) => {
    console.log('입력된 관리자 키:', code);
    // TODO: 관리자 인증 처리 로직
    setIsModalOpen(false);
  };
  
  return (
    <>
      <HeaderWrapper>
        <HeaderCont>
          <img src={headerLogo} alt="ABLE KMS로고" />
          <ul>
            <LinkGroupware><span>ABLE</span> C&C 그룹웨어</LinkGroupware>
            <Nav onClick={() => setIsModalOpen(true)}>관리자키 입력</Nav>
          </ul>
        </HeaderCont>
      </HeaderWrapper>

      <InputModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAdminSubmit}
      />
    </>
  );
};

export default Header;