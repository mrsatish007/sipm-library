'use client';

import { useState, useEffect } from 'react';

// Advanced AI feature types
type BookRecommendation = {
  id: string;
  title: string;
  author: string;
  rating: number;
  category: string;
  available: boolean;
  coverUrl?: string;
  relevanceScore: number;
};

type UserPreference = {
  categories: string[];
  authors: string[];
  readingLevel: 'beginner' | 'intermediate' | 'advanced';
  lastSearches: string[];
};

export default function AIAssistant() {
  const [messages, setMessages] = useState<Array<{ text: string; sender: 'user' | 'bot'; recommendations?: BookRecommendation[] }>>([]);
  const [inputValue, setInputValue] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [userPreferences, setUserPreferences] = useState<UserPreference>({
    categories: ['Management', 'Finance'],
    authors: ['Dr. Ramesh Sharma', 'Prof. Priya Singh'],
    readingLevel: 'intermediate',
    lastSearches: ['financial management', 'marketing strategies']
  });

  // Mock book database for AI recommendations
  const bookDatabase = [
    { id: '1', title: 'Financial Management Principles', author: 'Dr. Ramesh Sharma', rating: 4.7, category: 'Finance', available: true, coverUrl: 'https://via.placeholder.com/150/002B5B/FFFFFF?text=Financial+Management' },
    { id: '2', title: 'Investment Banking Fundamentals', author: 'Dr. Arjun Nair', rating: 4.5, category: 'Finance', available: true, coverUrl: 'https://via.placeholder.com/150/002B5B/FFFFFF?text=Investment+Banking' },
    { id: '3', title: 'Digital Marketing Strategies', author: 'Prof. Priya Singh', rating: 4.8, category: 'Marketing', available: true, coverUrl: 'https://via.placeholder.com/150/002B5B/FFFFFF?text=Digital+Marketing' },
    { id: '4', title: 'Consumer Behavior Analysis', author: 'Dr. Vikram Mehta', rating: 4.6, category: 'Marketing', available: true, coverUrl: 'https://via.placeholder.com/150/002B5B/FFFFFF?text=Consumer+Behavior' },
    { id: '5', title: 'Strategic Business Planning', author: 'Dr. Neha Kapoor', rating: 4.9, category: 'Management', available: true, coverUrl: 'https://via.placeholder.com/150/002B5B/FFFFFF?text=Strategic+Planning' },
    { id: '6', title: 'Operations Research', author: 'Prof. Rajiv Kumar', rating: 4.4, category: 'Operations', available: false, coverUrl: 'https://via.placeholder.com/150/002B5B/FFFFFF?text=Operations+Research' },
    { id: '7', title: 'Human Resource Management', author: 'Dr. Ananya Patel', rating: 4.7, category: 'Management', available: true, coverUrl: 'https://via.placeholder.com/150/002B5B/FFFFFF?text=HR+Management' },
    { id: '8', title: 'Economics for Managers', author: 'Prof. Sanjay Gupta', rating: 4.5, category: 'Economics', available: false, coverUrl: 'https://via.placeholder.com/150/002B5B/FFFFFF?text=Economics' },
    { id: '9', title: 'Data Analytics for Business', author: 'Dr. Kiran Rao', rating: 4.9, category: 'Analytics', available: true, coverUrl: 'https://via.placeholder.com/150/002B5B/FFFFFF?text=Data+Analytics' },
    { id: '10', title: 'Supply Chain Management', author: 'Prof. Alok Sharma', rating: 4.6, category: 'Operations', available: true, coverUrl: 'https://via.placeholder.com/150/002B5B/FFFFFF?text=Supply+Chain' },
    { id: '11', title: 'Artificial Intelligence in Business', author: 'Dr. Meera Iyer', rating: 4.8, category: 'Technology', available: true, coverUrl: 'https://via.placeholder.com/150/002B5B/FFFFFF?text=AI+Business' },
    { id: '12', title: 'Blockchain Applications', author: 'Prof. Vivek Joshi', rating: 4.7, category: 'Technology', available: true, coverUrl: 'https://via.placeholder.com/150/002B5B/FFFFFF?text=Blockchain' },
    // MCA Books
    { id: '13', title: 'Advanced Java Programming', author: 'Dr. Sunil Joshi', rating: 4.8, category: 'MCA', available: true, coverUrl: 'https://via.placeholder.com/150/002B5B/FFFFFF?text=Advanced+Java' },
    { id: '14', title: 'Data Structures and Algorithms', author: 'Prof. Amit Kumar', rating: 4.9, category: 'MCA', available: true, coverUrl: 'https://via.placeholder.com/150/002B5B/FFFFFF?text=Data+Structures' },
    { id: '15', title: 'Database Management Systems', author: 'Dr. Priya Verma', rating: 4.7, category: 'MCA', available: false, coverUrl: 'https://via.placeholder.com/150/002B5B/FFFFFF?text=DBMS' },
    { id: '16', title: 'Computer Networks', author: 'Prof. Rajesh Mishra', rating: 4.6, category: 'MCA', available: true, coverUrl: 'https://via.placeholder.com/150/002B5B/FFFFFF?text=Networks' },
    { id: '17', title: 'Operating Systems Concepts', author: 'Dr. Neha Singh', rating: 4.8, category: 'MCA', available: true, coverUrl: 'https://via.placeholder.com/150/002B5B/FFFFFF?text=OS+Concepts' },
    { id: '18', title: 'Web Development with React', author: 'Prof. Vikram Sharma', rating: 4.9, category: 'MCA', available: true, coverUrl: 'https://via.placeholder.com/150/002B5B/FFFFFF?text=React+Dev' },
    { id: '19', title: 'Cloud Computing Fundamentals', author: 'Dr. Ankit Patel', rating: 4.7, category: 'MCA', available: false, coverUrl: 'https://via.placeholder.com/150/002B5B/FFFFFF?text=Cloud+Computing' },
    { id: '20', title: 'Machine Learning for Developers', author: 'Prof. Shalini Gupta', rating: 4.8, category: 'MCA', available: true, coverUrl: 'https://via.placeholder.com/150/002B5B/FFFFFF?text=ML+Dev' },
  ];

  const quickSuggestions = [
    "Find me books on Financial Management",
    "Which books are due this week?",
    "Recommend books similar to Data Analytics",
    "Show available books on Marketing",
    "Find MCA books on programming",
    "Recommend books on Computer Networks"
  ];

  // Advanced AI recommendation engine with optimized search
  const getRecommendations = (query: string): BookRecommendation[] => {
    // Update user preferences based on search
    const updatedPreferences = {...userPreferences};
    updatedPreferences.lastSearches = [query.toLowerCase(), ...updatedPreferences.lastSearches.slice(0, 4)];
    
    // Extract potential categories from query with expanded categories list
    const queryWords = query.toLowerCase().split(' ');
    const categories = ['finance', 'marketing', 'management', 'operations', 'economics', 'technology', 'analytics', 'mca', 'computer', 'programming', 'database', 'network', 'web', 'cloud', 'machine learning'];
    const detectedCategories = categories.filter(cat => queryWords.some(word => word.includes(cat) || cat.includes(word)));
    
    if (detectedCategories.length > 0) {
      updatedPreferences.categories = [...new Set([...detectedCategories, ...updatedPreferences.categories])];
    }
    
    setUserPreferences(updatedPreferences);
    
    // Enhanced search optimization with semantic matching
    const searchTerms = query.toLowerCase().replace(/[^\w\s]/gi, '').split(' ').filter(term => term.length > 2);
    
    // AI recommendation algorithm with improved relevance scoring
    return bookDatabase.map(book => {
      // Calculate relevance score based on multiple factors
      let relevanceScore = 0;
      
      // Match by direct category mention (improved with partial matching)
      if (searchTerms.some(term => book.category.toLowerCase().includes(term))) {
        relevanceScore += 5;
      }
      
      // Match by author with partial name matching
      const authorWords = book.author.toLowerCase().split(' ');
      if (searchTerms.some(term => authorWords.some(word => word.includes(term) || term.includes(word)))) {
        relevanceScore += 4;
      }
      
      // Enhanced title keyword matching with semantic relevance
      const titleWords = book.title.toLowerCase().split(' ');
      searchTerms.forEach(term => {
        // Exact match
        if (titleWords.includes(term)) {
          relevanceScore += 3;
        }
        // Partial match (for compound words or similar terms)
        else if (titleWords.some(word => word.includes(term) || term.includes(word))) {
          relevanceScore += 2;
        }
      });
      
      // Synonym matching for common search terms
      const synonymMap: {[key: string]: string[]} = {
        'programming': ['coding', 'development', 'software'],
        'database': ['sql', 'data', 'storage', 'dbms'],
        'network': ['networking', 'internet', 'communication'],
        'computer': ['computing', 'pc', 'system'],
        'web': ['website', 'internet', 'online'],
        'finance': ['financial', 'money', 'banking'],
        'marketing': ['market', 'promotion', 'advertising']
      };
      
      // Check for synonym matches
      Object.entries(synonymMap).forEach(([key, synonyms]) => {
        if (book.title.toLowerCase().includes(key) || book.category.toLowerCase().includes(key)) {
          if (searchTerms.some(term => synonyms.includes(term))) {
            relevanceScore += 2;
          }
        }
      });
      
      // Boost based on user preferences with category similarity
      if (updatedPreferences.categories.some(cat => 
          book.category.toLowerCase().includes(cat.toLowerCase()) || 
          categories.some(c => c.includes(cat) && book.category.toLowerCase().includes(c)))) {
        relevanceScore += 2;
      }
      
      if (updatedPreferences.authors.includes(book.author)) {
        relevanceScore += 2;
      }
      
      // Boost based on rating
      relevanceScore += book.rating - 4;
      
      // Availability boost
      if (book.available) {
        relevanceScore += 1;
      }
      
      // Recency boost for newer searches
      if (updatedPreferences.lastSearches.slice(0, 2).some(search => 
          book.title.toLowerCase().includes(search) || 
          book.category.toLowerCase().includes(search))) {
        relevanceScore += 1.5;
      }
      
      return {...book, relevanceScore};
    })
    .filter(book => book.relevanceScore > 0)
    .sort((a, b) => b.relevanceScore - a.relevanceScore)
    .slice(0, 4);
  };

  const handleSend = () => {
    if (!inputValue.trim()) return;

    // Add user message
    const newMessage = { text: inputValue, sender: 'user' as const };
    setMessages([...messages, newMessage]);
    setInputValue('');
    setIsProcessing(true);

    // Simulate AI processing with advanced features
    setTimeout(() => {
      const query = newMessage.text.toLowerCase();
      
      // Get personalized book recommendations
       const recommendations = getRecommendations(query);
       
       // Generate intelligent response based on query
       let response = "";
       
       if (query.includes('due') || query.includes('return')) {
         response = 'You have 2 books due next week: Operations Research (due in 3 days), Economics for Managers (due in 5 days). I\'ve analyzed your return patterns and sent a reminder to your email.';
       } 
       else if (query.includes('recommend') || query.includes('similar')) {
         response = `Based on your reading history and preferences, I've found these ${recommendations.length} books you might enjoy:`;
       }
       else if (query.includes('available')) {
         const availableBooks = recommendations.filter(book => book.available);
         response = `I found ${availableBooks.length} available books matching your interests. You can borrow them immediately!`;
       }
       else if (query.includes('mca') || query.includes('computer') || query.includes('programming') || query.includes('network')) {
         response = `I've found these specialized MCA books that match your search criteria. Our collection includes the latest technical literature:`;
       }
       else if (query.includes('find') || query.includes('search')) {
         response = `I've searched our entire catalog and found these ${recommendations.length} relevant books:`;
       }
       else if (query.includes('popular') || query.includes('trending')) {
         response = 'Based on current borrowing trends, these books are popular among students with similar interests:';
       }
       else if (query.includes('help') || query.includes('can you')) {
         response = 'I can help you find books, recommend readings based on your interests, check due dates, reserve books, and answer questions about library services. My AI is continuously learning from library usage patterns to serve you better.';
       }
       else {
         response = `I've analyzed your query and found ${recommendations.length} relevant resources that might help:`;
       }
       
       // Add AI response with recommendations
       setMessages(prev => [...prev, { 
         text: response, 
         sender: 'bot',
         recommendations: recommendations
       }]);
       
       setIsProcessing(false);
     }, 1500);
    };

  return (
    <div style={{ minHeight: '80vh', padding: '40px 20px', backgroundColor: '#F8F9FA' }}>
      <div className="container" style={{ maxWidth: '900px' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div style={{ fontSize: '50px', marginBottom: '15px' }}>🤖</div>
          <h1 style={{ fontSize: '36px', fontWeight: '700', color: '#002B5B', marginBottom: '10px' }}>
            SIPM AI Assistant
          </h1>
          <p style={{ fontSize: '18px', color: '#666' }}>
            Ask anything about books, borrowing, or library services
          </p>
        </div>

        {/* Chat Container */}
        <div style={{
          backgroundColor: 'white',
          borderRadius: '20px',
          height: '600px',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
          overflow: 'hidden'
        }}>
          {/* Chat Header */}
          <div style={{
            backgroundColor: '#002B5B',
            color: 'white',
            padding: '20px 30px',
            display: 'flex',
            alignItems: 'center',
            gap: '15px'
          }}>
            <div style={{
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              backgroundColor: '#FFC107',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '25px'
            }}>
              🤖
            </div>
            <div>
              <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '5px' }}>SIPM Assistant</h3>
              <p style={{ fontSize: '14px', opacity: 0.9 }}>AI-powered library helper</p>
            </div>
          </div>

          {/* Messages Area */}
          <div style={{
            flex: 1,
            padding: '30px',
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px'
          }}>
            {messages.length === 0 ? (
              <div style={{ textAlign: 'center', color: '#999', padding: '40px 20px' }}>
                <div style={{ fontSize: '40px', marginBottom: '15px' }}>👋</div>
                <p>Start a conversation with me!</p>
                <p style={{ fontSize: '14px', marginTop: '10px' }}>Try asking about books, borrowing, or recommendations</p>
              </div>
            ) : (
              messages.map((msg, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                    gap: '10px',
                    width: '100%'
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                      alignItems: 'flex-start',
                      gap: '10px',
                      width: '100%'
                    }}
                  >
                    {msg.sender === 'bot' && (
                      <div style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        backgroundColor: '#002B5B',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '20px'
                      }}>
                        🤖
                      </div>
                    )}
                    <div style={{
                      maxWidth: '70%',
                      padding: '15px 20px',
                      borderRadius: '20px',
                      backgroundColor: msg.sender === 'user' ? '#002B5B' : '#F0F0F0',
                      color: msg.sender === 'user' ? 'white' : '#333',
                      fontSize: '15px',
                      lineHeight: '1.6',
                      wordWrap: 'break-word'
                    }}>
                      {msg.text}
                    </div>
                  </div>
                  
                  {/* Book Recommendations Display */}
                  {msg.sender === 'bot' && msg.recommendations && msg.recommendations.length > 0 && (
                    <div style={{
                      marginLeft: '50px',
                      marginTop: '10px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '15px',
                      width: 'calc(100% - 50px)'
                    }}>
                      <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                        gap: '15px',
                        width: '100%'
                      }}>
                        {msg.recommendations.map((book) => (
                          <div key={book.id} style={{
                            backgroundColor: 'white',
                            borderRadius: '10px',
                            overflow: 'hidden',
                            boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                            display: 'flex',
                            flexDirection: 'column',
                            height: '100%',
                            border: '1px solid #eee'
                          }}>
                            {/* Book Cover */}
                            <div style={{
                              height: '120px',
                              backgroundColor: '#002B5B',
                              backgroundImage: book.coverUrl ? `url(${book.coverUrl})` : 'none',
                              backgroundSize: 'cover',
                              backgroundPosition: 'center',
                              position: 'relative'
                            }}>
                              {!book.available && (
                                <div style={{
                                  position: 'absolute',
                                  top: '10px',
                                  right: '10px',
                                  backgroundColor: '#FF5722',
                                  color: 'white',
                                  fontSize: '11px',
                                  padding: '3px 8px',
                                  borderRadius: '20px',
                                  fontWeight: '600'
                                }}>
                                  Borrowed
                                </div>
                              )}
                              <div style={{
                                position: 'absolute',
                                bottom: '10px',
                                right: '10px',
                                backgroundColor: 'rgba(0,0,0,0.7)',
                                color: 'white',
                                fontSize: '12px',
                                padding: '3px 8px',
                                borderRadius: '20px'
                              }}>
                                ⭐ {book.rating.toFixed(1)}
                              </div>
                            </div>
                            
                            {/* Book Info */}
                            <div style={{ padding: '15px' }}>
                              <h4 style={{ fontSize: '15px', fontWeight: '600', marginBottom: '5px', color: '#002B5B' }}>
                                {book.title}
                              </h4>
                              <p style={{ fontSize: '13px', color: '#666', marginBottom: '8px' }}>
                                {book.author}
                              </p>
                              <div style={{
                                fontSize: '12px',
                                backgroundColor: '#E3F2FD',
                                color: '#0277BD',
                                padding: '3px 8px',
                                borderRadius: '20px',
                                display: 'inline-block'
                              }}>
                                {book.category}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))
            )}
            
            {/* AI Thinking Indicator */}
            {isProcessing && (
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '15px',
                marginTop: '10px'
              }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  backgroundColor: '#002B5B',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '20px'
                }}>
                  🤖
                </div>
                <div style={{
                  backgroundColor: '#F0F0F0',
                  padding: '15px 25px',
                  borderRadius: '20px',
                  color: '#666',
                  fontSize: '14px'
                }}>
                  AI is analyzing your request...
                </div>
              </div>
            )}
          </div>

          {/* Quick Suggestions */}
          {messages.length === 0 && (
            <div style={{
              padding: '0 30px 20px',
              display: 'flex',
              flexWrap: 'wrap',
              gap: '10px'
            }}>
              {quickSuggestions.map((suggestion, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setInputValue(suggestion);
                    handleSend();
                  }}
                  style={{
                    padding: '10px 18px',
                    fontSize: '13px',
                    backgroundColor: '#F8F9FA',
                    border: '1px solid #e0e0e0',
                    borderRadius: '20px',
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                    color: '#002B5B',
                    fontWeight: '500'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#002B5B';
                    e.currentTarget.style.color = 'white';
                    e.currentTarget.style.borderColor = '#002B5B';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#F8F9FA';
                    e.currentTarget.style.color = '#002B5B';
                    e.currentTarget.style.borderColor = '#e0e0e0';
                  }}
                >
                  {suggestion}
                </button>
              ))}
            </div>
          )}

          {/* Input Area */}
          <div style={{
            padding: '20px 30px',
            borderTop: '1px solid #f0f0f0',
            display: 'flex',
            gap: '15px',
            alignItems: 'center'
          }}>
            <input
              type="text"
              placeholder="Ask anything..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              style={{
                flex: 1,
                padding: '15px 20px',
                fontSize: '15px',
                border: '2px solid #f0f0f0',
                borderRadius: '30px',
                outline: 'none',
                transition: 'border 0.3s'
              }}
              onFocus={(e) => e.target.style.borderColor = '#002B5B'}
              onBlur={(e) => e.target.style.borderColor = '#f0f0f0'}
            />
            <button
              onClick={handleSend}
              style={{
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                backgroundColor: '#002B5B',
                color: 'white',
                border: 'none',
                fontSize: '20px',
                cursor: 'pointer',
                transition: 'background 0.3s',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              ➤
            </button>
          </div>
        </div>

        {/* Features Section */}
        <div style={{
          marginTop: '40px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '20px'
        }}>
          <div style={{
            backgroundColor: 'white',
            padding: '25px',
            borderRadius: '15px',
            textAlign: 'center',
            boxShadow: '0 5px 20px rgba(0,0,0,0.05)'
          }}>
            <div style={{ fontSize: '35px', marginBottom: '10px' }}>🔍</div>
            <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#002B5B', marginBottom: '8px' }}>Smart Search</h3>
            <p style={{ fontSize: '13px', color: '#666' }}>Find books instantly with AI</p>
          </div>
          <div style={{
            backgroundColor: 'white',
            padding: '25px',
            borderRadius: '15px',
            textAlign: 'center',
            boxShadow: '0 5px 20px rgba(0,0,0,0.05)'
          }}>
            <div style={{ fontSize: '35px', marginBottom: '10px' }}>💡</div>
            <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#002B5B', marginBottom: '8px' }}>Smart Recommendations</h3>
            <p style={{ fontSize: '13px', color: '#666' }}>Get personalized suggestions</p>
          </div>
          <div style={{
            backgroundColor: 'white',
            padding: '25px',
            borderRadius: '15px',
            textAlign: 'center',
            boxShadow: '0 5px 20px rgba(0,0,0,0.05)'
          }}>
            <div style={{ fontSize: '35px', marginBottom: '10px' }}>🎯</div>
            <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#002B5B', marginBottom: '8px' }}>24/7 Available</h3>
            <p style={{ fontSize: '13px', color: '#666' }}>Get help anytime you need</p>
          </div>
        </div>
      </div>
    </div>
  );
}

