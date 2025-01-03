export const metadata = {
  title: "Ivor",
};

export default function AuthLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
        {children}
      </body>
    </html>
  );
}