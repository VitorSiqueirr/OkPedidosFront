"use client";

import Button from "@/components/helpers/button";
import { useRouter } from "next/navigation";

export default function NovaSenha() {
  const router = useRouter();

  return (
    <div>
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
        <Button
          handle={() => {
            router.push("/login/new-password");
          }}
          text={"Salvar Nova Senha"}
          bgColor={"--color-primary"}
          textColor={"--color-text-accent"}
        />
      </div>
    </div>
  );
}
