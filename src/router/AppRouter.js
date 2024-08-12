import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AppGuard from './../guard/AppGuard';
import AppRoot from './../AppRoot/AppRoot';
import Auth from './../AppRoot/Auth/Auth';
import Registration from './../AppRoot/Registration/Registration';
import Main from './../AppRoot/Main/Main';
import Page from './../components/page/Page';

const AppRouter = function() {

  const currentTheme = useSelector((state) => state.root.theme);
  console.log(currentTheme);
  if (currentTheme !== 'default') {
    document.body.classList.add('dark-theme');
  } else {
    document.body.classList.remove('dark-theme');
  }

  return (
    <Router>
      <Routes>
        <Route element={<AppRoot />}>
          <Route index path="/"
            element={
              <AppGuard>
                <Main />
              </AppGuard>
            }
          />
          <Route path="/about" element={<Page title="About" />} />
          <Route path="/services" element={<Page title="Services" />} />
          <Route path="/contacts" element={<Page title="Contacts" />} />
          <Route path="/login" element={<Auth />} />
          <Route path="/registration" element={<Registration />} />
        </Route>
      </Routes>
    </Router>
  );

}

export default AppRouter;
