
import React from "react";

interface WelcomeEmailTemplateProps {
  firstName: string;
}

const WelcomeEmailTemplate: React.FC<WelcomeEmailTemplateProps> = ({ firstName }) => {
  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", fontFamily: "'Inter', 'Poppins', sans-serif" }}>
      {/* Header with Logo */}
      <div style={{ 
        backgroundColor: "#7E69AB", 
        padding: "24px", 
        textAlign: "center", 
        borderTopLeftRadius: "8px", 
        borderTopRightRadius: "8px" 
      }}>
        <h1 style={{ 
          color: "white", 
          margin: "0", 
          fontSize: "26px",
          fontFamily: "'Poppins', sans-serif",
          fontWeight: "700"
        }}>
          Thrive Link
        </h1>
        <p style={{ color: "white", marginTop: "8px", fontSize: "16px" }}>
          Empowering the Next Generation of Tech Professionals
        </p>
      </div>

      {/* Main Content */}
      <div style={{ 
        backgroundColor: "white", 
        padding: "32px 24px", 
        color: "#4B5563",
        borderLeft: "1px solid #e5e7eb",
        borderRight: "1px solid #e5e7eb"
      }}>
        {/* Greeting Section */}
        <h2 style={{ 
          color: "#1E40AF", 
          fontFamily: "'Poppins', sans-serif",
          fontWeight: "600",
          fontSize: "20px",
          marginTop: "0"
        }}>
          Hi {firstName},
        </h2>
        
        <p style={{ fontSize: "16px", lineHeight: "1.6", marginBottom: "24px" }}>
          Welcome to the <strong>Thrive Link community</strong> – we're excited to have you on board!
        </p>

        {/* Introduction Section */}
        <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
          Thrive Link is a growing network of aspiring and experienced tech enthusiasts committed to learning, growing, and building together.
        </p>
        
        <p style={{ fontSize: "16px", lineHeight: "1.6", marginBottom: "24px" }}>
          Whether you're here to learn, mentor, collaborate, or just connect—you're in the right place.
        </p>

        {/* What to Expect Section */}
        <div style={{ 
          backgroundColor: "#F3F4F6", 
          padding: "20px", 
          borderRadius: "8px",
          marginBottom: "24px" 
        }}>
          <h3 style={{ 
            color: "#1E40AF", 
            fontFamily: "'Poppins', sans-serif",
            fontWeight: "600",
            fontSize: "18px",
            marginTop: "0"
          }}>
            What to Expect
          </h3>
          
          <p style={{ fontSize: "16px", lineHeight: "1.6", marginBottom: "16px" }}>
            Here's what you can look forward to:
          </p>
          
          <ul style={{ paddingLeft: "20px", marginBottom: "0" }}>
            <li style={{ margin: "8px 0", fontSize: "15px" }}>
              Access to niche-focused groups (Frontend, ML, Design, etc.)
            </li>
            <li style={{ margin: "8px 0", fontSize: "15px" }}>
              Weekly community updates and learning resources
            </li>
            <li style={{ margin: "8px 0", fontSize: "15px" }}>
              Tech events, challenges, and collaboration opportunities
            </li>
            <li style={{ margin: "8px 0", fontSize: "15px" }}>
              Mentorship and volunteering roles
            </li>
          </ul>
        </div>

        {/* Next Steps Section */}
        <h3 style={{ 
          color: "#1E40AF", 
          fontFamily: "'Poppins', sans-serif",
          fontWeight: "600", 
          fontSize: "18px" 
        }}>
          Next Steps
        </h3>
        
        <p style={{ fontSize: "16px", lineHeight: "1.6", marginBottom: "4px" }}>
          ✅ Join our WhatsApp or Discord community
        </p>
        <p style={{ fontSize: "16px", lineHeight: "1.6", marginBottom: "4px" }}>
          ✅ Check out our latest projects and events
        </p>
        <p style={{ fontSize: "16px", lineHeight: "1.6", marginBottom: "24px" }}>
          ✅ Introduce yourself in your niche group!
        </p>

        {/* CTA Button */}
        <div style={{ textAlign: "center", margin: "32px 0" }}>
          <a 
            href="#" 
            style={{
              backgroundColor: "#9b87f5",
              color: "white",
              padding: "12px 24px",
              borderRadius: "6px",
              textDecoration: "none",
              fontWeight: "600",
              fontSize: "16px",
              display: "inline-block",
              textAlign: "center",
            }}
          >
            Join the Community Space
          </a>
        </div>
      </div>

      {/* Footer */}
      <div style={{ 
        backgroundColor: "#F9FAFB", 
        padding: "24px",
        textAlign: "center",
        borderBottomLeftRadius: "8px",
        borderBottomRightRadius: "8px",
        borderLeft: "1px solid #e5e7eb",
        borderRight: "1px solid #e5e7eb",
        borderBottom: "1px solid #e5e7eb"
      }}>
        <p style={{ 
          fontSize: "16px", 
          margin: "0 0 16px 0", 
          color: "#4B5563",
          fontStyle: "italic"
        }}>
          With purpose,
        </p>
        <p style={{ fontSize: "16px", margin: "0 0 16px 0", fontWeight: "bold", color: "#1E40AF" }}>
          The Thrive Link Team
        </p>
        
        {/* Social Links */}
        <div style={{ margin: "16px 0" }}>
          <a href="#" style={{ color: "#9b87f5", margin: "0 10px", textDecoration: "none" }}>Website</a>
          <span style={{ color: "#d1d5db" }}>|</span>
          <a href="#" style={{ color: "#9b87f5", margin: "0 10px", textDecoration: "none" }}>Twitter</a>
          <span style={{ color: "#d1d5db" }}>|</span>
          <a href="#" style={{ color: "#9b87f5", margin: "0 10px", textDecoration: "none" }}>LinkedIn</a>
        </div>
        
        <p style={{ fontSize: "12px", color: "#9CA3AF", marginTop: "16px" }}>
          You're receiving this email because you recently joined the Thrive Link community.
          <br />
          © 2025 Thrive Link. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default WelcomeEmailTemplate;
