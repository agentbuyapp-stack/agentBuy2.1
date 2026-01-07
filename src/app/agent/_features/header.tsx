import { User2Icon } from "lucide-react";

export const Header = () => {
  return (
    <header className="w-full h-16 shrink-0 flex items-center px-10 justify-end">
      <div className="w-300 h-16 shrink-0 flex items-center px-10 justify-end">
        <div className="flex items-center gap-2 px-2 py-1 shrink-0 hidden">
          <div className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <span className="text-lg font-bold">A</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold">Agent Buy</span>
            <span className="text-xs text-muted-foreground">
              Agent Dashboard
            </span>
          </div>
        </div>
        <button>
          <User2Icon color="black" />
        </button>
      </div>
    </header>
  );
};
