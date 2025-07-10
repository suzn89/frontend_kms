// MainPage 컴포넌트: 질문 입력 → 답변 렌더링하는 메인 화면
import { useState } from 'react';
import styled from 'styled-components'; // styled-components로 스타일링
import InputForm from '../components/InputForm';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';


import searchIcon from '../assets/icons/search-file.gif';
import AnswerContainer from '../components/AnswerContainer';
import LoadingSpinner from '../components/ui/LodingSpinner';

// 전체 페이지 Wrapper: 수직 정렬 + 중앙 정렬 + 패딩
const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  margin-top: 100px;
`;

// 제목 텍스트 스타일
const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 32px;
  font-weight: 700;
  color: #111;
`;

// 메인 페이지 컴포넌트
const MainPage = () => {

  // 질문 상태: 인풋에 입력된 텍스트를 저장
  const [question, setQuestion] = useState('');

  // 답변 디스플레이 영역 질문 타이틀 텍스트 저장
  const [displayedQuestion, setDisplayedQuestion] = useState(''); 

  // 답변 상태: 질문하기 버튼 클릭 시 표시될 텍스트
  const [answer, setAnswer] = useState('');


  
  // ✅ 카테고리 상태 추가
  const [category, setCategory] = useState('전체');


  // 질문하기 버튼 클릭 시 실행될 함수
  const handleSubmit = () => {
    if (!question.trim()) return; // 공백 입력 방지

    setDisplayedQuestion(question); // 지금 질문을 답변 제목으로 고정
    setAnswer(`"${question}"에 대한 답변입니다.\n\n- 예시 항목\n- 두 번째 줄`); // 예시 답변
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
          name={''} id={''}
          category={category}
          onCategoryChange={setCategory}
        />      

        {/* // todo: 로딩 스피너 답변 노출 wrap 안에서 나타날 수 있게 변경 필요 */}
        <LoadingSpinner />
  
        {/* 답변이 있을 경우에만 렌더링 */}
        {answer && (
          <AnswerContainer
            title={displayedQuestion}
            category={category}
            content={`회의실 예약은 그룹웨어(https://portal.ablecnc.com) 사이트 메뉴에서 “자원예약” 클릭 후 가능합니다.
        날짜별 예약 현황 확인 후 예약 가능 시간대에 등록하시면 됩니다.

        - 은세미로스 업체에 연락하여 상황 전달 후, EC2 이미지에 해당하는 라이센스 파일 적용
        - 담당자: 이강진 팀장 HP 010-4049-9197`}
          />
        )}
      </PageWrapper> 
      <Footer />
    </> 
  );
};

export default MainPage;