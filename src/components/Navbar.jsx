import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>
      <Link to='/' style={{ marginRight: '10px' }}>
        홈
      </Link>
      <Link to='/about' style={{ marginRight: '10px' }}>
        소개
      </Link>
      <Link to='/contact'>문의</Link>
    </nav>
  );
}

export default Navbar;
