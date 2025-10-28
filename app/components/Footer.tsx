import Link from 'next/link';
import { contactInfo } from './contactInfo';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#002B5B', color: 'white', padding: '40px 0 20px', marginTop: '60px' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px', marginBottom: '30px' }}>
          {/* About Section */}
          <div>
            <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '15px', color: '#FFC107' }}>About SIPM Library</h3>
            <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#ccc' }}>
              Empowering students and faculty with comprehensive access to academic resources and AI-powered learning assistance.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '15px', color: '#FFC107' }}>Quick Links</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <Link href="/catalogue" style={{ color: '#ccc', textDecoration: 'none', fontSize: '14px' }}>Browse Books</Link>
              <Link href="/ai-assistant" style={{ color: '#ccc', textDecoration: 'none', fontSize: '14px' }}>AI Assistant</Link>
              <Link href="/dashboard" style={{ color: '#ccc', textDecoration: 'none', fontSize: '14px' }}>Dashboard</Link>
              <Link href="/about" style={{ color: '#ccc', textDecoration: 'none', fontSize: '14px' }}>Contact Us</Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '15px', color: '#FFC107' }}>Contact Us</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '14px', color: '#ccc' }}>
              <div>
                <p style={{ fontWeight: '600', color: '#FFC107', marginBottom: '5px' }}>📍 {contactInfo.mainCampus.title}</p>
                <p style={{ fontSize: '13px' }}>{contactInfo.mainCampus.addressLines.join(', ')}</p>
              </div>
              <div>
                <p style={{ fontWeight: '600', color: '#FFC107', marginBottom: '5px' }}>🏢 {contactInfo.cityOffice.title}</p>
                <p style={{ fontSize: '13px' }}>{contactInfo.cityOffice.addressLines.join(', ')}</p>
              </div>
              <div>
                <p style={{ fontWeight: '600', color: '#FFC107', marginBottom: '5px' }}>📧 Email</p>
                <p style={{ fontSize: '13px' }}>{contactInfo.email}</p>
              </div>
              <div>
                <p style={{ fontWeight: '600', color: '#FFC107', marginBottom: '5px' }}>📞 Phone</p>
                <p style={{ fontSize: '13px' }}>{contactInfo.phones.join(', ')}</p>
              </div>
              <div style={{ display: 'flex', gap: '15px', marginTop: '5px' }}>
                <a href="#" style={{ color: '#FFC107', fontSize: '20px' }}>📘</a>
                <a href="#" style={{ color: '#FFC107', fontSize: '20px' }}>🐦</a>
                <a href="#" style={{ color: '#FFC107', fontSize: '20px' }}>🔗</a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: '20px', textAlign: 'center', fontSize: '14px', color: '#ccc' }}>
          <p>© 2025 Sanjeev Institute of Planning and Management Library Portal – All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

