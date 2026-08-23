import { Search } from "lucide-react";


export default function SearchBar() {
  return (
    <div className="relative hidden w-full max-w-md lg:block">
      <Search
        size={18}
        className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400"
      />

      <input
        type="search"
        placeholder="Search data, companies, leads..."
        className="
          h-10
          w-full
          rounded-xl
          border
          border-slate-200
          bg-white
          pl-10
          pr-4
          text-sm
          outline-none
          transition-all
          focus:border-purple-500
          dark:border-[#263247]
          dark:bg-[#111827]
          dark:text-slate-100
          dark:placeholder:text-[#64748B]
        "
      />
    </div>
  );
}