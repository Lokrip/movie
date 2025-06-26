"use client";

import { Input } from "@/shared/ui/kit/input";
import { useSearchActions } from "../model/actions";
import { selectSetQuery } from "../model/selectors";
import { useSearchStore } from "../model/store";
import { Button } from "@/shared/ui/kit/button";
import { Loader2Icon, Search } from "lucide-react";
import useDebounce from "@/shared/lib/use-debounce";
import { ChangeEventHandler, useCallback, useEffect, useState } from "react";

import { toast } from "sonner";

export function AppSearch() {
  const [search, setSearch] = useState<string>("");
  const setQuery = useSearchStore(selectSetQuery);
  const debouncedSearch = useDebounce(search, 500);

  const handleSearch = useCallback(() => {
    setQuery(search);
  }, [search, setQuery]);

  const { submitAction, error, isPending } = useSearchActions();

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    if (debouncedSearch) {
      handleSearch();
    }
  }, [debouncedSearch, handleSearch]);

  useEffect(() => {
    if (error) {
      toast(error, {
        description: "Please edit the form later or clarify your request.",
        action: {
          label: "Undo",
          onClick: () => console.log("Undo"),
        },
      });
    }
  }, [error]);

  return (
    <form className="flex gap-0.5" action={submitAction}>
      <Input
        value={search}
        onChange={onChange}
        type="text"
        placeholder="Search..."
        name="query"
      />
      <Button disabled={isPending} variant={"default"}>
        {isPending ? <Loader2Icon className="animate-spin" /> : <Search />}
      </Button>
    </form>
  );
}
