'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showDesktopWarning, setShowDesktopWarning] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState<{email: string, role: string} | null>(null);
  const pathname = usePathname();

  // Check if user is on mobile device
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const isMobile = window.innerWidth < 768;
      if (isMobile) {
        setTimeout(() => setShowDesktopWarning(true), 500);
      }

      const syncLoginState = () => {
        const storedLogin = localStorage.getItem('isLoggedIn');
        const storedUserInfo = localStorage.getItem('userInfo');
        if (storedLogin === 'true' && storedUserInfo) {
          setIsLoggedIn(true);
          setUserInfo(JSON.parse(storedUserInfo));
        } else {
          setIsLoggedIn(false);
          setUserInfo(null);
        }
      };

      // Initial check and on-route change check
      syncLoginState();

      // Listen to custom and browser events to keep state in sync
      const handleVisibility = () => syncLoginState();
      const handleStorage = () => syncLoginState();
      window.addEventListener('visibilitychange', handleVisibility);
      window.addEventListener('storage', handleStorage);

      return () => {
        window.removeEventListener('visibilitychange', handleVisibility);
        window.removeEventListener('storage', handleStorage);
      };
    }
  }, [pathname]);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userInfo');
    setIsLoggedIn(false);
    setUserInfo(null);
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

      <header style={{ backgroundColor: '#002B5B', color: 'white', padding: '15px 0', position: 'sticky', top: 0, zIndex: 1000, boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
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
            <Link href="/about" style={{ color: 'white', textDecoration: 'none', padding: '10px', borderRadius: '5px', transition: 'background 0.3s' }}>Contact</Link>
            {isLoggedIn ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ fontSize: '13px', color: '#FFC107' }}>👤 {userInfo?.role || 'User'}</div>
                <button onClick={handleLogout} style={{ backgroundColor: '#FFC107', color: '#002B5B', padding: '10px', border: 'none', borderRadius: '25px', fontWeight: '600', cursor: 'pointer' }}>Logout</button>
              </div>
            ) : (
              <Link href="/login">
                <button style={{ backgroundColor: '#FFC107', color: '#002B5B', padding: '10px', border: 'none', borderRadius: '25px', fontWeight: '600', cursor: 'pointer' }}>Login</button>
              </Link>
            )}
          </nav>
        )}
      </div>
    </header>
    </>
  );
}

