import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { HomePage } from './pages/HomePage';

function App() {
  return (
    <SkeletonTheme baseColor="#E2E5EA" highlightColor="#CCCED6">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </SkeletonTheme>
  );
}

export default App;
