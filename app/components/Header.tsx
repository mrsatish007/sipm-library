'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showDesktopWarning, setShowDesktopWarning] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState<{email: string, role: string} | null>(null);

  // Check if user is on mobile device
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const isMobile = window.innerWidth < 768;
      if (isMobile) {
        setTimeout(() => setShowDesktopWarning(true), 500);
      }

      // Check for stored login info
      const storedLogin = localStorage.getItem('isLoggedIn');
      const storedUserInfo = localStorage.getItem('userInfo');
      if (storedLogin === 'true' && storedUserInfo) {
        setIsLoggedIn(true);
        setUserInfo(JSON.parse(storedUserInfo));
      }

      // Listen for auth changes (login/logout) to update header instantly
      const onAuthChange = () => {
        const updatedLogin = localStorage.getItem('isLoggedIn');
        const updatedUserInfo = localStorage.getItem('userInfo');
        if (updatedLogin === 'true' && updatedUserInfo) {
          setIsLoggedIn(true);
          setUserInfo(JSON.parse(updatedUserInfo));
        } else {
          setIsLoggedIn(false);
          setUserInfo(null);
        }
      };
      window.addEventListener('auth-change', onAuthChange);
      return () => window.removeEventListener('auth-change', onAuthChange);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userInfo');
    setIsLoggedIn(false);
    setUserInfo(null);
    // Notify app about auth change so Header updates immediately
    window.dispatchEvent(new Event('auth-change'));
    window.location.href = '/';
  };

  return (
    <>
      {/* Desktop Mode Warning Modal */}
      {showDesktopWarning && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 9999,
          padding: '20px'
        }}>
          <div style={{
            backgroundColor: 'white',
            borderRadius: '20px',
            padding: '30px',
            maxWidth: '400px',
            width: '100%',
            textAlign: 'center',
            boxShadow: '0 10px 40px rgba(0,0,0,0.3)'
          }}>
            <div style={{ fontSize: '50px', marginBottom: '15px' }}>📱</div>
            <h2 style={{ fontSize: '22px', fontWeight: '700', color: '#002B5B', marginBottom: '15px' }}>
              Better Experience Available
            </h2>
            <p style={{ fontSize: '16px', color: '#666', marginBottom: '20px', lineHeight: '1.6' }}>
              For the best experience, please access our library portal on desktop or tablet mode.
            </p>
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
              <button
                onClick={() => setShowDesktopWarning(false)}
                style={{
                  backgroundColor: '#FFC107',
                  color: '#002B5B',
                  padding: '12px 30px',
                  border: 'none',
                  borderRadius: '25px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  fontSize: '15px'
                }}
              >
                Continue on Mobile
              </button>
            </div>
          </div>
        </div>
      )}

      <header style={{ 
        backgroundImage: 'url("https://img.freepik.com/free-photo/books-arrangement-with-copy-space_23-2148898331.jpg")', 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: '#002B5B', 
        color: 'white', 
        padding: '15px 0', 
        position: 'sticky', 
        top: 0, 
        zIndex: 1000, 
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
      }}>
      <div style={{ 
        backgroundColor: 'rgba(0, 43, 91, 0.85)', 
        padding: '15px 0'
      }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {/* Logo and College Name */}
          <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '15px' }}>
            <img 
              src="https://media.collegedekho.com/media/img/institute/logo/SNJV-LOGO.png"
              alt="SIPM Logo"
              style={{
                width: '60px',
                height: '60px',
                borderRadius: '12px',
                objectFit: 'contain',
                backgroundColor: 'white',
                padding: '5px'
              }}
            />
            <div>
              <div style={{ fontSize: '18px', fontWeight: '600', color: 'white' }}>Sanjeev Institute of</div>
              <div style={{ fontSize: '14px', color: '#FFC107' }}>Planning and Management</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav style={{ display: 'flex', gap: '25px', alignItems: 'center' }}>
            <Link href="/" style={{ color: 'white', textDecoration: 'none', fontSize: '15px', fontWeight: '500', transition: 'color 0.3s' }}>Home</Link>
            <Link href="/catalogue" style={{ color: 'white', textDecoration: 'none', fontSize: '15px', fontWeight: '500', transition: 'color 0.3s' }}>Books</Link>
            <Link href="/ai-assistant" style={{ color: 'white', textDecoration: 'none', fontSize: '15px', fontWeight: '500', transition: 'color 0.3s' }}>AI Assistant</Link>
            <Link href="/borrow" style={{ color: 'white', textDecoration: 'none', fontSize: '15px', fontWeight: '500', transition: 'color 0.3s' }}>Borrow/Return</Link>
            <Link href="/dashboard" style={{ color: 'white', textDecoration: 'none', fontSize: '15px', fontWeight: '500', transition: 'color 0.3s' }}>Dashboard</Link>
            <Link href="/librarian" style={{ color: '#002B5B', backgroundColor: '#FFC107', padding: '8px 14px', borderRadius: '20px', textDecoration: 'none', fontSize: '14px', fontWeight: '700' }}>Librarian Profile</Link>
                <Link href="/about" style={{ color: 'white', textDecoration: 'none', fontSize: '15px', fontWeight: '500', transition: 'color 0.3s' }}>Contact</Link>
                {isLoggedIn ? (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                    <div style={{ fontSize: '13px', color: '#FFC107' }}>
                      👤 {userInfo?.role || 'User'}
                    </div>
                    <button onClick={handleLogout} style={{ backgroundColor: '#FFC107', color: '#002B5B', padding: '8px 20px', border: 'none', borderRadius: '25px', fontWeight: '600', cursor: 'pointer', fontSize: '14px', transition: 'all 0.3s' }}>Logout</button>
                  </div>
                ) : (
                  <Link href="/login">
                    <button style={{ backgroundColor: '#FFC107', color: '#002B5B', padding: '8px 20px', border: 'none', borderRadius: '25px', fontWeight: '600', cursor: 'pointer', fontSize: '14px', transition: 'all 0.3s' }}>Login</button>
                  </Link>
                )}
          </nav>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} style={{ display: 'block', fontSize: '24px', background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}
            className="mobile-menu-btn">
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav style={{ marginTop: '15px', display: 'flex', flexDirection: 'column', gap: '15px', borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: '15px' }}>
            <Link href="/" style={{ color: 'white', textDecoration: 'none', padding: '10px', borderRadius: '5px', transition: 'background 0.3s' }}>Home</Link>
            <Link href="/catalogue" style={{ color: 'white', textDecoration: 'none', padding: '10px', borderRadius: '5px', transition: 'background 0.3s' }}>Books</Link>
            <Link href="/ai-assistant" style={{ color: 'white', textDecoration: 'none', padding: '10px', borderRadius: '5px', transition: 'background 0.3s' }}>AI Assistant</Link>
            <Link href="/borrow" style={{ color: 'white', textDecoration: 'none', padding: '10px', borderRadius: '5px', transition: 'background 0.3s' }}>Borrow/Return</Link>
            <Link href="/dashboard" style={{ color: 'white', textDecoration: 'none', padding: '10px', borderRadius: '5px', transition: 'background 0.3s' }}>Dashboard</Link>
            <Link href="/librarian" style={{ color: '#002B5B', backgroundColor: '#FFC107', textAlign: 'center', textDecoration: 'none', padding: '10px', borderRadius: '25px', fontWeight: '700' }}>Librarian Profile</Link>
            <Link href="/about" style={{ color: 'white', textDecoration: 'none', padding: '10px', borderRadius: '5px', transition: 'background 0.3s' }}>Contact</Link>
            {isLoggedIn ? (
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px' }}>
                <div style={{ fontSize: '13px', color: '#FFC107' }}>👤 {userInfo?.role || 'User'}</div>
                <button onClick={handleLogout} style={{ backgroundColor: '#FFC107', color: '#002B5B', padding: '10px 20px', border: 'none', borderRadius: '25px', fontWeight: '600', cursor: 'pointer' }}>Logout</button>
              </div>
            ) : (
              <Link href="/login">
                <button style={{ backgroundColor: '#FFC107', color: '#002B5B', padding: '10px', border: 'none', borderRadius: '25px', fontWeight: '600', cursor: 'pointer' }}>Login</button>
              </Link>
            )}
          </nav>
        )}
      </div>
      </div>
    </header>
    </>
  );
}

