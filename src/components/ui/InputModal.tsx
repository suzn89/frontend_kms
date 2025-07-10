// * InputModal.tsx: 내부에 타이틀 + 설명 + input + 버튼 렌더링하는 모달 컴포넌트 : 관리자키 입력용
// src/components/ui/Modal/InputModal.tsx
import { useState } from 'react';
import styled from 'styled-components';
import BaseModal from './BaseModal';


const Title = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const Description = styled.p`
  font-size: 14px;
  color: #555;
  margin-bottom: 16px;
`;

const StyledInput = styled.input`
  width: 100%;
  height: 42px;
  padding: 0 12px;
  font-size: 15px;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-bottom: 24px;
`;

const SubmitButton = styled.button`
  width: 100%;
  height: 44px;
  border: none;
  background-color: #2c2927;
  color: white;
  font-weight: bold;
  border-radius: 8px;
`;

// * InputModalProps: 모달 컴포넌트에 전달할 props 타입 정의 */
interface InputModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (code: string) => void;
}

const InputModal = ({ isOpen, onClose, onSubmit }: InputModalProps) => {
  const [inputValue, setInputValue] = useState('');

  return (
    <BaseModal isOpen={isOpen} onClose={onClose}>
      <Title>관리자 Key 입력</Title>
      <Description>관리자 권한 접근을 위해 관리자 Key를 입력해주세요.</Description>
      <StyledInput
        placeholder="Key"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <SubmitButton onClick={() => onSubmit(inputValue)}>입력완료</SubmitButton>
    </BaseModal>
  );
};

export default InputModal;
