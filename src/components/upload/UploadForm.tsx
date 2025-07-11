// 셀렉트 + 파일찾기 + 버튼
// src/components/upload/UploadForm.tsx
import styled from 'styled-components';
import { useState } from 'react';

import folderIcon from '../../assets/icons/folder.svg'; // 폴더 아이콘 예시


const FormRow = styled.div`
  display: flex;
  width: 690px;
  gap: 8px;
  margin-bottom: 20px;
`;

const Select = styled.select`
  width: 80px;
  border: 1px solid #E5E8EB;
  border-radius: 8px;
  padding: 0 8px;
  font-size: 14px;
  background: white;
  color: #333;
  appearance: none; /* 브라우저 기본 화살표 제거 */
  padding-right: 16px;
  background-image: url("data:image/svg+xml;utf8,<svg fill='gray' height='14' viewBox='0 0 24 24' width='14' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/></svg>");
  background-repeat: no-repeat;
  background-position: right center;
  background-size: 18px;
  cursor: pointer;
`;

const FileInputWrapper = styled.div`
  flex: 1;
  position: relative;
  border: 1px solid #E5E8EB;
  border-radius: 8px;
  display: flex;
  align-items: center;
  padding: 0 12px;
  height: 44px;
  background-color: #ffffff;
  overflow: hidden;
`;

const FolderIcon = styled.img`
  width: 18px;
  margin-right: 8px;
`;

const FileLabel = styled.label`
  font-size: 14px;
  color: #aaa;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;
`;

const FileInput = styled.input`
  display: none;
`;

const UploadButton = styled.button`
  width: 100px;
  height: 44px;
  background-color: #2c2927;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
`;



const UploadForm = () => {
  const [selectedCategory, setSelectedCategory] = useState('전체');
  const [fileName, setFileName] = useState('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setFileName(file.name);
  };

  return (
    <>
      <FormRow>
        {/* 카테고리 셀렉트 */}
        <Select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
          <option value="전체">전체</option>
          <option value="인사">인사</option>
          <option value="재무">재무</option>
        </Select>

        {/* 파일 선택 인풋 */}
        <FileInputWrapper>
          <FolderIcon src={folderIcon} alt="폴더" />
          <FileLabel htmlFor="fileUpload">{fileName || '파일찾기 | 문서, 가이드, 정책을 업로드해주세요.'}</FileLabel>
          <FileInput
            type="file"
            id="fileUpload"
            onChange={handleFileChange}
          />
        </FileInputWrapper>

        {/* 업로드 버튼 */}
        <UploadButton>업로드</UploadButton>
      </FormRow>

    </>
  );
};

export default UploadForm;
