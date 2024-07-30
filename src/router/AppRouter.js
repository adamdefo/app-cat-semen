import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppGuard from './../guard/AppGuard';
import AppRoot from './../AppRoot/AppRoot';
import Auth from './../AppRoot/Auth/Auth';
import Registration from './../AppRoot/Registration/Registration';
import Main from './../AppRoot/Main/Main';
import Posts from './../components/posts/Posts';

const AppRouter = function() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppRoot />}>
          <Route path="" element={<Main />} />
          <Route path="/login" element={<Auth />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/posts"
            element={
              <AppGuard>
                <Posts />
              </AppGuard>
            }
          />
        </Route>
      </Routes>
    </Router>
  );

}

export default AppRouter;
