'use client'
import React, { useState } from 'react';

interface LanguageStandard {
  id: string;
  studentId: string;
  fullName: string;
  birthDate: string;
  birthPlace: string;
  gender: string;
  certificateType: string;
  certificateNumber: string;
  issueDate: string;
}

const ChuanDauRaNgoaiNgu: React.FC = () => {
  const [selectedProgram, setSelectedProgram] = useState<string>('Thống kế kinh tế 66');
  
  // Dữ liệu mẫu
  const [languageStandards] = useState<LanguageStandard[]>([
    {
      id: '1',
      studentId: '11241087',
      fullName: 'Nguyễn Văn Minh',
      birthDate: '19/08/2006',
      birthPlace: 'Tỉnh Hà Tây',
      gender: 'Nam',
      certificateType: 'IELTS',
      certificateNumber: 'SYS_CCAV_17092024',
      issueDate: '17/09/2024'
    },
    {
      id: '2', 
      studentId: '11241087',
      fullName: 'Nguyễn Văn Minh',
      birthDate: '19/08/2006',
      birthPlace: 'Tỉnh Hà Tây',
      gender: 'Nam',
      certificateType: 'CCQP',
      certificateNumber: 'SYS_CCQP_04032025',
      issueDate: '04/03/2025'
    }
  ]);

  const programs = [
    'Thống kế kinh tế 66',
    'Kinh tế học 66',
    'Quản trị kinh doanh 66',
    'Tài chính ngân hàng 66'
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header với icon và tiêu đề */}
        <div className="bg-white rounded-lg shadow-sm mb-6">
          <div className="flex items-center p-6 pb-4">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
              <svg 
                className="w-6 h-6 text-white" 
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path d="M10 12l-2-2h4l-2 2z"/>
                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm2 1v10h10V5H5z" clipRule="evenodd"/>
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-blue-600">Chuẩn đầu ra ngoại ngữ</h1>
          </div>

          {/* Dropdown chọn chương trình đào tạo */}
          <div className="px-6 pb-6">
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700 mb-2">Chương trình đào tạo</label>
              <select 
                value={selectedProgram}
                onChange={(e) => setSelectedProgram(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent max-w-md"
              >
                {programs.map(program => (
                  <option key={program} value={program}>{program}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Bảng dữ liệu */}
          <div className="px-6 pb-6">
            <div className="bg-white rounded-lg overflow-hidden border border-gray-200">
              <table className="w-full">
                <thead>
                  <tr className="bg-blue-600 text-white">
                    <th className="px-4 py-4 text-center text-sm font-semibold border-r border-blue-500">
                      Mã sinh<br />viên
                    </th>
                    <th className="px-4 py-4 text-center text-sm font-semibold border-r border-blue-500">
                      Họ tên
                    </th>
                    <th className="px-4 py-4 text-center text-sm font-semibold border-r border-blue-500">
                      Ngày sinh
                    </th>
                    <th className="px-4 py-4 text-center text-sm font-semibold border-r border-blue-500">
                      Nơi sinh
                    </th>
                    <th className="px-4 py-4 text-center text-sm font-semibold border-r border-blue-500">
                      Giới<br />tính
                    </th>
                    <th className="px-4 py-4 text-center text-sm font-semibold border-r border-blue-500">
                      Loại chứng<br />chỉ
                    </th>
                    <th className="px-4 py-4 text-center text-sm font-semibold border-r border-blue-500">
                      Số quyết định
                    </th>
                    <th className="px-4 py-4 text-center text-sm font-semibold">
                      Ngày quyết<br />định
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {languageStandards.map((standard, index) => (
                    <tr key={standard.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-4 py-4 text-center text-sm text-gray-900 border-r border-gray-200">
                        {standard.studentId}
                      </td>
                      <td className="px-4 py-4 text-center text-sm text-gray-900 border-r border-gray-200">
                        {standard.fullName}
                      </td>
                      <td className="px-4 py-4 text-center text-sm text-gray-900 border-r border-gray-200">
                        {standard.birthDate}
                      </td>
                      <td className="px-4 py-4 text-center text-sm text-gray-900 border-r border-gray-200">
                        {standard.birthPlace}
                      </td>
                      <td className="px-4 py-4 text-center text-sm text-gray-900 border-r border-gray-200">
                        {standard.gender}
                      </td>
                      <td className="px-4 py-4 text-center text-sm text-gray-900 border-r border-gray-200">
                        {standard.certificateType}
                      </td>
                      <td className="px-4 py-4 text-center text-sm text-gray-900 border-r border-gray-200">
                        {standard.certificateNumber}
                      </td>
                      <td className="px-4 py-4 text-center text-sm text-gray-900">
                        {standard.issueDate}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Floating Action Button */}
        <div className="fixed bottom-6 right-6">
          <button className="w-14 h-14 bg-blue-600 hover:bg-blue-700 rounded-full shadow-lg flex items-center justify-center transition-colors">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChuanDauRaNgoaiNgu;