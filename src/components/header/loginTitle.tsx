"use client";

import { useRouter } from "next/navigation";

export default function LoginTitle() {
  const router = useRouter();
  return (
    <h1
      className="font-bold text-center my-2 text-3xl hover:cursor-pointer"
      onClick={() => router.push("/")}>
      Ok<span className="text-(--color-primary)">Pedidos</span>
    </h1>
  );
}
