import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/home';
import LoginPage from './pages/login';
import RegisterPage from './pages/register';
import GoalsPage from './pages/goals';

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/goals' element={<GoalsPage />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
};
export default App;
