"use client";
import { FileText, MessageCircle } from "lucide-react";
import { useState } from "react";
import { OrderMoreReport } from "../../_components/OrderMoreReport";
import { ShowReportAgent } from "../../_components/ShowReportAgent";
import { PriceInfSee } from "./PriceInfSee";

export const PendingCard = () => {
  const [sendReport, setSendReport] = useState(false);
  const handleSendReport = () => {
    setSendReport(!sendReport);
  };
  const handleFalseReportClick = () => {
    setSendReport(false);
  };
  const [orderMore, setOrderMore] = useState(false);
  const handleOrderMore = () => {
    setOrderMore(!orderMore);
  };
  const handleFalseOrderMore = () => {
    setOrderMore(false);
  };
  const [priceInf, setPriceInf] = useState(false);
  const handlePriceInf = () => {
    setPriceInf(!priceInf);
  };
  const handleFalsePriceInf = () => {
    setPriceInf(false);
  };
  return (
    <div className="border border-zinc-200 shadow-xl w-85 h-45 rounded-lg flex flex-col p-4 bg-white">
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
        <span className="px-3 py-1 bg-amber-50 text-amber-600 text-xs font-medium rounded-full">
          Хүлээгдэж байна
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
          className="py-2 rounded-md text-xs font-semibold flex flex-col bg-blue-50 text-blue-600 hover:bg-blue-100 hover:scale-105 justify-center items-center cursor-pointer"
          onClick={handleSendReport}
        >
          <FileText size={14} />
          <span>Тайлан өөрчлөх</span>
        </button>
      </div>
      {sendReport && (
        <ShowReportAgent
          handleFalseReportClick={handleFalseReportClick}
          handleOrderMore={handleOrderMore}
          handlePriceInf={handlePriceInf}
          InfTitle="Мэдээлэл өөрчлөх"
        />
      )}
      {orderMore && (
        <OrderMoreReport
          handleFalseOrderMore={handleFalseOrderMore}
          handlePriceInf={handlePriceInf}
          text="Мэдээлэл харах"
        />
      )}
      {priceInf && <PriceInfSee handleFalsePriceInf={handleFalsePriceInf} />}
    </div>
  );
};
