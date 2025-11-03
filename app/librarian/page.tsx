'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function LibrarianDashboard() {
  const router = useRouter();
  const [isAuthorized, setIsAuthorized] = useState(true); // Changed to true by default to show profile

  useEffect(() => {
    // Authentication check is kept for future use but doesn't block access
    const storedLogin = localStorage.getItem('isLoggedIn');
    const storedUserInfo = localStorage.getItem('userInfo');
    const role = storedUserInfo ? JSON.parse(storedUserInfo).role : null;
    if (storedLogin === 'true' && role === 'librarian') {
      setIsAuthorized(true);
    }
    // Removed the else clause to keep isAuthorized as true
  }, []);

  return (
    <div style={{ minHeight: '80vh', padding: '40px 20px' }}>
      <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '32px', fontWeight: '700', color: '#002B5B', marginBottom: '20px' }}>Librarian Dashboard</h1>
        <p style={{ color: '#666', marginBottom: '30px' }}>Manage the library collection and operations.</p>
        
        {/* Librarian Profile Section */}
        <div style={{ 
          backgroundColor: 'white', 
          borderRadius: '15px', 
          padding: '30px', 
          marginBottom: '30px',
          boxShadow: '0 5px 20px rgba(0,0,0,0.1)'
        }}>
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column',
            gap: '20px',
            alignItems: 'flex-start'
          }}>
            <h2 style={{ fontSize: '24px', fontWeight: '600', color: '#002B5B', marginBottom: '10px' }}>Librarian Profile</h2>
            
            <div style={{ 
              display: 'flex', 
              flexDirection: 'row',
              flexWrap: 'wrap',
              gap: '30px',
              width: '100%'
            }}>
              {/* Profile Image and Details */}
              <div style={{ 
                display: 'flex', 
                flexDirection: 'column',
                alignItems: 'center',
                minWidth: '200px'
              }}>
                <img 
                  src="https://sipm.sim.edu.in/wp-content/uploads/2025/11/Vasu.jpg" 
                  alt="P V N VARMA" 
                  style={{ 
                    width: '200px', 
                    height: '200px', 
                    objectFit: 'cover',
                    borderRadius: '10px',
                    marginBottom: '15px',
                    boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
                  }} 
                />
                <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#002B5B', marginBottom: '5px' }}>T V PADMA VASU</h3>
                <p style={{ color: '#666', marginBottom: '5px' }}>BLIS</p>
                <p style={{ color: '#002B5B', fontWeight: '500' }}>ASST.LIBRARIAN</p>
              </div>
              
              {/* Bio Description */}
              <div style={{ flex: '1', minWidth: '300px' }}>
                <p style={{ color: '#333', lineHeight: '1.6', fontSize: '16px' }}>
                  Mr. T V PADMA VASU serves as the Assistant Librarian at the Sanjeev Institute of Planning and Management (SIPM).
                </p>
                <p style={{ color: '#333', lineHeight: '1.6', fontSize: '16px', marginTop: '15px' }}>
                  He plays a crucial role in managing and maintaining the institute's extensive library resources, ensuring that students and faculty have seamless access to the necessary academic materials. Mr. Varma is dedicated to enhancing the library's services, specializing in digital resource management, cataloging, and implementing modern library technologies to support research and learning across all departments. His commitment contributes significantly to a vibrant and resource-rich academic environment at SIPM.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
          {/* Add Book Card */}
          <div style={{ backgroundColor: 'white', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 5px 20px rgba(0,0,0,0.1)', transition: 'transform 0.3s ease' }} 
               onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
               onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
            <div style={{ padding: '30px', textAlign: 'center' }}>
              <div style={{ fontSize: '50px', marginBottom: '15px' }}>📚</div>
              <h2 style={{ fontSize: '22px', fontWeight: '600', color: '#002B5B', marginBottom: '10px' }}>Add New Book</h2>
              <p style={{ color: '#666', marginBottom: '20px' }}>Add new books to the library catalogue.</p>
              <Link href="/librarian/add-book">
                <button style={{ backgroundColor: '#002B5B', color: 'white', padding: '12px 24px', border: 'none', borderRadius: '25px', fontWeight: '600', cursor: 'pointer', width: '100%' }}>Add Book</button>
              </Link>
            </div>
          </div>

          {/* Future cards can be added here */}
          <div style={{ backgroundColor: 'white', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 5px 20px rgba(0,0,0,0.1)', transition: 'transform 0.3s ease' }}
               onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
               onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
            <div style={{ padding: '30px', textAlign: 'center' }}>
              <div style={{ fontSize: '50px', marginBottom: '15px' }}>📊</div>
              <h2 style={{ fontSize: '22px', fontWeight: '600', color: '#002B5B', marginBottom: '10px' }}>Manage Books</h2>
              <p style={{ color: '#666', marginBottom: '20px' }}>View, edit, and manage existing books.</p>
              <button style={{ backgroundColor: '#666', color: 'white', padding: '12px 24px', border: 'none', borderRadius: '25px', fontWeight: '600', cursor: 'pointer', width: '100%' }}>Coming Soon</button>
            </div>
          </div>

          <div style={{ backgroundColor: 'white', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 5px 20px rgba(0,0,0,0.1)', transition: 'transform 0.3s ease' }}
               onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
               onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
            <div style={{ padding: '30px', textAlign: 'center' }}>
              <div style={{ fontSize: '50px', marginBottom: '15px' }}>👥</div>
              <h2 style={{ fontSize: '22px', fontWeight: '600', color: '#002B5B', marginBottom: '10px' }}>User Management</h2>
              <p style={{ color: '#666', marginBottom: '20px' }}>Manage library members and borrowing.</p>
              <button style={{ backgroundColor: '#666', color: 'white', padding: '12px 24px', border: 'none', borderRadius: '25px', fontWeight: '600', cursor: 'pointer', width: '100%' }}>Coming Soon</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
