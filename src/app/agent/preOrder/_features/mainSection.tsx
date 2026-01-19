"use client";
import { Button } from "@/components/ui/button";
import { Card } from "../_components/cards";
import { useRouter } from "next/navigation";

export const MainSection = () => {
  const router = useRouter();
  return (
    <div className="w-full h-full flex flex-col gap-5 p-6">
      <p className="text-2xl font-bold tracking-tight">Нээлттэй захиалгууд</p>
      <div className="grid grid-cols-4 gap-y-7">
        <Card />
      </div>
    </div>
  );
};
