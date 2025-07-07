'use client';

import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ContactPage = () => {

    const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

    const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);


    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Mohd Hassan Ansari",
          from_email: form.email,
          to_email: "ansarimohdhassan3@gmail.com",
          subject: form.subject,
          message: form.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          setLoading(false);
         toast.success("Thank you. Message sent!📧");

          setForm({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          toast.error("Ahh, something went wrong. Please try again.");
        }
      );
  };

  useEffect(() => {
    const form = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');
    const successMessage = document.getElementById('successMessage');

    if (form && submitBtn && successMessage) {
      // Form submission handler
      form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Add loading state
        submitBtn.classList.add('loading');
        submitBtn.textContent = 'Sending...';
        
        // Simulate form submission (replace with actual API call)
        setTimeout(() => {
          // Remove loading state
          submitBtn.classList.remove('loading');
          submitBtn.textContent = 'Send Message';
          
          // Show success message
          successMessage.style.display = 'block';
          
          // Reset form
          form.reset();
          
          // Hide success message after 5 seconds
          setTimeout(() => {
            successMessage.style.display = 'none';
          }, 5000);
        }, 2000);
      });
    }

    // Add floating animation to form inputs
    const inputs = document.querySelectorAll('input, textarea');
    inputs.forEach(input => {
      input.addEventListener('focus', function() {
        this.parentElement.style.transform = 'translateY(-2px)';
      });
      
      input.addEventListener('blur', function() {
        this.parentElement.style.transform = 'translateY(0)';
      });
    });

    // Add click effect to social links
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Create ripple effect
        const ripple = document.createElement('span');
        ripple.style.position = 'absolute';
        ripple.style.borderRadius = '50%';
        ripple.style.background = 'rgba(255, 255, 255, 0.6)';
        ripple.style.transform = 'scale(0)';
        ripple.style.animation = 'ripple 0.6s linear';
        ripple.style.left = '50%';
        ripple.style.top = '50%';
        ripple.style.width = '100px';
        ripple.style.height = '100px';
        ripple.style.marginLeft = '-50px';
        ripple.style.marginTop = '-50px';
        
        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);
        
        setTimeout(() => {
          ripple.remove();
        }, 600);
      });
    });

    // Parallax effect for background shapes (only on larger screens)
    const handleMouseMove = (e) => {
      if (window.innerWidth > 768) {
        const shapes = document.querySelectorAll('.bg-shape');
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;
        
        shapes.forEach((shape, index) => {
          const speed = (index + 1) * 0.3;
          const x = (mouseX - 0.5) * speed * 30;
          const y = (mouseY - 0.5) * speed * 30;
          
          shape.style.transform = `translate(${x}px, ${y}px)`;
        });
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      if (form && submitBtn && successMessage) {
        form.removeEventListener('submit', () => {});
      }
    };
  }, []);


  return (
    <>
      <div className="background-elements">
        <div className="bg-shape"></div>
        <div className="bg-shape"></div>
        <div className="bg-shape"></div>
        <div className="bg-shape"></div>
      </div>

      <div className="container">
        <div className="header">
          
          <h1>Let's Connect</h1>
          <p>Ready to bring your ideas to life? I'm here to help you build something amazing together.</p>
        </div>

        <div className="contact-grid">
          <div className="contact-form">
            <form id="contactForm" 
             ref={formRef}
          onSubmit={handleSubmit}
            >
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" name="name"
                 value={form.name}
              onChange={handleChange}
                required />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" name="email"
                value={form.email}
              onChange={handleChange}
                required />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject"
                 value={form.subject}
              onChange={handleChange}
                required />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message"
                 placeholder="Tell me about your project..."
                  value={form.message}
              onChange={handleChange}
                 required></textarea>
              </div>
              
              <button  type="submit" className="btn" id="submitBtn">Send Message</button>
              
              <div className="form-success" id="successMessage">
                Thank you! Your message has been sent successfully. I'll get back to you soon.
              </div>
            </form>
          </div>

          <div className="contact-info">
            <h2>Get in Touch</h2>
            
            <div className="contact-item">
              <div className="contact-icon">📧</div>
              <div className="contact-details">
                <h3>Email</h3>
                <p>ansarimohdhassan3@gmail.com</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">📱</div>
              <div className="contact-details">
                <h3>What's App</h3>
                <p>+91 9987792631</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">📍</div>
              <div className="contact-details">
                <h3>Location</h3>
                <p>Mumbai, Maharashtra, India</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">🕒</div>
              <div className="contact-details">
                <h3>Response Time</h3>
                <p>Usually within 24 hours</p>
              </div>
            </div>

            <div className="social-links">
              <a  href="#" className="social-link">📧</a>
              <a href="#" className="social-link">💼</a>
              <a href="#" className="social-link">🐱</a>
              <a href="#" className="social-link">🐦</a>
            </div>
          </div>
        </div>

        <div className="availability">
          <h3>
            <span className="status-indicator"></span>
            Available for New Projects
          </h3>
          <p>I'm currently accepting new projects and would love to hear about your next big idea!</p>
        </div>
       <ToastContainer
  position="top-center"
  autoClose={3000}
  hideProgressBar={false}
  newestOnTop={true}
  closeOnClick
  // pauseOnHover
  theme="dark"
/>
      </div>

      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          line-height: 1.5;
          color: #e2e8f0;
          background: rgb(17, 17, 17);
          min-height: 100vh;
          position: relative;
          overflow-x: hidden;
        }

        .background-elements {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: -1;
        }

        .bg-shape {
          position: absolute;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 50%;
          animation: float 8s ease-in-out infinite;
        }

        .bg-shape:nth-child(1) {
          width: 80px;
          height: 80px;
          top: 15%;
          left: 10%;
          animation-delay: 0s;
        }

        .bg-shape:nth-child(2) {
          width: 60px;
          height: 60px;
          top: 60%;
          right: 15%;
          animation-delay: 2s;
        }

        .bg-shape:nth-child(3) {
          width: 40px;
          height: 40px;
          bottom: 25%;
          left: 20%;
          animation-delay: 4s;
        }

        .bg-shape:nth-child(4) {
          width: 50px;
          height: 50px;
          top: 35%;
          right: 25%;
          animation-delay: 6s;
        }

        @keyframes float {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(15px, -15px) rotate(120deg); }
          66% { transform: translate(-10px, 10px) rotate(240deg); }
        }

        .container {
          max-width: 100%;
          margin: 0 auto;
          padding: 1rem;
          position: relative;
        }

        .header {
          text-align: center;
          margin-bottom: 1.5rem;
          animation: slideDown 0.8s ease-out;
          padding: 0 0.5rem;
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .header h1 {
          font-size: clamp(1.75rem, 6vw, 3.5rem);
          font-weight: 700;
          color: white;
          margin-bottom: 0.75rem;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
          line-height: 1.2;
        }

        .header p {
          font-size: clamp(0.9rem, 3vw, 1.2rem);
          color: rgba(255, 255, 255, 0.9);
          max-width: 90%;
          margin: 0 auto;
          line-height: 1.6;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
          margin-bottom: 1.5rem;
        }

        .contact-form {
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(20px);
          border-radius: 12px;
          padding: 1.25rem;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(255, 255, 255, 0.1);
          animation: slideLeft 0.8s ease-out;
          order: 2;
        }

        @keyframes slideLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .contact-info {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          border-radius: 12px;
          padding: 1.25rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          animation: slideRight 0.8s ease-out;
          order: 1;
        }

        @keyframes slideRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .form-group {
          margin-bottom: 1rem;
        }

        label {
          display: block;
          margin-bottom: 0.4rem;
          font-weight: 600;
          color: #e2e8f0;
          font-size: 0.9rem;
        }

        input, textarea {
          width: 100%;
          padding: 0.75rem;
          border: 2px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          font-size: 0.9rem;
          transition: all 0.3s ease;
          background: rgba(255, 255, 255, 0.05);
          color: #e2e8f0;
        }

        input:focus, textarea:focus {
          outline: none;
          border-color: #667eea;
          box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.2);
          transform: translateY(-1px);
          background: rgba(255, 255, 255, 0.08);
        }

        input::placeholder, textarea::placeholder {
          color: rgba(226, 232, 240, 0.5);
          font-size: 0.85rem;
        }

        textarea {
          resize: vertical;
          min-height: 100px;
          font-family: inherit;
        }

        .btn {
          width: 100%;
          padding: 0.8rem 1.5rem;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 0.95rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
          margin-bottom: 1rem;
        }

        .btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
        }

        .btn:active {
          transform: translateY(0);
        }

        .contact-info h2 {
          color: white;
          font-size: clamp(1.4rem, 4vw, 1.75rem);
          margin-bottom: 1.25rem;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
        }

        .contact-item {
          display: flex;
          align-items: flex-start;
          margin-bottom: 1rem;
          padding: 0.75rem;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
          transition: all 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .contact-item:hover {
          transform: translateX(3px);
          background: rgba(255, 255, 255, 0.08);
        }

        .contact-icon {
          min-width: 35px;
          width: 35px;
          height: 35px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 0.75rem;
          font-size: 0.9rem;
          color: white;
          box-shadow: 0 3px 8px rgba(102, 126, 234, 0.3);
          flex-shrink: 0;
        }

        .contact-details {
          flex: 1;
          min-width: 0;
        }

        .contact-details h3 {
          color: white;
          font-size: 0.95rem;
          margin-bottom: 0.2rem;
          font-weight: 600;
        }

        .contact-details p {
          color: rgba(255, 255, 255, 0.8);
          font-size: 0.8rem;
          line-height: 1.4;
          word-break: break-word;
        }

        .social-links {
          display: flex;
          gap: 0.5rem;
          margin-top: 1.25rem;
          flex-wrap: wrap;
          justify-content: center;
        }

        .social-link {
          width: 35px;
          height: 35px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          text-decoration: none;
          transition: all 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.2);
          font-size: 0.8rem;
        }

        .social-link:hover {
          background: white;
          color: #667eea;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }

        .availability {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          border-radius: 12px;
          padding: 1.25rem;
          text-align: center;
          border: 1px solid rgba(255, 255, 255, 0.1);
          animation: slideUp 0.8s ease-out;
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .availability h3 {
          color: white;
          font-size: clamp(1.1rem, 3vw, 1.25rem);
          margin-bottom: 0.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .availability p {
          color: rgba(255, 255, 255, 0.9);
          font-size: clamp(0.85rem, 2.5vw, 1rem);
          line-height: 1.5;
        }

        .status-indicator {
          display: inline-block;
          width: 8px;
          height: 8px;
          background: #48bb78;
          border-radius: 50%;
          animation: pulse 2s infinite;
          flex-shrink: 0;
        }

        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(72, 187, 120, 0.7); }
          70% { box-shadow: 0 0 0 6px rgba(72, 187, 120, 0); }
          100% { box-shadow: 0 0 0 0 rgba(72, 187, 120, 0); }
        }

        .form-success {
          display: none;
          background: #48bb78;
          color: white;
          padding: 0.75rem;
          border-radius: 8px;
          margin-top: 1rem;
          text-align: center;
          font-size: 0.85rem;
          line-height: 1.4;
        }

        .btn.loading {
          background: #a0aec0;
          cursor: not-allowed;
        }

        .btn.loading:after {
          content: "";
          display: inline-block;
          width: 14px;
          height: 14px;
          border: 2px solid #ffffff;
          border-radius: 50%;
          border-top-color: transparent;
          animation: spin 1s ease-in-out infinite;
          margin-left: 6px;
          vertical-align: middle;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        @keyframes ripple {
          to {
            transform: scale(2);
            opacity: 0;
          }
        }

        /* Small devices (480px and up) */
        @media (min-width: 480px) {
          .container {
            padding: 1.25rem;
          }
          
          .header {
            margin-bottom: 2rem;
          }
          
          .contact-form, .contact-info {
            padding: 1.5rem;
          }
          
          .contact-icon {
            width: 40px;
            height: 40px;
            font-size: 1rem;
          }
          
          .social-link {
            width: 40px;
            height: 40px;
            font-size: 0.9rem;
          }
          
          .social-links {
            gap: 0.75rem;
          }
        }

        /* Medium devices (tablets, 768px and up) */
        @media (min-width: 768px) {
          .container {
            max-width: 1200px;
            padding: 2rem;
          }

          .contact-grid {
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
          }
          
          .contact-form {
            order: 1;
          }
          
          .contact-info {
            order: 2;
          }

          .contact-form, .contact-info {
            padding: 2rem;
          }
          
          .bg-shape:nth-child(1) {
            width: 120px;
            height: 120px;
          }

          .bg-shape:nth-child(2) {
            width: 100px;
            height: 100px;
          }

          .bg-shape:nth-child(3) {
            width: 70px;
            height: 70px;
          }

          .bg-shape:nth-child(4) {
            width: 80px;
            height: 80px;
          }

          .contact-icon {
            width: 45px;
            height: 45px;
            font-size: 1.1rem;
          }

          .contact-details h3 {
            font-size: 1rem;
          }

          .contact-details p {
            font-size: 0.9rem;
          }

          .social-link {
            width: 45px;
            height: 45px;
            font-size: 1rem;
          }
          
          .social-links {
            justify-content: flex-start;
          }
          
          input, textarea {
            padding: 0.9rem;
            font-size: 0.95rem;
          }
          
          .btn {
            padding: 0.9rem 2rem;
            font-size: 1rem;
          }
        }

        /* Large devices (desktops, 1024px and up) */
        @media (min-width: 1024px) {
          .contact-grid {
            gap: 2.5rem;
          }

          .contact-form, .contact-info {
            padding: 2.5rem;
          }
          
          .bg-shape:nth-child(1) {
            width: 150px;
            height: 150px;
          }

          .bg-shape:nth-child(2) {
            width: 120px;
            height: 120px;
          }

          .bg-shape:nth-child(3) {
            width: 80px;
            height: 80px;
          }

          .bg-shape:nth-child(4) {
            width: 90px;
            height: 90px;
          }

          .contact-icon {
            width: 50px;
            height: 50px;
            font-size: 1.2rem;
          }

          .social-link {
            width: 50px;
            height: 50px;
            font-size: 1.1rem;
          }
        }

        /* Extra large devices (1200px and up) */
        @media (min-width: 1200px) {
          .contact-grid {
            gap: 3rem;
          }

          .contact-form, .contact-info {
            padding: 3rem;
          }
        }

        /* Very small devices (max-width: 374px) */
        @media (max-width: 374px) {
          .container {
            padding: 0.75rem;
          }
          
          .header h1 {
            font-size: 1.5rem;
          }
          
          .contact-form, .contact-info {
            padding: 1rem;
          }
          
          .contact-item {
            padding: 0.5rem;
          }
          
          .contact-icon {
            width: 30px;
            height: 30px;
            font-size: 0.8rem;
            margin-right: 0.5rem;
          }
          
          .social-link {
            width: 30px;
            height: 30px;
            font-size: 0.7rem;
          }
          
          .availability {
            padding: 1rem;
          }
        }

        /* Landscape orientation adjustments */
        @media (max-height: 500px) and (orientation: landscape) {
          .header {
            margin-bottom: 1rem;
          }
          
          .header h1 {
            font-size: 2rem;
            margin-bottom: 0.5rem;
          }
          
          .contact-grid {
            gap: 1rem;
          }
          
          .contact-form, .contact-info {
            padding: 1rem;
          }
          
          .bg-shape {
            display: none;
          }
        }

        /* Touch device optimizations */
        @media (hover: none) and (pointer: coarse) {
          .contact-item:hover {
            transform: none;
          }
          
          .social-link:hover {
            transform: none;
          }
          
          .btn:hover {
            transform: none;
          }
          
          .contact-item:active {
            transform: translateX(3px);
            background: rgba(255, 255, 255, 0.08);
          }
          
          .social-link:active {
            background: white;
            color: #667eea;
            transform: scale(0.95);
          }
          
          .btn:active {
            transform: scale(0.98);
          }
        }
      `}</style>
    </>
  );
};

export default ContactPage;