import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DashboardLayout from './components/DashboardLayout';
import DashboardHome from './pages/DashboardHome';
import DashboardSettings from './pages/DashboardSettings';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/dashboard' element={<DashboardLayout />}>
          <Route index element={<DashboardHome />} />
          <Route path='settings' element={<DashboardSettings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
