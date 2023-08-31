import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/home';
import NotFound from './pages/not-found/NotFound';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/*" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
