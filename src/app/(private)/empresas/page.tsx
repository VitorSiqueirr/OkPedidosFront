import { ListaEmpresas } from "@/components/empresas/ListaEmpresas";
import Navbar from "@/components/header/navbar";
import { Building } from "lucide-react";

export default function ListaEmpresaPage() {
  return (
    <main className="w-full h-screen">
      <Navbar />
      <div className="flex flex-col justify-center items-center mt-3 mb-2">
        <h1 className="font-bold text-center flex flex-row items-center gap-2 text-xl">
          <Building className="text-(--color-primary)" /> Gerenciar Empresas
        </h1>
        <input
          type="text"
          className="w-full max-w-11/12 sm:max-w-lg py-1 px-4 my-1 mx-2 bg-white shadow-2xs rounded-2xl"
          placeholder="Buscar por Nome ou CNPJ..."
        />
      </div>

      <div className="flex flex-col justify-center items-center gap-2">
        <button className="w-full max-w-11/12 sm:max-w-lg bg-(--color-primary) text-white font-bold text-lg py-1 mx-4 rounded-2xl">
          + Nova Empresa
        </button>
        <p className="text-(--color-text)/80 py-1 px-2">
          {4} empresa(s) encontrada(s)
        </p>
        {ListaEmpresas()}
      </div>
    </main>
  );
}
