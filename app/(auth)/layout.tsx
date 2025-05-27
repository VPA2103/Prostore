




export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <body className="flex-center min-h-screen w-full">
        {children}
      </body>
  );
}