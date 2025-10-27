'use client';

import { useState } from 'react';

export default function AIAssistant() {
  const [messages, setMessages] = useState<Array<{ text: string; sender: 'user' | 'bot' }>>([]);
  const [inputValue, setInputValue] = useState('');

  const quickSuggestions = [
    "Find me books on Financial Management",
    "Which books are due this week?",
    "Recommend books for MBA students",
    "Show available books on Marketing"
  ];

  const handleSend = () => {
    if (!inputValue.trim()) return;

    // Add user message
    const newMessage = { text: inputValue, sender: 'user' as const };
    setMessages([...messages, newMessage]);
    setInputValue('');

    // Simulate bot response
    setTimeout(() => {
      const responses: { [key: string]: string } = {
        'financial management': 'Here are some great books on Financial Management: 📕 Financial Management Principles by Dr. Ramesh Sharma, 📕 Investment Banking Fundamentals by Dr. Arjun Nair. Both are available now!',
        'marketing': 'I found these Marketing books: 📗 Digital Marketing Strategies by Prof. Priya Singh, 📙 Consumer Behavior Analysis by Dr. Vikram Mehta. Would you like to borrow any?',
        'due': 'You have 2 books due next week: Operations Research (due in 3 days), Economics for Managers (due in 5 days). Remember to return them on time!',
        'mba': 'For MBA students, I recommend: 📕 Strategic Business Planning, 📘 Operations Research, 📙 Human Resource Management. These are highly rated by MBA students.',
        'available': 'These books are currently available: 📕 Financial Management, 📗 Marketing Strategies, 📙 Project Management. You can borrow them immediately!'
      };

      let response = "I'm here to help you with your library needs. You can ask me about books, borrow status, or recommendations!";
      
      for (const [key, value] of Object.entries(responses)) {
        if (inputValue.toLowerCase().includes(key)) {
          response = value;
          break;
        }
      }

      setMessages(prev => [...prev, { text: response, sender: 'bot' }]);
    }, 1000);
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
                    justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                    alignItems: 'flex-start',
                    gap: '10px'
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
              ))
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

