'use client'
import { useAuthContext } from '@/contexts/auth';
import { Bell, User } from 'lucide-react';

const Header = () => {
const {setAuth}=useAuthContext()

  const handleSignout=()=>{
    setAuth(false)
    // router.push('/thong-tin-ca-nhan')
  }
  return (
    <div className="bg-[#0c7abf] text-white px-6 py-4 flex items-center justify-between">
      <h1 className="text-xl font-semibold">ĐẠI HỌC KINH TẾ QUỐC DÂN</h1>
      <div className="flex items-center space-x-4">
        <Bell className="w-6 h-6 cursor-pointer" />
        <div className="w-8 h-8 bg-gray-200  rounded-full flex items-center justify-center cursor-pointer">
          <User className="w-5 h-5" />
        </div>
        <button onClick={handleSignout}>Logout</button>
      </div>
    </div>
  );
};

export default Header;
