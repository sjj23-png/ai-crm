import SearchBar from "./SearchBar";
import ThemeToggle from "./ThemeToggle";
import { LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import storageService from "@/services/storage/storage.service.ts";

export default function AppHeader() {
  const navigate = useNavigate();

  const handleLogout = () => {
    storageService.clear();
    navigate("/login");
  };

  return (
    <header
      className="
        sticky
        top-0
        z-20
        flex
        h-16
        items-center
        justify-between
        border-b
        border-neutral-200
        bg-white/80
        px-6
        backdrop-blur-md
        dark:border-neutral-800
        dark:bg-neutral-900/80
      "
    >
      <SearchBar />

      <div className="flex items-center gap-3">
        <ThemeToggle />
        <button
          onClick={handleLogout}
          title="Sign Out"
          className="flex items-center gap-2 rounded-xl px-3 py-1.5 text-xs font-semibold text-red-600 hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-950/40 border border-red-200 dark:border-red-800/60 transition-colors"
        >
          <LogOut size={14} />
          <span>Logout</span>
        </button>
      </div>
    </header>
  );
}