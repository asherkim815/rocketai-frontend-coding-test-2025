import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '김한규 - 로켓AI 코딩테스트',
  description: '로켓AI Next.js & Tailwind 프론트엔드 개발자 모집 코딩 테스트',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`flex justify-center`}>{children}</body>
    </html>
  );
}
