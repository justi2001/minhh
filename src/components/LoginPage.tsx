'use client'
import React, { useState } from 'react';
import { useAuthContext } from '@/contexts/auth';
import { useRouter } from 'next/navigation';

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();
  const {setAuth}=useAuthContext()

  const handleSignin=()=>{
    setAuth(true)
    router.push('/me/thong-tin-ca-nhan')
  }

  return (
    <div className="min-h-screen w-screen flex ">
      {/* Left side - Spiral staircase image */}
      <div className="flex-1 relative">
        <div className="absolute inset-0">
         <img src='https://nguoihoc.neu.edu.vn/static/media/bg_lg.6bfbe364.jpg' />
        </div>
        {/* Overlay gradient for better contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-gray-100/20"></div>
      </div>

      {/* Right side - Login form */}
      <div className="w-96 bg-gray-50 flex flex-col">
        {/* Header with logo and university name */}
        <div className="px-8 pt-8 pb-6">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 relative mr-3">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-red-500 flex items-center justify-center relative overflow-hidden">
                {/* University logo placeholder - simplified version */}
               <img src='https://nguoihoc.neu.edu.vn/static/media/logo_footer.f3b0caed.png' />
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <h1 className="text-lg font-semibold text-gray-800 mb-1">
              ĐẠI HỌC KINH TẾ QUỐC DÂN
            </h1>
            <p className="text-sm text-gray-600">
              CỔNG THÔNG TIN ĐÀO TẠO
            </p>
          </div>
        </div>

        {/* Login form */}
        <div className="flex-1 px-8">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-red-600 mb-2">
              ĐĂNG NHẬP
            </h2>
            <p className="text-sm text-gray-500 mb-6">
              Cổng thông tin đào tạo
            </p>

            <form className="space-y-4">
              {/* Username field */}
              <div>
                <label className="block text-sm text-gray-600 mb-2">
                  Tên đăng nhập
                </label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  placeholder="Nhập tên đăng nhập"
                />
              </div>

              {/* Password field */}
              <div>
                <label className="block text-sm text-gray-600 mb-2">
                  Mật khẩu
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm pr-12"
                    placeholder="••••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              {/* Login button */}
              <button
              onClick={handleSignin}
                type="button"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 mt-6"
              >
                Đăng nhập
              </button>
            </form>

            {/* Alternative login option */}
            <div className="mt-6">
              <button 
              onClick={handleSignin} className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                <div className="w-5 h-5 mr-3">
                  <svg viewBox="0 0 24 24" className="w-full h-full">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                </div>
                <span className="text-sm text-gray-700">Đăng nhập Email sinh viên</span>
              </button>
            </div>
          </div>
        </div>

        {/* Footer space */}
        <div className="p-8"></div>
      </div>

      {/* Audio control button (bottom right) */}
      <div className="fixed bottom-6 right-6">
        <button className="w-12 h-12 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default LoginPage;