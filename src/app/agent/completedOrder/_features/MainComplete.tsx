import { CardComplete } from "../_component/CardComplete";

export const MainComplete = () => {
  return (
    <div className="w-full h-full flex flex-col gap-5 p-6">
      <p className="text-2xl font-bold tracking-tight">
        Төлбөр төлөгдсөн захиалгууд
      </p>
      <div className="grid grid-cols-4 gap-y-7">
        <CardComplete />
      </div>
    </div>
  );
};
