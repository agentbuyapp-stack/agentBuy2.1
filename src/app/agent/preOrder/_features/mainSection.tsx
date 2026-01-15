"use client";
import { Button } from "@/components/ui/button";
import { Card } from "../_components/cards";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";

export const MainSection = () => {
  const router = useRouter();
  const { user } = useUser();
  console.log("USER DATA:", user);

  return (
    <div className="w-full h-full p-6">
      <header className="flex flex-col">
        <p className="text-2xl font-bold tracking-tight">Neelttei zahialguud</p>
        <div className="flex flex-row">
          <Button
            variant={"ghost"}
            onClick={() => router.push("/agent/preOrder/singleOrder")}
          >
            Dan zahialguud
          </Button>
          <Button
            variant={"ghost"}
            onClick={() => router.push("/agent/preOrder/packageOrder")}
          >
            Bagts zahialguud
          </Button>
        </div>
      </header>
      <div className="flex flex-wrap justify-evenly gap-y-7">
        <Card />
      </div>
    </div>
  );
};
