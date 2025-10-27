'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const recommendedBooks = [
    { id: 1, title: 'Financial Management', author: 'Dr. Ramesh Sharma', category: 'Finance', cover: '📕' },
    { id: 2, title: 'Marketing Strategies', author: 'Prof. Priya Singh', category: 'Marketing', cover: '📗' },
    { id: 3, title: 'Operations Research', author: 'Dr. Amit Kumar', category: 'Operations', cover: '📘' },
    { id: 4, title: 'Human Resource Management', author: 'Dr. Neha Verma', category: 'HR', cover: '📙' },
  ];

  // MBA Books by Subject
  const mbaBooks = {
    financialManagement: [
      { title: 'Financial Management: Principles and Practice', author: 'Dr. Ramesh Kumar', publisher: 'McGraw Hill', image: '📕' },
      { title: 'Corporate Finance: Theory and Practice', author: 'Prof. Priya Sharma', publisher: 'Pearson Education', image: '📗' },
      { title: 'Investment Banking Fundamentals', author: 'Dr. Amit Patel', publisher: 'Oxford University Press', image: '📘' },
      { title: 'Modern Financial Management', author: 'Dr. Neha Verma', publisher: 'Pearson Education', image: '📙' },
      { title: 'Financial Markets and Institutions', author: 'Prof. Rajesh Desai', publisher: 'McGraw Hill', image: '📔' }
    ],
    marketingStrategies: [
      { title: 'Digital Marketing Strategies', author: 'Dr. Vikram Mehta', publisher: 'Harvard Business Review', image: '📕' },
      { title: 'Consumer Behavior Analysis', author: 'Prof. Kavita Iyer', publisher: 'Pearson Education', image: '📗' },
      { title: 'Strategic Brand Management', author: 'Dr. Arjun Nair', publisher: 'Oxford University Press', image: '📘' },
      { title: 'Modern Marketing Management', author: 'Dr. Deepa Sharma', publisher: 'McGraw Hill', image: '📙' },
      { title: 'Social Media Marketing', author: 'Prof. Anjali Gupta', publisher: 'Pearson Education', image: '📔' }
    ],
    operationsResearch: [
      { title: 'Operations Research: Theory and Applications', author: 'Dr. Mohan Rao', publisher: 'McGraw Hill', image: '📕' },
      { title: 'Supply Chain Optimization', author: 'Prof. Suresh Patel', publisher: 'Oxford University Press', image: '📗' },
      { title: 'Quantitative Techniques', author: 'Dr. Rajesh Kumar', publisher: 'Pearson Education', image: '📘' },
      { title: 'Operations Management', author: 'Dr. Vikram Singh', publisher: 'McGraw Hill', image: '📙' },
      { title: 'Linear Programming', author: 'Prof. Nisha Sharma', publisher: 'Pearson Education', image: '📔' }
    ]
  };

  // MCA Books by Subject
  const mcaBooks = {
    dataStructures: [
      { title: 'Data Structures and Algorithms', author: 'Dr. Amit Kumar', publisher: 'McGraw Hill', image: '💻' },
      { title: 'Python Data Structures', author: 'Prof. Neha Sharma', publisher: 'Pearson Education', image: '🐍' },
      { title: 'Advanced Data Structures', author: 'Dr. Vikram Patel', publisher: 'Oxford University Press', image: '📊' },
      { title: 'Algorithm Design Manual', author: 'Dr. Rajesh Mehta', publisher: 'Pearson Education', image: '⚙️' },
      { title: 'Data Structures using C++', author: 'Prof. Anjali Kumar', publisher: 'McGraw Hill', image: '🔧' }
    ],
    webDevelopment: [
      { title: 'Web Technologies', author: 'Dr. Priya Singh', publisher: 'Pearson Education', image: '🌐' },
      { title: 'Modern Web Development', author: 'Prof. Arjun Mehta', publisher: 'Oxford University Press', image: '💻' },
      { title: 'JavaScript Mastery', author: 'Dr. Deepa Patel', publisher: 'McGraw Hill', image: '⚡' },
      { title: 'React.js Guide', author: 'Dr. Kavita Sharma', publisher: 'Pearson Education', image: '⚛️' },
      { title: 'Full Stack Development', author: 'Prof. Mohan Kumar', publisher: 'Oxford University Press', image: '🔄' }
    ],
    databaseSystems: [
      { title: 'Database Management Systems', author: 'Dr. Ramesh Kumar', publisher: 'McGraw Hill', image: '🗄️' },
      { title: 'Oracle Database Programming', author: 'Prof. Nisha Patel', publisher: 'Pearson Education', image: '💾' },
      { title: 'SQL Complete Reference', author: 'Dr. Anil Sharma', publisher: 'Oxford University Press', image: '📊' },
      { title: 'NoSQL Databases', author: 'Dr. Sunil Mehta', publisher: 'Pearson Education', image: '🗃️' },
      { title: 'Database Design', author: 'Prof. Rita Kumar', publisher: 'McGraw Hill', image: '📐' }
    ]
  };

  return (
    <div>
      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, #002B5B 0%, #4A90E2 100%)',
        padding: '80px 20px',
        textAlign: 'center',
        color: 'white'
      }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h1 style={{ fontSize: '48px', fontWeight: '700', marginBottom: '20px', lineHeight: '1.2' }}>
            Welcome to SIPM Digital Library Portal
          </h1>
          <p style={{ fontSize: '20px', marginBottom: '40px', opacity: 0.95 }}>
            Access books, journals, and AI-powered learning assistance anytime.
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/catalogue">
              <button style={{
                backgroundColor: '#FFC107',
                color: '#002B5B',
                padding: '15px 40px',
                fontSize: '16px',
                fontWeight: '600',
                border: 'none',
                borderRadius: '30px',
                cursor: 'pointer',
                transition: 'all 0.3s',
                boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
              }}>
                🔍 Explore Books
              </button>
            </Link>
            <Link href="/ai-assistant">
              <button style={{
                backgroundColor: 'transparent',
                color: 'white',
                padding: '15px 40px',
                fontSize: '16px',
                fontWeight: '600',
                border: '2px solid white',
                borderRadius: '30px',
                cursor: 'pointer',
                transition: 'all 0.3s'
              }}>
                🤖 Ask AI Assistant
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Search Bar Section */}
      <section style={{ 
        padding: '40px 20px', 
        backgroundColor: '#F8F9FA',
        marginTop: '-40px',
        zIndex: 10,
        position: 'relative'
      }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <div style={{
            backgroundColor: 'white',
            borderRadius: '50px',
            padding: '15px 20px',
            boxShadow: '0 10px 40px rgba(0,0,0,0.15)',
            display: 'flex',
            alignItems: 'center',
            gap: '15px'
          }}>
            <div style={{ fontSize: '30px', color: '#FFC107' }}>🔍</div>
            <input
              type="text"
              placeholder="Search books by title, author, or subject..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                flex: 1,
                border: 'none',
                outline: 'none',
                fontSize: '16px',
                color: '#333'
              }}
            />
            <Link href={`/catalogue${searchQuery ? `?search=${searchQuery}` : ''}`}>
              <button style={{
                backgroundColor: '#002B5B',
                color: 'white',
                padding: '12px 30px',
                border: 'none',
                borderRadius: '25px',
                fontWeight: '600',
                cursor: 'pointer',
                fontSize: '15px',
                transition: 'all 0.3s'
              }}>
                Search
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* MBA & MCA Categories Section */}
      <section style={{ padding: '60px 20px', backgroundColor: '#fff' }}>
        <div className="container">
          <h2 style={{ fontSize: '32px', fontWeight: '600', marginBottom: '10px', textAlign: 'center', color: '#002B5B' }}>
            📚 Browse by Program
          </h2>
          <p style={{ fontSize: '16px', textAlign: 'center', color: '#666', marginBottom: '40px' }}>
            Access books tailored for your course
          </p>

          {/* MBA Section */}
          <div style={{ marginBottom: '50px' }}>
            <div style={{
              backgroundColor: 'linear-gradient(135deg, #002B5B 0%, #001d3d 100%)',
              background: 'linear-gradient(135deg, #002B5B 0%, #001d3d 100%)',
              padding: '30px',
              borderRadius: '15px',
              marginBottom: '30px'
            }}>
              <h3 style={{ fontSize: '28px', fontWeight: '700', color: 'white', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '15px' }}>
                🎓 MBA (Master of Business Administration)
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '16px', marginBottom: '25px' }}>
                Comprehensive collection of business management books, case studies, and resources
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '15px' }}>
                {['Financial Management', 'Marketing Strategies', 'Operations Research', 'Human Resource Management', 'Strategic Planning', 'Business Ethics'].map((subject, idx) => (
                  <div key={idx} style={{
                    backgroundColor: 'rgba(255,255,255,0.15)',
                    padding: '15px',
                    borderRadius: '10px',
                    textAlign: 'center',
                    color: 'white',
                    fontWeight: '500',
                    fontSize: '14px',
                    border: '1px solid rgba(255,255,255,0.2)'
                  }}>
                    {subject}
                  </div>
                ))}
              </div>
            </div>

            {/* Financial Management Books */}
            <div style={{ marginBottom: '30px' }}>
              <h4 style={{ fontSize: '22px', fontWeight: '600', color: '#002B5B', marginBottom: '20px' }}>💼 Financial Management (5 Books)</h4>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px' }}>
                {mbaBooks.financialManagement.map((book, idx) => (
                  <div key={idx} style={{
                    backgroundColor: 'white',
                    padding: '20px',
                    borderRadius: '12px',
                    boxShadow: '0 3px 15px rgba(0,0,0,0.1)',
                    borderLeft: '4px solid #002B5B'
                  }}>
                    <div style={{ fontSize: '24px', marginBottom: '10px' }}>{book.image}</div>
                    <h5 style={{ fontSize: '16px', fontWeight: '600', color: '#002B5B', marginBottom: '8px' }}>{book.title}</h5>
                    <p style={{ fontSize: '14px', color: '#666', marginBottom: '5px' }}>👤 {book.author}</p>
                    <p style={{ fontSize: '13px', color: '#999' }}>🏢 {book.publisher}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Marketing Strategies Books */}
            <div style={{ marginBottom: '30px' }}>
              <h4 style={{ fontSize: '22px', fontWeight: '600', color: '#002B5B', marginBottom: '20px' }}>📢 Marketing Strategies (5 Books)</h4>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px' }}>
                {mbaBooks.marketingStrategies.map((book, idx) => (
                  <div key={idx} style={{
                    backgroundColor: 'white',
                    padding: '20px',
                    borderRadius: '12px',
                    boxShadow: '0 3px 15px rgba(0,0,0,0.1)',
                    borderLeft: '4px solid #002B5B'
                  }}>
                    <div style={{ fontSize: '24px', marginBottom: '10px' }}>{book.image}</div>
                    <h5 style={{ fontSize: '16px', fontWeight: '600', color: '#002B5B', marginBottom: '8px' }}>{book.title}</h5>
                    <p style={{ fontSize: '14px', color: '#666', marginBottom: '5px' }}>👤 {book.author}</p>
                    <p style={{ fontSize: '13px', color: '#999' }}>🏢 {book.publisher}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Operations Research Books */}
            <div>
              <h4 style={{ fontSize: '22px', fontWeight: '600', color: '#002B5B', marginBottom: '20px' }}>📊 Operations Research (5 Books)</h4>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px' }}>
                {mbaBooks.operationsResearch.map((book, idx) => (
                  <div key={idx} style={{
                    backgroundColor: 'white',
                    padding: '20px',
                    borderRadius: '12px',
                    boxShadow: '0 3px 15px rgba(0,0,0,0.1)',
                    borderLeft: '4px solid #002B5B'
                  }}>
                    <div style={{ fontSize: '24px', marginBottom: '10px' }}>{book.image}</div>
                    <h5 style={{ fontSize: '16px', fontWeight: '600', color: '#002B5B', marginBottom: '8px' }}>{book.title}</h5>
                    <p style={{ fontSize: '14px', color: '#666', marginBottom: '5px' }}>👤 {book.author}</p>
                    <p style={{ fontSize: '13px', color: '#999' }}>🏢 {book.publisher}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* MCA Section */}
          <div>
            <div style={{
              background: 'linear-gradient(135deg, #FFC107 0%, #FF8F00 100%)',
              padding: '30px',
              borderRadius: '15px',
              marginBottom: '30px'
            }}>
              <h3 style={{ fontSize: '28px', fontWeight: '700', color: '#002B5B', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '15px' }}>
                💻 MCA (Master of Computer Applications)
              </h3>
              <p style={{ color: '#002B5B', fontSize: '16px', marginBottom: '25px', fontWeight: '500' }}>
                Latest computer science books, programming resources, and technology references
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '15px' }}>
                {['Data Structures', 'Web Development', 'Database Systems', 'Software Engineering', 'Machine Learning', 'Cloud Computing'].map((subject, idx) => (
                  <div key={idx} style={{
                    backgroundColor: 'rgba(0,0,0,0.1)',
                    padding: '15px',
                    borderRadius: '10px',
                    textAlign: 'center',
                    color: '#002B5B',
                    fontWeight: '600',
                    fontSize: '14px',
                    border: '2px solid rgba(0,0,0,0.1)'
                  }}>
                    {subject}
                  </div>
                ))}
              </div>
            </div>

            {/* Data Structures Books */}
            <div style={{ marginBottom: '30px' }}>
              <h4 style={{ fontSize: '22px', fontWeight: '600', color: '#002B5B', marginBottom: '20px' }}>💻 Data Structures (5 Books)</h4>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px' }}>
                {mcaBooks.dataStructures.map((book, idx) => (
                  <div key={idx} style={{
                    backgroundColor: 'white',
                    padding: '20px',
                    borderRadius: '12px',
                    boxShadow: '0 3px 15px rgba(0,0,0,0.1)',
                    borderLeft: '4px solid #FFC107'
                  }}>
                    <div style={{ fontSize: '24px', marginBottom: '10px' }}>{book.image}</div>
                    <h5 style={{ fontSize: '16px', fontWeight: '600', color: '#002B5B', marginBottom: '8px' }}>{book.title}</h5>
                    <p style={{ fontSize: '14px', color: '#666', marginBottom: '5px' }}>👤 {book.author}</p>
                    <p style={{ fontSize: '13px', color: '#999' }}>🏢 {book.publisher}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Web Development Books */}
            <div style={{ marginBottom: '30px' }}>
              <h4 style={{ fontSize: '22px', fontWeight: '600', color: '#002B5B', marginBottom: '20px' }}>🌐 Web Development (5 Books)</h4>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px' }}>
                {mcaBooks.webDevelopment.map((book, idx) => (
                  <div key={idx} style={{
                    backgroundColor: 'white',
                    padding: '20px',
                    borderRadius: '12px',
                    boxShadow: '0 3px 15px rgba(0,0,0,0.1)',
                    borderLeft: '4px solid #FFC107'
                  }}>
                    <div style={{ fontSize: '24px', marginBottom: '10px' }}>{book.image}</div>
                    <h5 style={{ fontSize: '16px', fontWeight: '600', color: '#002B5B', marginBottom: '8px' }}>{book.title}</h5>
                    <p style={{ fontSize: '14px', color: '#666', marginBottom: '5px' }}>👤 {book.author}</p>
                    <p style={{ fontSize: '13px', color: '#999' }}>🏢 {book.publisher}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Database Systems Books */}
            <div>
              <h4 style={{ fontSize: '22px', fontWeight: '600', color: '#002B5B', marginBottom: '20px' }}>🗄️ Database Systems (5 Books)</h4>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px' }}>
                {mcaBooks.databaseSystems.map((book, idx) => (
                  <div key={idx} style={{
                    backgroundColor: 'white',
                    padding: '20px',
                    borderRadius: '12px',
                    boxShadow: '0 3px 15px rgba(0,0,0,0.1)',
                    borderLeft: '4px solid #FFC107'
                  }}>
                    <div style={{ fontSize: '24px', marginBottom: '10px' }}>{book.image}</div>
                    <h5 style={{ fontSize: '16px', fontWeight: '600', color: '#002B5B', marginBottom: '8px' }}>{book.title}</h5>
                    <p style={{ fontSize: '14px', color: '#666', marginBottom: '5px' }}>👤 {book.author}</p>
                    <p style={{ fontSize: '13px', color: '#999' }}>🏢 {book.publisher}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Recommendations Section */}
      <section style={{ padding: '60px 20px', backgroundColor: '#F8F9FA' }}>
        <div className="container">
          <h2 style={{ fontSize: '32px', fontWeight: '600', marginBottom: '40px', textAlign: 'center', color: '#002B5B' }}>
            Recommended Books for You
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
            {recommendedBooks.map(book => (
              <div key={book.id} style={{
                backgroundColor: 'white',
                borderRadius: '15px',
                padding: '25px',
                boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s, boxShadow 0.3s',
                cursor: 'pointer',
                border: '1px solid #f0f0f0'
              }} onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.15)';
              }} onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
              }}>
                <div style={{ fontSize: '60px', textAlign: 'center', marginBottom: '15px' }}>{book.cover}</div>
                <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '10px', color: '#002B5B' }}>{book.title}</h3>
                <p style={{ fontSize: '14px', color: '#666', marginBottom: '8px' }}>by {book.author}</p>
                <p style={{ fontSize: '12px', color: '#FFC107', fontWeight: '500', marginBottom: '20px' }}>{book.category}</p>
                <button style={{
                  width: '100%',
                  backgroundColor: '#002B5B',
                  color: 'white',
                  padding: '12px',
                  border: 'none',
                  borderRadius: '25px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  fontSize: '14px',
                  transition: 'background 0.3s'
                }}>Borrow Now</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Announcements Section */}
      <section style={{ padding: '60px 20px', backgroundColor: '#F8F9FA' }}>
        <div className="container">
          <h2 style={{ fontSize: '32px', fontWeight: '600', marginBottom: '30px', textAlign: 'center', color: '#002B5B' }}>
            📢 Library Announcements
          </h2>
          <div style={{
            display: 'flex',
            gap: '30px',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}>
            <div style={{
              backgroundColor: '#FFC107',
              color: '#002B5B',
              padding: '20px 30px',
              borderRadius: '15px',
              flex: '1',
              minWidth: '250px',
              maxWidth: '350px',
              textAlign: 'center',
              fontWeight: '600'
            }}>
              <div style={{ fontSize: '30px', marginBottom: '10px' }}>🕒</div>
              <div>Library Timings</div>
              <div style={{ fontSize: '14px', marginTop: '5px' }}>Mon-Sat: 9 AM - 6 PM</div>
            </div>
            <div style={{
              backgroundColor: '#002B5B',
              color: 'white',
              padding: '20px 30px',
              borderRadius: '15px',
              flex: '1',
              minWidth: '250px',
              maxWidth: '350px',
              textAlign: 'center',
              fontWeight: '600'
            }}>
              <div style={{ fontSize: '30px', marginBottom: '10px' }}>📚</div>
              <div>New Books Added</div>
              <div style={{ fontSize: '14px', marginTop: '5px' }}>50+ new titles this month!</div>
            </div>
            <div style={{
              backgroundColor: '#4A90E2',
              color: 'white',
              padding: '20px 30px',
              borderRadius: '15px',
              flex: '1',
              minWidth: '250px',
              maxWidth: '350px',
              textAlign: 'center',
              fontWeight: '600'
            }}>
              <div style={{ fontSize: '30px', marginBottom: '10px' }}>⚡</div>
              <div>Exam Week Specials</div>
              <div style={{ fontSize: '14px', marginTop: '5px' }}>Extended hours during exams</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section style={{ padding: '80px 20px', backgroundColor: '#fff' }}>
        <div className="container">
          <h2 style={{ fontSize: '32px', fontWeight: '600', marginBottom: '50px', textAlign: 'center', color: '#002B5B' }}>
            Why Choose SIPM Library?
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '60px', marginBottom: '20px' }}>🤖</div>
              <h3 style={{ fontSize: '22px', fontWeight: '600', marginBottom: '15px', color: '#002B5B' }}>AI-Powered Search</h3>
              <p style={{ fontSize: '15px', color: '#666', lineHeight: '1.6' }}>Find books instantly with intelligent search powered by AI technology.</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '60px', marginBottom: '20px' }}>📖</div>
              <h3 style={{ fontSize: '22px', fontWeight: '600', marginBottom: '15px', color: '#002B5B' }}>Extensive Collection</h3>
              <p style={{ fontSize: '15px', color: '#666', lineHeight: '1.6' }}>Access thousands of books, journals, and research papers.</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '60px', marginBottom: '20px' }}>⚡</div>
              <h3 style={{ fontSize: '22px', fontWeight: '600', marginBottom: '15px', color: '#002B5B' }}>Quick Access</h3>
              <p style={{ fontSize: '15px', color: '#666', lineHeight: '1.6' }}>Borrow and return books with just a few clicks.</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '60px', marginBottom: '20px' }}>🎯</div>
              <h3 style={{ fontSize: '22px', fontWeight: '600', marginBottom: '15px', color: '#002B5B' }}>Smart Recommendations</h3>
              <p style={{ fontSize: '15px', color: '#666', lineHeight: '1.6' }}>Get personalized book suggestions based on your interests.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
