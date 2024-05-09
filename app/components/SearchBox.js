"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import useDebounce from "../hooks/useDebounce";

export default function SearchBox() {
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const pathName = usePathname();
  const { replace } = useRouter();
  const doSearch = useDebounce((term) => {
    handleSearch(term);
  }, 500);
  function handleSearch(term) {
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathName}?${params.toString()}`);
  }
  return (
    <input
      type="text"
      placeholder="Search..."
      className="bg-[#27292F] border border-[#CCCCCC]/20 py-1 px-2 rounded-md"
      onChange={(e) => doSearch(e.target.value)}
      defaultValue={searchParams.get("query")?.toString()}
    />
  );
}
