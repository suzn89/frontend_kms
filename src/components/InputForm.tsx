// src/components/InputForm.tsx
import styled from 'styled-components';

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 690px;
`;

const Input = styled.input`
  width: 100%;
  padding: 14px;
  border: 1px solid #E5E8EB;
  border-radius: 8px;
  font-size: 16px;
  color: #111;
  background-color: #fff;
  background-image: url(assets/icons/search.png);
  &::placeholder {
    color: #bbb;
  }
`;

const Button = styled.button`
  padding: 16px;
  font-size: 16px;
  font-weight: 600;
  background-color: #1d1d1b;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: #2D2926;
  }
`;

interface InputFormProps {
  value: string;
  name: string;
  id: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
}

const InputForm = ({ value, onChange, onSubmit, name, id }: InputFormProps) => {
  return (
    <FormWrapper>
      <Input
        placeholder="ABLE KMS에서 가장 알맞은 답변을 찾아드릴게요"
        value={value}
        name={name}
        id={id}
        onChange={(e) => onChange(e.target.value)}
      />
      <Button onClick={onSubmit}>질문하기</Button>
    </FormWrapper>
  );
};

export default InputForm;
