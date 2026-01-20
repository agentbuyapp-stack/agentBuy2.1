"use client";
import { CheckCircle, FileText, MessageCircle } from "lucide-react";
import { useState } from "react";
import { SuccessReport } from "./SuccessReport";
export const CardComplete = () => {
  const [sendReport, setSendReport] = useState(false);
  const handleSendReport = () => {
    setSendReport(!sendReport);
  };
  const handleFalsePriceInf = () => {
    setSendReport(false);
  };
  return (
    <div className="border border-zinc-200 shadow-xl w-90 h-45 rounded-lg flex flex-col p-4 ">
      <div className="relative flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative">
            <img
              className="w-12 h-12 rounded-xl object-cover ring-blue-100 shadow-sm"
              src="/alipay.png"
              alt="User"
            />
          </div>
          <div>
            <p className="text-gray-900 font-bold text-lg">Username</p>
            <p className="text-gray-400 text-xs">Захиалга #12345</p>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2 mt-3">
        <span className="px-3 py-1 bg-green-50 text-green-600 text-xs font-medium rounded-full">
          Амжилттай
        </span>
        <span className="text-gray-300 text-xs">•</span>
        <span className="text-gray-400 text-xs">2 цагийн өмнө</span>
      </div>
      <div className="grid grid-cols-2 gap-2 mt-auto">
        <button className="py-2 rounded-md text-xs font-semibold flex bg-purple-50 text-purple-600 hover:bg-purple-100 hover:scale-105 justify-center items-center cursor-pointer gap-1">
          <MessageCircle size={14} />
          <span>Чат</span>
        </button>
        <button
          className="py-2 rounded-md text-xs font-semibold flex flex-col bg-green-50 text-green-600 hover:bg-green-100 hover:scale-105 justify-center items-center cursor-pointer"
          onClick={handleSendReport}
        >
          <FileText size={14} />
          <span>Тайлан харах</span>
        </button>
      </div>
      {sendReport && (
        <SuccessReport handleFalsePriceInf={handleFalsePriceInf} />
      )}
    </div>
  );
};
