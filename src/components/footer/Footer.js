import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logOut } from './../../redux/auth/authState';
import './Footer.scss';

const Footer = function() {

  const navigate = useNavigate();
  const appVersion = useSelector((state) => state.root.appVersion);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const FOOTER_NAV = [
    {
      fragment: 'about',
      title: 'About'
    },
    {
      fragment: 'services',
      title: 'Services'
    },
    {
      fragment: 'contacts',
      title: 'Contacts'
    }
  ];

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
              {FOOTER_NAV.map((link, idx) => (
                <li key={idx}>
                  <NavLink to={`/${link.fragment}`}>{link.title}</NavLink>
                </li>
              ))}
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
