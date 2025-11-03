import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "SIPM Library Portal - Digital Library Management",
  description: "Access books, journals, and AI-powered learning assistance at Sanjeev Institute of Planning and Management",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body style={{ fontFamily: 'Poppins, sans-serif' }}>
        <Header />
        <main style={{ paddingBottom: '80px' }}>{children}</main>
        <Footer />
        
        {/* Mobile Navigation */}
        <div className="mobile-nav" style={{ display: 'none' }}>
          <a href="/" className="mobile-nav-item">
            <div style={{ fontSize: '24px' }}>🏠</div>
            <span>Home</span>
          </a>
          <a href="/catalogue" className="mobile-nav-item">
            <div style={{ fontSize: '24px' }}>📚</div>
            <span>Books</span>
          </a>
          <a href="/ai-assistant" className="mobile-nav-item">
            <div style={{ fontSize: '24px' }}>🤖</div>
            <span>AI</span>
          </a>
          <a href="/dashboard" className="mobile-nav-item">
            <div style={{ fontSize: '24px' }}>📊</div>
            <span>Profile</span>
          </a>
        </div>
        
        {/* Floating AI Assistant Button */}
        <a href="/ai-assistant" className="ai-float-button" style={{ display: 'none', textDecoration: 'none' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>🤖</div>
        </a>
      </body>
    </html>
  );
}
