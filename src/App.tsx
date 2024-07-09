import { Route, Routes } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import Header from './components/Header';
import { useTheme } from './context/ThemeContext';
import HomePage from './pages/HomePage';
import { ThemeMode } from './types/types';
import DetailsCountryPage from './pages/DetailsCountryPage';

function App() {
  const { theme } = useTheme();

  return (
    <div className={`${theme === ThemeMode.DARK ? ThemeMode.DARK : ThemeMode.LIGHT} h-screen w-screen bg-white-100 dark:bg-black-100 overflow-x-hidden`}>
      <Header />
      <ErrorBoundary>
        <Routes>
          <Route path="*" element={<HomePage />} />
          <Route path="/:id" element={<DetailsCountryPage />} />
        </Routes>
      </ErrorBoundary>
    </div>
  );
}

export default App;