import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const AppGuard = function({ children }) {

  const user = useSelector((state) => state.auth.user);
  const location = useLocation();
  console.log('location', location);

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;

}

export default AppGuard;
