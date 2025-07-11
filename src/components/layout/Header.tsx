// src/components/layout/Header.tsx
import styled from 'styled-components';

import headerLogo from '../../assets/icons/logo.png';
import { useState } from 'react';
import InputModal from '../ui/InputModal';
import ConfirmModal from '../ui/ConfirmModal';
import { Link } from 'react-router-dom';

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
      color: #2D2926;
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
  
  const [showConfirm, setShowConfirm] = useState(false);


  const handleAdminSubmit = (code: string) => {
    console.log('입력된 관리자 키:', code);
    // TODO: 관리자 인증 처리 로직
    setIsModalOpen(false);
  };
  
  return (
    <>
      <HeaderWrapper>
        <HeaderCont>
          <Link to="/">
            <img src={headerLogo} alt="ABLE KMS로고" />
          </Link>
          <ul>
            <LinkGroupware as="a" href="https://portal.ablecnc.com/" target="_blank" rel="noopener noreferrer">
              <span>ABLE</span> C&C 그룹웨어
            </LinkGroupware>
            <Nav onClick={() => setIsModalOpen(true)}>관리자키 입력</Nav>
            <Nav onClick={() => setShowConfirm(true)}>Confirm Modal</Nav>
          </ul>
        </HeaderCont>
      </HeaderWrapper>

      <ConfirmModal
        isOpen={showConfirm}
        message="이미 등록된 파일입니다. 다시 업로드 하시겠습니까?"
        onCancel={() => setShowConfirm(false)}
        onConfirm={() => {
          setShowConfirm(false);
          // ✅ 실제 덮어쓰기 로직 실행
        }}
        confirmText="덮어쓰기"
        cancelText="취소"
      />

      <InputModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAdminSubmit}
      />
    </>
  );
};

export default Header;