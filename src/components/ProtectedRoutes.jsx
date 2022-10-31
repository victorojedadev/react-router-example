import { Navigate, Outlet } from 'react-router-dom';

export const ProtectedRoutes = ({ isAllowed, children, redirectTo }) => {
  if (!isAllowed) {
    return <Navigate to={redirectTo}></Navigate>
  }
  return children ? children : <Outlet />
}
