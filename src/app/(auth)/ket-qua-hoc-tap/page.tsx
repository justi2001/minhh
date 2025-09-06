'use client';

import React, { useState } from 'react';
import KetQuaHocTap from '../../../components/KetQuaHocTap';
import XemDiemDT from '../../../components/XemDiemDT';
import { ChevronRight } from 'lucide-react';

const Page: React.FC = () => {
  const [viewMode, setViewMode] = useState<'student' | 'program'>('student');
  const [selectedProgram, setSelectedProgram] = useState('Thống kê kinh tế 66');

  return (
    <div className="max-w-7xl mx-auto p-6 bg-gray-50 min-h-screen">
 

      {/* Render component based on view mode */}
      {viewMode === 'student' ? <KetQuaHocTap /> : <XemDiemDT />}
    </div>
  );
};

export default Page;