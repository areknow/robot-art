import { Link } from 'react-router-dom';

export const GlobalNav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Gallery</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/admin">Admin</Link>
        </li>
      </ul>
    </nav>
  );
};
