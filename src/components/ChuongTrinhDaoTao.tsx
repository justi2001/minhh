'use client'
import React, { useState } from 'react';

interface Subject {
  id: string;
  stt: number;
  subjectCode: string;
  subjectName: string;
  credits: number;
  prerequisiteCode?: string;
  prerequisiteName?: string;
  note: string;
}

interface SubjectGroup {
  id: string;
  name: string;
  type: 'required' | 'elective' | 'major' | 'specialization';
  totalCredits: number;
  subjects: Subject[];
}

const ChuongTrinhDaoTao: React.FC = () => {
  // Dữ liệu mẫu theo các nhóm từ hình
  const [subjectGroups] = useState<SubjectGroup[]>([
    {
      id: '1',
      name: 'Khối kiến thức giáo dục đại cương',
      type: 'required',
      totalCredits: 64,
      subjects: [
        { id: '1', stt: 1, subjectCode: 'GĐTC1101', subjectName: 'Giáo dục thể chất 1 (*)', credits: 2, note: 'Cần điểm để đăng ký' },
        { id: '2', stt: 2, subjectCode: 'GĐTC1102', subjectName: 'Bóng chuyền 1 (*)', credits: 2, note: 'Cần điểm để đăng ký' },
        { id: '3', stt: 3, subjectCode: 'GĐTC1104', subjectName: 'Bóng chuyền 2 (*)', credits: 2, note: 'Cần điểm để đăng ký' },
        { id: '4', stt: 4, subjectCode: 'GĐTC1105', subjectName: 'Bóng chuyền 3 (*)', credits: 2, note: 'Cần điểm để đăng ký' },
        { id: '5', stt: 5, subjectCode: 'GĐTC1106', subjectName: 'Bóng rổ 1 (*)', credits: 2, note: 'Cần điểm để đăng ký' },
        { id: '6', stt: 6, subjectCode: 'GĐTC1107', subjectName: 'Bóng rổ 2 (*)', credits: 2, note: 'Cần điểm để đăng ký' }
      ]
    },
    {
      id: '2', 
      name: 'Khối kiến thức giáo dục cơ sở ngành',
      type: 'major',
      totalCredits: 64,
      subjects: [
        { id: '33', stt: 33, subjectCode: 'NNNL1100', subjectName: 'Kiến thức tiếng Anh (Bậc cao) (*)', credits: 0, note: 'Khoa Ngoại ngữ Anh M' },
        { id: '34', stt: 34, subjectCode: 'NNNL1101', subjectName: 'Chuẩn bị Anh (Bậc cơ sở) (*)', credits: 2, note: 'Khoa Ngoại ngữ Anh M' }
      ]
    },
    {
      id: '3',
      name: 'Thực tập',
      type: 'required',
      totalCredits: 15,
      subjects: [
        { id: '60', stt: 60, subjectCode: 'TK&TT128', subjectName: 'Khóa luận tốt nghiệp - Thủng kế kiến tạo', credits: 10, note: 'Khoa Thiết kế' }
      ]
    },
    {
      id: '4',
      name: 'Thực tập tốt nghiệp',
      type: 'required', 
      totalCredits: 5,
      subjects: [
        { id: '61', stt: 61, subjectCode: 'NNNL115', subjectName: 'Tiếng Anh thông dụng (chuẩn đầu ra)', credits: 0, note: 'Cần điểm để đăng ký' }
      ]
    },
    {
      id: '5',
      name: 'Khối phần chung',
      type: 'required',
      totalCredits: 14,
      subjects: [
        { id: '62', stt: 62, subjectCode: 'GDQPAN', subjectName: 'GIÁO DỤC QUỐC PHÒNG VÀ AN NINH (*)', credits: 0, note: 'Khoa Giáo dục quốc phòng' },
        { id: '63', stt: 63, subjectCode: 'LLS&T102', subjectName: 'Lịch sử Đảng Cộng sản Việt Nam', credits: 3, prerequisiteCode: 'LLS&T107', note: 'Khoa Lý luận chính trị' }
      ]
    }
  ]);

  const getGroupBackgroundColor = (type: string) => {
    switch(type) {
      case 'required': return 'bg-orange-300';
      case 'elective': return 'bg-blue-200'; 
      case 'major': return 'bg-orange-300';
      case 'specialization': return 'bg-orange-300';
      default: return 'bg-gray-200';
    }
  };

  const getTotalCredits = () => {
    return subjectGroups.reduce((sum, group) => sum + group.totalCredits, 0);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-full mx-auto">
        {/* Bảng dữ liệu */}
        <div className="bg-white rounded-lg overflow-hidden border border-gray-200">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="px-3 py-3 text-center font-semibold border-r border-blue-500 w-12">STT</th>
                <th className="px-3 py-3 text-center font-semibold border-r border-blue-500 w-24">MÃ HỌC PHẦN</th>
                <th className="px-3 py-3 text-center font-semibold border-r border-blue-500">TÊN HỌC PHẦN</th>
                <th className="px-3 py-3 text-center font-semibold border-r border-blue-500 w-16">SỐ TC</th>
                <th className="px-3 py-3 text-center font-semibold border-r border-blue-500 w-20">
                  <div>SỐ TIẾT</div>
                  <div className="text-xs mt-1">Lý thuyết - Thực hành</div>
                </th>
                <th className="px-3 py-3 text-center font-semibold border-r border-blue-500">HỌC PHẦN TIÊN QUYẾT</th>
                <th className="px-3 py-3 text-center font-semibold border-r border-blue-500">HỌC PHẦN HỌC TRƯỚC</th>
                <th className="px-3 py-3 text-center font-semibold border-r border-blue-500">KHOA/VIỆN</th>
                <th className="px-3 py-3 text-center font-semibold w-20">BỒ CƯỜNG</th>
              </tr>
            </thead>
            <tbody>
              {subjectGroups.map((group, groupIndex) => (
                <React.Fragment key={group.id}>
                  {/* Header nhóm */}
                  <tr className={getGroupBackgroundColor(group.type)}>
                    <td colSpan={9} className="px-4 py-2">
                      <div className="font-semibold text-gray-800">
                        {groupIndex + 1}. {group.name}
                      </div>
                    </td>
                  </tr>
                  
                  {/* Header "Tự Chọn" nếu cần */}
                  <tr className="bg-blue-200">
                    <td colSpan={9} className="px-4 py-2 text-sm font-medium">
                      Tự Chọn
                    </td>
                  </tr>

                  {/* Các môn học trong nhóm */}
                  {group.subjects.map((subject, index) => (
                    <tr key={subject.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-3 py-2 text-center border-r border-gray-200">{subject.stt}</td>
                      <td className="px-3 py-2 text-center border-r border-gray-200">{subject.subjectCode}</td>
                      <td className="px-3 py-2 border-r border-gray-200">{subject.subjectName}</td>
                      <td className="px-3 py-2 text-center border-r border-gray-200">{subject.credits}</td>
                      <td className="px-3 py-2 text-center border-r border-gray-200">
                        {subject.credits > 0 ? `${subject.credits * 15}` : ''}
                      </td>
                      <td className="px-3 py-2 text-center border-r border-gray-200">
                        {subject.prerequisiteCode || ''}
                      </td>
                      <td className="px-3 py-2 text-center border-r border-gray-200">
                        {subject.prerequisiteName || ''}
                      </td>
                      <td className="px-3 py-2 border-r border-gray-200">{subject.note}</td>
                      <td className="px-3 py-2 text-center">
                        <button className="w-6 h-6 bg-blue-500 text-white text-xs rounded flex items-center justify-center">
                          📋
                        </button>
                      </td>
                    </tr>
                  ))}

                  {/* Tổng tín chỉ của nhóm */}
                  <tr className="bg-yellow-100">
                    <td colSpan={3} className="px-4 py-2 font-medium">
                      Tự Chọn
                    </td>
                    <td className="px-3 py-2 text-center font-bold text-red-600">
                      {group.totalCredits}
                    </td>
                    <td colSpan={5}></td>
                  </tr>
                  
                  <tr className="bg-yellow-100">
                    <td colSpan={3} className="px-4 py-2 font-medium">
                      Tổng
                    </td>
                    <td className="px-3 py-2 text-center font-bold text-red-600">
                      {group.totalCredits}
                    </td>
                    <td colSpan={5}></td>
                  </tr>
                </React.Fragment>
              ))}

              {/* Tổng cộng cuối bảng */}
              <tr className="bg-yellow-200">
                <td colSpan={3} className="px-4 py-3 font-bold text-lg">
                  Tổng
                </td>
                <td className="px-3 py-3 text-center font-bold text-red-600 text-lg">
                  {getTotalCredits()}
                </td>
                <td colSpan={5}></td>
              </tr>
            </tbody>
          </table>
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

export default ChuongTrinhDaoTao;