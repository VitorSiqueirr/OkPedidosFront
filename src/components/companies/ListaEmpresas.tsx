"use client";

import { Mail, Pencil, Phone, Trash2 } from "lucide-react";

export async function ListaEmpresas() {
  async function getEmpresas() {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/empresas`,
      {
        cache: "no-store",
      }
    );
    if (!res.ok) throw new Error("Erro ao carregar empresas");
    return res.json() as Promise<Array<{ id: string; nome: string }>>;
  }

  const empresas = await getEmpresas();
  return (
    <div className="w-full px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
      {empresas.map((empresa) => (
        <div
          key={empresa.id}
          className="w-full bg-(--color-card-bg) shadow-2xs rounded-2xl flex flex-col p-4 relative">
          <div className="top-0 right-0 p-2 flex flex-row gap-2 absolute">
            <Pencil
              className="h-4 w-4 text-yellow-900 hover:cursor-pointer hover:scale-110 transition-all"
              onClick={() => {}}
            />{" "}
            <Trash2
              className="h-4 w-4 text-red-900 hover:cursor-pointer hover:scale-110 transition-all"
              onClick={() => {}}
            />
          </div>
          <h1 className="text-xl">Fábrica 123</h1>
          <p className="text-sm font-light">CNPJ: 123123123123</p>
          <p className="text-sm font-light flex flex-row items-center gap-1">
            <Phone className="h-4 w-4" />
            Phone
          </p>
          <p className="text-sm font-light flex flex-row items-center gap-1">
            <Mail className="h-4 w-4" />
            Email
          </p>
        </div>
      ))}
    </div>
  );
}
