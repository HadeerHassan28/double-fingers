import Link from "next/link";

export default function RootNotFound() {
  return (
    <html lang="ar" dir="rtl">
      <body className="flex min-h-screen flex-col items-center justify-center bg-[#141312] text-[#F5F3EF]">
        <h1 className="text-4xl font-black text-[#F5BE18]">404</h1>
        <p className="mt-2 text-sm text-[#A8A29A]">الصفحة غير موجودة / Page Not Found</p>
        <Link
          href="/ar"
          className="mt-6 rounded-md bg-[#F5BE18] px-5 py-2.5 text-sm font-bold text-[#141312]"
        >
          العودة للرئيسية
        </Link>
      </body>
    </html>
  );
}
