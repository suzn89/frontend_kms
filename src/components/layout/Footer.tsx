// src/components/layout/Footer.tsx
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 10px solid #F6F8F9;
  background-color: #ffffff;
  font-size: 12px;
  color: #666;
`;

const FooterCont = styled.div`
  padding: 45px 20px;
  width: 1140px;
  display: flex;
  justify-content : flex-start;
  align-items: baseline;
  h5 {
    font-size: 16px;
    color: #333E4C;
    font-weight: 600;
  }
`;

const CompanyInfo = styled.div`
  color: #ABB2B5;
  margin-left: 100px;
  p {
    font-size: 14px;
    line-height: 1.5;
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterCont>
        <h5>(주)에이블씨엔씨</h5>
        <CompanyInfo>
          <p>사업자 등록번호 : 119-81-34685  | 대표자 신유정</p>
          <p>서울 중구 남대문로 78, 7층 (명동1가, 타임워크명동빌딩)</p>
          <p>Copyright ABLE C&C corp. All Rights Reserved.  </p>
        </CompanyInfo>
      </FooterCont>
    </FooterWrapper>
  );
};

export default Footer;
