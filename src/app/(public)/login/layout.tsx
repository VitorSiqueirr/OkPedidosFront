import LoginTitle from "@/components/header/loginTitle";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <div className="w-full h-screen flex flex-col justify-center items-center gap-6">
        <div className="w-90 h-90 p-4 m-4 rounded-3xl bg-(--color-card-bg) shadow-2xl">
          <LoginTitle />
          {children}
        </div>
      </div>
    </main>
  );
}
