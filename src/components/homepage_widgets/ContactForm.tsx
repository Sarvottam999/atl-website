import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    query: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async () => {
    if (!formData.email || !formData.query) {
      setStatus('error');
      setErrorMessage('Please fill in all fields.');
      setTimeout(() => setStatus('idle'), 3000);
      return;
    }
    
    setStatus('loading');
    setErrorMessage('');

    try {
      // Replace with your actual API endpoint
      const response = await fetch('https://your-api-endpoint.com/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit');
      }

      setStatus('success');
      setFormData({ email: '', query: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      setStatus('error');
      setErrorMessage('Something went wrong. Please try again.');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-green-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - Decorative Paper Shape */}
          <div className="relative order-2 lg:order-1 hidden lg:block">
            <div className="contact-paper-shape relative">
              <div className="absolute inset-0 flex items-center justify-center p-12">
                <div className="text-center space-y-6">
                  <svg className="w-24 h-24 mx-auto text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                  </svg>
                  <h3 className="text-3xl font-bold text-white" style={{ fontFamily: 'Recoleta, serif' }}>
                    We're here to help
                  </h3>
                  <p className="text-white text-lg opacity-90">
                    Have questions? We'd love to hear from you.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="order-1 lg:order-2">
            <div className="space-y-6">
              {/* Header */}
              <div className="space-y-3">
                <h1 
                  className="text-2xl md:text-3xl text-gray-800"
                  style={{ fontFamily: 'GuthenBloots, serif' }}
                >
                  Let's start a conversation
                </h1>
                <h2 
                  className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900"
                  style={{ fontFamily: 'Recoleta, serif' }}
                >
                  Get in touch with us
                </h2>
              </div>

              {/* Form */}
              <div className="space-y-6 mt-8">
                {/* Email Input */}
                <div className="relative">
                  <label 
                    htmlFor="email" 
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Your email
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                      </svg>
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-2xl focus:border-orange-400 focus:outline-none transition-colors text-gray-900 bg-white shadow-sm"
                      placeholder="you@example.com"
                      disabled={status === 'loading'}
                    />
                  </div>
                </div>

                {/* Query Textarea */}
                <div className="relative">
                  <label 
                    htmlFor="query" 
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Your message
                  </label>
                  <div className="relative">
                    <div className="absolute top-4 left-4 pointer-events-none">
                      <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <textarea
                      id="query"
                      name="query"
                      value={formData.query}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-2xl focus:border-orange-400 focus:outline-none transition-colors text-gray-900 bg-white shadow-sm resize-none"
                      placeholder="Tell us what's on your mind..."
                      disabled={status === 'loading'}
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  onClick={handleSubmit}
                  disabled={status === 'loading'}
                  className="w-full bg-gray-900 text-white py-4 px-8 rounded-2xl font-semibold text-lg hover:bg-gray-800 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  {status === 'loading' ? (
                    <span className="flex items-center justify-center gap-3">
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    'Send message'
                  )}
                </button>

                {/* Status Messages */}
                {status === 'success' && (
                  <div className="flex items-center gap-3 p-4 bg-green-50 border-2 border-green-200 rounded-2xl">
                    <svg className="w-6 h-6 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <p className="text-green-800 font-semibold">
                      Thanks! We'll get back to you soon.
                    </p>
                  </div>
                )}

                {status === 'error' && (
                  <div className="flex items-center gap-3 p-4 bg-red-50 border-2 border-red-200 rounded-2xl">
                    <svg className="w-6 h-6 text-red-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"/>
                    </svg>
                    <p className="text-red-800 font-semibold">
                      {errorMessage}
                    </p>
                  </div>
                )}
              </div>

              {/* Additional Info */}
              <div className="mt-8 flex flex-wrap gap-8 pt-8 border-t-2 border-gray-200">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-yellow-300 flex items-center justify-center">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Response time</div>
                    <div className="font-semibold text-gray-900">Within 24 hours</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-300 flex items-center justify-center">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Support available</div>
                    <div className="font-semibold text-gray-900">7 days a week</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .contact-paper-shape {
          width: 500px;
          height: 600px;
          background: linear-gradient(135deg, #f97316 0%, #ea580c 100%);
          clip-path: polygon(
            8% 0%,
            92% 0%,
            100% 8%,
            98% 78%,
            90% 100%,
            20% 100%,
            0% 94%,
            0% 8%
          );
          transform: rotate(-4deg);
          transform-origin: center;
          box-shadow: 0 25px 50px rgba(0,0,0,0.2);
        }

        @media (max-width: 1024px) {
          .contact-paper-shape {
            width: 400px;
            height: 500px;
          }
        }
      `}</style>
    </div>
  );
};

export default ContactForm;