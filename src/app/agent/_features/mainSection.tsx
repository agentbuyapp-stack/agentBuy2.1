"use client";
import { Card } from "../_components/cards";

export const MainSection = () => {
  return (
    <div className="w-full h-full flex flex-col gap-5 p-6">
      <p className="text-2xl font-bold tracking-tight">Нээлттэй захиалгууд</p>
      <div className="grid grid-cols-4 gap-y-7">
        <Card />
      </div>
    </div>
  );
};
