'use client';

import { useState } from 'react';

export default function Dashboard() {
  const [role, setRole] = useState<'student' | 'librarian' | 'admin'>('student');

  return (
    <div style={{ minHeight: '80vh', padding: '40px 20px' }}>
      <div className="container">
        {/* Role Selector */}
        <div style={{ marginBottom: '40px' }}>
          <h1 style={{ fontSize: '36px', fontWeight: '700', marginBottom: '30px', color: '#002B5B' }}>
            📊 Dashboard
          </h1>
          <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
            {(['student', 'librarian', 'admin'] as const).map(r => (
              <button
                key={r}
                onClick={() => setRole(r)}
                style={{
                  padding: '12px 30px',
                  fontSize: '15px',
                  fontWeight: '600',
                  border: 'none',
                  borderRadius: '25px',
                  cursor: 'pointer',
                  textTransform: 'capitalize',
                  backgroundColor: role === r ? '#002B5B' : '#F0F0F0',
                  color: role === r ? 'white' : '#333',
                  transition: 'all 0.3s'
                }}
              >
                {r} View
              </button>
            ))}
          </div>
        </div>

        {/* Student Dashboard */}
        {role === 'student' && (
          <div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '25px', marginBottom: '40px' }}>
              {/* Profile Card */}
              <div style={{
                backgroundColor: 'white',
                borderRadius: '15px',
                padding: '30px',
                boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
                textAlign: 'center'
              }}>
                <div style={{
                  width: '100px',
                  height: '100px',
                  borderRadius: '50%',
                  backgroundColor: '#FFC107',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '50px',
                  margin: '0 auto 20px'
                }}>
                  👤
                </div>
                <h3 style={{ fontSize: '22px', fontWeight: '600', marginBottom: '5px', color: '#002B5B' }}>Rajesh Kumar</h3>
                <p style={{ fontSize: '14px', color: '#666' }}>Roll No: S12345</p>
                <p style={{ fontSize: '14px', color: '#666' }}>MBA - Finance</p>
              </div>

              {/* Stats Cards */}
              <div style={{
                backgroundColor: 'white',
                borderRadius: '15px',
                padding: '30px',
                boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }}>
                <div style={{ fontSize: '40px', marginBottom: '15px' }}>📚</div>
                <div style={{ fontSize: '36px', fontWeight: '700', color: '#002B5B', marginBottom: '5px' }}>3</div>
                <div style={{ fontSize: '15px', color: '#666' }}>Books Borrowed</div>
              </div>

              <div style={{
                backgroundColor: 'white',
                borderRadius: '15px',
                padding: '30px',
                boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }}>
                <div style={{ fontSize: '40px', marginBottom: '15px' }}>⚠️</div>
                <div style={{ fontSize: '36px', fontWeight: '700', color: '#FFC107', marginBottom: '5px' }}>₹50</div>
                <div style={{ fontSize: '15px', color: '#666' }}>Fines Due</div>
              </div>

              <div style={{
                backgroundColor: 'white',
                borderRadius: '15px',
                padding: '30px',
                boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }}>
                <div style={{ fontSize: '40px', marginBottom: '15px' }}>⭐</div>
                <div style={{ fontSize: '36px', fontWeight: '700', color: '#4CAF50', marginBottom: '5px' }}>98%</div>
                <div style={{ fontSize: '15px', color: '#666' }}>Return Rate</div>
              </div>
            </div>

            {/* Recommended Books */}
            <div>
              <h2 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '20px', color: '#002B5B' }}>
                Top Picks for Your Course
              </h2>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '25px'
              }}>
                {['Strategic Business Planning', 'Investment Banking Fundamentals', 'Economic Analysis'].map((title, idx) => (
                  <div key={idx} style={{
                    backgroundColor: 'white',
                    borderRadius: '15px',
                    padding: '20px',
                    boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
                    display: 'flex',
                    gap: '15px',
                    alignItems: 'center'
                  }}>
                    <div style={{ fontSize: '50px' }}>📕</div>
                    <div style={{ flex: 1 }}>
                      <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '5px', color: '#002B5B' }}>{title}</h4>
                      <p style={{ fontSize: '13px', color: '#666' }}>Recommended by AI</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Librarian Dashboard */}
        {role === 'librarian' && (
          <div>
            {/* Library Facilities */}
            <div style={{
              backgroundColor: '#002B5B',
              color: 'white',
              padding: '30px',
              borderRadius: '20px',
              marginBottom: '40px',
              boxShadow: '0 10px 40px rgba(0,0,0,0.15)'
            }}>
              <h2 style={{ fontSize: '28px', fontWeight: '700', marginBottom: '30px', textAlign: 'center' }}>
                🏛️ Library Facilities
              </h2>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                gap: '20px'
              }}>
                <div style={{ textAlign: 'center', backgroundColor: 'rgba(255,255,255,0.1)', padding: '20px', borderRadius: '15px' }}>
                  <div style={{ fontSize: '35px', marginBottom: '10px' }}>📚</div>
                  <div style={{ fontSize: '28px', fontWeight: '700', marginBottom: '5px' }}>8,450</div>
                  <div style={{ fontSize: '14px', opacity: 0.9 }}>Total Books</div>
                </div>
                <div style={{ textAlign: 'center', backgroundColor: 'rgba(255,255,255,0.1)', padding: '20px', borderRadius: '15px' }}>
                  <div style={{ fontSize: '35px', marginBottom: '10px' }}>📄</div>
                  <div style={{ fontSize: '28px', fontWeight: '700', marginBottom: '5px' }}>26</div>
                  <div style={{ fontSize: '14px', opacity: 0.9 }}>Journals</div>
                </div>
                <div style={{ textAlign: 'center', backgroundColor: 'rgba(255,255,255,0.1)', padding: '20px', borderRadius: '15px' }}>
                  <div style={{ fontSize: '35px', marginBottom: '10px' }}>📰</div>
                  <div style={{ fontSize: '28px', fontWeight: '700', marginBottom: '5px' }}>10</div>
                  <div style={{ fontSize: '14px', opacity: 0.9 }}>Newspapers</div>
                </div>
                <div style={{ textAlign: 'center', backgroundColor: 'rgba(255,255,255,0.1)', padding: '20px', borderRadius: '15px' }}>
                  <div style={{ fontSize: '35px', marginBottom: '10px' }}>📖</div>
                  <div style={{ fontSize: '28px', fontWeight: '700', marginBottom: '5px' }}>08</div>
                  <div style={{ fontSize: '14px', opacity: 0.9 }}>Magazines</div>
                </div>
                <div style={{ textAlign: 'center', backgroundColor: 'rgba(255,255,255,0.1)', padding: '20px', borderRadius: '15px' }}>
                  <div style={{ fontSize: '35px', marginBottom: '10px' }}>💻</div>
                  <div style={{ fontSize: '28px', fontWeight: '700', marginBottom: '5px' }}>15</div>
                  <div style={{ fontSize: '14px', opacity: 0.9 }}>Digital Library</div>
                </div>
              </div>
            </div>

            {/* Books in History */}
            <h2 style={{ fontSize: '28px', fontWeight: '700', marginBottom: '30px', color: '#002B5B', textAlign: 'center' }}>
              📚 Books in History
            </h2>

            {/* Statistics Cards */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '20px',
              marginBottom: '40px'
            }}>
              <div style={{
                backgroundColor: 'white',
                padding: '25px',
                borderRadius: '15px',
                boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '40px', marginBottom: '10px' }}>📚</div>
                <div style={{ fontSize: '32px', fontWeight: '700', color: '#002B5B', marginBottom: '5px' }}>320</div>
                <div style={{ fontSize: '14px', color: '#666' }}>Borrowed</div>
              </div>
              <div style={{
                backgroundColor: 'white',
                padding: '25px',
                borderRadius: '15px',
                boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '40px', marginBottom: '10px' }}>⚠️</div>
                <div style={{ fontSize: '32px', fontWeight: '700', color: '#f44336', marginBottom: '5px' }}>08</div>
                <div style={{ fontSize: '14px', color: '#666' }}>Overdue</div>
              </div>
              <div style={{
                backgroundColor: 'white',
                padding: '25px',
                borderRadius: '15px',
                boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '40px', marginBottom: '10px' }}>👥</div>
                <div style={{ fontSize: '32px', fontWeight: '700', color: '#4CAF50', marginBottom: '5px' }}>110</div>
                <div style={{ fontSize: '14px', color: '#666', marginBottom: '3px' }}>Students</div>
                <div style={{ fontSize: '32px', fontWeight: '700', color: '#FFC107', marginTop: '10px' }}>25</div>
                <div style={{ fontSize: '14px', color: '#666' }}>Staff</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '20px',
              marginBottom: '40px'
            }}>
              <button style={{
                backgroundColor: '#002B5B',
                color: 'white',
                padding: '25px',
                borderRadius: '15px',
                border: 'none',
                fontSize: '16px',
                fontWeight: '600',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '10px',
                boxShadow: '0 5px 20px rgba(0,0,0,0.1)'
              }}>
                <div style={{ fontSize: '40px' }}>➕</div>
                <div>Add New Book</div>
              </button>
              <button style={{
                backgroundColor: '#4CAF50',
                color: 'white',
                padding: '25px',
                borderRadius: '15px',
                border: 'none',
                fontSize: '16px',
                fontWeight: '600',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '10px',
                boxShadow: '0 5px 20px rgba(0,0,0,0.1)'
              }}>
                <div style={{ fontSize: '40px' }}>👥</div>
                <div>Manage Borrowers</div>
              </button>
              <button style={{
                backgroundColor: '#FFC107',
                color: '#002B5B',
                padding: '25px',
                borderRadius: '15px',
                border: 'none',
                fontSize: '16px',
                fontWeight: '600',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '10px',
                boxShadow: '0 5px 20px rgba(0,0,0,0.1)'
              }}>
                <div style={{ fontSize: '40px' }}>📊</div>
                <div>View Reports</div>
              </button>
            </div>
          </div>
        )}

        {/* Admin Dashboard */}
        {role === 'admin' && (
          <div>
            {/* Global Overview */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '20px',
              marginBottom: '40px'
            }}>
              <div style={{
                backgroundColor: 'white',
                padding: '25px',
                borderRadius: '15px',
                boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '40px', marginBottom: '10px' }}>👥</div>
                <div style={{ fontSize: '32px', fontWeight: '700', color: '#002B5B', marginBottom: '5px' }}>850</div>
                <div style={{ fontSize: '14px', color: '#666' }}>Total Users</div>
              </div>
              <div style={{
                backgroundColor: 'white',
                padding: '25px',
                borderRadius: '15px',
                boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '40px', marginBottom: '10px' }}>🟢</div>
                <div style={{ fontSize: '32px', fontWeight: '700', color: '#4CAF50', marginBottom: '5px' }}>150</div>
                <div style={{ fontSize: '14px', color: '#666' }}>Active Sessions</div>
              </div>
              <div style={{
                backgroundColor: 'white',
                padding: '25px',
                borderRadius: '15px',
                boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '40px', marginBottom: '10px' }}>📊</div>
                <div style={{ fontSize: '32px', fontWeight: '700', color: '#FFC107', marginBottom: '5px' }}>89%</div>
                <div style={{ fontSize: '14px', color: '#666' }}>System Health</div>
              </div>
              <div style={{
                backgroundColor: 'white',
                padding: '25px',
                borderRadius: '15px',
                boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '40px', marginBottom: '10px' }}>📈</div>
                <div style={{ fontSize: '32px', fontWeight: '700', color: '#4CAF50', marginBottom: '5px' }}>2.1K</div>
                <div style={{ fontSize: '14px', color: '#666' }}>Monthly Views</div>
              </div>
            </div>

            {/* System Features */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '20px',
              marginBottom: '40px'
            }}>
              <div style={{
                backgroundColor: 'white',
                padding: '30px',
                borderRadius: '15px',
                boxShadow: '0 5px 20px rgba(0,0,0,0.1)'
              }}>
                <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '20px', color: '#002B5B' }}>
                  Broadcast Announcements
                </h3>
                <textarea
                  placeholder="Type announcement here..."
                  style={{
                    width: '100%',
                    padding: '15px',
                    border: '2px solid #f0f0f0',
                    borderRadius: '10px',
                    fontSize: '15px',
                    minHeight: '100px',
                    resize: 'vertical',
                    outline: 'none',
                    marginBottom: '15px'
                  }}
                />
                <button style={{
                  width: '100%',
                  backgroundColor: '#002B5B',
                  color: 'white',
                  padding: '12px',
                  border: 'none',
                  borderRadius: '25px',
                  fontSize: '15px',
                  fontWeight: '600',
                  cursor: 'pointer'
                }}>
                  Send Announcement
                </button>
              </div>

              <div style={{
                backgroundColor: 'white',
                padding: '30px',
                borderRadius: '15px',
                boxShadow: '0 5px 20px rgba(0,0,0,0.1)'
              }}>
                <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '20px', color: '#002B5B' }}>
                  System Logs
                </h3>
                <div style={{ maxHeight: '200px', overflowY: 'auto' }}>
                  {[
                    '2025-01-18 10:30 AM - Database backup completed',
                    '2025-01-18 09:15 AM - User login spike detected',
                    '2025-01-18 08:00 AM - System startup successful',
                    '2025-01-17 11:45 PM - Maintenance completed'
                  ].map((log, idx) => (
                    <div key={idx} style={{
                      padding: '10px',
                      fontSize: '13px',
                      color: '#666',
                      borderBottom: idx !== 3 ? '1px solid #f0f0f0' : 'none'
                    }}>
                      {log}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

