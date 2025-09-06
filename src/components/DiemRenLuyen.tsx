import React, { useState } from 'react';

interface TrainingScore {
  id: string;
  stt: number;
  semester: string;
  selfAssessment: number;
  classAssessment: number;
  departmentAssessment: number;
  schoolAssessment: number;
  classification: string;
}

interface YearData {
  year: string;
  totalScore: number;
  classification: string;
  semesters: TrainingScore[];
}

const DiemRenLuyen: React.FC = () => {
  // Dữ liệu mẫu
  const [yearData] = useState<YearData>({
    year: '2024-2025',
    totalScore: 80,
    classification: 'Tốt',
    semesters: [
      {
        id: '1',
        stt: 1,
        semester: 'HK01',
        selfAssessment: 80,
        classAssessment: 80,
        departmentAssessment: 80,
        schoolAssessment: 80,
        classification: 'Tốt'
      }
    ]
  });

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
            <h1 className="text-2xl font-bold text-blue-600">Điểm rèn luyện sinh viên</h1>
          </div>

          {/* Bảng dữ liệu */}
          <div className="p-6">
            <div className="bg-white rounded-lg overflow-hidden border border-gray-200">
              <table className="w-full">
                <thead>
                  <tr className="bg-blue-600 text-white">
                    <th className="px-4 py-4 text-center text-sm font-semibold border-r border-blue-500 w-16">
                      STT
                    </th>
                    <th className="px-4 py-4 text-center text-sm font-semibold border-r border-blue-500 w-24">
                      Học<br />kỳ
                    </th>
                    <th className="px-4 py-4 text-center text-sm font-semibold border-r border-blue-500">
                      ĐRL sinh viên tự đánh giá<br />online
                    </th>
                    <th className="px-4 py-4 text-center text-sm font-semibold border-r border-blue-500">
                      ĐRL cấp<br />Lớp
                    </th>
                    <th className="px-4 py-4 text-center text-sm font-semibold border-r border-blue-500">
                      ĐRL cấp<br />Khoa/Viện
                    </th>
                    <th className="px-4 py-4 text-center text-sm font-semibold border-r border-blue-500">
                      ĐRL cấp<br />Trường
                    </th>
                    <th className="px-4 py-4 text-center text-sm font-semibold">
                      Xếp loại ĐRL cấp<br />Trường
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* Header thông tin năm học */}
                  <tr className="bg-pink-100">
                    <td colSpan={7} className="px-4 py-3">
                      <div className="space-y-1">
                        <div className="font-semibold text-gray-800">
                          Năm học: {yearData.year}
                        </div>
                        <div className="font-semibold text-gray-800">
                          Điểm rèn luyện cả năm học: {yearData.totalScore}
                        </div>
                        <div className="font-semibold text-gray-800">
                          Xếp loại rèn luyện cả năm học: {yearData.classification}
                        </div>
                      </div>
                    </td>
                  </tr>
                  
                  {/* Dữ liệu từng học kỳ */}
                  {yearData.semesters.map((semester, index) => (
                    <tr key={semester.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-4 py-4 text-center text-sm text-gray-900 border-r border-gray-200">
                        {semester.stt}
                      </td>
                      <td className="px-4 py-4 text-center text-sm text-gray-900 border-r border-gray-200">
                        {semester.semester}
                      </td>
                      <td className="px-4 py-4 text-center text-sm text-gray-900 border-r border-gray-200">
                        {/* Cột này để trống theo hình */}
                      </td>
                      <td className="px-4 py-4 text-center text-sm text-gray-900 border-r border-gray-200">
                        {semester.classAssessment}
                      </td>
                      <td className="px-4 py-4 text-center text-sm text-gray-900 border-r border-gray-200">
                        {semester.departmentAssessment}
                      </td>
                      <td className="px-4 py-4 text-center text-sm text-gray-900 border-r border-gray-200">
                        {semester.schoolAssessment}
                      </td>
                      <td className="px-4 py-4 text-center text-sm text-gray-900">
                        {semester.classification}
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

export default DiemRenLuyen;