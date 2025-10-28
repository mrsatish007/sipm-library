'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

type Book = {
  id: number;
  title: string;
  author: string;
  category: string;
  year: string;
  available: boolean;
  cover: string;
};

export default function AddBookPage() {
  const router = useRouter();
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [form, setForm] = useState({
    title: '',
    author: '',
    category: 'MCA - Data Structures',
    year: new Date().getFullYear().toString(),
    available: true,
    cover: '📘'
  });

  useEffect(() => {
    const storedLogin = localStorage.getItem('isLoggedIn');
    const storedUserInfo = localStorage.getItem('userInfo');
    const role = storedUserInfo ? JSON.parse(storedUserInfo).role : null;
    if (storedLogin === 'true' && role === 'librarian') {
      setIsAuthorized(true);
    } else {
      setIsAuthorized(false);
    }
  }, []);

  const categories = [
    'Finance', 'Marketing', 'Operations', 'HR', 'Strategy', 'Economics', 'Management', 'Leadership', 'Entrepreneurship',
    'MCA - Data Structures', 'MCA - Web Development', 'MCA - Database Systems', 'MCA - Data Mining', 'MCA - IoT', 'MCA - Formal Languages', 'MCA - Cryptography', 'MCA - Robotics', 'MCA - Computer Organization', 'MCA - Algorithms', 'MCA - OOSE'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newBook: Book = {
      id: Date.now(),
      title: form.title.trim(),
      author: form.author.trim(),
      category: form.category,
      year: form.year,
      available: form.available,
      cover: form.cover || '📘'
    };

    const existing = localStorage.getItem('customBooks');
    const parsed: Book[] = existing ? JSON.parse(existing) : [];
    parsed.push(newBook);
    localStorage.setItem('customBooks', JSON.stringify(parsed));

    alert('Book added to catalogue');
    router.push('/catalogue');
  };

  if (!isAuthorized) {
    return (
      <div style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
        <div style={{ backgroundColor: 'white', padding: '30px', borderRadius: '15px', boxShadow: '0 10px 40px rgba(0,0,0,0.1)', textAlign: 'center' }}>
          <div style={{ fontSize: '50px', marginBottom: '10px' }}>🔒</div>
          <h2 style={{ color: '#002B5B', marginBottom: '10px' }}>Librarian Access Only</h2>
          <p style={{ color: '#666', marginBottom: '20px' }}>Please log in as librarian to add books.</p>
          <Link href="/login">
            <button style={{ backgroundColor: '#002B5B', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '25px', fontWeight: '600', cursor: 'pointer' }}>Go to Login</button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '80vh', padding: '40px 20px' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <h1 style={{ fontSize: '32px', fontWeight: '700', color: '#002B5B', marginBottom: '20px' }}>➕ Add New Book</h1>
        <p style={{ color: '#666', marginBottom: '30px' }}>Books added here will appear in the Catalogue for everyone.</p>

        <form onSubmit={handleSubmit} style={{ backgroundColor: 'white', padding: '30px', borderRadius: '15px', boxShadow: '0 5px 20px rgba(0,0,0,0.1)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div>
              <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px' }}>Title</label>
              <input type="text" required value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} placeholder="Enter book title" style={{ width: '100%', padding: '12px 14px', border: '2px solid #eee', borderRadius: '10px', outline: 'none' }} />
            </div>
            <div>
              <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px' }}>Author</label>
              <input type="text" required value={form.author} onChange={(e) => setForm({ ...form, author: e.target.value })} placeholder="Enter author name" style={{ width: '100%', padding: '12px 14px', border: '2px solid #eee', borderRadius: '10px', outline: 'none' }} />
            </div>
            <div>
              <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px' }}>Category</label>
              <select value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} style={{ width: '100%', padding: '12px 14px', border: '2px solid #eee', borderRadius: '10px', outline: 'none' }}>
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
            <div>
              <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px' }}>Year</label>
              <input type="number" min="1900" max="2100" value={form.year} onChange={(e) => setForm({ ...form, year: e.target.value })} style={{ width: '100%', padding: '12px 14px', border: '2px solid #eee', borderRadius: '10px', outline: 'none' }} />
            </div>
            <div>
              <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px' }}>Cover Emoji</label>
              <input type="text" value={form.cover} onChange={(e) => setForm({ ...form, cover: e.target.value })} placeholder="e.g. 📕" style={{ width: '100%', padding: '12px 14px', border: '2px solid #eee', borderRadius: '10px', outline: 'none' }} />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '28px' }}>
              <input id="available" type="checkbox" checked={form.available} onChange={(e) => setForm({ ...form, available: e.target.checked })} />
              <label htmlFor="available">Available</label>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '10px', marginTop: '25px' }}>
            <button type="submit" style={{ backgroundColor: '#002B5B', color: 'white', padding: '12px 24px', border: 'none', borderRadius: '25px', fontWeight: '600', cursor: 'pointer' }}>Save</button>
            <Link href="/catalogue"><button type="button" style={{ backgroundColor: '#ccc', color: '#333', padding: '12px 24px', border: 'none', borderRadius: '25px', fontWeight: '600', cursor: 'pointer' }}>Cancel</button></Link>
          </div>
        </form>
      </div>
    </div>
  );
}


