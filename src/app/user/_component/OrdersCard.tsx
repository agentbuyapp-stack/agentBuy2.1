"use client";
import {
  Package,
  Check,
  Clock,
  CheckCircle2,
  Eye,
  MoreVertical,
  MessageCircle,
  FileText,
  ShoppingBag,
} from "lucide-react";
import { useState } from "react";
import {
  X,
  Calendar,
  CreditCard,
  Building2,
  Copy,
  CheckCheck,
  AlertCircle,
  Download,
  Printer,
} from "lucide-react";
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
    <div className="grid grid-cols-2 gap-4">
      <div className="w-110 h-50 bg-white shadow-lg hover:shadow-xl rounded-xl transition-all duration-300 p-4 flex flex-col gap-3 border border-gray-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-11 h-11 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex flex-col items-center justify-center shadow-md">
              <Package className="w-4 h-4 text-white mb-0.5" />
              <span className="text-white font-bold text-xs">#3</span>
            </div>
            <div>
              <p className="text-sm font-bold text-gray-800">Багц захиалга</p>
              <p className="text-xs text-gray-500">5 цагийн өмнө</p>
            </div>
          </div>
          <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded-full">
            Шинэ
          </span>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex flex-col items-center gap-1 flex-1">
            <div className="w-7 h-7 bg-green-500 rounded-full flex items-center justify-center">
              <Check className="w-4 h-4 text-white" />
            </div>
            <span className="text-[8px] text-green-600 font-semibold">
              Захиалсан
            </span>
          </div>
          <div className="flex-1 h-1 bg-gray-300"></div>
          <div className="flex flex-col items-center gap-1 flex-1">
            <div className="w-7 h-7 bg-purple-500 rounded-full flex items-center justify-center animate-pulse">
              <Clock className="w-4 h-4 text-white" />
            </div>
            <span className="text-[8px] text-purple-500 font-semibold">
              Судлагдаж...
            </span>
          </div>
          <div className="flex-1 h-1 bg-gray-300"></div>
          <div className="flex flex-col items-center gap-1 flex-1">
            <div className="w-7 h-7 bg-gray-300 rounded-full flex items-center justify-center">
              <Clock className="w-4 h-4 text-white" />
            </div>
            <span className="text-[8px] text-gray-400 font-semibold">
              Төлбөр
            </span>
          </div>
          <div className="flex-1 h-1 bg-gray-300"></div>
          <div className="flex flex-col items-center gap-1 flex-1">
            <div className="w-7 h-7 bg-gray-300 rounded-full flex items-center justify-center">
              <CheckCircle2 className="w-4 h-4 text-white" />
            </div>
            <span className="text-[8px] text-gray-400 font-semibold">
              Батал...
            </span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 mt-auto">
          <button
            className="py-2 bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-lg text-xs font-semibold transition-all flex flex-col items-center gap-1 hover:scale-105"
            onClick={() => setShowDetails(true)}
          >
            <Eye size={14} />
            <span>Дэлгэрэнгүй</span>
          </button>
          <button className="py-2 bg-purple-50 hover:bg-purple-100 text-purple-600 rounded-lg text-xs font-semibold transition-all flex flex-col items-center gap-1 hover:scale-105">
            <MessageCircle size={14} />
            <span>Чат</span>
          </button>
        </div>
      </div>
      <div className="w-110 h-50 bg-white shadow-lg hover:shadow-xl rounded-xl transition-all duration-300 p-4 flex flex-col gap-3 border border-gray-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-11 h-11 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex flex-col items-center justify-center shadow-md">
              <Package className="w-4 h-4 text-white mb-0.5" />
              <span className="text-white font-bold text-xs">#1</span>
            </div>
            <div>
              <p className="text-sm font-bold text-gray-800">Багц захиалга</p>
              <p className="text-xs text-gray-500">2 цагийн өмнө</p>
            </div>
          </div>
          <span className="px-2 py-1 bg-yellow-100 text-yellow-700 text-xs font-bold rounded-full">
            Хүлээгдэж буй
          </span>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex flex-col items-center gap-1 flex-1">
            <div className="w-7 h-7 bg-green-500 rounded-full flex items-center justify-center">
              <Check className="w-4 h-4 text-white" />
            </div>
            <span className="text-[8px] text-green-600 font-semibold">
              Захиалсан
            </span>
          </div>
          <div className="flex-1 h-1 bg-green-500"></div>
          <div className="flex flex-col items-center gap-1 flex-1">
            <div className="w-7 h-7 bg-purple-500 rounded-full flex items-center justify-center">
              <Clock className="w-4 h-4 text-white" />
            </div>
            <span className="text-[8px] text-purple-500 font-semibold">
              Судлагдаж...
            </span>
          </div>
          <div className="flex-1 h-1 bg-purple-500"></div>
          <div className="flex flex-col items-center gap-1 flex-1">
            <div className="w-7 h-7 bg-yellow-500 rounded-full flex items-center justify-center animate-pulse">
              <Clock className="w-4 h-4 text-white" />
            </div>
            <span className="text-[8px] text-yellow-600 font-semibold">
              Төлбөр
            </span>
          </div>
          <div className="flex-1 h-1 bg-gray-300"></div>
          <div className="flex flex-col items-center gap-1 flex-1">
            <div className="w-7 h-7 bg-gray-300 rounded-full flex items-center justify-center">
              <CheckCircle2 className="w-4 h-4 text-white" />
            </div>
            <span className="text-[8px] text-gray-400 font-semibold">
              Батал...
            </span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2 mt-auto">
          <button
            className="py-2 bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-lg text-xs font-semibold transition-all flex flex-col items-center gap-1 hover:scale-105"
            onClick={() => {
              setShowDetails(true);
            }}
          >
            <Eye size={14} />
            <span>Дэлгэрэнгүй</span>
          </button>
          <button className="py-2 bg-purple-50 hover:bg-purple-100 text-purple-600 rounded-lg text-xs font-semibold transition-all flex flex-col items-center gap-1 hover:scale-105">
            <MessageCircle size={14} />
            <span>Чат</span>
          </button>
          <button
            className="py-2 bg-green-50 hover:bg-green-100 text-green-600 rounded-lg text-xs font-semibold transition-all flex flex-col items-center gap-1 hover:scale-105"
            onClick={() => setShowReport(true)}
          >
            <FileText size={14} />
            <span>Тайлан</span>
          </button>
        </div>
      </div>

      {showReport && <ShowReport handleFalseClick={handleFalseClick} />}
      {showDetails && <ShowDetails showDetialsClick={handleShowDetialsClick} />}
    </div>
  );
};
