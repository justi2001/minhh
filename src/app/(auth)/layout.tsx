"use client"
import Navbar from '@/components/Navbar';
import Header from '@/components/Header';

export default function RootLayout({ children }: { children: React.ReactNode }) {


  return (
      <div className="flex h-screen w-screen bg-gray-100">
        <Navbar />
        <div className="flex-1 flex flex-col h-screen overflow-y-auto">
          <Header />
          <main className={`flex-1 bg-gray-50 p-6 w-full`}>{children}</main>
        </div>
      </div>
  );
}
