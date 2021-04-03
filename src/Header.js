import { Link } from 'react-router-dom';

const Header = () => {
  const showTask = () => {};
  return (
    <header id="header">
      <div className="nav">
        <h1 className="logo">The Dojo Blog</h1>
        <nav>
          <ul>
            <Link to="/">Home</Link>
            <Link to="/create" className="new-blog-btn">
              New Blog
            </Link>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
