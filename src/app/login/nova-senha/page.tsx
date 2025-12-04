"use client";

import { useRouter } from "next/navigation";

export default function NovaSenha() {
  const router = useRouter();

  return (
    <main className="w-full h-screen flex flex-col justify-center items-center gap-6">
      <div className="w-90 h-90 p-4 m-4 rounded-3xl bg-(--color-card-bg)">
        <h1
          className="font-bold text-center my-2 text-3xl hover:cursor-pointer"
          onClick={() => router.push("/")}>
          Ok<span className="text-(--color-primary)">Pedidos</span>
        </h1>
        <div className="flex flex-col gap-2 my-4">
          <div className="flex flex-col">
            <label className="px-2 text-lg" htmlFor="email">
              Nova senha:
            </label>
            <input
              name="new-password"
              placeholder="Digite sua nova senha..."
              className="p-2 bg-(--color-primary)/20 rounded-3xl"
            />
          </div>
          <div className="flex flex-col">
            <label className="px-2 text-lg" htmlFor="senha">
              Confirme a nova senha:
            </label>
            <input
              name="password-confirm"
              placeholder="Confirme sua senha..."
              className="p-2 bg-(--color-primary)/20 rounded-3xl"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center mt-10">
          <button className="text-xl w-fit px-6 py-2 bg-(--color-primary) text-(--color-text-accent) rounded-full hover:cursor-pointer hover:scale-105 transition-all">
            Confirmar Código
          </button>
        </div>
      </div>
    </main>
  );
}
