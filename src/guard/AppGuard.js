import { Navigate, useLocation } from 'react-router-dom';

const AppGuard = function({ children }) {

  const location = useLocation();
  // console.log('AppGuard:location', location);

  if (!sessionStorage.getItem('USER')) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;

}

export default AppGuard;
