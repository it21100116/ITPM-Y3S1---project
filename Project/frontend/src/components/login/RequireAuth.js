import { useLocation, Navigate, Outlet } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import React from 'react'
const RequireAuth = ({ allowedRole }) => {
  const { auth } = useAuth()
  const location = useLocation()

  return auth && auth.role != allowedRole ? (
    <Outlet />
  ) : auth && auth.user ? (
    <Navigate to="/unauthorized" />
  ) : (
    <Navigate to="/signin" state={{ from: location }} replace />
  )
}

export default RequireAuth
