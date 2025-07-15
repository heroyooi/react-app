import { Link, Outlet } from 'react-router-dom';

function DashboardLayout() {
  return (
    <div>
      <header style={{ padding: '10px', backgroundColor: '#f5f5f5' }}>
        <h1>📊 대시보드</h1>
        <nav>
          <Link to='/dashboard' style={{ marginRight: '10px' }}>
            홈
          </Link>
          <Link to='/dashboard/settings'>설정</Link>
        </nav>
      </header>
      <main style={{ padding: '20px' }}>
        <Outlet />
      </main>
    </div>
  );
}

export default DashboardLayout;
