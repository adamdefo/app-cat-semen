import { Outlet } from 'react-router-dom';
import Header from './../components/header/Header';
import './AppRoot.scss';


const AppRoot = function() {

  return (
    <div className="root">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );

}

export default AppRoot;
