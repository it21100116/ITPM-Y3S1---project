import React, { useState, useEffect } from 'react'
import CustomerHeader from './Header.js'

import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

function SignInPage() {
  const navigate = useNavigate()
  const { setAuth } = useAuth()
  const [user, setUser] = useState('')
  const [pwd, setPwd] = useState('')
  const [errMsg, setErrMsg] = useState('')

  useEffect(() => {
    setErrMsg('')
  }, [user, pwd])

  const handleSubmit = async e => {
    e.preventDefault()

    try {
      const response = await axios.post(
        'http://localhost:8070/user/login',
        JSON.stringify({ user, pwd }),
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        }
      )
      console.log(JSON.stringify(response.data))

      const accessToken = response.data.accessToken
      const role = response.data.role
      console.log(role)
      setAuth({ user, pwd, role, accessToken })
      setUser('')
      setPwd('')
      if (role === 'customer') {
        navigate('/')
      } else if (role == 'admin') {
        navigate('/adminpanel')
      }
    } catch (err) {
      if (!err.response) {
        setErrMsg('Server Error')
      } else if (err.response.status === 400) {
        setErrMsg('Username or password required')
      } else if (err.response.status === 401) {
        setErrMsg('Invalid username or password')
      } else {
        setErrMsg('Login Failed')
      }
    }
  }

  return (
    <div>
      <CustomerHeader />
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          backgroundColor: '#f5f5f5',
        }}
      >
        <form
          onSubmit={handleSubmit}
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '300px',
            padding: '20px',
            border: '1px solid #ccc',
            borderRadius: '10px',
            backgroundColor: 'white',
          }}
        >
          <p
            style={{
              backgroundColor: errMsg ? '#e53e3e' : 'transparent', // bg-pink-700
              color: errMsg ? '#fefefe' : 'inherit', // text-red-100
              fontWeight: errMsg ? 'bold' : 'normal', // font-bold
              padding: errMsg ? '0.125rem' : '0', // p-0.5
              marginBottom: errMsg ? '0.5rem' : '0', // mb-2
              fontSize: errMsg ? '1.5rem' : 'inherit', // text-2xl
              position: errMsg ? 'static' : 'absolute', // absolute
              left: errMsg ? 'auto' : '-10000px', // -left-full
            }}
          >
            {errMsg}
          </p>

          <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Sign In</h2>
          <label style={{ marginBottom: '10px' }}>
            Username:
            <input
              type="text"
              value={user}
              onChange={e => setUser(e.target.value)}
              style={{ width: '100%', padding: '5px' }}
              required
            />
          </label>
          <label style={{ marginBottom: '10px' }}>
            Password:
            <input
              type="password"
              value={pwd}
              onChange={e => setPwd(e.target.value)}
              style={{ width: '100%', padding: '5px' }}
              required
            />
          </label>
          <input
            type="submit"
            value="Sign In"
            style={{
              cursor: 'pointer',
              padding: '10px',
              backgroundColor: '#009688',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              marginTop: '10px',
            }}
          />
          <p style={{ textAlign: 'center', marginTop: '20px' }}>
            Don't have an account?{' '}
            <a href="/signup" style={{ color: '#009688' }}>
              Sign up
            </a>
          </p>
        </form>
      </div>
    </div>
  )
}

export default SignInPage
