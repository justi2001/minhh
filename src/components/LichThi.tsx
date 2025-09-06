'use client'
import React, { useState } from 'react';
import { ChevronDown, Printer } from 'lucide-react';

interface LichThiProps {
  className?: string;
}

const LichThi: React.FC<LichThiProps> = ({ className = '' }) => {
  const [selectedYear, setSelectedYear] = useState('2025-2026');
  const [selectedSemester, setSelectedSemester] = useState('Học kỳ 1');
  const [activeTab, setActiveTab] = useState('NAM_HOC_HOC_KY');

  const years = ['2024-2025', '2025-2026', '2026-2027'];
  const semesters = ['Học kỳ 1', 'Học kỳ 2', 'Học kỳ 3'];

  return (
    <div className={`bg-gray-50 min-h-screen p-6 ${className}`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center mb-8">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-3">
              <ChevronDown className="w-4 h-4 text-white rotate-90" />
            </div>
            <h1 className="text-2xl font-semibold text-blue-600">Lịch thi</h1>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="mb-6">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8">
              <button
                onClick={() => setActiveTab('NAM_HOC_HOC_KY')}
                className={`py-3 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'NAM_HOC_HOC_KY'
                    ? 'border-pink-500 text-pink-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                NĂM HỌC-HỌC KỲ
              </button>
              <button
                onClick={() => setActiveTab('THOI_GIAN')}
                className={`py-3 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'THOI_GIAN'
                    ? 'border-pink-500 text-pink-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                THỜI GIAN
              </button>
            </nav>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          {/* Filter Section */}
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center gap-4">
              {/* Year Selector */}
              <div>
                <label className="block text-sm text-gray-600 mb-2">Năm học</label>
                <div className="relative">
                  <select
                    value={selectedYear}
                    onChange={(e) => setSelectedYear(e.target.value)}
                    className="appearance-none bg-white border border-gray-300 rounded-md px-4 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    {years.map(year => (
                      <option key={year} value={year}>{year}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-2 top-2.5 h-4 w-4 text-gray-400 pointer-events-none" />
                </div>
              </div>

              {/* Semester Selector */}
              <div>
                <label className="block text-sm text-gray-600 mb-2">Học kỳ</label>
                <div className="relative">
                  <select
                    value={selectedSemester}
                    onChange={(e) => setSelectedSemester(e.target.value)}
                    className="appearance-none bg-white border border-gray-300 rounded-md px-4 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    {semesters.map(semester => (
                      <option key={semester} value={semester}>{semester}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-2 top-2.5 h-4 w-4 text-gray-400 pointer-events-none" />
                </div>
              </div>

              {/* Print Button */}
              <div className="mt-6">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md flex items-center gap-2 text-sm font-medium transition-colors">
                  <Printer className="w-4 h-4" />
                  In lịch thi
                </button>
              </div>
            </div>
          </div>

          {/* Schedule Section */}
          <div className="p-6">
            <h3 className="text-lg font-medium text-gray-800 mb-4">Lịch thi</h3>
            
            {/* Table Header */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-blue-600 text-white">
                    <th className="px-4 py-3 text-left text-sm font-medium">Mã lớp học phần</th>
                    <th className="px-4 py-3 text-left text-sm font-medium">Tên học phần</th>
                    <th className="px-4 py-3 text-left text-sm font-medium">STC</th>
                    <th className="px-4 py-3 text-left text-sm font-medium">Ngày thi</th>
                    <th className="px-4 py-3 text-left text-sm font-medium">Giờ thi</th>
                    <th className="px-4 py-3 text-left text-sm font-medium">Phòng thi</th>
                    <th className="px-4 py-3 text-left text-sm font-medium">Địa điểm</th>
                    <th className="px-4 py-3 text-left text-sm font-medium">Hình thức thi</th>
                    <th className="px-4 py-3 text-left text-sm font-medium">Kiểu thi</th>
                    <th className="px-4 py-3 text-left text-sm font-medium">Ghi chú</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colSpan={10} className="px-4 py-8 text-center text-gray-500 text-sm">
                      Chưa có lịch thi
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Note */}
            <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-md p-4">
              <div className="flex">
                <div>
                  <p className="text-sm text-yellow-800">
                    <span className="font-medium">Ghi chú:</span> Sinh viên vui lòng theo dõi lịch thi thường xuyên để biết thông tin.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LichThi;