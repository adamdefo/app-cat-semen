import { NavLink, Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logOut } from './../../redux/auth/authState';
import './Footer.scss';

const Footer = function() {

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
    <div className="wrap-footer">
      <div className="container">
        <footer className="footer">
          <div className="footer__logo">{'v' + appVersion}</div>
          <div className="footer__nav">
            <nav className="nav">
              <ul className="nav__list">
                <li>
                  <NavLink to="/about">About</NavLink>
                </li>
                <li>
                  <NavLink to="/services">Services</NavLink>
                </li>
                <li>
                  <NavLink to="/support">Contacts</NavLink>
                </li>
              </ul>
            </nav>
          </div>
          <div className="footer__auth">
            { user && <button type="button" className="btn btn_primary btn_s" onClick={onLogOut}>Log Out</button> }
          </div>
        </footer>
      </div>
    </div>
  );

}

export default Footer;
