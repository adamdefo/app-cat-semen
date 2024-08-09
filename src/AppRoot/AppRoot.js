import { Outlet } from 'react-router-dom';
import Header from './../components/header/Header';
import Footer from './../components/footer/Footer';
import './AppRoot.scss';

const AppRoot = function() {

  return (
    <div className="root">
      <Header />
      <main>
        <div className="container">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );

}

export default AppRoot;
