'use client'
import React, { useState, useEffect } from 'react';
import { User, GraduationCap, Bell, BookOpen, Calendar, FileText, UserCheck, Settings, Award, FileCheck, Shield, Calculator, DollarSign, Phone, Archive, Users, CreditCard, Edit, FileSearch, Search, Menu, X } from 'lucide-react';
import Link from 'next/link';

const Navbar = () => {
  const [activeItem, setActiveItem] = useState('Kết quả học tập');
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 1024);
      if (window.innerWidth >= 1024) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  const menuItems = [
    {
      category: "TRANG CÁ NHÂN",
      items: [
        { icon: User, name: "Thông tin cá nhân", path: "/thong-tin-ca-nhan" },
        { icon: GraduationCap, name: "Thông tin tốt nghiệp", path: "/thong-tin-tot-nghiep" },
        { icon: Bell, name: "Thông báo", path: "/thong-bao" },
        { icon: BookOpen, name: "Hướng dẫn sử dụng", path: "/huong-dan-su-dung" }
      ]
    },
    {
      category: "TRA CỨU THÔNG TIN",
      items: [
        { icon: Search, name: "Chuẩn đầu ra ngoại ngữ", path: "/chuan-dau-ra-ngoai-ngu" },
        { icon: FileText, name: "Chương trình đào tạo", path: "/chuong-trinh-dao-tao" },
        { icon: Calendar, name: "Lịch học", path: "/lich-hoc" },
        { icon: Calendar, name: "Lịch thi", path: "/lich-thi" },
        { icon: UserCheck, name: "Quyết định sinh viên", path: "/quyet-dinh-sinh-vien" },
        { icon: Settings, name: "Chuyên cần", path: "/chuyen-can" },
        { icon: Award, name: "Kết quả rèn luyện", path: "/ket-qua-ren-luyen", active: true },
        { icon: FileCheck, name: "Kết quả học tập", path: "/ket-qua-hoc-tap",},
        { icon: User, name: "Tài chính sinh viên", path: "/tai-chinh-sinh-vien" },
        { icon: FileSearch, name: "Xem chi tiết hóa đơn", path: "/xem-chi-tiet-hoa-don" },
        { icon: FileText, name: "Xem kết quả đăng ký học phần", path: "/xem-ket-qua-dang-ky-hoc-phan" },
        { icon: Shield, name: "Bảo hiểm y tế", path: "/bao-hiem-y-te" },
        { icon: DollarSign, name: "Miễn giảm, trợ cấp, học bổng", path: "/mien-giam-tro-cap-hoc-bong" },
        { icon: FileText, name: "Xem nhóm Đề án/Khóa luận", path: "/xem-nhom-de-an-khoa-luan" }
      ]
    },
    {
      category: "CHỨC NĂNG TRỰC TUYẾN",
      items: [
        { icon: Users, name: "Ngoại trú sinh viên", path: "/ngoai-tru-sinh-vien" },
        { icon: Edit, name: "Đăng ký học phần", path: "/dang-ky-hoc-phan" },
        { icon: FileText, name: "Thảo luận học phần", path: "/thao-luan-hoc-phan" },
        { icon: Calculator, name: "Đánh giá điểm rèn luyện", path: "/danh-gia-diem-ren-luyen" },
        { icon: GraduationCap, name: "Đăng ký xét tốt nghiệp", path: "/dang-ky-xet-tot-nghiep" },
        { icon: Settings, name: "Dịch vụ Công Một cửa", path: "/dich-vu-cong-mot-cua" },
        { icon: Search, name: "Khảo sát đánh giá", path: "/khao-sat-danh-gia" },
        { icon: Archive, name: "Tài liệu số", path: "/tai-lieu-so" },
        { icon: Phone, name: "Liên hệ - góp ý", path: "/lien-he-gop-y" },
        { icon: CreditCard, name: "Nộp chứng chỉ", path: "/nop-chung-chi" },
        { icon: Edit, name: "Đăng ký học CTĐT thứ 2", path: "/dang-ky-hoc-ctdt-thu-2" },
        { icon: Edit, name: "Đăng ký học vụ", path: "/dang-ky-hoc-vu" },
        { icon: Edit, name: "Đăng ký dọn hoàn thi - Thi bổ sung học kỳ", path: "/dang-ky-don-hoan-thi" },
        { icon: Shield, name: "Đăng ký bảo hiểm y tế", path: "/dang-ky-bao-hiem-y-te" },
        { icon: Edit, name: "Đăng ký thi ghép", path: "/dang-ky-thi-ghep" }
      ]
    }
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Mobile menu button */}
      {isMobile && (
        <div className="fixed top-4 left-4 z-50 lg:hidden">
          <button
            onClick={toggleMenu}
            className="p-2 rounded-md bg-blue-600 text-white focus:outline-none"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      )}

      {/* Overlay for mobile */}
      {isMobile && isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Navbar */}
      <div className={`fixed lg:relative top-0 left-0 h-screen w-full lg:w-80 bg-white shadow-lg flex flex-col z-40 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}>
        {/* Logo và User Info */}
        <div className="p-4 border-b border-gray-200 flex-shrink-0">
          <div className="flex items-center mb-4">
            <div className='w-28 aspect-square mx-auto'>
          <img src='https://nguoihoc.neu.edu.vn/static/media/logo_footer.f3b0caed.png' />

            </div>
          </div>

          <div className="flex items-center">
            <div className="w-10 h-10 bg-gray-400 rounded-full flex items-center justify-center mr-3">
              <User className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="font-medium text-gray-800">Nguyễn Văn Minh</div>
              <div className="text-sm text-gray-500">11241087</div>
              <div className="text-sm text-gray-500">Sinh viên</div>
            </div>
          </div>
        </div>

        {/* Menu - Scrollable area */}
        <div className="flex-1 overflow-y-auto">
          {menuItems.map((section, sectionIndex) => (
            <div key={sectionIndex} className="mb-1">
              <div className="px-4 py-3 text-xs font-semibold text-gray-600 bg-gray-50 border-b border-gray-200 sticky top-0 z-10">
                {section.category}
              </div>
              {section.items.map((item, itemIndex) => {
                const IconComponent = item.icon;
                const isActive = item.name === activeItem;

                return (
                  <Link href={item.path} key={itemIndex}>
                    <div
                      className={`flex items-center px-4 py-3 text-sm cursor-pointer transition-colors duration-150 ${isActive ? 'bg-blue-50 text-blue-600 border-r-4 border-blue-600' : 'text-gray-700 hover:bg-gray-50'}`}
                      onClick={() => {
                        setActiveItem(item.name);
                        if (isMobile) setIsOpen(false);
                      }}
                    >
                      <IconComponent className={`w-4 h-4 mr-3 ${isActive ? 'text-blue-600' : 'text-gray-400'}`} />
                      <span className="flex-1">{item.name}</span>
                    </div>
                  </Link>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;