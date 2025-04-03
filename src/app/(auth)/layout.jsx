export const metadata = {
  title: "Ivor",
};

export default function AuthLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div
          className="max-h-screen min-h-screen bg-gradient-to-bl from-ivor-600
                 to-ivor-900 text-ivor-950"
        >
          {children}
        </div>
      </body>
    </html>
  );
}
