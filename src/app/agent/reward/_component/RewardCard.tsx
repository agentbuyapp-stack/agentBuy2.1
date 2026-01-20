"use client";
import { Gift, ArrowUpRight, Sparkles, ChevronRight } from "lucide-react";

export const RewardCard = () => {
  return (
    <div className="border border-zinc-200 shadow-xl w-90 h-45 rounded-lg flex flex-col p-4 bg-white transition-shadow duration-300">
      <div className="relative flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative">
            <img
              className="w-12 h-12 rounded-xl object-cover ring-2 ring-green-100 shadow-sm"
              src="/alipay.png"
              alt="User"
            />
            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center border-2 border-white">
              <ArrowUpRight size={10} className="text-white" />
            </div>
          </div>
          <div>
            <p className="text-gray-900 font-bold text-lg">Username</p>
            <p className="text-gray-400 text-xs">Захиалга #12345</p>
          </div>
        </div>
        <div className="flex items-center gap-1 bg-green-50 px-2 py-1 rounded-full">
          <Gift size={12} className="text-green-500" />
          <span className="text-green-600 text-xs font-medium">+5,000₮</span>
        </div>
      </div>

      <div className="flex items-center gap-2 mt-3">
        <span className="px-3 py-1 bg-green-50 text-green-600 text-xs font-medium rounded-full">
          Урамшуулал орлоо
        </span>
        <span className="text-gray-300 text-xs">•</span>
        <span className="text-gray-400 text-xs">Дөнгөж сая</span>
      </div>

      <button className="group relative flex justify-center items-center gap-2 mt-auto py-2.5 rounded-lg bg-linear-to-r from-blue-500 to-blue-500 hover:from-blue-500 hover:to-blue-600 transition-all duration-300 cursor-pointer overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-r from-blue-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity" />
        <Sparkles
          size={16}
          className="relative z-10 text-white group-hover:rotate-13 transition-transform"
        />
        <span className="relative z-10 text-white text-sm font-semibold">
          Урамшуулал авах
        </span>
      </button>
    </div>
  );
};
