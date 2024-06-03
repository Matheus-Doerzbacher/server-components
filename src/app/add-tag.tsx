import { revalidateTag } from "next/cache";
import { resolve } from "path";
import { AddTagButton } from "./add-tag-button";

export function AddTags() {
  async function handleCreateTag(form: FormData) {
    "use server";

    const slug = form.get("slug");

    if (!slug) {
      return;
    }

    // delay de 3 segundos
    await new Promise((resolve) => setTimeout(resolve, 3000));

    fetch("http://localhost:3333/tags", {
      method: "POST",
      body: JSON.stringify({
        slug,
      }),
    });

    revalidateTag("get-tags");
  }

  return (
    <form action={handleCreateTag} method="POST">
      <input
        className="text-zinc-900 p-1"
        type="text"
        name="slug"
        placeholder="Slug da tag"
      />
      <AddTagButton />
    </form>
  );
}
