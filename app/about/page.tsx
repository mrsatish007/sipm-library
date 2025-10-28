'use client';

import { useState } from 'react';

export default function AboutContact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div style={{ minHeight: '80vh', padding: '40px 20px' }}>
      <div className="container">
        {/* About Section */}
        <section style={{ marginBottom: '80px' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h1 style={{ fontSize: '42px', fontWeight: '700', marginBottom: '20px', color: '#002B5B' }}>
              About SIPM Library
            </h1>
            <div style={{
              width: '100px',
              height: '4px',
              backgroundColor: '#FFC107',
              margin: '0 auto 30px',
              borderRadius: '2px'
            }}></div>
            <p style={{ fontSize: '18px', color: '#666', maxWidth: '800px', margin: '0 auto', lineHeight: '1.8' }}>
              Welcome to the Sanjeev Institute of Planning and Management Library Portal. We are dedicated to providing
              comprehensive academic resources and innovative learning solutions to our students and faculty.
            </p>
          </div>

          {/* Mission Statement */}
          <div style={{
            backgroundColor: '#002B5B',
            color: 'white',
            padding: '50px',
            borderRadius: '20px',
            marginBottom: '40px',
            boxShadow: '0 10px 40px rgba(0,0,0,0.15)'
          }}>
            <h2 style={{ fontSize: '32px', fontWeight: '600', marginBottom: '25px' }}>
              🎯 Our Mission
            </h2>
            <p style={{ fontSize: '17px', lineHeight: '1.8', opacity: 0.95 }}>
              To empower students and faculty with seamless access to a vast collection of academic resources,
              cutting-edge AI-powered search capabilities, and personalized learning recommendations. We strive to create
              an environment that fosters research, innovation, and academic excellence.
            </p>
          </div>

          {/* Features Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '30px'
          }}>
            <div style={{
              backgroundColor: 'white',
              padding: '35px',
              borderRadius: '15px',
              boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
              textAlign: 'center',
              transition: 'transform 0.3s'
            }}>
              <div style={{ fontSize: '60px', marginBottom: '20px' }}>📚</div>
              <h3 style={{ fontSize: '22px', fontWeight: '600', marginBottom: '15px', color: '#002B5B' }}>
                Extensive Collection
              </h3>
              <p style={{ fontSize: '15px', color: '#666', lineHeight: '1.6' }}>
                Over 10,000 books, journals, and research papers across multiple disciplines
              </p>
            </div>

            <div style={{
              backgroundColor: 'white',
              padding: '35px',
              borderRadius: '15px',
              boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
              textAlign: 'center',
              transition: 'transform 0.3s'
            }}>
              <div style={{ fontSize: '60px', marginBottom: '20px' }}>🤖</div>
              <h3 style={{ fontSize: '22px', fontWeight: '600', marginBottom: '15px', color: '#002B5B' }}>
                AI-Powered Features
              </h3>
              <p style={{ fontSize: '15px', color: '#666', lineHeight: '1.6' }}>
                Intelligent search, personalized recommendations, and instant book discovery
              </p>
            </div>

            <div style={{
              backgroundColor: 'white',
              padding: '35px',
              borderRadius: '15px',
              boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
              textAlign: 'center',
              transition: 'transform 0.3s'
            }}>
              <div style={{ fontSize: '60px', marginBottom: '20px' }}>🎓</div>
              <h3 style={{ fontSize: '22px', fontWeight: '600', marginBottom: '15px', color: '#002B5B' }}>
                Academic Excellence
              </h3>
              <p style={{ fontSize: '15px', color: '#666', lineHeight: '1.6' }}>
                Supporting research, learning, and innovation for the academic community
              </p>
            </div>

            <div style={{
              backgroundColor: 'white',
              padding: '35px',
              borderRadius: '15px',
              boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
              textAlign: 'center',
              transition: 'transform 0.3s'
            }}>
              <div style={{ fontSize: '60px', marginBottom: '20px' }}>⚡</div>
              <h3 style={{ fontSize: '22px', fontWeight: '600', marginBottom: '15px', color: '#002B5B' }}>
                Digital Access
              </h3>
              <p style={{ fontSize: '15px', color: '#666', lineHeight: '1.6' }}>
                Access books and resources 24/7 through our digital portal
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section style={{ marginBottom: '50px' }}>
          <h2 style={{ fontSize: '36px', fontWeight: '700', marginBottom: '40px', textAlign: 'center', color: '#002B5B' }}>
            📞 Contact Us
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '40px'
          }}>
            {/* Contact Form */}
            <div style={{
              backgroundColor: 'white',
              padding: '40px',
              borderRadius: '20px',
              boxShadow: '0 10px 40px rgba(0,0,0,0.1)'
            }}>
              <h3 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '25px', color: '#002B5B' }}>
                Send us a Message
              </h3>
              <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', marginBottom: '8px', fontSize: '15px', fontWeight: '500', color: '#333' }}>
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    style={{
                      width: '100%',
                      padding: '12px 15px',
                      fontSize: '15px',
                      border: '2px solid #f0f0f0',
                      borderRadius: '10px',
                      outline: 'none',
                      transition: 'border 0.3s'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#002B5B'}
                    onBlur={(e) => e.target.style.borderColor = '#f0f0f0'}
                  />
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', marginBottom: '8px', fontSize: '15px', fontWeight: '500', color: '#333' }}>
                    Your Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    style={{
                      width: '100%',
                      padding: '12px 15px',
                      fontSize: '15px',
                      border: '2px solid #f0f0f0',
                      borderRadius: '10px',
                      outline: 'none',
                      transition: 'border 0.3s'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#002B5B'}
                    onBlur={(e) => e.target.style.borderColor = '#f0f0f0'}
                  />
                </div>

                <div style={{ marginBottom: '25px' }}>
                  <label style={{ display: 'block', marginBottom: '8px', fontSize: '15px', fontWeight: '500', color: '#333' }}>
                    Message
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                    style={{
                      width: '100%',
                      padding: '12px 15px',
                      fontSize: '15px',
                      border: '2px solid #f0f0f0',
                      borderRadius: '10px',
                      outline: 'none',
                      resize: 'vertical',
                      transition: 'border 0.3s'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#002B5B'}
                    onBlur={(e) => e.target.style.borderColor = '#f0f0f0'}
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    width: '100%',
                    backgroundColor: '#002B5B',
                    color: 'white',
                    padding: '15px',
                    fontSize: '16px',
                    fontWeight: '600',
                    border: 'none',
                    borderRadius: '25px',
                    cursor: 'pointer',
                    transition: 'background 0.3s'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#001d3d'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#002B5B'}
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <div style={{
                backgroundColor: 'white',
                padding: '40px',
                borderRadius: '20px',
                boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
                marginBottom: '30px'
              }}>
                <h3 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '30px', color: '#002B5B' }}>
                  Get in Touch
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
                    <div style={{ fontSize: '30px' }}>📍</div>
                    <div>
                      <div style={{ fontSize: '16px', fontWeight: '600', marginBottom: '5px', color: '#002B5B' }}>
                        Main Campus
                      </div>
                      <div style={{ fontSize: '15px', color: '#666', lineHeight: '1.6' }}>
                        Gollapalem Road<br />
                        Kakinada – 533003<br />
                        Andhra Pradesh, India
                      </div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
                    <div style={{ fontSize: '30px' }}>🏢</div>
                    <div>
                      <div style={{ fontSize: '16px', fontWeight: '600', marginBottom: '5px', color: '#002B5B' }}>
                        City Office
                      </div>
                      <div style={{ fontSize: '15px', color: '#666', lineHeight: '1.6' }}>
                        Sanjeev Group of Colleges<br />
                        Ramarao Peta, Kakinada – 533004<br />
                        Andhra Pradesh, India
                      </div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
                    <div style={{ fontSize: '30px' }}>📧</div>
                    <div>
                      <div style={{ fontSize: '16px', fontWeight: '600', marginBottom: '5px', color: '#002B5B' }}>
                        Email
                      </div>
                      <div style={{ fontSize: '15px', color: '#666' }}>
                        office.sipm602@gmail.com
                      </div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
                    <div style={{ fontSize: '30px' }}>📞</div>
                    <div>
                      <div style={{ fontSize: '16px', fontWeight: '600', marginBottom: '5px', color: '#002B5B' }}>
                        Phone
                      </div>
                      <div style={{ fontSize: '15px', color: '#666' }}>
                        8977665333<br />
                        0884-2377995
                      </div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
                    <div style={{ fontSize: '30px' }}>🕒</div>
                    <div>
                      <div style={{ fontSize: '16px', fontWeight: '600', marginBottom: '5px', color: '#002B5B' }}>
                        Library Hours
                      </div>
                      <div style={{ fontSize: '15px', color: '#666', lineHeight: '1.6' }}>
                        Monday - Saturday: 9:00 AM - 6:00 PM<br />
                        Sunday: 9:00 AM - 1:00 PM<br />
                        Extended hours during exams
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Google Map Placeholder */}
              <div style={{
                backgroundColor: '#f0f0f0',
                height: '250px',
                borderRadius: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#999',
                fontSize: '16px',
                boxShadow: '0 5px 20px rgba(0,0,0,0.05)'
              }}>
                🗺️ Google Map Integration
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

