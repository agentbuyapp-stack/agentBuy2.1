import { RewardCard } from "../_component/RewardCard";

export const MainReward = () => {
  return (
    <div className="w-full h-full flex flex-col gap-5 p-6">
      <p className="text-2xl font-bold tracking-tight">Судалж буй захиалгууд</p>
      <div className="grid grid-cols-5 gap-y-7 lg:grid lg:grid-cols-4 lg:gap-y-7 md:grid md:grid-cols-2 md:gap-y-7 sm:flex sm:flex-col sm:justify-center sm:w-full">
        <RewardCard />
      </div>
    </div>
  );
};
