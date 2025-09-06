'use client'
import React, { useState } from 'react';

interface ThongBaoItem {
  id: string;
  tieuDe: string;
  nguoiGui: string;
  thoiGianGui: string;
  isRead?: boolean;
}

interface ThongBaoProps {
  thongBaoList?: ThongBaoItem[];
}

const ThongBao: React.FC<ThongBaoProps> = ({ 
  thongBaoList = [
    {
      id: '1',
      tieuDe: 'KHẢO SÁT SỰ CẦN THIẾT PHÁT TRIỂN TIẾNG ANH TRỢ THÀNH NGÔN NGỮ THỨ 2 TẠI ĐH KINH TẾ QUỐC DÂN',
      nguoiGui: 'Phạm Đức Minh',
      thoiGianGui: '20/06/2025',
      isRead: false
    },
    {
      id: '2',
      tieuDe: 'KHẢO SÁT NHU CẦU SỬ DỤNG THƯ VIỆN 24/7',
      nguoiGui: 'Lê Văn Dũng',
      thoiGianGui: '24/04/2025',
      isRead: false
    },
    {
      id: '3',
      tieuDe: 'THÔNG BÁO XÉP LOẠI VÀ HỌC PHÍ HỌC GIÁO DỤC QUỐC PHÒNG VÀ AN NINH ĐỢT 1 NĂM 2025',
      nguoiGui: 'AdminHG',
      thoiGianGui: '05/03/2025',
      isRead: true
    },
    {
      id: '4',
      tieuDe: 'THÔNG BÁO ĐẶT LẠI PASSWORD CHO TÀI KHOẢN ĐĂNG KÝ TÍN CHỈ',
      nguoiGui: 'AdminHG',
      thoiGianGui: '10/02/2025',
      isRead: true
    },
    {
      id: '5',
      tieuDe: 'DANH SÁCH, THỜI GIAN, KẾ HOẠCH CỦA SINH VIÊN HỌC GIÁO DỤC QUỐC PHÒNG VÀ AN NINH ĐỢT THÁNG 02-2025',
      nguoiGui: 'AdminHG',
      thoiGianGui: '22/01/2025',
      isRead: true
    }
  ]
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [notifications, setNotifications] = useState<ThongBaoItem[]>(thongBaoList);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredNotifications = notifications.filter(notification =>
    notification.tieuDe.toLowerCase().includes(searchTerm.toLowerCase()) ||
    notification.nguoiGui.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleNotificationClick = (id: string) => {
    setNotifications(prev =>
      prev.map(notification =>
        notification.id === id
          ? { ...notification, isRead: true }
          : notification
      )
    );
  };

  return (
    <div className="max-w-7xl mx-auto bg-white min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 border-b border-blue-200">
        <div className="p-6">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mr-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
            <h1 className="text-2xl font-semibold text-blue-700">
              Thông báo chung
            </h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-6">
        {/* Search Box */}
        <div className="mb-6">
          <div className="relative max-w-2xl">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Tìm kiếm thông báo"
              value={searchTerm}
              onChange={handleSearch}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-600 placeholder-gray-400"
            />
          </div>
        </div>

        {/* Notifications Table */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          {/* Table Header */}
          <div className="bg-gray-100 border-b border-gray-200">
            <div className="grid grid-cols-12 gap-4 p-4 text-sm font-semibold text-gray-700">
              <div className="col-span-6">
                Tiêu đề
              </div>
              <div className="col-span-3 text-center">
                Người gửi
              </div>
              <div className="col-span-3 text-center">
                Thời gian gửi
              </div>
            </div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-gray-100">
            {filteredNotifications.length > 0 ? (
              filteredNotifications.map((notification) => (
                <div
                  key={notification.id}
                  onClick={() => handleNotificationClick(notification.id)}
                  className={`grid grid-cols-12 gap-4 p-4 hover:bg-blue-50 transition-colors duration-150 cursor-pointer ${
                    !notification.isRead ? 'bg-blue-25 border-l-4 border-l-blue-500' : ''
                  }`}
                >
                  <div className="col-span-6">
                    <div className={`text-sm ${!notification.isRead ? 'font-semibold text-blue-700' : 'text-blue-600'} leading-relaxed`}>
                      {notification.tieuDe}
                      {!notification.isRead && (
                        <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                          Mới
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="col-span-3 text-center">
                    <span className={`text-sm ${!notification.isRead ? 'font-medium text-gray-900' : 'text-gray-700'}`}>
                      {notification.nguoiGui}
                    </span>
                  </div>
                  <div className="col-span-3 text-center">
                    <span className={`text-sm ${!notification.isRead ? 'font-medium text-gray-900' : 'text-gray-600'}`}>
                      {notification.thoiGianGui}
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <div className="p-8 text-center text-gray-500">
                <svg className="mx-auto h-12 w-12 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                Không tìm thấy thông báo nào phù hợp với tìm kiếm của bạn.
              </div>
            )}
          </div>
        </div>

        {/* Stats */}
        {filteredNotifications.length > 0 && (
          <div className="mt-4 text-sm text-gray-500">
            Hiển thị {filteredNotifications.length} thông báo
            {searchTerm && ` cho "${searchTerm}"`}
          </div>
        )}
      </div>

      {/* Settings Button (Fixed Position) */}
      <div className="fixed bottom-6 right-6">
        <button className="w-14 h-14 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center group">
          <svg className="w-6 h-6 transform group-hover:rotate-90 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ThongBao;