'use client'
import React from 'react';

interface PersonalInfo {
  maSeinhVien: string;
  hoTen: string;
  ngaySinh: string;
  noiSinh: string;
  gioiTinh: string;
  cmnd: string;
  danToc: string;
  tonGiao: string;
  khuVuc: string;
  lopSinhVien: string;
  tinhTrangHoc: string;
  quocGia: string;
  tinhThanh: string;
  phuongXa: string;
  diaChiThuongTru: string;
  diaChiLienLac: string;
  diDong: string;
  dienThoai: string;
  emailCaNhan: string;
  emailTruong: string;
  hoTenNguoiLienHe: string;
  dienThoaiNguoiLienHe: string;
  diaChiNguoiLienHe: string;
  khoa: string;
  nienKhoa: string;
  namNhapHoc: string;
  namHetThoiGianDaoTao: string;
  chuongTrinhDaoTao: string;
  ngayKetThucChuongTrinhDaoTao: string;
  chucVu: string;
  thptLop12: string;
  hinhThucDaoTao: string;
  coVanHocTap: string;
  sdtCoVanHocTap: string;
  emailCoVanHocTap: string;
  doan: string;
  ngayVaoDoan: string;
  dang: string;
  ngayVaoDang: string;
}

interface ThongTinCaNhanProps {
  data?: PersonalInfo;
}

