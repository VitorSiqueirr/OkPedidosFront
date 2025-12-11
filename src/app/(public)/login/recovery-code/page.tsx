"use client";

import { useRouter } from "next/navigation";

export default function CodigoRecuperacao() {
  const router = useRouter();

  return (
    <div>
      <div className="flex flex-col gap-2 my-4">
        <div className="flex flex-col">
          <label className="px-2 text-lg" htmlFor="email">
            Email de recuperação:
          </label>
          <input
            name="email"
            placeholder="Digite seu email..."
            className="p-2 bg-(--color-primary)/20 rounded-3xl"
          />
        </div>
        <div className="flex flex-col">
          <label className="px-2 text-lg" htmlFor="senha">
            Código de verificação:
          </label>
          <input
            name="recovery-code"
            className="p-2 bg-(--color-primary)/20 rounded-3xl"
          />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center mt-10">
        <button
          className="text-xl w-fit px-6 py-2 bg-(--color-primary) text-(--color-text-accent) rounded-full hover:cursor-pointer hover:scale-105 transition-all"
          onClick={() => router.push("/login/new-password")}>
          Confirmar Código
        </button>
        <button
          className="font-light text-(--color-primary) mt-6 hover:cursor-pointer"
          onClick={() => router.push("/")}>
          Voltar a tela de login
        </button>
      </div>
    </div>
  );
}
