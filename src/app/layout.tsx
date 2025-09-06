
import "./globals.css";
import { AuthProvider } from "@/contexts/auth";

// ✅ metadata cho favicon & title
export const metadata = {
  title: "Cổng thông tin đào tạo",
  description: "Trang web Next.js",
  icons: {
    icon: "/neu.jpg", // favicon nằm trong thư mục public/
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <html lang="vi">
        <body className="flex h-screen bg-gray-100">
          {children}
        </body>
      </html>
    </AuthProvider>
  );
}
