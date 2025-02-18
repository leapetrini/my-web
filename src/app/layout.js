import "./globals.css";

export const metadata = {
  title: "Leandro's Portfolio",
  description: "Personal portfolio showcasing my projects and skills.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">{children}</body>
    </html>
  );
}
