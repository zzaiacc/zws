import "../app/globals.css";

export const metadata = {
  title: "Zaiac Tecnologia",
  description: "Zaiac Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
