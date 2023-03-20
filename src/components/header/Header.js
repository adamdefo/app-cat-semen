import { NavLink, Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logOut } from './../../redux/auth/authState';
import './Header.scss';

const Header = function() {

  const navigate = useNavigate();
  const appVersion = useSelector((state) => state.root.appVersion);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  function onLogOut(e) {
    e.preventDefault();

    if (user) {
      dispatch(logOut());
      navigate('/');
    } else {
      navigate('/registration');
    }
  };

  return (
    <div className="wrap-header">
      <div className="container">
        <header className="header">
          <div className="header__logo">{'v' + appVersion}</div>
          <div className="header__nav">
            <nav className="nav">
              <ul className="nav__list">
                <li>
                  <NavLink to="/">Me</NavLink>
                </li>
                <li>
                  <NavLink to="/posts">Private</NavLink>
                </li>
              </ul>
            </nav>
          </div>
          <div className="header__auth">
            <Link to={user ? 'user' : '/login'}>{ user ? user.name : 'Login' }</Link>
            <button type="button" className="btn btn_primary btn_s" onClick={onLogOut}>{ !user ? 'Sign Up' : 'Logout' }</button>
          </div>
        </header>
      </div>
    </div>
  );

}

export default Header;
