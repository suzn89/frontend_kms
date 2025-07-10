// * ConfirmModal.tsx: 메시지 + [취소][확인] 버튼만 렌더링하는 모달 컴포넌트
// src/components/ui/Modal/ConfirmModal.tsx
import styled from 'styled-components';
import BaseModal from './BaseModal';

interface ConfirmModalProps {
  isOpen: boolean;
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const ConfirmModal = ({ isOpen, message, onConfirm, onCancel }: ConfirmModalProps) => {
  return (
    <BaseModal isOpen={isOpen} onClose={onCancel}>
      <Message>{message}</Message>
      <ButtonRow>
        <CancelButton onClick={onCancel}>취소</CancelButton>
        <ConfirmButton onClick={onConfirm}>덮어쓰기</ConfirmButton>
      </ButtonRow>
    </BaseModal>
  );
};

export default ConfirmModal;

const Message = styled.p`
  font-size: 16px;
  text-align: center;
  margin-bottom: 24px;
`;

const ButtonRow = styled.div`
  display: flex;
  gap: 12px;
`;

const CancelButton = styled.button`
  flex: 1;
  height: 44px;
  background-color: #e0e3e7;
  border: none;
  border-radius: 8px;
  font-weight: bold;
`;

const ConfirmButton = styled.button`
  flex: 1;
  height: 44px;
  background-color: #2c2927;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: bold;
`;
