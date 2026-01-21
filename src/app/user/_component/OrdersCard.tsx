"use client";
import {
  Package,
  Check,
  Clock,
  CheckCircle2,
  Eye,
  MessageCircle,
  FileText,
} from "lucide-react";
import { useState } from "react";
import { ShowReport } from "./ShowReport";
import { ShowDetails } from "./ShowDetails";
export const OrdersCard = () => {
  const [showReport, setShowReport] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const handleFalseClick = () => {
    setShowReport(false);
  };
  const handleShowDetialsClick = () => {
    setShowDetails(false);
  };
  return (
    <div className="grid grid-cols-1 min-[640px]:grid-cols-2 gap-3 min-[640px]:gap-4">
      <div className="w-full max-w-85 min-[640px]:max-w-110 bg-white shadow-lg hover:shadow-xl rounded-xl transition-all duration-300 p-3 min-[640px]:p-4 flex flex-col gap-2.5 min-[640px]:gap-3 border border-gray-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 min-[640px]:w-11 min-[640px]:h-11 bg-linear-to-br from-blue-500 to-blue-600 rounded-lg flex flex-col items-center justify-center shadow-md">
              <Package className="w-3 h-3 min-[640px]:w-4 min-[640px]:h-4 text-white mb-0.5" />
              <span className="text-white font-bold text-[10px] min-[640px]:text-xs">
                #3
              </span>
            </div>
            <div>
              <p className="text-xs min-[640px]:text-sm font-bold text-gray-800">
                Багц захиалга
              </p>
              <p className="text-[10px] min-[640px]:text-xs text-gray-500">
                5 цагийн өмнө
              </p>
            </div>
          </div>
          <span className="px-1.5 min-[640px]:px-2 py-0.5 min-[640px]:py-1 bg-blue-100 text-blue-700 text-[10px] min-[640px]:text-xs font-bold rounded-full">
            Шинэ
          </span>
        </div>
        <div className="flex items-center gap-1 min-[640px]:gap-2">
          <div className="flex flex-col items-center gap-0.5 min-[640px]:gap-1 flex-1">
            <div className="w-5 h-5 min-[640px]:w-7 min-[640px]:h-7 bg-green-500 rounded-full flex items-center justify-center">
              <Check className="w-3 h-3 min-[640px]:w-4 min-[640px]:h-4 text-white" />
            </div>
            <span className="text-[7px] min-[640px]:text-[8px] text-green-600 font-semibold">
              Захиалсан
            </span>
          </div>
          <div className="flex-1 h-0.5 min-[640px]:h-1 bg-gray-300 rounded-full"></div>
          <div className="flex flex-col items-center gap-0.5 min-[640px]:gap-1 flex-1">
            <div className="w-5 h-5 min-[640px]:w-7 min-[640px]:h-7 bg-purple-500 rounded-full flex items-center justify-center animate-pulse">
              <Clock className="w-3 h-3 min-[640px]:w-4 min-[640px]:h-4 text-white" />
            </div>
            <span className="text-[7px] min-[640px]:text-[8px] text-purple-500 font-semibold">
              Судалж байна
            </span>
          </div>
          <div className="flex-1 h-0.5 min-[640px]:h-1 bg-gray-300 rounded-full"></div>
          <div className="flex flex-col items-center gap-0.5 min-[640px]:gap-1 flex-1">
            <div className="w-5 h-5 min-[640px]:w-7 min-[640px]:h-7 bg-gray-300 rounded-full flex items-center justify-center">
              <Clock className="w-3 h-3 min-[640px]:w-4 min-[640px]:h-4 text-white" />
            </div>
            <span className="text-[7px] min-[640px]:text-[8px] text-gray-400 font-semibold">
              Төлбөр
            </span>
          </div>
          <div className="flex-1 h-0.5 min-[640px]:h-1 bg-gray-300 rounded-full"></div>
          <div className="flex flex-col items-center gap-0.5 min-[640px]:gap-1 flex-1">
            <div className="w-5 h-5 min-[640px]:w-7 min-[640px]:h-7 bg-gray-300 rounded-full flex items-center justify-center">
              <CheckCircle2 className="w-3 h-3 min-[640px]:w-4 min-[640px]:h-4 text-white" />
            </div>
            <span className="text-[7px] min-[640px]:text-[8px] text-gray-400 font-semibold">
              Баталсан
            </span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-1.5 min-[640px]:gap-2 mt-auto">
          <button
            className="py-1.5 min-[640px]:py-2 bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-lg text-[10px] min-[640px]:text-xs font-semibold transition-all flex flex-col items-center gap-0.5 min-[640px]:gap-1 hover:scale-105"
            onClick={() => setShowDetails(true)}
          >
            <Eye className="w-3 h-3 min-[640px]:w-3.5 min-[640px]:h-3.5" />
            <span>Дэлгэрэнгүй</span>
          </button>
          <button className="py-1.5 min-[640px]:py-2 bg-purple-50 hover:bg-purple-100 text-purple-600 rounded-lg text-[10px] min-[640px]:text-xs font-semibold transition-all flex flex-col items-center gap-0.5 min-[640px]:gap-1 hover:scale-105">
            <MessageCircle className="w-3 h-3 min-[640px]:w-3.5 min-[640px]:h-3.5" />
            <span>Чат</span>
          </button>
        </div>
      </div>
      <div className="w-full max-w-85 min-[640px]:max-w-110 bg-white shadow-lg hover:shadow-xl rounded-xl transition-all duration-300 p-3 min-[640px]:p-4 flex flex-col gap-2.5 min-[640px]:gap-3 border border-gray-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 min-[640px]:w-11 min-[640px]:h-11 bg-linear-to-br from-blue-500 to-blue-600 rounded-lg flex flex-col items-center justify-center shadow-md">
              <Package className="w-3 h-3 min-[640px]:w-4 min-[640px]:h-4 text-white mb-0.5" />
              <span className="text-white font-bold text-[10px] min-[640px]:text-xs">
                #1
              </span>
            </div>
            <div>
              <p className="text-xs min-[640px]:text-sm font-bold text-gray-800">
                Багц захиалга
              </p>
              <p className="text-[10px] min-[640px]:text-xs text-gray-500">
                2 цагийн өмнө
              </p>
            </div>
          </div>
          <span className="px-1.5 min-[640px]:px-2 py-0.5 min-[640px]:py-1 bg-yellow-100 text-yellow-700 text-[10px] min-[640px]:text-xs font-bold rounded-full">
            Хүлээгдэж буй
          </span>
        </div>
        <div className="flex items-center gap-1 min-[640px]:gap-2">
          <div className="flex flex-col items-center gap-0.5 min-[640px]:gap-1 flex-1">
            <div className="w-5 h-5 min-[640px]:w-7 min-[640px]:h-7 bg-green-500 rounded-full flex items-center justify-center">
              <Check className="w-3 h-3 min-[640px]:w-4 min-[640px]:h-4 text-white" />
            </div>
            <span className="text-[7px] min-[640px]:text-[8px] text-green-600 font-semibold">
              Захиалсан
            </span>
          </div>
          <div className="flex-1 h-0.5 min-[640px]:h-1 bg-green-500 rounded-full"></div>
          <div className="flex flex-col items-center gap-0.5 min-[640px]:gap-1 flex-1">
            <div className="w-5 h-5 min-[640px]:w-7 min-[640px]:h-7 bg-purple-500 rounded-full flex items-center justify-center">
              <Clock className="w-3 h-3 min-[640px]:w-4 min-[640px]:h-4 text-white" />
            </div>
            <span className="text-[7px] min-[640px]:text-[8px] text-purple-500 font-semibold">
              Судалсан
            </span>
          </div>
          <div className="flex-1 h-0.5 min-[640px]:h-1 bg-purple-500 rounded-full"></div>
          <div className="flex flex-col items-center gap-0.5 min-[640px]:gap-1 flex-1">
            <div className="w-5 h-5 min-[640px]:w-7 min-[640px]:h-7 bg-yellow-500 rounded-full flex items-center justify-center animate-pulse">
              <Clock className="w-3 h-3 min-[640px]:w-4 min-[640px]:h-4 text-white" />
            </div>
            <span className="text-[7px] min-[640px]:text-[8px] text-yellow-600 font-semibold">
              Төлбөр
            </span>
          </div>
          <div className="flex-1 h-0.5 min-[640px]:h-1 bg-gray-300 rounded-full"></div>
          <div className="flex flex-col items-center gap-0.5 min-[640px]:gap-1 flex-1">
            <div className="w-5 h-5 min-[640px]:w-7 min-[640px]:h-7 bg-gray-300 rounded-full flex items-center justify-center">
              <CheckCircle2 className="w-3 h-3 min-[640px]:w-4 min-[640px]:h-4 text-white" />
            </div>
            <span className="text-[7px] min-[640px]:text-[8px] text-gray-400 font-semibold">
              Баталсан
            </span>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-1.5 min-[640px]:gap-2 mt-auto">
          <button
            className="py-1.5 min-[640px]:py-2 bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-lg text-[10px] min-[640px]:text-xs font-semibold transition-all flex flex-col items-center gap-0.5 min-[640px]:gap-1 hover:scale-105"
            onClick={() => setShowDetails(true)}
          >
            <Eye className="w-3 h-3 min-[640px]:w-3.5 min-[640px]:h-3.5" />
            <span>Дэлгэрэнгүй</span>
          </button>
          <button className="py-1.5 min-[640px]:py-2 bg-purple-50 hover:bg-purple-100 text-purple-600 rounded-lg text-[10px] min-[640px]:text-xs font-semibold transition-all flex flex-col items-center gap-0.5 min-[640px]:gap-1 hover:scale-105">
            <MessageCircle className="w-3 h-3 min-[640px]:w-3.5 min-[640px]:h-3.5" />
            <span>Чат</span>
          </button>
          <button
            className="py-1.5 min-[640px]:py-2 bg-green-50 hover:bg-green-100 text-green-600 rounded-lg text-[10px] min-[640px]:text-xs font-semibold transition-all flex flex-col items-center gap-0.5 min-[640px]:gap-1 hover:scale-105"
            onClick={() => setShowReport(true)}
          >
            <FileText className="w-3 h-3 min-[640px]:w-3.5 min-[640px]:h-3.5" />
            <span>Тайлан</span>
          </button>
        </div>
      </div>

      {showReport && <ShowReport handleFalseClick={handleFalseClick} />}
      {showDetails && <ShowDetails showDetialsClick={handleShowDetialsClick} />}
    </div>
  );
};
