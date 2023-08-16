import React from 'react'

function UnauthorizePage() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f5f5f5',
      }}
    >
      <h1 style={{ fontSize: '3rem', color: '#e53e3e' }}>401</h1>
      <h2 style={{ fontSize: '2rem' }}>Unauthorized</h2>
      <p style={{ textAlign: 'center', maxWidth: '80%' }}>
        Sorry, but you don't have permission to view this page.
      </p>
      <a
        href="/signin"
        style={{
          color: '#009688',
          textDecoration: 'underline',
          marginTop: '20px',
        }}
      >
        Return to Home
      </a>
    </div>
  )
}

export default UnauthorizePage
