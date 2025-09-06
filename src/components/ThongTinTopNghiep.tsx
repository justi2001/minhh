import React, { useState } from 'react';

interface StudentInfo {
  maSinhVien: string;
  hoTen: string;
  ngaySinh: string;
  dienThoai: string;
  email: string;
  diaChi?: string;
  thanhTich?: string;
  camNhan?: string;
}

interface ThongTinTotNghiepProps {
  studentData?: StudentInfo;
}

const ThongTinTotNghiep: React.FC<ThongTinTotNghiepProps> = ({ 
  studentData = {
    maSinhVien: "11241087",
    hoTen: "Nguyễn Văn Minh",
    ngaySinh: "19/08/2006",
    dienThoai: "0337458932",
    email: "Nguyenvanminh19806hn@gmail.com",
    diaChi: "",
    thanhTich: "",
    camNhan: ""
  }
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState<StudentInfo>(studentData);

  const handleInputChange = (field: keyof StudentInfo, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = () => {
    setIsEditing(false);
    // Here you can add logic to save data to backend
    console.log('Saved data:', formData);
  };

  const InfoField: React.FC<{
    label: string;
    value: string;
    field: keyof StudentInfo;
    isBlue?: boolean;
  }> = ({ label, value, field, isBlue = false }) => (
    <div className="flex items-center py-4 border-b border-gray-100">
      <div className="w-32 text-gray-700 font-medium">
        {label}
      </div>
      <div className="flex-1">
        {isEditing ? (
          <input
            type="text"
            value={formData[field] || ''}
            onChange={(e) => handleInputChange(field, e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        ) : (
          <span className={isBlue ? "text-blue-600" : "text-gray-900"}>
            {value || ''}
          </span>
        )}
      </div>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto bg-white">
      {/* Header */}
      <div className="flex items-center mb-8 p-6 bg-gray-50 rounded-t-lg">
        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-3">
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
        <h1 className="text-xl font-semibold text-blue-600">
          Thông tin tốt nghiệp sinh viên
        </h1>
      </div>

      {/* Student Photos Section */}
      <div className="px-6 mb-8">
        <div className="flex items-center gap-6">
          {/* Student Photo 1 */}
          <div className="flex flex-col items-center">
            <div className="w-32 h-32 bg-gray-300 rounded-full flex items-center justify-center overflow-hidden">
              <svg className="w-16 h-16 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
            </div>
          </div>

          {/* Student Photo 2 */}
          <div className="flex flex-col items-center">
            <div className="w-32 h-32 bg-gray-300 rounded-full flex items-center justify-center overflow-hidden">
              <svg className="w-16 h-16 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
            </div>
          </div>

          {/* Student Photo 3 (partially visible) */}
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 bg-gray-300 rounded-full flex items-center justify-center overflow-hidden">
              <svg className="w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Student Information */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-6">
            Thông tin cá nhân
          </h2>

          <div className="space-y-0">
            <InfoField
              label="Mã sinh viên"
              value={formData.maSinhVien}
              field="maSinhVien"
              isBlue={true}
            />

            <InfoField
              label="Họ tên"
              value={formData.hoTen}
              field="hoTen"
              isBlue={true}
            />

            <InfoField
              label="Ngày Sinh"
              value={formData.ngaySinh}
              field="ngaySinh"
              isBlue={true}
            />

            <InfoField
              label="Điện thoại"
              value={formData.dienThoai}
              field="dienThoai"
              isBlue={true}
            />

            <InfoField
              label="Email"
              value={formData.email}
              field="email"
              isBlue={true}
            />

            <InfoField
              label="Địa chỉ liên hệ"
              value={formData.diaChi || ''}
              field="diaChi"
            />

            <InfoField
              label="Thành tích"
              value={formData.thanhTich || ''}
              field="thanhTich"
            />

            <InfoField
              label="Cảm nhận:"
              value={formData.camNhan || ''}
              field="camNhan"
            />
          </div>

          {/* Update Button */}
          <div className="mt-8 flex justify-center">
            {isEditing ? (
              <div className="flex gap-3">
                <button
                  onClick={handleSave}
                  className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-200"
                >
                  Lưu thông tin
                </button>
                <button
                  onClick={() => setIsEditing(false)}
                  className="px-6 py-2 bg-gray-500 text-white rounded-full hover:bg-gray-600 transition-colors duration-200"
                >
                  Hủy
                </button>
              </div>
            ) : (
              <button
                onClick={() => setIsEditing(true)}
                className="px-6 py-2 bg-gray-300 text-gray-700 rounded-full hover:bg-gray-400 transition-colors duration-200 flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
                Cập nhật thông tin
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Settings Button (Fixed Position) */}
      <div className="fixed bottom-6 right-6">
        <button className="w-12 h-12 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ThongTinTotNghiep;