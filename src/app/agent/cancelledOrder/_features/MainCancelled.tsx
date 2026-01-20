import { CancelCard } from "../_component/CancelCard";

export const MainCancelled = () => {
  return (
    <div className="w-full h-full flex flex-col gap-5 p-6">
      <p className="text-2xl font-bold tracking-tight">Цуцлагдсан захиалгууд</p>
      <div className="grid grid-cols-4 gap-y-7">
        <CancelCard />
      </div>
    </div>
  );
};
