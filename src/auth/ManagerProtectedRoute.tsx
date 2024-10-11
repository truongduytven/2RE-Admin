import React from 'react'
import { Navigate, RouteProps } from 'react-router-dom'
import { useAuth } from '@/auth/AuthContext'

type ManagerProtectedRouteProps  = RouteProps & {
  children: React.ReactNode
}

const ManagerProtectedRoute: React.FC<ManagerProtectedRouteProps> = ({ children }) => {
  const { user } = useAuth()
console.log("man",user)
  if (!user) {
    return <Navigate to="/" />
  }

  if (!user.isShopOwner) {
    return <Navigate to="/not-authorized" />
  }

  return <>{children}</>
}

export default ManagerProtectedRoute
