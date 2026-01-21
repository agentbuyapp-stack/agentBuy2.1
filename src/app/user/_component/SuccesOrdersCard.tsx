import {
  Package,
  Check,
  Clock,
  CheckCircle2,
  Eye,
  MoreVertical,
} from "lucide-react";
export const SuccesOrdersCard = () => {
  return (
    <div className="w-full max-w-[320px] min-[640px]:max-w-110 h-auto min-[640px]:h-50 bg-white shadow-lg hover:shadow-xl rounded-xl transition-all duration-300 p-3 min-[640px]:p-4 flex flex-col gap-2.5 min-[640px]:gap-3 border border-gray-100">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 min-[640px]:w-11 min-[640px]:h-11 bg-linear-to-br from-blue-500 to-blue-600 rounded-lg flex flex-col items-center justify-center shadow-md">
            <Package className="w-3 h-3 min-[640px]:w-4 min-[640px]:h-4 text-white mb-0.5" />
            <span className="text-white font-bold text-[10px] min-[640px]:text-xs">
              #2
            </span>
          </div>
          <div>
            <p className="text-xs min-[640px]:text-sm font-bold text-gray-800">
              Багц захиалга
            </p>
            <p className="text-[10px] min-[640px]:text-xs text-gray-500">
              3 цагийн өмнө
            </p>
          </div>
        </div>
        <span className="px-1.5 min-[640px]:px-2 py-0.5 min-[640px]:py-1 bg-green-100 text-green-700 text-[10px] min-[640px]:text-xs font-bold rounded-full">
          Дууссан
        </span>
      </div>

      <div className="flex items-center gap-1.5 min-[640px]:gap-2">
        <div className="flex flex-col items-center gap-0.5 min-[640px]:gap-1 flex-1">
          <div className="w-6 h-6 min-[640px]:w-7 min-[640px]:h-7 bg-green-500 rounded-full flex items-center justify-center">
            <Check className="w-3 h-3 min-[640px]:w-4 min-[640px]:h-4 text-white" />
          </div>
          <span className="text-[8px] min-[640px]:text-[9px] text-green-600 font-semibold">
            Захиалсан
          </span>
        </div>
        <div className="flex-1 h-0.5 min-[640px]:h-1 bg-green-500 rounded-full"></div>
        <div className="flex flex-col items-center gap-0.5 min-[640px]:gap-1 flex-1">
          <div className="w-6 h-6 min-[640px]:w-7 min-[640px]:h-7 bg-green-500 rounded-full flex items-center justify-center">
            <Check className="w-3 h-3 min-[640px]:w-4 min-[640px]:h-4 text-white" />
          </div>
          <span className="text-[8px] min-[640px]:text-[9px] text-green-600 font-semibold">
            Төлбөр
          </span>
        </div>
        <div className="flex-1 h-0.5 min-[640px]:h-1 bg-green-500 rounded-full"></div>
        <div className="flex flex-col items-center gap-0.5 min-[640px]:gap-1 flex-1">
          <div className="w-6 h-6 min-[640px]:w-7 min-[640px]:h-7 bg-green-500 rounded-full flex items-center justify-center">
            <CheckCircle2 className="w-3 h-3 min-[640px]:w-4 min-[640px]:h-4 text-white" />
          </div>
          <span className="text-[8px] min-[640px]:text-[9px] text-green-600 font-semibold">
            Баталсан
          </span>
        </div>
      </div>

      <button className="w-full py-1.5 min-[640px]:py-2 bg-green-50 hover:bg-green-100 text-green-600 rounded-lg text-[10px] min-[640px]:text-xs font-semibold transition-all mt-auto">
        Дэлгэрэнгүй
      </button>
    </div>
  );
};
