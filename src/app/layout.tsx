import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OkPedidos | Login",
  description: "Área de acesso do OkPedidos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={"antialiased"}>{children}</body>
    </html>
  );
}
