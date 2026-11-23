import Link from "next/link";
import "./globals.css";

export default function RootNotFound() {
  return (
    <html lang="ar" dir="rtl">
      <body className="flex min-h-screen flex-col items-center justify-center bg-[#141312] text-[#F5F3EF] selection:bg-[#F5BE18] selection:text-[#141312]">
        <div className="text-center px-4">
          <span className="font-mono text-7xl font-black text-[#F5BE18]">404</span>
          <h1 className="mt-4 text-2xl font-bold">
            الصفحة غير موجودة / Page Not Found
          </h1>
          <p className="mt-2 text-sm text-[#A8A29A]">
            لم نتمكن من العثور على الصفحة المطلوبة / The requested page could not be found.
          </p>
          <Link
            href="/"
            className="mt-6 inline-block rounded-md bg-[#F5BE18] px-6 py-3 text-sm font-bold text-[#141312] transition-transform hover:scale-105"
          >
            العودة للرئيسية / Return to Homepage
          </Link>
        </div>
      </body>
    </html>
  );
}
