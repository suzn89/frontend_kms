import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import AdminUploadPage from '../pages/AdminUploadPage';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />        
        <Route path="/admin/upload" element={<AdminUploadPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;