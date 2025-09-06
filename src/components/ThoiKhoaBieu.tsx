'use client'
import React from 'react';
import { ChevronLeft, ChevronRight, Calendar } from 'lucide-react';

// interface ThoiKhoaBieuProps {}

const ThoiKhoaBieu = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg">
      {/* Header */}
      <div className="bg-blue-600 text-white px-4 py-3 rounded-t-lg flex items-center gap-2">
        <div className="w-6 h-6 bg-blue-700 rounded-full flex items-center justify-center text-xs">
          <Calendar className="w-4 h-4" />
        </div>
        <h2 className="font-semibold">Thời khóa biểu</h2>
      </div>

      {/* Navigation */}
      {/* <div className="px-4 py-3 border-b bg-gray-50 flex items-center justify-between">
        <div className="flex gap-4">
          <button className="text-blue-600 hover:text-blue-800 text-sm">TẤT PHÒNG</button>
          <button className="text-blue-600 hover:text-blue-800 text-sm">TÌM SINH VIÊN</button>
          <button className="text-blue-600 hover:text-blue-800 text-sm">TÌM THỨ VÀ TIẾT</button>
          <button className="text-blue-600 hover:text-blue-800 text-sm">THỜI KHÓA BIỂU THEO LỚP</button>
          <button className="text-blue-600 hover:text-blue-800 text-sm">THỂ HIỆN KỲ</button>
        </div>
      </div> */}

      {/* Date Selection */}
      <div className="px-4 py-3 border-b flex items-center gap-4">
        <div className="flex items-center gap-2">
          <span className="text-sm">Năm:</span>
          <select className="border border-gray-300 rounded px-2 py-1 text-sm">
            <option>2025</option>
          </select>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm">Tuần từ 01/09/2025 → 07/09/2025</span>
        </div>
        <div className="flex items-center gap-1 ml-auto">
          <button className="p-1 border rounded hover:bg-gray-100">
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button className="px-3 py-1 bg-blue-600 text-white rounded text-sm">Hiện tại</button>
          <button className="p-1 border rounded hover:bg-gray-100">
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Timetable Grid */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="bg-blue-600 text-white p-2 border border-blue-500 text-sm font-medium w-24">Phòng</th>
              <th className="bg-blue-600 text-white p-2 border border-blue-500 text-sm font-medium">
                <div>Thứ 2</div>
                <div className="text-xs">02/09/2025</div>
              </th>
              <th className="bg-blue-600 text-white p-2 border border-blue-500 text-sm font-medium">
                <div>Thứ 3</div>
                <div className="text-xs">03/09/2025</div>
              </th>
              <th className="bg-blue-600 text-white p-2 border border-blue-500 text-sm font-medium">
                <div>Thứ 4</div>
                <div className="text-xs">04/09/2025</div>
              </th>
              <th className="bg-blue-600 text-white p-2 border border-blue-500 text-sm font-medium">
                <div>Thứ 5</div>
                <div className="text-xs">05/09/2025</div>
              </th>
              <th className="bg-blue-600 text-white p-2 border border-blue-500 text-sm font-medium">
                <div>Thứ 6</div>
                <div className="text-xs">06/09/2025</div>
              </th>
              <th className="bg-green-500 text-white p-2 border border-green-400 text-sm font-medium">
                <div>Thứ 7</div>
                <div className="text-xs">07/09/2025</div>
              </th>
              <th className="bg-blue-600 text-white p-2 border border-blue-500 text-sm font-medium">
                <div>Chủ nhật</div>
                <div className="text-xs">07/09/2025</div>
              </th>
            </tr>
          </thead>
          <tbody>
            {/* A2-301 */}
            <tr className="h-20">
              <td className="bg-gray-100 p-2 border text-sm font-medium text-center">A2-301</td>
              <td className="border p-1"></td>
              <td className="border p-1"></td>
              <td className="border p-1"></td>
              <td className="border p-1"></td>
              <td className="border p-1">
                <div className="bg-blue-100 p-2 rounded text-xs text-center">
                  <div className="text-blue-800 font-medium">-Môn: Kinh tế phát triển (PTKT1128)</div>
                  <div>-Má LHP(3631159)[SV: 47]</div>
                  <div>-Lớp: 66A.KTQT,66A.TKKT</div>
                  <div>-Tiết: 3-4</div>
                  <div>-GV: TS.Phí Thị Hồng Linh</div>
                </div>
              </td>
              <td className="border p-1"></td>
              <td className="border p-1"></td>
            </tr>

            {/* A2-312 */}
            <tr className="h-20">
              <td className="bg-gray-100 p-2 border text-sm font-medium text-center">A2-312</td>
              <td className="border p-1"></td>
              <td className="border p-1">
                <div className="bg-blue-100 p-2 rounded text-xs text-center">
                  <div className="text-blue-800 font-medium">-Môn: Kinh tế chính trị Mác - Lênin (LLNL1106)</div>
                  <div>-Mã LHP:LLNL1106(125)_11</div>
                  <div>-Lớp: 24KHDL01, 24KT</div>
                  <div>-Tiết: 7-8</div>
                  <div>-GV: PGS.TS.Tô Đức Hạnh</div>
                </div>
              </td>
              <td className="border p-1"></td>
              <td className="border p-1"></td>
              <td className="border p-1"></td>
              <td className="border p-1">
                <div className="bg-blue-100 p-2 rounded text-xs text-center">
                  <div className="text-blue-800 font-medium">-Môn: Cơ sở lập trình (CNTT1128)</div>
                  <div>-Mã LHP:CNTT1128(125)_02</div>
                  <div>-Lớp: 66A.TKKT</div>
                  <div>-Tiết: 7-8</div>
                  <div>-GV: ThS.Cao Thị Thu Hương</div>
                </div>
              </td>
              <td className="border p-1"></td>
            </tr>

            {/* A2-504 */}
            <tr className="h-20">
              <td className="bg-gray-100 p-2 border text-sm font-medium text-center">A2-504</td>
              <td className="border p-1"></td>
              <td className="border p-1"></td>
              <td className="border p-1">
                <div className="bg-blue-100 p-2 rounded text-xs text-center">
                  <div className="text-blue-800 font-medium">-Môn: Lý thuyết thống kê 2 (TKKD1102)</div>
                  <div>-Mã LHP:TKKD1102(125)_01</div>
                  <div>-Lớp: 66A.TKKT</div>
                  <div>-Tiết: 1-2</div>
                  <div>-GV: PGS.TS.Trần Thị Bích</div>
                </div>
              </td>
              <td className="border p-1"></td>
              <td className="border p-1"></td>
              <td className="border p-1"></td>
              <td className="border p-1"></td>
            </tr>

            {/* B-301 */}
            <tr className="h-20">
              <td className="bg-gray-100 p-2 border text-sm font-medium text-center">B-301</td>
              <td className="border p-1"></td>
              <td className="border p-1"></td>
              <td className="border p-1"></td>
              <td className="border p-1">
                <div className="bg-blue-100 p-2 rounded text-xs text-center">
                  <div className="text-blue-800 font-medium">-Môn: Kinh tế quốc tế (TMKQ1123)</div>
                  <div>-Mã LHP:TMKQ1123(125)_09</div>
                  <div>-Lớp: 66A.TKKT</div>
                  <div>-Tiết: 7-8</div>
                  <div>-GV: TS.Nguyễn Thị Thúy Hồng</div>
                </div>
              </td>
              <td className="border p-1"></td>
              <td className="border p-1"></td>
              <td className="border p-1"></td>
            </tr>

            {/* C-205 */}
            <tr className="h-20">
              <td className="bg-gray-100 p-2 border text-sm font-medium text-center">C-205</td>
              <td className="border p-1"></td>
              <td className="border p-1"></td>
              <td className="border p-1"></td>
              <td className="border p-1"></td>
              <td className="border p-1"></td>
              <td className="border p-1"></td>
              <td className="border p-1"></td>
            </tr>

            {/* D-202 */}
            <tr className="h-20">
              <td className="bg-gray-100 p-2 border text-sm font-medium text-center">D-202</td>
              <td className="border p-1"></td>
              <td className="border p-1"></td>
              <td className="border p-1"></td>
              <td className="border p-1"></td>
              <td className="border p-1"></td>
              <td className="border p-1">
                <div className="bg-blue-100 p-2 rounded text-xs text-center">
                  <div className="text-blue-800 font-medium">-Môn: Kinh tế đầu tư (DTKT1154)</div>
                  <div>-Mã LHP:DTKT1154(125)_08</div>
                  <div>-Lớp: 66A.TKKT</div>
                  <div>-Tiết: 5-6</div>
                  <div>-GV: TS.Phạm Thu Vân</div>
                </div>
              </td>
              <td className="border p-1"></td>
            </tr>

            {/* SẢN XY TỰC HÁ */}
            <tr className="h-20">
              <td className="bg-gray-100 p-2 border text-sm font-medium text-center">SÂN KÝ TÚC XÁ</td>
              <td className="border p-1">
                <div className="bg-blue-100 p-2 rounded text-xs text-center">
                  <div className="text-blue-800 font-medium">-Môn: Bóng chuyền 3 (GDTC1105)</div>
                  <div>-Mã LHP:GDTC1105(125)1_01</div>
                  <div>-Lớp: </div>
                  <div>-Tiết: 9-10</div>
                  <div>-GV:</div>
                </div>
              </td>
              <td className="border p-1"></td>
              <td className="border p-1"></td>
              <td className="border p-1"></td>
              <td className="border p-1"></td>
              <td className="border p-1"></td>
              <td className="border p-1"></td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Help Button */}
      <div className="fixed bottom-4 right-4">
        <button className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-700">
          <span className="text-sm font-bold">?</span>
        </button>
      </div>
    </div>
  );
};

export default ThoiKhoaBieu;