// src/components/AnswerContainer.tsx
import styled from 'styled-components';
import LoadingSpinner from './ui/LodingSpinner';

interface Props {
  title: string;
  category: string;
  content: string;
  isLoading?: boolean; // 로딩 상태 추가
}

const ContainerWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 45px;
  background-color: #FDFDFD;
`;

const Container = styled.div`
  margin-top: 80px;
  margin-bottom: 80px;
  width: 100%;
  max-width: 690px;
  color: #333;
`;

const Title = styled.h3`
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 12px;
  color: #333D4B;
`;

const Category = styled.span`
  display: inline-block;
  background-color: #f3f4f6;
  color: #555;
  font-size: 12px;
  padding: 4px 10px;
  border-radius: 16px;
  margin-bottom: 20px;
`;

const Content = styled.div`
  font-size: 14px;
  line-height: 1.6;
  white-space: pre-line;
`;

const AnswerContainer = ({ title, category, content, isLoading }: Props) => {
  return (
    <ContainerWrapper>
      <Container>
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <>
            <Title>{title}</Title>
            <Category>{category}</Category>
            <Content>{content}</Content>
          </>
        )}
      </Container>
    </ContainerWrapper>
  );
};

export default AnswerContainer;