const ThongTinCaNhan: React.FC<ThongTinCaNhanProps> = ({ data }) => {
  const defaultData: PersonalInfo = {
    maSeinhVien: "11241087",
    hoTen: "Nguyễn Văn Minh",
    ngaySinh: "19/08/2006",
    noiSinh: "Tỉnh Hà Tây",
    gioiTinh: "Nam",
    cmnd: "001206006993",
    danToc: "Kinh",
    tonGiao: "0",
    khuVuc: "Khu vực 2",
    lopSinhVien: "Thống kê kinh tế 66A",
    tinhTrangHoc: "Còn học",
    quocGia: "Vietnam",
    tinhThanh: "Hà Nội",
    phuongXa: "",
    diaChiThuongTru: "Nhà số 6",
    diaChiLienLac: "",
    diDong: "0337458932",
    dienThoai: "0337458932",
    emailCaNhan: "Nguyenvanminh19806hn@gmail.com",
    emailTruong: "11241087@st.neu.edu.vn",
    hoTenNguoiLienHe: "Nguyễn Văn Cường",
    dienThoaiNguoiLienHe: "0981465218",
    diaChiNguoiLienHe: "Nhà số 6, đường Mộc Hoàn, thôn Mộc Hoàn Đình, xã Vân Côn, huyện Hoài Đức, Hà Nội",
    khoa: "K66",
    nienKhoa: "2024 - 2028",
    namNhapHoc: "2024",
    namHetThoiGianDaoTao: "",
    chuongTrinhDaoTao: "Thống kê kinh tế 66",
    ngayKetThucChuongTrinhDaoTao: "",
    chucVu: "",
    thptLop12: "",
    hinhThucDaoTao: "Chính quy",
    coVanHocTap: "",
    sdtCoVanHocTap: "",
    emailCoVanHocTap: "",
    doan: "",
    ngayVaoDoan: "",
    dang: "",
    ngayVaoDang: ""
  };

  const info = data || defaultData;

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center mb-6">
          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-3">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
          <h1 className="text-2xl font-semibold text-blue-600">Thông tin sinh viên</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Avatar and Basic Info */}
          <div className="lg:col-span-1">
            {/* Profile Card */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <div className="flex flex-col items-center">
                <div className="w-32 h-32 bg-gray-300 rounded-full flex items-center justify-center mb-4">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    </svg>
                  </div>
                </div>
                <h2 className="text-xl font-semibold text-gray-700 text-center">{info.hoTen}</h2>
              </div>
            </div>

            {/* Student Info Card */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-700 mb-4">Thông tin sinh viên</h3>
              <div className="space-y-3">
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Mã sinh viên</span>
                  <span className="text-blue-600 font-medium">{info.maSeinhVien}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Họ tên</span>
                  <span className="text-blue-600 font-medium">{info.hoTen}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Ngày Sinh</span>
                  <span className="text-blue-600 font-medium">{info.ngaySinh}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Nơi Sinh</span>
                  <span className="text-blue-600 font-medium">{info.noiSinh}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Giới tính</span>
                  <span className="text-blue-600 font-medium">{info.gioiTinh}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">CMND/CCCD</span>
                  <span className="text-blue-600 font-medium">{info.cmnd}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Dân tộc</span>
                  <span className="text-blue-600 font-medium">{info.danToc}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Tôn giáo</span>
                  <span className="text-blue-600 font-medium">{info.tonGiao}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Khu Vực</span>
                  <span className="text-blue-600 font-medium">{info.khuVuc}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Đối tượng</span>
                  <span className="text-blue-600 font-medium"></span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Lớp sinh viên</span>
                  <span className="text-blue-600 font-medium">{info.lopSinhVien}</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-gray-600">Tình trạng học</span>
                  <span className="text-blue-600 font-medium">{info.tinhTrangHoc}</span>
                </div>
              </div>
              
              <button className="w-full mt-6 bg-blue-600 text-white py-3 px-4 rounded-lg flex items-center justify-center font-medium hover:bg-blue-700 transition-colors">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
                Cập nhật thông tin cá nhân
              </button>
            </div>
          </div>

          {/* Right Column - Detailed Information */}
          <div className="lg:col-span-2">
            {/* Contact Information */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-700 mb-4">Thông tin liên lạc</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Quốc gia</span>
                  <span className="text-blue-600 font-medium">{info.quocGia}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Tỉnh thành</span>
                  <span className="text-blue-600 font-medium">{info.tinhThanh}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Phường xã</span>
                  <span className="text-blue-600 font-medium">{info.phuongXa}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Địa chỉ thường trú</span>
                  <span className="text-blue-600 font-medium">{info.diaChiThuongTru}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Địa chỉ liên lạc</span>
                  <span className="text-blue-600 font-medium">{info.diaChiLienLac}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Di động</span>
                  <span className="text-blue-600 font-medium">{info.diDong}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Điện thoại</span>
                  <span className="text-blue-600 font-medium">{info.dienThoai}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Email cá nhân</span>
                  <span className="text-blue-600 font-medium break-all">{info.emailCaNhan}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Email trường</span>
                  <span className="text-blue-600 font-medium">{info.emailTruong}</span>
                </div>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-700 mb-4">Thông tin người liên hệ</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Họ tên người liên hệ</span>
                  <span className="text-blue-600 font-medium">{info.hoTenNguoiLienHe}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Điện thoại người liên hệ</span>
                  <span className="text-blue-600 font-medium">{info.dienThoaiNguoiLienHe}</span>
                </div>
                <div className="md:col-span-2 flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Địa chỉ người liên hệ</span>
                  <span className="text-blue-600 font-medium text-right">{info.diaChiNguoiLienHe}</span>
                </div>
              </div>
            </div>

            {/* Organization Information */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-700 mb-4">Thông tin đoàn/đảng</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Đoàn</span>
                  <span className="text-blue-600 font-medium">{info.doan}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Ngày vào Đoàn</span>
                  <span className="text-blue-600 font-medium">{info.ngayVaoDoan}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Đảng</span>
                  <span className="text-blue-600 font-medium">{info.dang}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Ngày vào Đảng</span>
                  <span className="text-blue-600 font-medium">{info.ngayVaoDang}</span>
                </div>
              </div>
            </div>

            {/* Academic Information */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-700 mb-4">Thông tin khóa học</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Khóa học</span>
                  <span className="text-blue-600 font-medium">{info.khoa}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Niên khóa</span>
                  <span className="text-blue-600 font-medium">{info.nienKhoa}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Năm nhập học</span>
                  <span className="text-blue-600 font-medium">{info.namNhapHoc}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Năm hết thời gian đào tạo</span>
                  <span className="text-blue-600 font-medium">{info.namHetThoiGianDaoTao}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Chương trình đào tạo</span>
                  <span className="text-blue-600 font-medium">{info.chuongTrinhDaoTao}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Ngày kết thúc chương trình đào tạo</span>
                  <span className="text-blue-600 font-medium">{info.ngayKetThucChuongTrinhDaoTao}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Chức vụ</span>
                  <span className="text-blue-600 font-medium">{info.chucVu}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">THPT lớp 12</span>
                  <span className="text-blue-600 font-medium">{info.thptLop12}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Hình thức đào tạo</span>
                  <span className="text-blue-600 font-medium">{info.hinhThucDaoTao}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Cố vấn học tập</span>
                  <span className="text-blue-600 font-medium">{info.coVanHocTap}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">SĐT cố vấn học tập</span>
                  <span className="text-blue-600 font-medium">{info.sdtCoVanHocTap}</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-gray-600">Email cố vấn học tập</span>
                  <span className="text-blue-600 font-medium">{info.emailCoVanHocTap}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThongTinCaNhan;