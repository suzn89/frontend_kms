// MainPage 컴포넌트: 질문 입력 → 답변 렌더링하는 메인 화면
import { useState } from 'react';
import styled from 'styled-components'; // styled-components로 스타일링
import InputForm from '../components/InputForm';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';


import searchIcon from '../assets/icons/search-file.gif';

// 전체 페이지 Wrapper: 수직 정렬 + 중앙 정렬 + 패딩
const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 16px;
  min-height: 100vh;
`;

// 제목 텍스트 스타일
const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 32px;
  font-weight: 700;
  color: #111;
`;

// 답변 박스 스타일
const AnswerBox = styled.div`
  margin-top: 48px;
  padding: 24px;
  background-color: #f9fafb;  
  border-radius: 8px;
  width: 100%;
  max-width: 500px;
  font-size: 16px;
  color: #333;
`;

// 메인 페이지 컴포넌트
const MainPage = () => {

  // 질문 상태: 인풋에 입력된 텍스트를 저장
  const [question, setQuestion] = useState('');

  // 답변 상태: 질문하기 버튼 클릭 시 표시될 텍스트
  const [answer, setAnswer] = useState('');


  // 질문하기 버튼 클릭 시 실행될 함수
  const handleSubmit = () => {
    if (!question.trim()) return; // 공백 입력 방지
    setAnswer(`"${question}"에 대한 답변입니다.`); // 가짜 답변 설정
  };

  return (
    <>
      <Header />
      <PageWrapper>
        <img src={searchIcon} alt="검색" width={90} />
        <Title>찾고 싶은 정보를 입력해보세요!</Title>
  
        {/* 입력창 + 버튼 */}
        <InputForm
          value={question} // 현재 질문 값
          onChange={setQuestion} // 입력 변화 시 실행될 함수
          onSubmit={handleSubmit} // 버튼 클릭 시 실행될 함수
          name={''} id={''}        />
  
        {/* 답변이 있을 경우에만 렌더링 */}
        {answer && <AnswerBox>{answer}</AnswerBox>}
      </PageWrapper> 
      <Footer />
    </> 
  );
};

export default MainPage;