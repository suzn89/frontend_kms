// 문서 아이콘 + 제목
// src/components/upload/UploadHeader.tsx
import styled from 'styled-components';
import uploadIcon from '../../assets/icons/upload-file.gif';

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: 700;
  margin-top: 12px;
  color: #111;

  strong {
    color: #2d2926;
  }
`;


const UploadHeader = () => (
  <HeaderWrapper>
    <img src={uploadIcon} alt="문서 등록" width={90} />
    <Title>
      <strong>KMS</strong> 문서 등록
    </Title>
  </HeaderWrapper>
);

export default UploadHeader;

