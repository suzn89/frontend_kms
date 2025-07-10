// src/components/InputForm.tsx
import styled from 'styled-components';

const FormWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 690px;
  border: 1px solid #e5e7eb; /* 연한 회색 테두리 */
  border-radius: 8px;
  padding: 12px 16px;
  gap: 20px;
  background-color: #fff;
`;

const Select = styled.select`
  border: none;
  background: transparent;
  font-size: 14px;
  color: #111;
  margin-right: 8px;
  appearance: none; /* 브라우저 기본 화살표 제거 */
  padding-right: 16px;
  background-image: url("data:image/svg+xml;utf8,<svg fill='gray' height='14' viewBox='0 0 24 24' width='14' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/></svg>");
  background-repeat: no-repeat;
  background-position: right center;
  background-size: 18px;
  cursor: pointer;
  min-width: 60px;
  border: 0;
`;

const Input = styled.input`
  flex: 1;
  border: none;
  background: transparent;
  font-size: 14px;
  color: #333D4B;

  &::placeholder {
    color: #BBC1C7;
  }

  &:focus {
    outline: none;
  }
`;


const SubmitButton = styled.button`
  margin-top: 16px;
  width: 100%;
  max-width: 690px;
  height: 48px;
  background-color: #1d1d1b;
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  border: none;
  border-radius: 10px;
  cursor: pointer;
`;
interface InputFormProps {
  value: string;
  name: string;
  id: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  category: string;
  onCategoryChange: (value: string) => void;  
}

const InputForm = ({
  value,
  onChange,
  onSubmit,
  category,
  onCategoryChange,
}: InputFormProps) => {
  return (
    <>
      <FormWrapper>
        <Select value={category} onChange={(e) => onCategoryChange(e.target.value)}>
          <option value="전체">전체</option>
          <option value="인사">인사</option>
          <option value="회계">회계</option>
          <option value="총무">총무</option>
        </Select>
        <Input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="ABLE KMS에서 가장 알맞은 답변을 찾아드릴게요"
        />
      </FormWrapper>
      <SubmitButton onClick={onSubmit}>질문하기</SubmitButton>
    </>
  );
};

export default InputForm;
