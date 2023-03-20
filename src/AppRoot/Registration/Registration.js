import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logIn } from './../../redux/auth/authState';
import './Registration.scss';

const Registration = function() {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  function onSubmit(e) {
    console.log('Registration --> onSubmit');
    e.preventDefault();
    // TODO переделать через сервис 
    // const apiUrl = 'https://jsonplaceholder.typicode.com/users/1';
    // axios.get(apiUrl).then(resp => {
    //   setTimeout(() => {
    //     console.log(resp);
    //     try {
    //       dispatch(logIn(resp.data));
    //       navigate('/');
    //     } catch {
    //       console.error('Error');
    //     }
    //   }, 3000);
    // });
  };

  return (
    <div className="registration-form">
      <div className="registration-form__title">Регистрация</div>
      <form className="form" onSubmit={onSubmit} noValidate>
        <div className="form__control">
          <input type="text" name="last_name" className="input input_dark" />
        </div>
        <div className="form__control">
          <input type="text" name="first_name" className="input input_dark" />
        </div>
        <div className="form__control">
          <input type="text" name="login" className="input input_dark" />
        </div>
        <div className="form__control">
          <input type="password" name="password" className="input input_dark" />
        </div>
        <div className="form__submit center">
          <button className="btn btn_dark" type="submit">Зарегистрироваться</button>
        </div>
      </form>
    </div>
  );

}

export default Registration;
