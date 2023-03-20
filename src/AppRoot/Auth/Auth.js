import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logIn } from './../../redux/auth/authState';
import './Auth.scss';

const Auth = function() {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  function onLogIn(e) {
    console.log('Auth --> onLogIn');
    e.preventDefault();
    // TODO переделать через сервис 
    const apiUrl = 'https://jsonplaceholder.typicode.com/users/1';
    axios.get(apiUrl).then(resp => {
      setTimeout(() => {
        console.log(resp);
        try {
          dispatch(logIn(resp.data));
          navigate('/');
        } catch {
          console.error('Error');
        }
      });
    });
  };

  return (
    <div className="auth-form">
      <div className="auth-form__title">Вход</div>
      <form className="form" onSubmit={onLogIn} noValidate>
        <div className="form__control">
          <input type="text" name="login" className="input input_dark" />
        </div>
        <div className="form__control">
          <input type="password" name="password" className="input input_dark" />
        </div>
        <div className="form__submit center">
          <button className="btn btn_dark" type="submit">Log In</button>
        </div>
      </form>
    </div>
  );

}

export default Auth;
