import { useEffect, useState } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setTheme } from './../../redux/rootState';
import { logOut } from './../../redux/auth/authState';
import './Header.scss';

const Header = function() {
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const appVersion = useSelector((state) => state.root.appVersion);
  const currentTheme = useSelector((state) => state.root.theme);
  const [theme, onSetTheme] = useState(currentTheme);
  const [isOnThemeSwitcher, setIsOnThemeSwitcher] = useState(currentTheme !== 'light');
  function onToggleTheme() {
    const v = currentTheme === 'light' ? 'dark' : 'light';
    setIsOnThemeSwitcher(currentTheme === 'light');
    onSetTheme(v);
    dispatch(setTheme(v));
  }
  
  const user = useSelector((state) => state.auth.user);

  function onLogOut(e) {
    e.preventDefault();

    if (user) {
      dispatch(logOut());
      navigate('/');
    } else {
      navigate('/registration');
    }
  };

  const themeText = Set + (theme !== 'light' ? 'White' : 'Dark') + theme;

  return (
    <div className="wrap-header">
      <div className="container">
        <header className="header">
          <div className="header__logo">
            <div className="header__theme-switcher">
              <button className={ isOnThemeSwitcher ? 'theme-switcher on' : 'theme-switcher'} onClick={ev => {
                ev.preventDefault()
                ev.stopPropagation()
                onToggleTheme()
              }}></button>
            </div>
          </div>
          <div className="header__nav">
            <nav className="nav">
              <ul className="nav__list">
                <li>
                  <NavLink to="/">Main</NavLink>
                </li>
              </ul>
            </nav>
          </div>
          <div className="header__auth">
            <Link to={user ? 'user' : '/login'}>{ user ? user.name : 'Login' }</Link>
            <button type="button" className="btn btn_primary btn_s" onClick={onLogOut}>{ !user ? 'Sign Up' : 'Log Out' }</button>
          </div>
        </header>
      </div>
    </div>
  );

}

export default Header;
