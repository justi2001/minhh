'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp, ChevronRight, Check, X } from 'lucide-react';

interface SubjectDetail {
  stt: number;
  component: string;
  weight: string;
  score1?: number;
  score2?: number;
  score3?: number;
}

interface Subject {
  id: number;
  code: string;
  name: string;
  credits: number;
  grade10?: number;
  grade4?: number;
  letterGrade?: string;
  passed: boolean;
  isEnglish?: boolean;
  details?: SubjectDetail[];
}

interface SemesterData {
  semester: string;
  subjects: Subject[];
  stats: {
    totalCredits: number;
    passedCredits: number;
    failedCredits: number;
    gpa10: number;
    gpa4: number;
    cumulativeGpa10?: number;
    cumulativeGpa4?: number;
    trainingLevel?: string;
    classification?: string;
  };
}

const KetQuaHocTap: React.FC = () => {
  const [selectedProgram, setSelectedProgram] = useState('Thống kê kinh tế 66');
  const [viewMode, setViewMode] = useState<'student' | 'program'>('student');
  const [expandedSubjects, setExpandedSubjects] = useState<number[]>([]);

  // Dữ liệu mẫu dựa trên hình ảnh
  const semesterData: SemesterData[] = [
    {
      semester: 'HK01',
      subjects: [
        { 
          id: 1, 
          code: 'GDTC1103', 
          name: 'Bóng chuyền 1', 
          credits: 2, 
          grade10: 8.1, 
          grade4: 3.5, 
          letterGrade: 'B+', 
          passed: true,
          isEnglish: true,
          details: [
            { stt: 1, component: 'Điểm Chuyên cần', weight: '10%', score1: 9 },
            { stt: 2, component: 'Điểm Kiểm tra thường xuyên 1', weight: '40%', score1: 8 },
            { stt: 3, component: 'Điểm thi kết thúc học phần', weight: '50%', score1: 8 }
          ]
        },
        { 
          id: 2, 
          code: 'GDTC1118', 
          name: 'Bóng bàn 1', 
          credits: 2, 
          grade10: 7.6, 
          grade4: 3, 
          letterGrade: 'B', 
          passed: true,
          isEnglish: true,
          details: [
            { stt: 1, component: 'Điểm Chuyên cần', weight: '10%', score1: 8 },
            { stt: 2, component: 'Điểm Kiểm tra thường xuyên 1', weight: '40%', score1: 7 },
            { stt: 3, component: 'Điểm thi kết thúc học phần', weight: '50%', score1: 8 }
          ]
        },
        { 
          id: 3, 
          code: 'KHMA1101', 
          name: 'Kinh tế vĩ mô 1', 
          credits: 3, 
          grade10: 5.7, 
          grade4: 2, 
          letterGrade: 'C', 
          passed: true,
          details: [
            { stt: 1, component: 'Điểm Chuyên cần', weight: '10%', score1: 10 },
            { stt: 2, component: 'Điểm Kiểm tra thường xuyên 1', weight: '40%', score1: 6 },
            { stt: 3, component: 'Điểm thi kết thúc học phần', weight: '50%', score1: 4.6 }
          ]
        },
        { 
          id: 4, 
          code: 'KHMI1101', 
          name: 'Kinh tế vi mô 1', 
          credits: 3, 
          grade10: 0, 
          grade4: 0, 
          letterGrade: '', 
          passed: false 
        },
        { 
          id: 5, 
          code: 'TIHT1102', 
          name: 'Hệ thống thông tin quản lý', 
          credits: 3, 
          grade10: 8.1, 
          grade4: 3.5, 
          letterGrade: 'B+', 
          passed: true,
          details: [
            { stt: 1, component: 'Điểm Chuyên cần', weight: '10%', score1: 10 },
            { stt: 2, component: 'Điểm Kiểm tra thường xuyên 1', weight: '40%', score1: 9 },
            { stt: 3, component: 'Điểm thi kết thúc học phần', weight: '50%', score1: 7 }
          ]
        },
        { 
          id: 6, 
          code: 'TOCB1101', 
          name: 'Đại số', 
          credits: 3, 
          grade10: 6.2, 
          grade4: 2, 
          letterGrade: 'C', 
          passed: true,
          details: [
            { stt: 1, component: 'Điểm Chuyên cần', weight: '10%', score1: 10 },
            { stt: 2, component: 'Điểm Chuyên cần', weight: '10%', score1: 9 },
            { stt: 3, component: 'Điểm Kiểm tra thường xuyên 1', weight: '40%', score1: 5.5 },
            { stt: 4, component: 'Điểm Kiểm tra thường xuyên 1', weight: '40%', score1: 5 },
            { stt: 5, component: 'Điểm thi kết thúc học phần', weight: '50%', score1: 6 }
          ]
        },
        { 
          id: 7, 
          code: 'TOCB1101', 
          name: 'Đại số', 
          credits: 3, 
          grade10: 6.2, 
          grade4: 2, 
          letterGrade: 'C', 
          passed: true 
        },
        { 
          id: 8, 
          code: 'TOKT1105', 
          name: 'Lý thuyết xác suất', 
          credits: 3, 
          grade10: 4.9, 
          grade4: 1, 
          letterGrade: 'D', 
          passed: true,
          details: [
            { stt: 1, component: 'Điểm Chuyên cần', weight: '10%', score1: 8 },
            { stt: 2, component: 'Điểm Kiểm tra thường xuyên 1', weight: '40%', score1: 6.5 },
            { stt: 3, component: 'Điểm thi kết thúc học phần', weight: '50%', score1: 3 }
          ]
        }
      ],
      stats: {
        totalCredits: 12,
        passedCredits: 12,
        failedCredits: 0,
        gpa10: 6.23,
        gpa4: 2.13,
        cumulativeGpa10: 6.23,
        cumulativeGpa4: 2.13,
        trainingLevel: '80 - Xếp loại (RL): Tốt'
      }
    },
    {
      semester: 'HK02',
      subjects: [
        { 
          id: 9, 
          code: 'GDTC1104', 
          name: 'Bóng chuyền 2', 
          credits: 2, 
          grade10: 7.8, 
          grade4: 3, 
          letterGrade: 'B', 
          passed: true,
          isEnglish: true,
          details: [
            { stt: 1, component: 'Điểm Chuyên cần', weight: '10%', score1: 10 },
            { stt: 2, component: 'Điểm Kiểm tra thường xuyên 1', weight: '40%', score1: 7 },
            { stt: 3, component: 'Điểm thi kết thúc học phần', weight: '50%', score1: 8 }
          ]
        },
        { 
          id: 10, 
          code: 'KHMI1101', 
          name: 'Kinh tế vi mô 1', 
          credits: 3, 
          grade10: 8.0, 
          grade4: 3.5, 
          letterGrade: 'B+', 
          passed: true,
          details: [
            { stt: 1, component: 'Điểm thi kết thúc học phần', weight: '50%', score1: 5.75 }
          ]
        },
        { 
          id: 11, 
          code: 'LUCS1129', 
          name: 'Pháp luật đại cương', 
          credits: 3, 
          grade10: 8.5, 
          grade4: 4.0, 
          letterGrade: 'A', 
          passed: true,
          details: [
            { stt: 1, component: 'Điểm Chuyên cần', weight: '10%', score1: 9 },
            { stt: 2, component: 'Điểm Kiểm tra thường xuyên 1', weight: '40%', score1: 6 },
            { stt: 3, component: 'Điểm thi kết thúc học phần', weight: '50%', score1: 2.5 }
          ]
        },
        { 
          id: 12, 
          code: 'QTTH1102', 
          name: 'Quản trị kinh doanh 1', 
          credits: 3, 
          grade10: 7.5, 
          grade4: 3.0, 
          letterGrade: 'B', 
          passed: true,
          details: [
            { stt: 1, component: 'Điểm thi kết thúc học phần', weight: '50%', score1: 5.25 }
          ]
        },
        { 
          id: 13, 
          code: 'TIKT1130', 
          name: 'Cơ sở dữ liệu', 
          credits: 3, 
          grade10: 7.9, 
          grade4: 3, 
          letterGrade: 'B', 
          passed: true,
          details: [
            { stt: 1, component: 'Điểm Chuyên cần', weight: '10%', score1: 10 },
            { stt: 2, component: 'Điểm Kiểm tra thường xuyên 1', weight: '40%', score1: 9 },
            { stt: 3, component: 'Điểm thi kết thúc học phần', weight: '50%', score1: 6.5 }
          ]
        },
        { 
          id: 14, 
          code: 'TKKD1101', 
          name: 'Lý thuyết thống kê 1', 
          credits: 3, 
          grade10: 8.7, 
          grade4: 4.0, 
          letterGrade: 'A', 
          passed: true,
          details: [
            { stt: 1, component: 'Điểm Chuyên cần', weight: '10%', score1: 9 },
            { stt: 2, component: 'Điểm Kiểm tra thường xuyên 1', weight: '40%', score1: 7.5 },
            { stt: 3, component: 'Điểm thi kết thúc học phần', weight: '50%', score1: 0 }
          ]
        },
        { 
          id: 15, 
          code: 'TOCB1110', 
          name: 'Toán cho các nhà kinh tế', 
          credits: 3, 
          grade10: 7.2, 
          grade4: 3.0, 
          letterGrade: 'B', 
          passed: true,
          details: [
            { stt: 1, component: 'Điểm thi kết thúc học phần', weight: '50%', score1: 5.75 }
          ]
        }
      ],
      stats: {
        totalCredits: 20,
        passedCredits: 26,
        failedCredits: 0,
        gpa10: 8.45,
        gpa4: 3.38,
        cumulativeGpa10: 8.45,
        cumulativeGpa4: 3.38
      }
    }
  ];

  const year2025Subjects: Subject[] = [
    { id: 16, code: 'CNTT1128', name: 'Cơ sở lập trình', credits: 3, passed: false, details: [] },
    { id: 17, code: 'DTKT1154', name: 'Kinh tế đầu tư', credits: 3, passed: false, details: [] },
    { id: 18, code: 'GDTC1051', name: 'Bóng chuyền 3', credits: 2, passed: false, isEnglish: true, details: [] },
    { id: 19, code: 'LLNL1106', name: 'Kinh tế chính trị Mác - Lênin', credits: 2, passed: false, details: [] },
    { id: 20, code: 'PTKT1128', name: 'Kinh tế phát triển', credits: 3, passed: false, details: [] },
    { id: 21, code: 'PTKT1128', name: 'Kinh tế phát triển', credits: 3, passed: false, details: [] },
    { id: 22, code: 'TKKD1102', name: 'Lý thuyết thống kê 2', credits: 3, passed: false, details: [] },
    { id: 23, code: 'TMKQ1123', name: 'Kinh tế quốc tế', credits: 3, passed: false, details: [] },
  ];

  const toggleSubjectDetails = (subjectId: number) => {
    setExpandedSubjects(prev => 
      prev.includes(subjectId) 
        ? prev.filter(id => id !== subjectId)
        : [...prev, subjectId]
    );
  };

  const totalStats = {
    totalCredits: 58,
    passedCredits: 38,
    gpa10Overall: 7.1,
    gpa4Overall: 2.84,
    cumulativeGpa10: 7.1,
    cumulativeGpa4: 2.84
  };

  const renderSubjectRow = (subject: Subject, index: number, globalIndex: number) => (
    <React.Fragment key={subject.id}>
      <tr className="border-b border-gray-200 hover:bg-gray-50">
        <td className="px-4 py-3">{globalIndex}</td>
        <td className="px-4 py-3 font-medium">{subject.code}</td>
        <td className="px-4 py-3 ">
          {subject.name} {subject.isEnglish && <span className="text-red-500">*</span>}
        </td>
        <td className="px-4 py-3 text-left">{subject.credits}</td>
        <td className="px-4 py-3 text-left">{subject.grade10 || ''}</td>
        <td className="px-4 py-3 text-left">{subject.grade4 || ''}</td>
        <td className="px-4 py-3 text-left">{subject.letterGrade}</td>
        <td className="px-4 py-3 text-left">
          {/* {subject.passed ? (
            <Check className="w-5 h-5 text-green-600 mx-auto" />
          ) : (
            <X className="w-5 h-5 text-red-600 mx-auto" />
          )} */}
          {subject.passed && (
  <Check className="w-5 h-5 text-green-600 mx-auto" />
)}
        </td>
        <td className="px-4 py-3"></td>
        <td className="px-4 py-3 text-center">
          <button 
            onClick={() => toggleSubjectDetails(subject.id)}
            className="text-gray-400 hover:text-gray-600"
          >
            {expandedSubjects.includes(subject.id) ? (
              <ChevronUp className="w-4 h-4 mx-auto" />
            ) : (
              <ChevronDown className="w-4 h-4 mx-auto" />
            )}
          </button>
        </td>
      </tr>
      
      {/* Subject Details */}
      {expandedSubjects.includes(subject.id) && subject.details && subject.details.length > 0 && (
        <tr className="bg-teal-50">
          <td colSpan={10} className="p-0">
            <div className="mx-4 mb-4">
              <div className="bg-teal-700 text-white p-2 text-sm font-medium">
                Chi tiết học phần: {subject.code} - {subject.name} {subject.isEnglish && <span className="text-red-300">*</span>}
              </div>
              <div className="bg-white border border-teal-200">
                <table className="w-full text-sm">
                  <thead className="bg-teal-600 text-white">
                    <tr>
                      <th className="px-4 py-2 text-center font-medium">STT</th>
                      <th className="px-4 py-2 text-left font-medium">Tên thành phần</th>
                      <th className="px-4 py-2 text-center font-medium">Trọng số</th>
                      <th className="px-4 py-2 text-center font-medium">Điểm lần 1</th>
                      <th className="px-4 py-2 text-center font-medium">Điểm lần 2</th>
                      <th className="px-4 py-2 text-center font-medium">Điểm lần 3</th>
                    </tr>
                  </thead>
                  <tbody>
                    {subject.details.length > 0 ? (
                      subject.details.map((detail) => (
                        <tr key={detail.stt} className="border-b border-gray-200">
                          <td className="px-4 py-2 text-center">{detail.stt}</td>
                          <td className="px-4 py-2">{detail.component}</td>
                          <td className="px-4 py-2 text-center">{detail.weight}</td>
                          <td className="px-4 py-2 text-center">{detail.score1 || ''}</td>
                          <td className="px-4 py-2 text-center">{detail.score2 || ''}</td>
                          <td className="px-4 py-2 text-center">{detail.score3 || ''}</td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={6} className="px-4 py-4 text-center text-gray-500">
                          Không có dữ liệu
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </td>
        </tr>
      )}
      
      {/* Empty details for subjects without data */}
      {expandedSubjects.includes(subject.id) && (!subject.details || subject.details.length === 0) && (
        <tr className="bg-teal-50">
          <td colSpan={10} className="p-0">
            <div className="mx-4 mb-4">
              <div className="bg-teal-700 text-white p-2 text-sm font-medium">
                Chi tiết học phần: {subject.code} - {subject.name} {subject.isEnglish && <span className="text-red-300">*</span>}
              </div>
              <div className="bg-white border border-teal-200">
                <table className="w-full text-sm">
                  <thead className="bg-teal-600 text-white">
                    <tr>
                      <th className="px-4 py-2 text-center font-medium">STT</th>
                      <th className="px-4 py-2 text-left font-medium">Tên thành phần</th>
                      <th className="px-4 py-2 text-center font-medium">Trọng số</th>
                      <th className="px-4 py-2 text-center font-medium">Điểm lần 1</th>
                      <th className="px-4 py-2 text-center font-medium">Điểm lần 2</th>
                      <th className="px-4 py-2 text-center font-medium">Điểm lần 3</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td colSpan={6} className="px-4 py-4 text-center text-gray-500">
                        Không có dữ liệu
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </td>
        </tr>
      )}
    </React.Fragment>
  );

  return (
    <div className="max-w-7xl mx-auto p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-sm mb-6">
        <div className="flex items-center p-4 border-b border-gray-200">
          <div className="bg-blue-600 rounded-full p-2 mr-3">
            <ChevronRight className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-2xl font-semibold text-blue-600">Kết quả học tập</h1>
        </div>

        {/* Controls */}
        <div className="p-4 space-y-4">
              <label className="text-sm text-gray-600 mb-1 block">Chương trình đào tạo</label>
          <div className="flex items-center space-x-4">
            <div className="flex-1">
              <select 
                value={selectedProgram}
                onChange={(e) => setSelectedProgram(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option>Thống kê kinh tế 66</option>
              </select>
            </div>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md font-medium transition-colors">
              In bảng điểm
            </button>
          </div>

          <div className="flex items-center space-x-6">
            <label className="flex items-center space-x-2">
              <input 
                type="radio" 
                name="viewMode" 
                value="student"
                checked={viewMode === 'student'}
                onChange={(e) => setViewMode(e.target.value as 'student')}
                className="w-4 h-4 text-blue-600"
              />
              <span className="text-sm">Xem điểm sinh viên</span>
            </label>
            <label className="flex items-center space-x-2">
              <input 
                type="radio" 
                name="viewMode" 
                value="program"
                checked={viewMode === 'program'}
                onChange={(e) => setViewMode(e.target.value as 'program')}
                className="w-4 h-4 text-blue-600"
              />
              <span className="text-sm">Xem điểm theo chương trình đào tạo</span>
            </label>
          </div>
        </div>

        {/* Note */}
        <div className="bg-blue-50 p-4 m-4 rounded-md">
          <p className="text-sm text-blue-800">
            <span className="font-medium">Chú ý:</span>
          </p>
          <p className="text-sm text-blue-700 mt-1">
            - Những môn có dấu (*) được giảng dạy bằng tiếng Anh.
          </p>
          <div className="flex items-center space-x-4 mt-2 text-sm">
            <div className="flex items-center space-x-1">
              <Check className="w-4 h-4 text-green-600" />
              <span className="text-blue-700">=&gt; Học phần đậu</span>
            </div>
            <div className="flex items-center space-x-1">
              <X className="w-4 h-4 text-red-600" />
              <span className="text-blue-700">=&gt; Học phần rớt</span>
            </div>
          </div>
        </div>
      </div>

      {/* Academic Results Table */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        {/* Table Header */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="px-4 py-3 text-left font-medium">STT</th>
                <th className="px-4 py-3 text-left font-medium">Mã môn học</th>
                <th className="px-4 py-3 text-left font-medium ">Tên môn học</th>
                <th className="px-4 py-3 text-center font-medium">Số TC</th>
                <th className="px-4 py-3 text-center font-medium">Điểm hệ 10</th>
                <th className="px-4 py-3 text-center font-medium">Điểm hệ 4</th>
                <th className="px-4 py-3 text-center font-medium">Điểm chữ</th>
                <th className="px-4 py-3 text-center font-medium">Kết quả</th>
                <th className="px-4 py-3 text-center font-medium">Ghi chú</th>
                <th className="px-4 py-3 text-center font-medium">Chi tiết</th>
              </tr>
            </thead> 
            <tr>
              <td colSpan={10} className="bg-orange-200 px-4 py-2 font-medium text-gray-800"> Năm học: 2024-2025</td>
            </tr>
            <tr>
              <td colSpan={10} className="bg-yellow-200 px-4 py-2 font-medium text-gray-800">  Học kỳ: HK01</td>
            </tr>
            <tbody>
              {semesterData[0].subjects.map((subject, index) => 
                renderSubjectRow(subject, index, index + 1)
              )}
            </tbody>
            <tr>
              <td colSpan={10} className="bg-blue-100 p-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p>- Số tín chỉ đạt: {semesterData[0].stats.passedCredits} - Số tín chỉ không đạt: {semesterData[0].stats.failedCredits}</p>
                    <p>- Điểm trung bình học kỳ (Hệ 10): {semesterData[0].stats.gpa10}</p>
                    <p>- Điểm trung bình học kỳ (Hệ 4): {semesterData[0].stats.gpa4}</p>
                  </div>
                  <div>
                    <p>- Số tín chỉ tích lũy: {semesterData[0].stats.passedCredits}</p>
                    <p>- Điểm trung bình tích lũy (Hệ 10): {semesterData[0].stats.cumulativeGpa10}</p>
                    <p>- Điểm trung bình tích lũy (Hệ 4): {semesterData[0].stats.cumulativeGpa4}</p>
                    <p>- Điểm rèn luyện: {semesterData[0].stats.trainingLevel}</p>
                  </div>
                </div>
              </td>
            </tr>
{/* HK2 */}
             <tr>
              <td colSpan={10} className="bg-yellow-200 px-4 py-2 font-medium text-gray-800">  Học kỳ: HK02</td>
            </tr>
            <tbody>
              {semesterData[1].subjects.map((subject, index) => 
                renderSubjectRow(subject, index, index + 1)
              )}
            </tbody>

            <tr>
              <td colSpan={10} className="bg-blue-100 p-4">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p>- Số tín chỉ đạt: {semesterData[1].stats.passedCredits} - Số tín chỉ không đạt: {semesterData[1].stats.failedCredits}</p>
              <p>- Điểm trung bình học kỳ (Hệ 10): {semesterData[1].stats.gpa10}</p>
              <p>- Điểm trung bình học kỳ (Hệ 4): {semesterData[1].stats.gpa4}</p>
            </div>
            <div>
              <p>- Số tín chỉ tích lũy: {semesterData[1].stats.passedCredits + semesterData[0].stats.passedCredits}</p>
              <p>- Điểm trung bình tích lũy (Hệ 10): {semesterData[1].stats.cumulativeGpa10}</p>
              <p>- Điểm trung bình tích lũy (Hệ 4): {semesterData[1].stats.cumulativeGpa4}</p>
              <p>- Điểm rèn luyện: - Xếp loại (RL):</p>
            </div>
          </div>
        </td>
            </tr>

            {/* hk3 */}
             <tr>
              <td colSpan={10} className="bg-orange-200 px-4 py-2 font-medium text-gray-800"> Năm học: 2025-2026</td>
            </tr>
             <tr>
              <td colSpan={10} className="bg-yellow-200 px-4 py-2 font-medium text-gray-800">  Học kỳ: HK01</td>
            </tr>
            <tbody>
              {year2025Subjects.map((subject, index) => 
                renderSubjectRow(subject, index, index + 16)
              )}
            </tbody>

            
          </table>
        </div>   
        {/* 2025-2026 Stats (Empty) */}
        <div className="bg-blue-100 p-4">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p>- Số tín chỉ đạt: - Số tín chỉ không đạt:</p>
              <p>- Điểm trung bình học kỳ (Hệ 10):</p>
              <p>- Điểm trung bình học kỳ (Hệ 4):</p>
            </div>
            <div>
              <p>- Số tín chỉ tích lũy:</p>
              <p>- Điểm trung bình tích lũy (Hệ 10):</p>
              <p>- Điểm trung bình tích lũy (Hệ 4):</p>
              <p>- Điểm rèn luyện: - Xếp loại (RL):</p>
            </div>
          </div>
        </div>

        {/* Overall Summary */}
        <div className="bg-orange-200 px-4 py-2 font-medium text-gray-800">
          Toàn khóa
        </div>

        <div className="bg-blue-100 p-4">
          <div className="grid grid-cols-2 gap-4 text-sm font-medium">
            <div>
              <p>Tổng số tín chỉ: {totalStats.totalCredits}</p>
              <p>Điểm trung bình chung (Hệ 10): {totalStats.gpa10Overall}</p>
              <p>Điểm trung bình chung (Hệ 4): {totalStats.gpa4Overall}</p>
            </div>
            <div>
              <p>Số tín chỉ tích lũy: {totalStats.passedCredits}</p>
              <p>Điểm trung bình tích lũy (Hệ 10): {totalStats.cumulativeGpa10}</p>
              <p>Điểm trung bình tích lũy (Hệ 4): {totalStats.cumulativeGpa4}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KetQuaHocTap;