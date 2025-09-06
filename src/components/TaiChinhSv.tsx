'use client'
import React, { useState } from 'react';

interface StudentInfo {
  hoTen: string;
  maSinhVien: string;
  dienThoai: string;
  lop: string;
  he: string;
  loaiHinh: string;
}

interface MonHoc {
  maMonHoc: string;
  tenMonHoc: string;
  hinhThucDK: number;
  phaiDong: number;
  daDong: number;
  canTru: number;
  mienGiam: number;
  conNo: number;
  ngayDong?: string;
  hinhThucThanhToan?: string;
  noiDungThu?: string;
}

interface HocKy {
  tenHocKy: string;
  namHoc: string;
  monHoc: MonHoc[];
  tongHocPhi?: number;
}

interface TaiChinhSVProps {
  studentInfo?: StudentInfo;
  hocKyList?: HocKy[];
}

const TaiChinhSV: React.FC<TaiChinhSVProps> = ({
  studentInfo = {
    hoTen: "Nguyễn Văn Minh",
    maSinhVien: "11241087",
    dienThoai: "0337458932",
    lop: "66A.TKKT",
    he: "Đại học",
    loaiHinh: "Chính quy"
  },
  hocKyList = [
    {
      tenHocKy: "HK01",
      namHoc: "2025-2026",
      tongHocPhi: 0,
      monHoc: [
        { maMonHoc: "CNTT1128(125)_02", tenMonHoc: "Cơ sở lập trình[3]", hinhThucDK: 0, phaiDong: 0, daDong: 0, canTru: 0, mienGiam: 0, conNo: 0 },
        { maMonHoc: "DTKT1154(125)_08", tenMonHoc: "Kinh tế đầu tư[3]", hinhThucDK: 0, phaiDong: 0, daDong: 0, canTru: 0, mienGiam: 0, conNo: 0 },
        { maMonHoc: "GDTC1105(125)1_01", tenMonHoc: "Bóng chuyền 3[2]", hinhThucDK: 0, phaiDong: 0, daDong: 0, canTru: 0, mienGiam: 0, conNo: 0 },
        { maMonHoc: "LLNL1106(125)_11", tenMonHoc: "Kinh tế chính trị Mác - Lênin[2]", hinhThucDK: 0, phaiDong: 0, daDong: 0, canTru: 0, mienGiam: 0, conNo: 0 },
        { maMonHoc: "PTKT1128(125)_07", tenMonHoc: "Kinh tế phát triển[3]", hinhThucDK: 0, phaiDong: 0, daDong: 0, canTru: 0, mienGiam: 0, conNo: 0 },
        { maMonHoc: "PTKT1128(125)_07_TL_02", tenMonHoc: "Kinh tế phát triển[3]", hinhThucDK: 0, phaiDong: 0, daDong: 0, canTru: 0, mienGiam: 0, conNo: 0 },
        { maMonHoc: "TKKD1102(125)_01", tenMonHoc: "Lý thuyết thống kê 2[3]", hinhThucDK: 0, phaiDong: 0, daDong: 0, canTru: 0, mienGiam: 0, conNo: 0 },
        { maMonHoc: "TMKQ1123(125)_09", tenMonHoc: "Kinh tế quốc tế[3]", hinhThucDK: 0, phaiDong: 0, daDong: 0, canTru: 0, mienGiam: 0, conNo: 0 }
      ]
    },
    {
      tenHocKy: "HK02",
      namHoc: "2024-2025",
      tongHocPhi: 18200000,
      monHoc: [
        { maMonHoc: "GDTC1104(224)_19", tenMonHoc: "Bóng chuyền 2[2]", hinhThucDK: 1300000, phaiDong: 1300000, daDong: 0, canTru: 0, mienGiam: 0, conNo: 0, ngayDong: "22/03/2025" },
        { maMonHoc: "Học phí GDQP", tenMonHoc: "Học phí GDQP", hinhThucDK: 5200000, phaiDong: 5200000, daDong: 0, canTru: 0, mienGiam: 0, conNo: 0, ngayDong: "22/03/2025" },
        { maMonHoc: "KHMI1101(224)_28", tenMonHoc: "Kinh tế vi mô 1[3]", hinhThucDK: 1950000, phaiDong: 1950000, daDong: 0, canTru: 0, mienGiam: 0, conNo: 0, ngayDong: "22/03/2025" },
        { maMonHoc: "LUCS1129(224)_06", tenMonHoc: "Pháp luật đại cương[3]", hinhThucDK: 1950000, phaiDong: 1950000, daDong: 0, canTru: 0, mienGiam: 0, conNo: 0, ngayDong: "22/03/2025" },
        { maMonHoc: "QTTH1102(224)_10", tenMonHoc: "Quản trị kinh doanh 1[3]", hinhThucDK: 1950000, phaiDong: 1950000, daDong: 0, canTru: 0, mienGiam: 0, conNo: 0, ngayDong: "22/03/2025" },
        { maMonHoc: "TIKT1130(224)_05", tenMonHoc: "Cơ sở dữ liệu[3]", hinhThucDK: 1950000, phaiDong: 1950000, daDong: 0, canTru: 0, mienGiam: 0, conNo: 0, ngayDong: "22/03/2025" },
        { maMonHoc: "TKKD1101(224)_01", tenMonHoc: "Lý thuyết thống kê 1[3]", hinhThucDK: 1950000, phaiDong: 1950000, daDong: 0, canTru: 0, mienGiam: 0, conNo: 0, ngayDong: "22/03/2025" },
        { maMonHoc: "TOCB1110(224)_09", tenMonHoc: "Toán cho các nhà kinh tế[3]", hinhThucDK: 1950000, phaiDong: 1950000, daDong: 0, canTru: 0, mienGiam: 0, conNo: 0, ngayDong: "22/03/2025" }
      ]
    },
    {
      tenHocKy: "HK01", 
      namHoc: "2024-2025",
      tongHocPhi: 13855650,
      monHoc: [
        { maMonHoc: "Bảo hiểm y tế", tenMonHoc: "Bảo hiểm y tế", hinhThucDK: 1105650, phaiDong: 1105650, daDong: 0, canTru: 0, mienGiam: 0, conNo: 0, ngayDong: "20/08/2024" },
        { maMonHoc: "GDTC1103(124)_37", tenMonHoc: "Bóng chuyền 1[2]", hinhThucDK: 1300000, phaiDong: 1300000, daDong: 0, canTru: 0, mienGiam: 0, conNo: 0, ngayDong: "20/08/2024" },
        { maMonHoc: "GDTC1118(124)_06", tenMonHoc: "Bóng bàn 1[2]", hinhThucDK: 1300000, phaiDong: 1300000, daDong: 0, canTru: 0, mienGiam: 0, conNo: 0, ngayDong: "20/08/2024" },
        { maMonHoc: "Khám sức khoe", tenMonHoc: "Khám sức khoe", hinhThucDK: 300000, phaiDong: 300000, daDong: 0, canTru: 0, mienGiam: 0, conNo: 0, ngayDong: "20/08/2024" },
        { maMonHoc: "KHMA1101(124)_27", tenMonHoc: "Kinh tế vi mô 1[3]", hinhThucDK: 1950000, phaiDong: 1950000, daDong: 0, canTru: 0, mienGiam: 0, conNo: 0, ngayDong: "20/08/2024" },
        { maMonHoc: "KHMI1101(124)_31", tenMonHoc: "Kinh tế vi mô 1[3]", hinhThucDK: 1950000, phaiDong: 1950000, daDong: 0, canTru: 0, mienGiam: 0, conNo: 0, ngayDong: "20/08/2024" },
        { maMonHoc: "Lệ phí kiểm tra tiếng Anh", tenMonHoc: "Lệ phí kiểm tra tiếng Anh", hinhThucDK: 0, phaiDong: 0, daDong: 0, canTru: 0, mienGiam: 0, conNo: 0, ngayDong: "20/08/2024" },
        { maMonHoc: "Phí bảo hiểm thân thể", tenMonHoc: "Phí bảo hiểm thân thể (tự nguyện)", hinhThucDK: 0, phaiDong: 0, daDong: 0, canTru: 0, mienGiam: 0, conNo: 0, ngayDong: "20/08/2024" },
        { maMonHoc: "Phí dịch vụ", tenMonHoc: "Phí dịch vụ Số liên lạc điện tử", hinhThucDK: 100000, phaiDong: 100000, daDong: 0, canTru: 0, mienGiam: 0, conNo: 0, ngayDong: "20/08/2024" },
        { maMonHoc: "TIHT1102(124)_10", tenMonHoc: "Hệ thống thông tin quản lý[3]", hinhThucDK: 1950000, phaiDong: 1950000, daDong: 0, canTru: 0, mienGiam: 0, conNo: 0, ngayDong: "20/08/2024" },
        { maMonHoc: "TOCB1101(124)_06", tenMonHoc: "Đại số[3]", hinhThucDK: 1950000, phaiDong: 1950000, daDong: 0, canTru: 0, mienGiam: 0, conNo: 0, ngayDong: "20/08/2024" },
        { maMonHoc: "TOCB1101(124)_06_TL_02", tenMonHoc: "Đại số[3]", hinhThucDK: 0, phaiDong: 0, daDong: 0, canTru: 0, mienGiam: 0, conNo: 0, ngayDong: "20/08/2024" },
        { maMonHoc: "TOKT1105(124)_01", tenMonHoc: "Lý thuyết xác suất[3]", hinhThucDK: 1950000, phaiDong: 1950000, daDong: 0, canTru: 0, mienGiam: 0, conNo: 0, ngayDong: "20/08/2024" }
      ]
    }
  ]
}) => {
  const [expandedSemesters, setExpandedSemesters] = useState<Set<string>>(new Set(['2024-2025-HK02']));

  const toggleSemester = (key: string) => {
    const newExpanded = new Set(expandedSemesters);
    if (newExpanded.has(key)) {
      newExpanded.delete(key);
    } else {
      newExpanded.add(key);
    }
    setExpandedSemesters(newExpanded);
  };

  const formatCurrency = (amount: number) => {
    return amount.toLocaleString('vi-VN');
  };

  const getSemesterKey = (hocKy: HocKy) => `${hocKy.namHoc}-${hocKy.tenHocKy}`;

  const calculateTotalFee = (hocKy: HocKy) => {
    return hocKy.monHoc.reduce((total, mon) => total + mon.phaiDong, 0);
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
              Tài chính sinh viên
            </h1>
          </div>
        </div>
      </div>

      {/* Student Info Section */}
      <div className="p-6">
        <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-3">
              <div className="flex">
                <span className="text-gray-600 w-32">Họ và tên:</span>
                <span className="text-gray-800 font-medium">{studentInfo.hoTen}</span>
              </div>
              <div className="flex">
                <span className="text-gray-600 w-32">Điện thoại:</span>
                <span className="text-gray-800">{studentInfo.dienThoai}</span>
              </div>
              <div className="flex">
                <span className="text-gray-600 w-32">Hệ:</span>
                <span className="text-gray-800">{studentInfo.he}</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex">
                <span className="text-gray-600 w-32">Mã sinh viên:</span>
                <span className="text-gray-800">{studentInfo.maSinhVien}</span>
              </div>
              <div className="flex">
                <span className="text-gray-600 w-32">Lớp:</span>
                <span className="text-gray-800">{studentInfo.lop}</span>
              </div>
              <div className="flex">
                <span className="text-gray-600 w-32">Loại hình:</span>
                <span className="text-gray-800">{studentInfo.loaiHinh}</span>
              </div>
            </div>
          </div>

          {/* Payment Status Button */}
          <div className="mt-6">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200 flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Thanh toán trực tuyến
            </button>
          </div>
        </div>

        {/* Fee Summary */}
        <div className="bg-orange-100 rounded-lg p-4 mb-6">
          <div className="grid grid-cols-8 gap-4 text-center">
            <div className="col-span-2 text-orange-800 font-semibold">
              Tổng học phí
            </div>
            <div className="text-red-600 font-bold">
              {formatCurrency(32055650)}
            </div>
            <div className="text-red-600 font-bold">
              {formatCurrency(32055650)}
            </div>
            <div className="text-gray-800 font-bold">0</div>
            <div className="text-gray-800 font-bold">0</div>
            <div className="text-gray-800 font-bold">0</div>
            <div></div>
          </div>
        </div>

        {/* Fee Table */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          {/* Table Header */}
          <div className="bg-blue-600 text-white">
            <div className="grid grid-cols-12 gap-2 p-4 text-sm font-medium">
              <div className="col-span-3">Mã phí - Tên phí</div>
              <div className="text-center">Hình thức ĐK</div>
              <div className="text-center">Phải động</div>
              <div className="text-center">Đã động</div>
              <div className="text-center">Căn trừ</div>
              <div className="text-center">Miễn giảm</div>
              <div className="text-center">Còn nợ</div>
              <div className="text-center">Ngày động</div>
              <div className="text-center">Hình thức thanh toán</div>
              <div className="text-center">Nội dung thu</div>
            </div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-gray-100">
            {hocKyList.map((hocKy) => {
              const semesterKey = getSemesterKey(hocKy);
              const isExpanded = expandedSemesters.has(semesterKey);
              const totalFee = hocKy.tongHocPhi || calculateTotalFee(hocKy);

              return (
                <div key={semesterKey}>
                  {/* Semester Header */}
                  <div className="bg-cyan-100 border-b border-cyan-200">
                    <div className="grid grid-cols-12 gap-2 p-3">
                      <div className="col-span-12 font-semibold text-gray-700">
                        Năm học: {hocKy.namHoc} - Học kỳ: {hocKy.tenHocKy}
                      </div>
                    </div>
                  </div>

                  {/* Subject Rows */}
                  {isExpanded && hocKy.monHoc.map((mon, index) => (
                    <div key={`${semesterKey}-${index}`} className="hover:bg-gray-50">
                      <div className="grid grid-cols-12 gap-2 p-3 text-sm">
                        <div className="col-span-3 text-gray-800">
                          {mon.tenMonHoc}
                        </div>
                        <div className="text-center text-gray-700">
                          {mon.hinhThucDK > 0 ? formatCurrency(mon.hinhThucDK) : '0'}
                        </div>
                        <div className="text-center text-gray-700">
                          {mon.phaiDong > 0 ? formatCurrency(mon.phaiDong) : '0'}
                        </div>
                        <div className="text-center text-gray-700">
                          {mon.daDong > 0 ? formatCurrency(mon.daDong) : '0'}
                        </div>
                        <div className="text-center text-gray-700">
                          {mon.canTru > 0 ? formatCurrency(mon.canTru) : '0'}
                        </div>
                        <div className="text-center text-gray-700">
                          {mon.mienGiam > 0 ? formatCurrency(mon.mienGiam) : '0'}
                        </div>
                        <div className="text-center text-gray-700">
                          {mon.conNo > 0 ? formatCurrency(mon.conNo) : '0'}
                        </div>
                        <div className="text-center text-gray-700 text-xs">
                          {mon.ngayDong || ''}
                        </div>
                        <div className="text-center text-gray-700 text-xs">
                          {mon.hinhThucThanhToan || ''}
                        </div>
                        <div className="text-center text-gray-700 text-xs">
                          {mon.noiDungThu || ''}
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Semester Total */}
                  <div className="bg-yellow-100 border-b border-yellow-200">
                    <div className="grid grid-cols-12 gap-2 p-3">
                      <div className="col-span-3 font-semibold text-blue-600">
                        Tổng học phí: {hocKy.namHoc} - {hocKy.tenHocKy}
                      </div>
                      <div className="text-center font-bold text-blue-600">
                        {totalFee > 0 ? formatCurrency(totalFee) : '0'}
                      </div>
                      <div className="text-center font-bold text-blue-600">
                        {totalFee > 0 ? formatCurrency(totalFee) : '0'}
                      </div>
                      <div className="text-center font-bold">0</div>
                      <div className="text-center font-bold">0</div>
                      <div className="text-center font-bold">0</div>
                      <div className="col-span-4"></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-between items-center mt-6">
          <button className="flex items-center text-gray-600 hover:text-gray-800 transition-colors">
            <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Trước
          </button>
          
          <div className="flex space-x-2">
            <div className="w-8 h-8 bg-blue-600 text-white rounded flex items-center justify-center text-sm">1</div>
          </div>
          
          <button className="flex items-center text-gray-600 hover:text-gray-800 transition-colors">
            Sau
            <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
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

export default TaiChinhSV;