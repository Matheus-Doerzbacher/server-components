import Image from "next/image";
import { Tags } from "./tags";
import { AddTags } from "./add-tag";
import { Suspense } from "react";

export default function Home() {
  return (
    <div>
      <Suspense fallback={<p>Carregando tags...</p>}>
        <Tags />
      </Suspense>
      <AddTags />
    </div>
  );
}
