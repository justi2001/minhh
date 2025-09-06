'use client'
import React from 'react';

interface ChinhSachMienGiam {
  stt: number;
  namHoc: string;
  hocKy: string;
  maiDoiTuong: string;
  tenDoiTuong: string;
  miGiam: string;
}

interface ChinhSachTroCap {
  stt: number;
  namHoc: string;
  hocKy: string;
  mucDoiTuongTroCap: string;
  mTroCap: string;
}

interface ChinhSachHocBong {
  stt: number;
  namHoc: string;
  hocKy: string;
  tenHocBong: string;
  soTien: number;
}

const MienGiamTroCapHocBong: React.FC = () => {
  const chinhSachMienGiamData: ChinhSachMienGiam[] = []; // Empty array
  const chinhSachTroCapData: ChinhSachTroCap[] = []; // Empty array  
  const chinhSachHocBongData: ChinhSachHocBong[] = []; // Empty array

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center mb-6">
          <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-3">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
          <h1 className="text-xl font-semibold text-blue-600">Miễn giảm, trợ cấp, học bổng</h1>
        </div>

        {/* CHÍNH SÁCH MIỄN GIẢM */}
        <div className="bg-white rounded-lg shadow-sm mb-6">
          <div className="bg-gray-100 px-4 py-3 rounded-t-lg">
            <h2 className="text-sm font-medium text-gray-700 uppercase">CHÍNH SÁCH MIỄN GIẢM</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="bg-blue-600">
                  <th className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider border-r border-blue-500">STT</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider border-r border-blue-500">Năm học</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider border-r border-blue-500">Học kỳ</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider border-r border-blue-500">Mã đối tượng</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider border-r border-blue-500">Tên đối tượng</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Mức giảm</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan={6} className="px-4 py-8 text-center text-gray-500 text-sm">
                    Không có dữ liệu...
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* CHÍNH SÁCH TRỢ CẤP */}
        <div className="bg-white rounded-lg shadow-sm mb-6">
          <div className="bg-gray-100 px-4 py-3 rounded-t-lg">
            <h2 className="text-sm font-medium text-gray-700 uppercase">CHÍNH SÁCH TRỢ CẤP</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="bg-blue-600">
                  <th className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider border-r border-blue-500">STT</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider border-r border-blue-500">Năm học</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider border-r border-blue-500">Học kỳ</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider border-r border-blue-500">Mức đối tượng trợ cấp</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Mức trợ cấp</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan={5} className="px-4 py-8 text-center text-gray-500 text-sm">
                    Không có dữ liệu...
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* CHÍNH SÁCH HỌC BỔNG */}
        <div className="bg-white rounded-lg shadow-sm">
          <div className="bg-gray-100 px-4 py-3 rounded-t-lg">
            <h2 className="text-sm font-medium text-gray-700 uppercase">CHÍNH SÁCH HỌC BỔNG</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="bg-blue-600">
                  <th className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider border-r border-blue-500">STT</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider border-r border-blue-500">Năm học</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider border-r border-blue-500">Học kỳ</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider border-r border-blue-500">Tên học bổng</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Số tiền</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan={5} className="px-4 py-8 text-center text-gray-500 text-sm">
                    Không có dữ liệu...
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Floating Action Button */}
        <div className="fixed bottom-6 right-6">
          <button className="w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg flex items-center justify-center focus:outline-none focus:ring-4 focus:ring-blue-300 transition-colors duration-200">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MienGiamTroCapHocBong;