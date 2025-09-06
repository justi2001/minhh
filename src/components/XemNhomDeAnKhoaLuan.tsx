'use client'
import React, { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

interface DeAnKhoaLuan {
  stt: number;
  maLHP: string;
  tenLHP: string;
  soTC: number;
  siSoSV: number;
  gvhd: string;
}

const XemNhomDeAnKhoaLuan: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState<string>('2025-2026');
  const [selectedSemester, setSelectedSemester] = useState<string>('Học kỳ 1');
  const [isYearDropdownOpen, setIsYearDropdownOpen] = useState<boolean>(false);
  const [isSemesterDropdownOpen, setIsSemesterDropdownOpen] = useState<boolean>(false);

  const years = ['2025-2026', '2024-2025', '2023-2024', '2022-2023'];
  const semesters = ['Học kỳ 1', 'Học kỳ 2', 'Học kỳ 3'];

  const deAnKhoaLuanData: DeAnKhoaLuan[] = []; // Empty array as shown in the image

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center mb-6">
          <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mr-3">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
          <h1 className="text-2xl font-semibold text-blue-600">Xem nhóm Đề án/Khóa luận</h1>
        </div>

        {/* Content Container */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          {/* Filter Section */}
          <div className="flex gap-6 mb-6">
            {/* Year Dropdown */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Năm học
              </label>
              <div className="relative">
                <button
                  onClick={() => setIsYearDropdownOpen(!isYearDropdownOpen)}
                  className="w-48 px-4 py-3 text-left bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 flex items-center justify-between"
                >
                  <span className="text-gray-700">{selectedYear}</span>
                  <ChevronDownIcon className="h-5 w-5 text-gray-400" />
                </button>
                {isYearDropdownOpen && (
                  <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
                    {years.map((year) => (
                      <button
                        key={year}
                        onClick={() => {
                          setSelectedYear(year);
                          setIsYearDropdownOpen(false);
                        }}
                        className="w-full px-4 py-2 text-left hover:bg-gray-50 focus:outline-none focus:bg-gray-50"
                      >
                        {year}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Semester Dropdown */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Học kỳ
              </label>
              <div className="relative">
                <button
                  onClick={() => setIsSemesterDropdownOpen(!isSemesterDropdownOpen)}
                  className="w-48 px-4 py-3 text-left bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 flex items-center justify-between"
                >
                  <span className="text-gray-700">{selectedSemester}</span>
                  <ChevronDownIcon className="h-5 w-5 text-gray-400" />
                </button>
                {isSemesterDropdownOpen && (
                  <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
                    {semesters.map((semester) => (
                      <button
                        key={semester}
                        onClick={() => {
                          setSelectedSemester(semester);
                          setIsSemesterDropdownOpen(false);
                        }}
                        className="w-full px-4 py-2 text-left hover:bg-gray-50 focus:outline-none focus:bg-gray-50"
                      >
                        {semester}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="bg-blue-600">
                  <th className="px-6 py-4 text-left text-sm font-medium text-white uppercase tracking-wider border-r border-blue-500">
                    STT
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-white uppercase tracking-wider border-r border-blue-500">
                    Mã LHP
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-white uppercase tracking-wider border-r border-blue-500">
                    Tên LHP
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-white uppercase tracking-wider border-r border-blue-500">
                    Số TC
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-white uppercase tracking-wider border-r border-blue-500">
                    Sĩ số SV
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-white uppercase tracking-wider">
                    GVHD
                  </th>
                </tr>
              </thead>
              <tbody>
                {deAnKhoaLuanData.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="px-6 py-12 text-center text-gray-500">
                      Không có dữ liệu
                    </td>
                  </tr>
                ) : (
                  deAnKhoaLuanData.map((deAn, index) => (
                    <tr key={deAn.stt} className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
                        {deAn.stt}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {deAn.maLHP}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {deAn.tenLHP}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
                        {deAn.soTC}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
                        {deAn.siSoSV}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {deAn.gvhd}
                      </td>
                    </tr>
                  ))
                )}
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

export default XemNhomDeAnKhoaLuan;