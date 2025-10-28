'use client';

import { useState } from 'react';

export default function BooksCatalogue() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedYear, setSelectedYear] = useState('All');

  const books = [
    { id: 1, title: 'Financial Management Principles', author: 'Dr. Ramesh Sharma', category: 'Finance', year: '2023', available: true, cover: '📕' },
    { id: 2, title: 'Digital Marketing Strategies', author: 'Prof. Priya Singh', category: 'Marketing', year: '2024', available: true, cover: '📗' },
    { id: 3, title: 'Advanced Operations Research', author: 'Dr. Amit Kumar', category: 'Operations', year: '2022', available: false, cover: '📘' },
    { id: 4, title: 'Human Resource Management', author: 'Dr. Neha Verma', category: 'HR', year: '2023', available: true, cover: '📙' },
    { id: 5, title: 'Strategic Business Planning', author: 'Prof. Rajesh Patel', category: 'Strategy', year: '2024', available: true, cover: '📕' },
    { id: 6, title: 'Economics for Managers', author: 'Dr. Suresh Desai', category: 'Economics', year: '2023', available: false, cover: '📗' },
    { id: 7, title: 'Project Management Essentials', author: 'Prof. Anjali Gupta', category: 'Management', year: '2024', available: true, cover: '📘' },
    { id: 8, title: 'Consumer Behavior Analysis', author: 'Dr. Vikram Mehta', category: 'Marketing', year: '2022', available: true, cover: '📙' },
    { id: 9, title: 'Supply Chain Optimization', author: 'Dr. Mohan Rao', category: 'Operations', year: '2023', available: true, cover: '📕' },
    { id: 10, title: 'Leadership in Organizations', author: 'Prof. Deepa Sharma', category: 'Leadership', year: '2024', available: true, cover: '📗' },
    { id: 11, title: 'Investment Banking Fundamentals', author: 'Dr. Arjun Nair', category: 'Finance', year: '2022', available: false, cover: '📘' },
    { id: 12, title: 'Innovation and Entrepreneurship', author: 'Prof. Kavita Iyer', category: 'Entrepreneurship', year: '2024', available: true, cover: '📙' },

    // MCA Books
    { id: 101, title: 'Data Structures and Algorithms', author: 'Dr. Amit Kumar', category: 'MCA - Data Structures', year: '2024', available: true, cover: '💻' },
    { id: 102, title: 'Advanced Algorithms', author: 'Prof. Seema Patel', category: 'MCA - Algorithms', year: '2023', available: true, cover: '⚙️' },
    { id: 103, title: 'Database Management Systems', author: 'Dr. Ramesh Kumar', category: 'MCA - Database Systems', year: '2022', available: false, cover: '🗄️' },
    { id: 104, title: 'Web Technologies', author: 'Dr. Priya Singh', category: 'MCA - Web Development', year: '2024', available: true, cover: '🌐' },
    { id: 105, title: 'Object Oriented Software Engineering', author: 'Dr. Ravi Patel', category: 'MCA - Software Engineering', year: '2023', available: true, cover: '🔧' },
    { id: 106, title: 'Computer Networks', author: 'Prof. Ravi Desai', category: 'MCA - Networks & Security', year: '2022', available: true, cover: '🛡️' },
    { id: 107, title: 'Formal Languages & Automata', author: 'Dr. Sunil Kumar', category: 'MCA - Theory of Computation', year: '2021', available: true, cover: '🔤' },
    { id: 108, title: 'Robotics Basics', author: 'Dr. Ashok Mehta', category: 'MCA - Robotics', year: '2024', available: true, cover: '🤖' },
  ];

  const categories = [
    'All',
    // MBA
    'Finance', 'Marketing', 'Operations', 'HR', 'Strategy', 'Economics', 'Management', 'Leadership', 'Entrepreneurship',
    // MCA
    'MCA - Data Structures', 'MCA - Algorithms', 'MCA - Database Systems', 'MCA - Web Development', 'MCA - Software Engineering', 'MCA - Networks & Security', 'MCA - Theory of Computation', 'MCA - Robotics'
  ];
  const years = ['All', '2024', '2023', '2022', '2021', '2020'];

  const filteredBooks = books.filter(book => {
    const matchesSearch = book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         book.author.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || book.category === selectedCategory;
    const matchesYear = selectedYear === 'All' || book.year === selectedYear;
    return matchesSearch && matchesCategory && matchesYear;
  });

  return (
    <div style={{ minHeight: '80vh', padding: '40px 20px' }}>
      <div className="container">
        <h1 style={{ fontSize: '36px', fontWeight: '700', marginBottom: '30px', color: '#002B5B' }}>
          📚 Books Catalogue
        </h1>

        {/* Search and Filters */}
        <div style={{
          backgroundColor: 'white',
          padding: '30px',
          borderRadius: '15px',
          marginBottom: '30px',
          boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
          display: 'flex',
          gap: '20px',
          flexWrap: 'wrap',
          alignItems: 'center'
        }}>
          {/* Search Bar */}
          <div style={{ flex: '1', minWidth: '300px' }}>
            <input
              type="text"
              placeholder="🔍 Search books by title or author..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '12px 20px',
                fontSize: '15px',
                border: '2px solid #f0f0f0',
                borderRadius: '25px',
                outline: 'none',
                transition: 'border 0.3s'
              }}
              onFocus={(e) => e.target.style.borderColor = '#002B5B'}
              onBlur={(e) => e.target.style.borderColor = '#f0f0f0'}
            />
          </div>

          {/* Category Filter */}
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            style={{
              padding: '12px 20px',
              fontSize: '15px',
              border: '2px solid #f0f0f0',
              borderRadius: '25px',
              backgroundColor: 'white',
              cursor: 'pointer',
              outline: 'none',
              transition: 'border 0.3s'
            }}
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>

          {/* Year Filter */}
          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            style={{
              padding: '12px 20px',
              fontSize: '15px',
              border: '2px solid #f0f0f0',
              borderRadius: '25px',
              backgroundColor: 'white',
              cursor: 'pointer',
              outline: 'none'
            }}
          >
            {years.map(year => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>
        </div>

        {/* Results Count */}
        <div style={{ marginBottom: '20px', color: '#666', fontSize: '16px' }}>
          Found {filteredBooks.length} book(s)
        </div>

        {/* Books Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '30px'
        }}>
          {filteredBooks.map(book => (
            <div
              key={book.id}
              style={{
                backgroundColor: 'white',
                borderRadius: '15px',
                padding: '25px',
                boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s, boxShadow 0.3s',
                cursor: 'pointer',
                border: '1px solid #f0f0f0',
                position: 'relative'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
              }}
            >
              {/* Availability Badge */}
              <div style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                padding: '5px 12px',
                borderRadius: '15px',
                fontSize: '12px',
                fontWeight: '600',
                backgroundColor: book.available ? '#4CAF50' : '#f44336',
                color: 'white'
              }}>
                {book.available ? '✅ Available' : '❌ Issued'}
              </div>

              <div style={{ fontSize: '70px', textAlign: 'center', marginBottom: '15px' }}>{book.cover}</div>
              <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '10px', color: '#002B5B', minHeight: '56px' }}>
                {book.title}
              </h3>
              <p style={{ fontSize: '14px', color: '#666', marginBottom: '8px' }}>by {book.author}</p>
              <div style={{ display: 'flex', gap: '15px', marginBottom: '20px', fontSize: '13px' }}>
                <span style={{ color: '#FFC107', fontWeight: '500' }}>{book.category}</span>
                <span style={{ color: '#999' }}>•</span>
                <span style={{ color: '#999' }}>{book.year}</span>
              </div>
              <button
                style={{
                  width: '100%',
                  backgroundColor: book.available ? '#002B5B' : '#ccc',
                  color: 'white',
                  padding: '12px',
                  border: 'none',
                  borderRadius: '25px',
                  fontWeight: '600',
                  cursor: book.available ? 'pointer' : 'not-allowed',
                  fontSize: '14px',
                  transition: 'background 0.3s'
                }}
                disabled={!book.available}
              >
                {book.available ? 'Borrow Now' : 'Reserve'}
              </button>
            </div>
          ))}
        </div>

        {filteredBooks.length === 0 && (
          <div style={{ textAlign: 'center', padding: '60px 20px' }}>
            <div style={{ fontSize: '60px', marginBottom: '20px' }}>📭</div>
            <h3 style={{ fontSize: '24px', color: '#666', marginBottom: '10px' }}>No books found</h3>
            <p style={{ color: '#999' }}>Try adjusting your search criteria</p>
          </div>
        )}
      </div>
    </div>
  );
}

