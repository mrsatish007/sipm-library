'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
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
            <Link href="/login">
              <button style={{ backgroundColor: '#FFC107', color: '#002B5B', padding: '8px 20px', border: 'none', borderRadius: '25px', fontWeight: '600', cursor: 'pointer', fontSize: '14px', transition: 'all 0.3s' }}>Login</button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} style={{ display: 'none', fontSize: '24px', background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}>
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
            <button style={{ backgroundColor: '#FFC107', color: '#002B5B', padding: '10px', border: 'none', borderRadius: '25px', fontWeight: '600', cursor: 'pointer' }}>Login</button>
          </nav>
        )}
      </div>
    </header>
  );
}

