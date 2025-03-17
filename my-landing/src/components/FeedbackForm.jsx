import React, { useState } from 'react';
import { X, Send } from 'lucide-react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const FeedbackForm = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      await axios.post('https://backend.afrikajournals.org/journal_api/api/feedback/', formData);
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => {
        onClose();
        setStatus('idle');
      }, 2000);
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    isOpen && (
      <div className="position-fixed top-50 end-0 translate-middle-y bg-white shadow-lg rounded-start p-4 w-100" style={{ maxWidth: '400px', zIndex: 1050 }}>
        <button onClick={onClose} className="btn-close position-absolute top-0 end-0 m-2"></button>
        <h2 className="h5 text-dark mb-3">Send Feedback</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="form-control" />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="form-control" />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea id="message" name="message" value={formData.message} onChange={handleChange} required className="form-control" rows="4"></textarea>
          </div>
          <button type="submit" disabled={status === 'submitting'} className="btn btn-primary w-100 d-flex align-items-center justify-content-center gap-2">
            {status === 'submitting' ? 'Sending...' : <><Send size={18} /> Send Feedback</>}
          </button>
          {status === 'success' && <p className="text-success text-center mt-2">Feedback sent successfully!</p>}
          {status === 'error' && <p className="text-danger text-center mt-2">Failed to send feedback. Please try again.</p>}
        </form>
      </div>
    )
  );
};

export default FeedbackForm;
