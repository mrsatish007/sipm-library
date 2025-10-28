'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

export default function BorrowReturn() {
  const [view, setView] = useState<'student' | 'librarian'>('student');
  const searchParams = useSearchParams();
  const [newBook, setNewBook] = useState({ title: '', author: '', category: '', year: '' });
  const [bulkAddedCount, setBulkAddedCount] = useState<number | null>(null);
  const [reportFilters, setReportFilters] = useState({ from: '', to: '', category: 'All' });

  const studentBooks = [
    { id: 1, title: 'Financial Management Principles', issueDate: '2025-01-15', dueDate: '2025-02-15', status: 'active', fine: 0 },
    { id: 2, title: 'Marketing Strategies', issueDate: '2025-01-10', dueDate: '2025-02-10', status: 'overdue', fine: 50 },
    { id: 3, title: 'Operations Research', issueDate: '2024-12-20', dueDate: '2025-01-20', status: 'returned', fine: 0 },
  ];

  const pendingRequests = [
    { id: 1, studentName: 'Rajesh Kumar', bookTitle: 'Strategic Business Planning', requestDate: '2025-01-18' },
    { id: 2, studentName: 'Priya Sharma', bookTitle: 'Human Resource Management', requestDate: '2025-01-17' },
    { id: 3, studentName: 'Amit Singh', bookTitle: 'Economics for Managers', requestDate: '2025-01-16' },
  ];

  const overdueBooks = [
    { id: 1, studentName: 'Kavya Patel', bookTitle: 'Supply Chain Optimization', issueDate: '2024-12-15', dueDate: '2025-01-15', daysOverdue: 3, fine: 150 },
    { id: 2, studentName: 'Vikram Mehta', bookTitle: 'Leadership in Organizations', issueDate: '2024-12-10', dueDate: '2025-01-10', daysOverdue: 8, fine: 400 },
  ];

  // Initialize view from query string (e.g., /borrow?view=librarian)
  useEffect(() => {
    const v = (searchParams.get('view') || '').toLowerCase();
    if (v === 'librarian') {
      setView('librarian');
    } else if (v === 'student') {
      setView('student');
    }
  }, [searchParams]);

  const activeBorrows = [
    { id: 1, studentName: 'Ankit Verma', bookTitle: 'Financial Management Principles', issueDate: '2025-01-20', dueDate: '2025-02-20' },
    { id: 2, studentName: 'Sneha Iyer', bookTitle: 'Digital Marketing Strategies', issueDate: '2025-01-22', dueDate: '2025-02-22' },
    { id: 3, studentName: 'Rohit Sharma', bookTitle: 'Database Management Systems', issueDate: '2025-01-25', dueDate: '2025-02-25' },
  ];

  return (
    <div style={{ minHeight: '80vh', padding: '40px 20px' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
          <h1 style={{ fontSize: '36px', fontWeight: '700', color: '#002B5B' }}>
            📅 Borrow/Return
          </h1>
          <div style={{ display: 'flex', gap: '15px' }}>
            <button
              onClick={() => setView('student')}
              style={{
                padding: '12px 30px',
                fontSize: '15px',
                fontWeight: '600',
                border: 'none',
                borderRadius: '25px',
                cursor: 'pointer',
                backgroundColor: view === 'student' ? '#002B5B' : '#F0F0F0',
                color: view === 'student' ? 'white' : '#333',
                transition: 'all 0.3s'
              }}
            >
              Student View
            </button>
            <button
              onClick={() => setView('librarian')}
              style={{
                padding: '12px 30px',
                fontSize: '15px',
                fontWeight: '600',
                border: 'none',
                borderRadius: '25px',
                cursor: 'pointer',
                backgroundColor: view === 'librarian' ? '#002B5B' : '#F0F0F0',
                color: view === 'librarian' ? 'white' : '#333',
                transition: 'all 0.3s'
              }}
            >
              Librarian View
            </button>
          </div>
        </div>

        {/* Student View */}
        {view === 'student' && (
          <div>
            {/* AI Reminder Panel */}
            <div style={{
              backgroundColor: '#FFC107',
              color: '#002B5B',
              padding: '25px',
              borderRadius: '15px',
              marginBottom: '30px',
              display: 'flex',
              alignItems: 'center',
              gap: '20px'
            }}>
              <div style={{ fontSize: '50px' }}>🤖</div>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '8px' }}>AI Reminder</h3>
                <p style={{ fontSize: '15px' }}>You have 3 days left to return "Marketing Strategies". Total fine: ₹50</p>
              </div>
            </div>

            {/* Current Borrowed Books */}
            <div style={{ marginBottom: '40px' }}>
              <h2 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '20px', color: '#002B5B' }}>
                Currently Borrowed Books
              </h2>
              <div style={{
                backgroundColor: 'white',
                borderRadius: '15px',
                overflow: 'hidden',
                boxShadow: '0 5px 20px rgba(0,0,0,0.1)'
              }}>
                <div style={{ overflowX: 'auto' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead style={{ backgroundColor: '#002B5B', color: 'white' }}>
                      <tr>
                        <th style={{ padding: '15px', textAlign: 'left', fontWeight: '600' }}>Book Title</th>
                        <th style={{ padding: '15px', textAlign: 'left', fontWeight: '600' }}>Issue Date</th>
                        <th style={{ padding: '15px', textAlign: 'left', fontWeight: '600' }}>Due Date</th>
                        <th style={{ padding: '15px', textAlign: 'left', fontWeight: '600' }}>Status</th>
                        <th style={{ padding: '15px', textAlign: 'left', fontWeight: '600' }}>Fine</th>
                        <th style={{ padding: '15px', textAlign: 'center', fontWeight: '600' }}>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {studentBooks.filter(book => book.status !== 'returned').map(book => (
                        <tr key={book.id} style={{ borderBottom: '1px solid #f0f0f0' }}>
                          <td style={{ padding: '15px' }}>{book.title}</td>
                          <td style={{ padding: '15px' }}>{book.issueDate}</td>
                          <td style={{ padding: '15px' }}>{book.dueDate}</td>
                          <td style={{ padding: '15px' }}>
                            <span style={{
                              padding: '6px 15px',
                              borderRadius: '20px',
                              fontSize: '13px',
                              fontWeight: '600',
                              backgroundColor: book.status === 'overdue' ? '#f44336' : '#4CAF50',
                              color: 'white'
                            }}>
                              {book.status === 'overdue' ? '⚠️ Overdue' : '✅ Active'}
                            </span>
                          </td>
                          <td style={{ padding: '15px', color: book.fine > 0 ? '#f44336' : '#4CAF50' }}>
                            ₹{book.fine}
                          </td>
                          <td style={{ padding: '15px', textAlign: 'center' }}>
                            <button style={{
                              padding: '8px 20px',
                              backgroundColor: '#002B5B',
                              color: 'white',
                              border: 'none',
                              borderRadius: '20px',
                              fontSize: '14px',
                              fontWeight: '600',
                              cursor: 'pointer'
                            }}>
                              Return
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Borrow History */}
            <div>
              <h2 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '20px', color: '#002B5B' }}>
                Recent History
              </h2>
              <div style={{
                backgroundColor: 'white',
                borderRadius: '15px',
                padding: '20px',
                boxShadow: '0 5px 20px rgba(0,0,0,0.1)'
              }}>
                {studentBooks.filter(book => book.status === 'returned').map(book => (
                  <div key={book.id} style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '15px',
                    marginBottom: '10px',
                    backgroundColor: '#F8F9FA',
                    borderRadius: '10px'
                  }}>
                    <div>
                      <div style={{ fontWeight: '600', marginBottom: '5px' }}>{book.title}</div>
                      <div style={{ fontSize: '14px', color: '#666' }}>Returned on {book.dueDate}</div>
                    </div>
                    <span style={{
                      padding: '5px 15px',
                      backgroundColor: '#4CAF50',
                      color: 'white',
                      borderRadius: '20px',
                      fontSize: '13px',
                      fontWeight: '600'
                    }}>
                      Returned
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Librarian View */}
        {view === 'librarian' && (
          <div>
            {/* Facilities Section */}
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

            {/* Add New Book */}
            <div style={{
              backgroundColor: 'white',
              borderRadius: '15px',
              padding: '25px',
              boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
              marginBottom: '30px'
            }}>
              <h2 style={{ fontSize: '22px', fontWeight: '700', color: '#002B5B', marginBottom: '15px' }}>➕ Add New Book</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '15px', marginBottom: '15px' }}>
                <input placeholder="Title" value={newBook.title} onChange={(e) => setNewBook({ ...newBook, title: e.target.value })} style={{ padding: '12px 15px', border: '2px solid #f0f0f0', borderRadius: '10px' }} />
                <input placeholder="Author" value={newBook.author} onChange={(e) => setNewBook({ ...newBook, author: e.target.value })} style={{ padding: '12px 15px', border: '2px solid #f0f0f0', borderRadius: '10px' }} />
                <input placeholder="Category" value={newBook.category} onChange={(e) => setNewBook({ ...newBook, category: e.target.value })} style={{ padding: '12px 15px', border: '2px solid #f0f0f0', borderRadius: '10px' }} />
                <input placeholder="Year" value={newBook.year} onChange={(e) => setNewBook({ ...newBook, year: e.target.value })} style={{ padding: '12px 15px', border: '2px solid #f0f0f0', borderRadius: '10px' }} />
              </div>
              <div style={{ display: 'flex', gap: '10px' }}>
                <button onClick={() => alert(`Book added: ${newBook.title || 'Untitled'}`)} style={{ padding: '10px 20px', backgroundColor: '#002B5B', color: 'white', border: 'none', borderRadius: '25px', fontWeight: '600', cursor: 'pointer' }}>Add Book</button>
                <button onClick={() => setNewBook({ title: '', author: '', category: '', year: '' })} style={{ padding: '10px 20px', backgroundColor: '#F0F0F0', color: '#333', border: 'none', borderRadius: '25px', fontWeight: '600', cursor: 'pointer' }}>Reset</button>
              </div>
            </div>

            {/* Bulk Add Books */}
            <div style={{
              backgroundColor: 'white',
              borderRadius: '15px',
              padding: '25px',
              boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
              marginBottom: '30px'
            }}>
              <h2 style={{ fontSize: '22px', fontWeight: '700', color: '#002B5B', marginBottom: '15px' }}>📥 Bulk Add Books</h2>
              <p style={{ fontSize: '14px', color: '#666', marginBottom: '10px' }}>Upload CSV with columns: title, author, category, year</p>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap' }}>
                <input type="file" accept=".csv" onChange={(e) => setBulkAddedCount(Math.floor(Math.random() * 20) + 1)} style={{ padding: '10px', border: '2px solid #f0f0f0', borderRadius: '10px' }} />
                <button onClick={() => setBulkAddedCount(Math.floor(Math.random() * 20) + 5)} style={{ padding: '10px 20px', backgroundColor: '#002B5B', color: 'white', border: 'none', borderRadius: '25px', fontWeight: '600', cursor: 'pointer' }}>Process Upload</button>
                {bulkAddedCount !== null && (
                  <span style={{ color: '#4CAF50', fontWeight: '600' }}>Imported {bulkAddedCount} books</span>
                )}
              </div>
            </div>

            {/* Manage Borrow */}
            <div style={{
              backgroundColor: 'white',
              borderRadius: '15px',
              padding: '25px',
              boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
              marginBottom: '30px'
            }}>
              <h2 style={{ fontSize: '22px', fontWeight: '700', color: '#002B5B', marginBottom: '15px' }}>🧾 Manage Borrow</h2>
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <thead style={{ backgroundColor: '#002B5B', color: 'white' }}>
                    <tr>
                      <th style={{ padding: '12px', textAlign: 'left' }}>Student</th>
                      <th style={{ padding: '12px', textAlign: 'left' }}>Book</th>
                      <th style={{ padding: '12px', textAlign: 'left' }}>Issue Date</th>
                      <th style={{ padding: '12px', textAlign: 'left' }}>Due Date</th>
                      <th style={{ padding: '12px', textAlign: 'center' }}>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {activeBorrows.map(b => (
                      <tr key={b.id} style={{ borderBottom: '1px solid #f0f0f0' }}>
                        <td style={{ padding: '12px', fontWeight: '600' }}>{b.studentName}</td>
                        <td style={{ padding: '12px' }}>{b.bookTitle}</td>
                        <td style={{ padding: '12px' }}>{b.issueDate}</td>
                        <td style={{ padding: '12px' }}>{b.dueDate}</td>
                        <td style={{ padding: '12px', textAlign: 'center' }}>
                          <div style={{ display: 'inline-flex', gap: '8px', flexWrap: 'wrap' }}>
                            <button style={{ padding: '8px 14px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '18px', fontSize: '13px', fontWeight: '600', cursor: 'pointer' }}>Return</button>
                            <button style={{ padding: '8px 14px', backgroundColor: '#FFC107', color: '#002B5B', border: 'none', borderRadius: '18px', fontSize: '13px', fontWeight: '600', cursor: 'pointer' }}>Extend</button>
                            <button style={{ padding: '8px 14px', backgroundColor: '#f44336', color: 'white', border: 'none', borderRadius: '18px', fontSize: '13px', fontWeight: '600', cursor: 'pointer' }}>Cancel</button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* View Reports */}
            <div style={{
              backgroundColor: 'white',
              borderRadius: '15px',
              padding: '25px',
              boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
              marginBottom: '30px'
            }}>
              <h2 style={{ fontSize: '22px', fontWeight: '700', color: '#002B5B', marginBottom: '15px' }}>📈 View Reports</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '10px', marginBottom: '15px' }}>
                <input type="date" value={reportFilters.from} onChange={(e) => setReportFilters({ ...reportFilters, from: e.target.value })} style={{ padding: '10px 12px', border: '2px solid #f0f0f0', borderRadius: '10px' }} />
                <input type="date" value={reportFilters.to} onChange={(e) => setReportFilters({ ...reportFilters, to: e.target.value })} style={{ padding: '10px 12px', border: '2px solid #f0f0f0', borderRadius: '10px' }} />
                <select value={reportFilters.category} onChange={(e) => setReportFilters({ ...reportFilters, category: e.target.value })} style={{ padding: '10px 12px', border: '2px solid #f0f0f0', borderRadius: '10px' }}>
                  <option>All</option>
                  <option>Finance</option>
                  <option>Marketing</option>
                  <option>Operations</option>
                  <option>MCA</option>
                </select>
                <button style={{ padding: '10px 20px', backgroundColor: '#002B5B', color: 'white', border: 'none', borderRadius: '25px', fontWeight: '600', cursor: 'pointer' }}>Generate</button>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '15px' }}>
                <div style={{ backgroundColor: '#F8F9FA', borderRadius: '12px', padding: '20px' }}>
                  <div style={{ fontSize: '14px', color: '#666' }}>Total Borrows</div>
                  <div style={{ fontSize: '28px', fontWeight: '700', color: '#002B5B' }}>320</div>
                </div>
                <div style={{ backgroundColor: '#F8F9FA', borderRadius: '12px', padding: '20px' }}>
                  <div style={{ fontSize: '14px', color: '#666' }}>Returns</div>
                  <div style={{ fontSize: '28px', fontWeight: '700', color: '#4CAF50' }}>295</div>
                </div>
                <div style={{ backgroundColor: '#F8F9FA', borderRadius: '12px', padding: '20px' }}>
                  <div style={{ fontSize: '14px', color: '#666' }}>Overdue</div>
                  <div style={{ fontSize: '28px', fontWeight: '700', color: '#f44336' }}>25</div>
                </div>
                <div style={{ backgroundColor: '#F8F9FA', borderRadius: '12px', padding: '20px' }}>
                  <div style={{ fontSize: '14px', color: '#666' }}>Fines Collected</div>
                  <div style={{ fontSize: '28px', fontWeight: '700', color: '#FFC107' }}>₹4,250</div>
                </div>
              </div>
            </div>

            {/* Books in History Section */}
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

            {/* Pending Requests */}
            <div style={{ marginBottom: '40px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <h2 style={{ fontSize: '24px', fontWeight: '600', color: '#002B5B' }}>
                  Pending Borrow Requests
                </h2>
                <button style={{
                  padding: '10px 25px',
                  backgroundColor: '#002B5B',
                  color: 'white',
                  border: 'none',
                  borderRadius: '25px',
                  fontSize: '14px',
                  fontWeight: '600',
                  cursor: 'pointer'
                }}>
                  Add New Book
                </button>
              </div>
              <div style={{
                backgroundColor: 'white',
                borderRadius: '15px',
                padding: '25px',
                boxShadow: '0 5px 20px rgba(0,0,0,0.1)'
              }}>
                {pendingRequests.map(request => (
                  <div key={request.id} style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '20px',
                    marginBottom: '15px',
                    backgroundColor: '#F8F9FA',
                    borderRadius: '10px',
                    flexWrap: 'wrap',
                    gap: '15px'
                  }}>
                    <div>
                      <div style={{ fontWeight: '600', marginBottom: '5px', fontSize: '16px' }}>
                        {request.studentName}
                      </div>
                      <div style={{ fontSize: '14px', color: '#666' }}>
                        {request.bookTitle} • Requested on {request.requestDate}
                      </div>
                    </div>
                    <div style={{ display: 'flex', gap: '10px' }}>
                      <button style={{
                        padding: '10px 20px',
                        backgroundColor: '#4CAF50',
                        color: 'white',
                        border: 'none',
                        borderRadius: '20px',
                        fontSize: '14px',
                        fontWeight: '600',
                        cursor: 'pointer'
                      }}>
                        Approve
                      </button>
                      <button style={{
                        padding: '10px 20px',
                        backgroundColor: '#f44336',
                        color: 'white',
                        border: 'none',
                        borderRadius: '20px',
                        fontSize: '14px',
                        fontWeight: '600',
                        cursor: 'pointer'
                      }}>
                        Decline
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Overdue Books */}
            <div>
              <h2 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '20px', color: '#002B5B' }}>
                ⚠️ Overdue Books
              </h2>
              <div style={{
                backgroundColor: 'white',
                borderRadius: '15px',
                overflow: 'hidden',
                boxShadow: '0 5px 20px rgba(0,0,0,0.1)'
              }}>
                <div style={{ overflowX: 'auto' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead style={{ backgroundColor: '#f44336', color: 'white' }}>
                      <tr>
                        <th style={{ padding: '15px', textAlign: 'left', fontWeight: '600' }}>Student</th>
                        <th style={{ padding: '15px', textAlign: 'left', fontWeight: '600' }}>Book Title</th>
                        <th style={{ padding: '15px', textAlign: 'left', fontWeight: '600' }}>Due Date</th>
                        <th style={{ padding: '15px', textAlign: 'left', fontWeight: '600' }}>Days Overdue</th>
                        <th style={{ padding: '15px', textAlign: 'left', fontWeight: '600' }}>Fine</th>
                      </tr>
                    </thead>
                    <tbody>
                      {overdueBooks.map(book => (
                        <tr key={book.id} style={{ borderBottom: '1px solid #f0f0f0' }}>
                          <td style={{ padding: '15px', fontWeight: '600' }}>{book.studentName}</td>
                          <td style={{ padding: '15px' }}>{book.bookTitle}</td>
                          <td style={{ padding: '15px' }}>{book.dueDate}</td>
                          <td style={{ padding: '15px', color: '#f44336', fontWeight: '600' }}>
                            {book.daysOverdue} days
                          </td>
                          <td style={{ padding: '15px', color: '#f44336', fontWeight: '600' }}>
                            ₹{book.fine}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

