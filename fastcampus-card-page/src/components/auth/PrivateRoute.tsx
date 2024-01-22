import useUser from '@/hooks/auth/userUser'
import { Navigate } from 'react-router-dom'

function PrivateRoute({ children }: { children: any }) {
  const user = useUser()

  if (user == null) {
    return <Navigate to="/signin" replace={true} />
  }

  return children
}

export default PrivateRoute
