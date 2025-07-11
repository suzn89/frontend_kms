// src/pages/AdminUploadPage.tsx
import UploadHeader from '../components/upload/UploadHeader';
import UploadForm from '../components/upload/UploadForm';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import styled from 'styled-components';


const PageWrapper = styled.main`
  padding: 100px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;

const AdminUploadPage = () => {
  return (
    <>
      <Header />
      <PageWrapper>
        <UploadHeader />
        <UploadForm />
      </PageWrapper>
      <Footer />
    </>
  );
};

export default AdminUploadPage;

