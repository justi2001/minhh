'use client'
import React, { useState } from 'react';

interface Decision {
  id: string;
  year: string;
  semester: string;
  decisionNumber: string;
  decisionType: string;
  content: string;
  signer: string;
  signDate: string;
}

const QuyetDinhSinhVien: React.FC = () => {
  // Dữ liệu mẫu
  const [decisions] = useState<Decision[]>([
    {
      id: '1',
      year: '2024-2025',
      semester: 'HK01',
      decisionNumber: '999/QĐ-ĐHKTQĐ_12092024',
      decisionType: 'Quyết định khác',
      content: 'Quyết định sinh viên chính thức',
      signer: 'GS.TS Phạm Hòng Chương',
      signDate: '12/09/2024'
    }
  ]);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header với icon và tiêu đề */}
        <div className="bg-white rounded-lg shadow-sm">
          <div className="flex items-center p-6 pb-0">
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
            <h1 className="text-2xl font-bold text-blue-600">Quyết định sinh viên</h1>
          </div>

          {/* Bảng dữ liệu */}
          <div className="p-6">
            <div className="bg-white rounded-lg overflow-hidden border border-gray-200">
              <table className="w-full">
                <thead>
                  <tr className="bg-blue-600 text-white">
                    <th className="px-4 py-4 text-center text-sm font-semibold border-r border-blue-500">
                      Năm học
                    </th>
                    <th className="px-4 py-4 text-center text-sm font-semibold border-r border-blue-500">
                      Học<br />kỳ
                    </th>
                    <th className="px-4 py-4 text-center text-sm font-semibold border-r border-blue-500">
                      Số quyết định
                    </th>
                    <th className="px-4 py-4 text-center text-sm font-semibold border-r border-blue-500">
                      Loại quyết<br />định
                    </th>
                    <th className="px-4 py-4 text-center text-sm font-semibold border-r border-blue-500">
                      Nội dung
                    </th>
                    <th className="px-4 py-4 text-center text-sm font-semibold border-r border-blue-500">
                      Người ký
                    </th>
                    <th className="px-4 py-4 text-center text-sm font-semibold">
                      Ngày ký
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {decisions.map((decision, index) => (
                    <tr key={decision.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-4 py-4 text-center text-sm text-gray-900 border-r border-gray-200">
                        {decision.year}
                      </td>
                      <td className="px-4 py-4 text-center text-sm text-gray-900 border-r border-gray-200">
                        {decision.semester}
                      </td>
                      <td className="px-4 py-4 text-center text-sm text-gray-900 border-r border-gray-200">
                        {decision.decisionNumber}
                      </td>
                      <td className="px-4 py-4 text-center text-sm text-gray-900 border-r border-gray-200">
                        {decision.decisionType}
                      </td>
                      <td className="px-4 py-4 text-center text-sm text-gray-900 border-r border-gray-200">
                        {decision.content}
                      </td>
                      <td className="px-4 py-4 text-center text-sm text-gray-900 border-r border-gray-200">
                        {decision.signer}
                      </td>
                      <td className="px-4 py-4 text-center text-sm text-gray-900">
                        {decision.signDate}
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

export default QuyetDinhSinhVien;