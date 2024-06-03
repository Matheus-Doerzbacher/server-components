"use client";

import { useFormStatus } from "react-dom";

export function AddTagButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="bg-zinc-700 hover:bg-zinc-600 p-1 rounded-md ml-3 "
      disabled={pending}
    >
      {pending ? "Carregando.." : "Salvar Tag"}
    </button>
  );
}
