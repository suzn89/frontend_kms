// * Modal.tsx: 전체 레이아웃과 배경 처리 담당 (Overlay + Box)
// src/components/ui/Modal/BaseModal.tsx
import { useEffect } from 'react';
import styled from 'styled-components';

interface BaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const BaseModal = ({ isOpen, onClose, children }: BaseModalProps) => {

  // 모달 열릴 때 body 스크롤 막기
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);
    
  if (!isOpen) return null;

  return (
    <Overlay onClick={onClose}>
      <ModalBox onClick={(e) => e.stopPropagation()}>
        {children}
      </ModalBox>
    </Overlay>
  );
};

export default BaseModal;

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalBox = styled.div`
  background-color: #fff;
  border-radius: 12px;
  padding: 32px;
  width: 400px;
  max-width: 90%;
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.1);
`;
