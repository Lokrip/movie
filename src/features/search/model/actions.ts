import { useActionState } from "react";
import { selectSetQuery } from "./selectors";
import { useSearchStore } from "./store";
import { pages } from "@/shared/consts/pages";
import { useRouter } from "next/navigation";

export function useSearchActions() {
  const router = useRouter();
  const setQuery = useSearchStore(selectSetQuery);

  const [error, submitAction, isPending] = useActionState(
    async (previousState: unknown, formData: FormData) => {
      const query = formData.get("query")?.toString();
      if (!query) {
        return "Query are required.";
      }
      router.push(`${pages.home}?query=${encodeURIComponent(query)}`);
      setQuery(query);
      return null;
    },
    null
  );

  return { submitAction, error, isPending };
}
