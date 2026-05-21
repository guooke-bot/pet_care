import './globals.css';

export const metadata = {
  title: '喵汪洗护馆 | 宠物洗护店',
  description: '喵汪洗护馆提供宠物洗澡、造型、修毛、SPA、护理与上门接送服务。',
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
