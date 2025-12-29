import React, { useState } from 'react';
import { Lightbulb,   Mail, Lock } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useRouter } from '../contexts/RouterContext';

const LoginPage: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const { login } = useAuth();
    const { navigate } = useRouter();
  
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setError('');
      setIsLoading(true);
  
      const success = await login(email, password);
      
      if (success) {
        navigate('home'); // Redirect to home after login
      } else {
        setError('Invalid credentials');
      }
      setIsLoading(false);
    };

  return (
    <div className="min-h-screen bg-orange-50 flex items-center justify-center px-4 py-8 overflow-hidden relative">
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-300 rounded-full opacity-40"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-green-300 rounded-full opacity-30"></div>
      <div className="absolute top-1/3 right-10 w-16 h-16 bg-blue-200 rounded-full opacity-50"></div>

      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-8 items-center relative z-10">
        
        {/* Left Column - Decorative Paper Shape */}
        <div className="relative order-2 md:order-1 hidden md:block">
          <div className="login-paper-shape bg-white relative">
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
              <div className="w-24 h-24 bg-yellow-300 rounded-full flex items-center justify-center mb-6 shadow-lg">
                <Lightbulb className="w-12 h-12 text-gray-800" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'serif' }}>
                Welcome Back!
              </h2>
              <p className="text-gray-600 text-lg">
                Access your ATL Innovation portal and continue inspiring young minds.
              </p>
              
              {/* Decorative SVG Arrow */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 100" width="150" height="75" className="mt-8">
                <g transform="matrix(1,0,0,1,100,50)" opacity="1">
                  <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                    <path strokeLinecap="round" strokeLinejoin="round" fillOpacity="0" stroke="rgb(35,32,31)" strokeOpacity="1" strokeWidth="6" d="M-37.625,-2.125 C-37.625,-2.125 -21.875,17.25 -5,1.25 C6.894999980926514,-10.029000282287598 -7.375,-23.875 -13.75,-18.625 C-20.249000549316406,-13.27299976348877 -13.437000274658203,3.187000036239624 19.125,10.125"></path>
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </div>

        {/* Right Column - Login Form */}
        <div className="order-1 md:order-2">
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border-4 border-gray-100 relative">
            
            {/* Top corner accent */}
            <div className="absolute -top-3 -right-3 w-16 h-16 bg-yellow-300 rounded-full"></div>
            
            <div className="relative">
              {/* Header */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-yellow-300 rounded-lg flex items-center justify-center">
                    <Lightbulb className="w-6 h-6 text-gray-800" />
                  </div>
                  <div>
                    <h1 className="font-bold text-xl text-gray-800">ATL Innovation</h1>
                    <p className="text-xs text-gray-500">Admin Portal</p>
                  </div>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-6" style={{ fontFamily: 'serif' }}>
                  Sign in to continue
                </h2>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Email Input */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Mail className="w-5 h-5 text-gray-400" />
                    </div>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-2xl focus:border-gray-800 focus:outline-none transition-all text-gray-900 bg-white shadow-sm"
                      placeholder="you@example.com"
                      required
                      disabled={isLoading}
                    />
                  </div>
                </div>

                {/* Password Input */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Lock className="w-5 h-5 text-gray-400" />
                    </div>
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-2xl focus:border-gray-800 focus:outline-none transition-all text-gray-900 bg-white shadow-sm"
                      placeholder="Enter your password"
                      required
                      disabled={isLoading}
                    />
                  </div>
                </div>

                {/* Error Message */}
                {error && (
                  <div className="flex items-center gap-3 p-4 bg-red-50 border-2 border-red-200 rounded-2xl">
                    <svg className="w-5 h-5 text-red-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"/>
                    </svg>
                    <p className="text-red-800 font-semibold text-sm">
                      {error}
                    </p>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gray-900 text-white py-4 px-8 rounded-2xl font-semibold text-lg hover:bg-gray-800 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
                >
                  {isLoading ? (
                    <>
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                      </svg>
                      <span>Logging in...</span>
                    </>
                  ) : (
                    <>
                      <span>Sign in</span>
                    </>
                  )}
                </button>

                {/* Additional Info */}
                <div className="text-center text-sm text-gray-600 pt-4">
                  Need help? Contact your administrator
                </div>
              </form>
            </div>
          </div>

          {/* Bottom decorative elements */}
          <div className="mt-6 flex items-center justify-center gap-4">
            <div className="w-10 h-10 bg-green-300 rounded-full"></div>
            <div className="w-6 h-6 bg-blue-200 rounded-full"></div>
            <div className="w-8 h-8 bg-yellow-300 rounded-full"></div>
          </div>
        </div>
      </div>

      <style>{`
        .login-paper-shape {
          width: 450px;
          height: 550px;
          clip-path: polygon(
            6% 0%,
            94% 0%,
            100% 6%,
            98% 78%,
            92% 100%,
            18% 100%,
            0% 96%,
            0% 6%
          );
          transform: rotate(-3deg);
          transform-origin: center;
          box-shadow: 0 25px 50px rgba(0,0,0,0.2);
        }

        @media (max-width: 768px) {
          .login-paper-shape {
            width: 350px;
            height: 450px;
          }
        }
      `}</style>
    </div>
  );
};

export default LoginPage;