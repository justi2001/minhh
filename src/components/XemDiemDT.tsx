// components/XemDiemDT.tsx
'use client';

import React, { useState } from 'react';

interface MonHoc {
  stt: number;
  maMonHoc: string;
  tenMonHoc: string;
  soTC: number;
  monTuongDuong: string;
  diem: number | null;
  diemHe4: number | null;
  diemChu: string;
  ketQua: 'pass' | 'fail' | null;
  chiTiet?: ChiTietMonHoc[];
}

interface ChiTietMonHoc {
  stt: number;
  tenThanhPhan: string;
  trongSo: number;
  diemLan1: number | null;
  diemLan2: number | null;
  diemLan3: number | null;
}

interface HocKy {
  tenHocKy: string;
  batBuoc: MonHoc[];
  tuChon: MonHoc[];
}

interface NamHoc {
  tenNamHoc: string;
  hocKy: HocKy[];
}

interface TongKet {
  tongSoTinChi: number;
  diemTrungBinhChung10: number;
  diemTrungBinhChung4: number;
  soTinChiTichLuy: number;
  diemTrungBinhTichLuy10: number;
  diemTrungBinhTichLuy4: number;
}

const XemDiemDT: React.FC = () => {
  const [expandedRows, setExpandedRows] = useState<{[key: string]: boolean}>({});
  
  // Toggle expand/collapse cho từng môn học
  const toggleExpand = (key: string) => {
    setExpandedRows(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  // Dữ liệu mẫu dựa trên hình ảnh
  const data: NamHoc[] = [
    {
      tenNamHoc: "Năm học:2024-2025",
      hocKy: [
        {
          tenHocKy: "Học kỳ: HK01",
          batBuoc: [
            {
              stt: 1,
              maMonHoc: "KHMA1101",
              tenMonHoc: "Kinh tế vi mô 1",
              soTC: 3,
              monTuongDuong: "",
              diem: 5.7,
              diemHe4: 2.0,
              diemChu: "C",
              ketQua: "pass",
              chiTiet: []
            },
            {
              stt: 2,
              maMonHoc: "TOKT1105",
              tenMonHoc: "Lý thuyết xác suất",
              soTC: 3,
              monTuongDuong: "",
              diem: 4.9,
              diemHe4: 1.0,
              diemChu: "D",
              ketQua: "pass",
              chiTiet: []
            },
            {
              stt: 3,
              maMonHoc: "TOCB1101",
              tenMonHoc: "Đại số",
              soTC: 3,
              monTuongDuong: "",
              diem: 6.2,
              diemHe4: 2.0,
              diemChu: "C",
              ketQua: "pass",
              chiTiet: []
            },
            {
              stt: 4,
              maMonHoc: "TIHT1102",
              tenMonHoc: "Hệ thống thông tin quản lý",
              soTC: 3,
              monTuongDuong: "",
              diem: 8.1,
              diemHe4: 3.5,
              diemChu: "B+",
              ketQua: "pass",
              chiTiet: []
            },
            {
              stt: 5,
              maMonHoc: "GDTC1103",
              tenMonHoc: "Bóng chuyền 1",
              soTC: 2,
              monTuongDuong: "",
              diem: 8.1,
              diemHe4: 3.5,
              diemChu: "B+",
              ketQua: "pass",
              chiTiet: []
            }
          ],
          tuChon: [
            {
              stt: 6,
              maMonHoc: "GDTC1118",
              tenMonHoc: "Bóng bàn 1",
              soTC: 2,
              monTuongDuong: "",
              diem: 7.6,
              diemHe4: 3.0,
              diemChu: "B",
              ketQua: "pass",
              chiTiet: []
            }
          ]
        },
        {
          tenHocKy: "Học kỳ: HK02",
          batBuoc: [
            {
              stt: 7,
              maMonHoc: "KHMI1101",
              tenMonHoc: "Kinh tế vi mô 1",
              soTC: 3,
              monTuongDuong: "",
              diem: 6.2,
              diemHe4: 2.0,
              diemChu: "C",
              ketQua: "pass",
              chiTiet: []
            },
            {
              stt: 8,
              maMonHoc: "TOCB1110",
              tenMonHoc: "Toán cho các nhà kinh tế",
              soTC: 3,
              monTuongDuong: "",
              diem: 4.9,
              diemHe4: 1.0,
              diemChu: "D",
              ketQua: "pass",
              chiTiet: []
            },
            {
              stt: 9,
              maMonHoc: "TIKT1130",
              tenMonHoc: "Cơ sở dữ liệu",
              soTC: 3,
              monTuongDuong: "",
              diem: 7.9,
              diemHe4: 3.0,
              diemChu: "B",
              ketQua: "pass",
              chiTiet: []
            },
            {
              stt: 10,
              maMonHoc: "QTTH1102",
              tenMonHoc: "Quản trị kinh doanh 1",
              soTC: 3,
              monTuongDuong: "",
              diem: 6.7,
              diemHe4: 2.5,
              diemChu: "C+",
              ketQua: "pass",
              chiTiet: []
            },
            {
              stt: 11,
              maMonHoc: "LUCS1129",
              tenMonHoc: "Pháp luật đại cương",
              soTC: 3,
              monTuongDuong: "",
              diem: 4.3,
              diemHe4: 0.0,
              diemChu: "F",
              ketQua: "fail",
              chiTiet: []
            },
            {
              stt: 12,
              maMonHoc: "TKKD1101",
              tenMonHoc: "Lý thuyết thống kê 1",
              soTC: 3,
              monTuongDuong: "",
              diem: 3.9,
              diemHe4: 0.0,
              diemChu: "F",
              ketQua: "fail",
              chiTiet: []
            }
          ],
          tuChon: [
            {
              stt: 13,
              maMonHoc: "GDTC1104",
              tenMonHoc: "Bóng chuyền 2",
              soTC: 2,
              monTuongDuong: "",
              diem: 7.8,
              diemHe4: 3.0,
              diemChu: "B",
              ketQua: "pass",
              chiTiet: []
            }
          ]
        }
      ]
    },
    {
      tenNamHoc: "Năm học:2025-2026",
      hocKy: [
        {
          tenHocKy: "Học kỳ: HK01",
          batBuoc: [
            {
              stt: 14,
              maMonHoc: "TKKD1102",
              tenMonHoc: "Lý thuyết thống kê 2",
              soTC: 3,
              monTuongDuong: "",
              diem: null,
              diemHe4: null,
              diemChu: "",
              ketQua: null,
              chiTiet: []
            },
            {
              stt: 15,
              maMonHoc: "CNTT1128",
              tenMonHoc: "Cơ sở lập trình",
              soTC: 3,
              monTuongDuong: "",
              diem: null,
              diemHe4: null,
              diemChu: "",
              ketQua: null,
              chiTiet: []
            },
            {
              stt: 16,
              maMonHoc: "LLNL1106",
              tenMonHoc: "Kinh tế chính trị Mác - Lênin",
              soTC: 2,
              monTuongDuong: "",
              diem: null,
              diemHe4: null,
              diemChu: "",
              ketQua: null,
              chiTiet: []
            },
            {
              stt: 17,
              maMonHoc: "TMKQ1123",
              tenMonHoc: "Kinh tế quốc tế",
              soTC: 3,
              monTuongDuong: "",
              diem: null,
              diemHe4: null,
              diemChu: "",
              ketQua: null,
              chiTiet: []
            },
            {
              stt: 18,
              maMonHoc: "PTKT1128",
              tenMonHoc: "Kinh tế phát triển",
              soTC: 3,
              monTuongDuong: "",
              diem: null,
              diemHe4: null,
              diemChu: "",
              ketQua: null,
              chiTiet: []
            }
          ],
          tuChon: [
            {
              stt: 19,
              maMonHoc: "DTKT1154",
              tenMonHoc: "Kinh tế đầu tư",
              soTC: 3,
              monTuongDuong: "",
              diem: null,
              diemHe4: null,
              diemChu: "",
              ketQua: null,
              chiTiet: []
            },
            {
              stt: 20,
              maMonHoc: "GDTC1051",
              tenMonHoc: "Bóng chuyền 3",
              soTC: 2,
              monTuongDuong: "",
              diem: null,
              diemHe4: null,
              diemChu: "",
              ketQua: null,
              chiTiet: []
            }
          ]
        }
      ]
    }
  ];

  const tongKet: TongKet = {
    tongSoTinChi: 58,
    diemTrungBinhChung10: 5.88,
    diemTrungBinhChung4: 1.7,
    soTinChiTichLuy: 24,
    diemTrungBinhTichLuy10: 6.33,
    diemTrungBinhTichLuy4: 2.13
  };

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="bg-blue-600 text-white p-4 text-center font-medium">
        XEM ĐIỂM THEO CHƯƠNG TRÌNH ĐÀO TẠO
      </div>
      
      <div className="p-4">
        <div className="mb-4">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">Chương trình đào tạo: Thống kê kinh tế 66</h2>
          <p className="text-sm text-gray-600">Mã chương trình: 7340201</p>
        </div>
        
        {data.map((namHoc, namHocIndex) => (
          <div key={namHocIndex} className="mb-6">
            <div className="bg-orange-200 px-4 py-2 font-medium text-gray-800">
              {namHoc.tenNamHoc}
            </div>
            
            {namHoc.hocKy.map((hocKy, hocKyIndex) => (
              <div key={hocKyIndex} className="mb-4">
                <div className="bg-yellow-200 px-4 py-2 font-medium text-gray-800">
                  {hocKy.tenHocKy}
                </div>
                
                {/* Môn học bắt buộc */}
                <h3 className="font-medium text-gray-700 mt-4 mb-2">Môn học bắt buộc</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-blue-600 text-white">
                      <tr>
                        <th className="px-4 py-2 text-center font-medium">STT</th>
                        <th className="px-4 py-2 text-left font-medium">Mã môn học</th>
                        <th className="px-4 py-2 text-left font-medium">Tên môn học</th>
                        <th className="px-4 py-2 text-center font-medium">Số TC</th>
                        <th className="px-4 py-2 text-center font-medium">Môn tương đương</th>
                        <th className="px-4 py-2 text-center font-medium">Điểm hệ 10</th>
                        <th className="px-4 py-2 text-center font-medium">Điểm hệ 4</th>
                        <th className="px-4 py-2 text-center font-medium">Điểm chữ</th>
                        <th className="px-4 py-2 text-center font-medium">Kết quả</th>
                        <th className="px-4 py-2 text-center font-medium">Chi tiết</th>
                      </tr>
                    </thead>
                    <tbody>
                      {hocKy.batBuoc.map((monHoc) => (
                        <React.Fragment key={`batbuoc-${monHoc.stt}`}>
                          <tr className="border-b border-gray-200 hover:bg-gray-50">
                            <td className="px-4 py-2 text-center">{monHoc.stt}</td>
                            <td className="px-4 py-2 font-medium">{monHoc.maMonHoc}</td>
                            <td className="px-4 py-2">{monHoc.tenMonHoc}</td>
                            <td className="px-4 py-2 text-center">{monHoc.soTC}</td>
                            <td className="px-4 py-2 text-center">{monHoc.monTuongDuong || "-"}</td>
                            <td className="px-4 py-2 text-center">{monHoc.diem || "-"}</td>
                            <td className="px-4 py-2 text-center">{monHoc.diemHe4 || "-"}</td>
                            <td className="px-4 py-2 text-center">{monHoc.diemChu || "-"}</td>
                            <td className="px-4 py-2 text-center">
                              {monHoc.ketQua === "pass" ? (
                                <span className="text-green-600">Đạt</span>
                              ) : monHoc.ketQua === "fail" ? (
                                <span className="text-red-600">Không đạt</span>
                              ) : (
                                "-"
                              )}
                            </td>
                            <td className="px-4 py-2 text-center">
                              {monHoc.chiTiet && monHoc.chiTiet.length > 0 && (
                                <button 
                                  onClick={() => toggleExpand(`batbuoc-${monHoc.stt}`)}
                                  className="text-blue-600 hover:text-blue-800 text-sm"
                                >
                                  {expandedRows[`batbuoc-${monHoc.stt}`] ? "Thu gọn" : "Xem chi tiết"}
                                </button>
                              )}
                            </td>
                          </tr>
                          
                          {/* Chi tiết môn học */}
                          {expandedRows[`batbuoc-${monHoc.stt}`] && monHoc.chiTiet && monHoc.chiTiet.length > 0 && (
                            <tr className="bg-blue-50">
                              <td colSpan={10} className="px-4 py-3">
                                <div className="bg-white border border-blue-200 rounded-md p-3">
                                  <h4 className="font-medium text-blue-800 mb-2">Chi tiết điểm: {monHoc.tenMonHoc}</h4>
                                  <table className="w-full text-sm">
                                    <thead className="bg-blue-100">
                                      <tr>
                                        <th className="px-3 py-1 text-center">STT</th>
                                        <th className="px-3 py-1 text-left">Tên thành phần</th>
                                        <th className="px-3 py-1 text-center">Trọng số</th>
                                        <th className="px-3 py-1 text-center">Điểm lần 1</th>
                                        <th className="px-3 py-1 text-center">Điểm lần 2</th>
                                        <th className="px-3 py-1 text-center">Điểm lần 3</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      {monHoc.chiTiet.map((chiTiet) => (
                                        <tr key={chiTiet.stt} className="border-b border-gray-200">
                                          <td className="px-3 py-1 text-center">{chiTiet.stt}</td>
                                          <td className="px-3 py-1">{chiTiet.tenThanhPhan}</td>
                                          <td className="px-3 py-1 text-center">{chiTiet.trongSo}%</td>
                                          <td className="px-3 py-1 text-center">{chiTiet.diemLan1 || "-"}</td>
                                          <td className="px-3 py-1 text-center">{chiTiet.diemLan2 || "-"}</td>
                                          <td className="px-3 py-1 text-center">{chiTiet.diemLan3 || "-"}</td>
                                        </tr>
                                      ))}
                                    </tbody>
                                  </table>
                                </div>
                              </td>
                            </tr>
                          )}
                        </React.Fragment>
                      ))}
                    </tbody>
                  </table>
                </div>
                
                {/* Môn học tự chọn */}
                <h3 className="font-medium text-gray-700 mt-4 mb-2">Môn học tự chọn</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-blue-600 text-white">
                      <tr>
                        <th className="px-4 py-2 text-center font-medium">STT</th>
                        <th className="px-4 py-2 text-left font-medium">Mã môn học</th>
                        <th className="px-4 py-2 text-left font-medium">Tên môn học</th>
                        <th className="px-4 py-2 text-center font-medium">Số TC</th>
                        <th className="px-4 py-2 text-center font-medium">Môn tương đương</th>
                        <th className="px-4 py-2 text-center font-medium">Điểm hệ 10</th>
                        <th className="px-4 py-2 text-center font-medium">Điểm hệ 4</th>
                        <th className="px-4 py-2 text-center font-medium">Điểm chữ</th>
                        <th className="px-4 py-2 text-center font-medium">Kết quả</th>
                        <th className="px-4 py-2 text-center font-medium">Chi tiết</th>
                      </tr>
                    </thead>
                    <tbody>
                      {hocKy.tuChon.map((monHoc) => (
                        <React.Fragment key={`tuchon-${monHoc.stt}`}>
                          <tr className="border-b border-gray-200 hover:bg-gray-50">
                            <td className="px-4 py-2 text-center">{monHoc.stt}</td>
                            <td className="px-4 py-2 font-medium">{monHoc.maMonHoc}</td>
                            <td className="px-4 py-2">{monHoc.tenMonHoc}</td>
                            <td className="px-4 py-2 text-center">{monHoc.soTC}</td>
                            <td className="px-4 py-2 text-center">{monHoc.monTuongDuong || "-"}</td>
                            <td className="px-4 py-2 text-center">{monHoc.diem || "-"}</td>
                            <td className="px-4 py-2 text-center">{monHoc.diemHe4 || "-"}</td>
                            <td className="px-4 py-2 text-center">{monHoc.diemChu || "-"}</td>
                            <td className="px-4 py-2 text-center">
                              {monHoc.ketQua === "pass" ? (
                                <span className="text-green-600">Đạt</span>
                              ) : monHoc.ketQua === "fail" ? (
                                <span className="text-red-600">Không đạt</span>
                              ) : (
                                "-"
                              )}
                            </td>
                            <td className="px-4 py-2 text-center">
                              {monHoc.chiTiet && monHoc.chiTiet.length > 0 && (
                                <button 
                                  onClick={() => toggleExpand(`tuchon-${monHoc.stt}`)}
                                  className="text-blue-600 hover:text-blue-800 text-sm"
                                >
                                  {expandedRows[`tuchon-${monHoc.stt}`] ? "Thu gọn" : "Xem chi tiết"}
                                </button>
                              )}
                            </td>
                          </tr>
                          
                          {/* Chi tiết môn học */}
                          {expandedRows[`tuchon-${monHoc.stt}`] && monHoc.chiTiet && monHoc.chiTiet.length > 0 && (
                            <tr className="bg-blue-50">
                              <td colSpan={10} className="px-4 py-3">
                                <div className="bg-white border border-blue-200 rounded-md p-3">
                                  <h4 className="font-medium text-blue-800 mb-2">Chi tiết điểm: {monHoc.tenMonHoc}</h4>
                                  <table className="w-full text-sm">
                                    <thead className="bg-blue-100">
                                      <tr>
                                        <th className="px-3 py-1 text-center">STT</th>
                                        <th className="px-3 py-1 text-left">Tên thành phần</th>
                                        <th className="px-3 py-1 text-center">Trọng số</th>
                                        <th className="px-3 py-1 text-center">Điểm lần 1</th>
                                        <th className="px-3 py-1 text-center">Điểm lần 2</th>
                                        <th className="px-3 py-1 text-center">Điểm lần 3</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      {monHoc.chiTiet.map((chiTiet) => (
                                        <tr key={chiTiet.stt} className="border-b border-gray-200">
                                          <td className="px-3 py-1 text-center">{chiTiet.stt}</td>
                                          <td className="px-3 py-1">{chiTiet.tenThanhPhan}</td>
                                          <td className="px-3 py-1 text-center">{chiTiet.trongSo}%</td>
                                          <td className="px-3 py-1 text-center">{chiTiet.diemLan1 || "-"}</td>
                                          <td className="px-3 py-1 text-center">{chiTiet.diemLan2 || "-"}</td>
                                          <td className="px-3 py-1 text-center">{chiTiet.diemLan3 || "-"}</td>
                                        </tr>
                                      ))}
                                    </tbody>
                                  </table>
                                </div>
                              </td>
                            </tr>
                          )}
                        </React.Fragment>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        ))}
        
        {/* Tổng kết */}
        <div className="bg-orange-200 px-4 py-2 font-medium text-gray-800 mt-6">
          Tổng kết
        </div>
        <div className="bg-blue-100 p-4">
          <div className="grid grid-cols-2 gap-4 text-sm font-medium">
            <div>
              <p>Tổng số tín chỉ: {tongKet.tongSoTinChi}</p>
              <p>Điểm trung bình chung (Hệ 10): {tongKet.diemTrungBinhChung10}</p>
              <p>Điểm trung bình chung (Hệ 4): {tongKet.diemTrungBinhChung4}</p>
            </div>
            <div>
              <p>Số tín chỉ tích lũy: {tongKet.soTinChiTichLuy}</p>
              <p>Điểm trung bình tích lũy (Hệ 10): {tongKet.diemTrungBinhTichLuy10}</p>
              <p>Điểm trung bình tích lũy (Hệ 4): {tongKet.diemTrungBinhTichLuy4}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default XemDiemDT;