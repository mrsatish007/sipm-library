'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Login() {
  const [loginType, setLoginType] = useState<'student' | 'librarian' | 'admin'>('student');
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate login (in real app, this would connect to backend)
    alert(`Login as ${loginType} successful!\nEmail: ${credentials.email}`);
    
    // Redirect based on role
    if (loginType === 'student') {
      router.push('/dashboard');
    } else if (loginType === 'librarian') {
      router.push('/borrow?view=librarian');
    } else {
      router.push('/dashboard');
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px', backgroundColor: '#F8F9FA' }}>
      <div style={{
        backgroundColor: 'white',
        borderRadius: '20px',
        boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
        padding: '40px',
        maxWidth: '500px',
        width: '100%'
      }}>
        {/* Logo */}
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <img 
            src="https://media.collegedekho.com/media/img/institute/logo/SNJV-LOGO.png"
            alt="SIPM Logo"
            style={{
              width: '120px',
              height: '120px',
              margin: '0 auto 20px',
              borderRadius: '20px',
              objectFit: 'contain',
              backgroundColor: 'white',
              padding: '10px',
              boxShadow: '0 5px 20px rgba(0,0,0,0.1)'
            }}
          />
          <h1 style={{ fontSize: '28px', fontWeight: '700', color: '#002B5B', marginBottom: '8px' }}>
            Welcome Back
          </h1>
          <p style={{ fontSize: '15px', color: '#666' }}>
            Sign in to access your library account
          </p>
        </div>

        {/* Login Type Tabs */}
        <div style={{ display: 'flex', gap: '10px', marginBottom: '30px' }}>
          {(['student', 'librarian', 'admin'] as const).map(type => (
            <button
              key={type}
              onClick={() => setLoginType(type)}
              style={{
                flex: 1,
                padding: '12px',
                fontSize: '14px',
                fontWeight: '600',
                border: 'none',
                borderRadius: '10px',
                cursor: 'pointer',
                textTransform: 'capitalize',
                backgroundColor: loginType === type ? '#002B5B' : '#F0F0F0',
                color: loginType === type ? 'white' : '#333',
                transition: 'all 0.3s'
              }}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Login Form */}
        <form onSubmit={handleLogin}>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '600', color: '#333' }}>
              Email ID
            </label>
            <input
              type="email"
              value={credentials.email}
              onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
              required
              placeholder="Enter your email"
              style={{
                width: '100%',
                padding: '14px 18px',
                fontSize: '15px',
                border: '2px solid #e0e0e0',
                borderRadius: '10px',
                outline: 'none',
                transition: 'border 0.3s'
              }}
              onFocus={(e) => e.target.style.borderColor = '#002B5B'}
              onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
            />
          </div>

          <div style={{ marginBottom: '25px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <label style={{ fontSize: '14px', fontWeight: '600', color: '#333' }}>
                Password
              </label>
              <a href="#" style={{ fontSize: '13px', color: '#002B5B', textDecoration: 'none' }}>
                Forgot?
              </a>
            </div>
            <input
              type="password"
              value={credentials.password}
              onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
              required
              placeholder="Enter your password"
              style={{
                width: '100%',
                padding: '14px 18px',
                fontSize: '15px',
                border: '2px solid #e0e0e0',
                borderRadius: '10px',
                outline: 'none',
                transition: 'border 0.3s'
              }}
              onFocus={(e) => e.target.style.borderColor = '#002B5B'}
              onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
            />
          </div>

          <button
            type="submit"
            style={{
              width: '100%',
              backgroundColor: '#002B5B',
              color: 'white',
              padding: '16px',
              fontSize: '16px',
              fontWeight: '600',
              border: 'none',
              borderRadius: '10px',
              cursor: 'pointer',
              transition: 'background 0.3s',
              marginBottom: '20px'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#001d3d'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#002B5B'}
          >
            Sign In
          </button>
        </form>

        {/* Role Info */}
        <div style={{
          backgroundColor: loginType === 'student' ? '#E3F2FD' : loginType === 'librarian' ? '#FFF3E0' : '#F3E5F5',
          padding: '15px',
          borderRadius: '10px',
          fontSize: '13px',
          color: '#002B5B',
          textAlign: 'center'
        }}>
          {loginType === 'student' && 'Access books, view borrowings, and get AI recommendations'}
          {loginType === 'librarian' && 'Manage borrow requests, track overdue books, and view statistics'}
          {loginType === 'admin' && 'System administration, announcements, and global overview'}
        </div>

        {/* Register Link */}
        <div style={{ textAlign: 'center', marginTop: '25px', fontSize: '14px', color: '#666' }}>
          Don't have an account?{' '}
          <a href="#" style={{ color: '#002B5B', fontWeight: '600', textDecoration: 'none' }}>
            Register here
          </a>
        </div>

        {/* Back to Home */}
        <div style={{ textAlign: 'center', marginTop: '15px' }}>
          <Link href="/" style={{ color: '#666', textDecoration: 'none', fontSize: '14px' }}>
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

