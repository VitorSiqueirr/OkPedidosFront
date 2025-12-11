"use client";

import Button from "@/components/helpers/button";
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
        <Button
          handle={() => {
            router.push("/login/new-password");
          }}
          text={"Confirmar Código"}
          bgColor={"--color-primary"}
          textColor={"--color-text-accent"}
        />
        <Button
          handle={() => {
            router.push("/login");
          }}
          text={"Voltar a tela de login"}
          bgColor={"--color-primary"}
          textColor={"--color-text-accent"}
        />
      </div>
    </div>
  );
}
