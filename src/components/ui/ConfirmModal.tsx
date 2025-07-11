// * ConfirmModal.tsx: 메시지 + [취소][확인] 버튼만 렌더링하는 모달 컴포넌트
// src/components/ui/Modal/ConfirmModal.tsx
import styled from 'styled-components';
import BaseModal from './BaseModal';


// 스타일 정의
const Message = styled.p`
  font-size: 16px;
  text-align: center;  
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-top: 20px;
  gap: 12px;
`;

const CancelButton = styled.button`
  flex: 1;
  height: 44px;
  background-color: #e0e3e7;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  color: #333;
  cursor: pointer;
`;

const ConfirmButton = styled.button`
  flex: 1;
  height: 44px;  
  background-color: #2c2927;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
`;

// * 설명 : ConfirmModalProps: 모달 컴포넌트 전달용 props 타입 정의
interface ConfirmModalProps {
  isOpen: boolean;
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
  confirmText?: string; // 기본값: 확인
  cancelText?: string;  // 기본값: 취소
}

const ConfirmModal = ({
  isOpen,
  message,
  onConfirm,
  onCancel,
  confirmText = '확인',
  cancelText = '취소',
}: ConfirmModalProps) => {
  return (
    <BaseModal isOpen={isOpen} onClose={onCancel}>
      <Message>{message}</Message>
      <ButtonGroup>
        <CancelButton onClick={onCancel}>{cancelText}</CancelButton>
        <ConfirmButton onClick={onConfirm}>{confirmText}</ConfirmButton>
      </ButtonGroup>
    </BaseModal>
  );
};

export default ConfirmModal;
