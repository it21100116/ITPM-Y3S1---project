import React, { useState } from 'react';
import axios from 'axios';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './Header';

function SignUpPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const notify = () => toast("Successfully user added");
  const notify2 = () => toast("Username already exists, please choose another username");
  const notify3 = () => toast("Age must be between 16 and 100");

  const sendData = (e) => {
    e.preventDefault();

    if (password.length < 5) {
      alert('Password must be at least 5 characters');
      return;
    }

    // Age validation
    if (age < 16 || age > 100) {
      notify3();
      return;
    }

    const newUser = {
      username,
      password,
      name,
      age,
      role: 'customer'
    };

    axios.post("http://localhost:8070/user/add", newUser)
      .then(() => {
        notify();
      })
      .catch((err) => {
        notify2();
      });
  };

  return (
    <div>
      <Header/>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f5f5f5' }}>
        <form onSubmit={sendData} style={{ display: 'flex', flexDirection: 'column', width: '300px', padding: '20px', border: '1px solid #ccc', borderRadius: '10px', backgroundColor: 'white' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Sign Up</h2>
          <label style={{ marginBottom: '10px' }}>
            Username:
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} style={{ width: '100%', padding: '5px' }} required />
          </label>
          <label style={{ marginBottom: '10px' }}>
            Password:
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} style={{ width: '100%', padding: '5px' }} required />
          </label>
          <label style={{ marginBottom: '10px' }}>
            Name:
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} style={{ width: '100%', padding: '5px' }} required />
          </label>
          <label style={{ marginBottom: '10px' }}>
            Age:
            <input type="number" value={age} onChange={(e) => setAge(e.target.value)} style={{ width: '100%', padding: '5px' }} required />
          </label>
          <input type="submit" value="Sign Up" style={{ cursor: 'pointer', padding: '10px', backgroundColor: '#009688', color: 'white', border: 'none', borderRadius: '5px', marginTop: '10px' }} />
          <p style={{ textAlign: 'center', marginTop: '20px' }}>Already have an account? <a href="/signin" style={{ color: '#009688' }}>Sign in</a></p>
        </form>
      </div>
    </div>    
  );
}

export default SignUpPage;

