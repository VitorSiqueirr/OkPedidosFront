"use client";

export default function Navbar() {
  return (
    <header className="w-full top-0 flex flex-row justify-baseline items-center p-2 bg-(--color-card-bg) shadow-2xs">
      <h1
        className="font-bold text-center my-2 text-2xl hover:cursor-pointer"
        onClick={() => {}}>
        Ok<span className="text-(--color-primary)">Pedidos</span>
      </h1>
    </header>
  );
}
