import React, { useState } from 'react';

interface Student {
  id: string;
  classCode: string;
  className: string;
  studentCount: number;
  scheduleDay: string;
  scheduleTime: string;
  room: string;
  period: string;
  attendanceVang: number;
  attendanceTre: number;
}

const ChuyenCan: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState<string>('2025-2026');
  const [selectedSemester, setSelectedSemester] = useState<string>('Học kỳ 1');
  
  // Dữ liệu mẫu - trong thực tế sẽ fetch từ API
  const [students] = useState<Student[]>([]);
  
  const years = ['2024-2025', '2025-2026', '2026-2027'];
  const semesters = ['Học kỳ 1', 'Học kỳ 2', 'Học kỳ hè'];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header với icon và tiêu đề */}
        <div className="bg-white rounded-lg shadow-sm mb-6 p-6">
          <div className="flex items-center mb-6">
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
            <h1 className="text-2xl font-bold text-blue-600">Điểm danh sinh viên</h1>
          </div>

          {/* Bộ lọc */}
          <div className="flex gap-4 mb-6">
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700 mb-2">Năm học</label>
              <select 
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent min-w-[160px]"
              >
                {years.map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>
            
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700 mb-2">Học kỳ</label>
              <select 
                value={selectedSemester}
                onChange={(e) => setSelectedSemester(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent min-w-[160px]"
              >
                {semesters.map(semester => (
                  <option key={semester} value={semester}>{semester}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Bảng dữ liệu */}
          <div className="bg-white rounded-lg overflow-hidden border border-gray-200">
            <table className="w-full">
              <thead>
                <tr className="bg-blue-600 text-white">
                  <th className="px-6 py-4 text-left text-sm font-semibold">Mã lớp học phần</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Tên lớp học phần</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Số TC</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold border-l border-blue-500">
                    <div className="text-center">Thời gian học</div>
                    <div className="grid grid-cols-3 mt-2 border-t border-blue-500">
                      <div className="py-1 text-xs border-r border-blue-500">Ngày</div>
                      <div className="py-1 text-xs border-r border-blue-500">Thứ</div>
                      <div className="py-1 text-xs">Phòng học</div>
                    </div>
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Tiết</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold border-l border-blue-500">
                    <div className="text-center">Điểm danh</div>
                    <div className="grid grid-cols-2 mt-2 border-t border-blue-500">
                      <div className="py-1 text-xs border-r border-blue-500">Trễ</div>
                      <div className="py-1 text-xs">Vắng</div>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {students.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="px-6 py-12 text-center text-gray-500 bg-gray-50">
                      Chưa có thông tin điểm danh
                    </td>
                  </tr>
                ) : (
                  students.map((student, index) => (
                    <tr key={student.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-6 py-4 text-sm text-gray-900">{student.classCode}</td>
                      <td className="px-6 py-4 text-sm text-gray-900">{student.className}</td>
                      <td className="px-6 py-4 text-sm text-gray-900">{student.studentCount}</td>
                      <td className="px-6 py-4 text-sm text-gray-900 border-l border-gray-200">
                        <div className="grid grid-cols-3 gap-2">
                          <div>{student.scheduleDay}</div>
                          <div>{student.scheduleTime}</div>
                          <div>{student.room}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900">{student.period}</td>
                      <td className="px-6 py-4 text-sm text-gray-900 border-l border-gray-200">
                        <div className="grid grid-cols-2 gap-2 text-center">
                          <div className="text-red-600 font-medium">{student.attendanceTre}</div>
                          <div className="text-red-600 font-medium">{student.attendanceVang}</div>
                        </div>
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
          <button className="w-14 h-14 bg-blue-600 hover:bg-blue-700 rounded-full shadow-lg flex items-center justify-center transition-colors">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChuyenCan;