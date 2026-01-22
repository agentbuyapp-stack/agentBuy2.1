"use client";
import { FileText, MessageCircle } from "lucide-react";
import { useState } from "react";
import { PriceInf } from "./PriceInf";
import { ShowReportAgent } from "./ShowReportAgent";
import { OrderMoreReport } from "./OrderMoreReport";
export const Card = () => {
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
    <div className="border border-zinc-200 dark:border-gray-700 shadow-xl w-85 h-45 rounded-lg flex flex-col p-4 gap-2 bg-white dark:bg-gray-900 dark:border-0">
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
            <p className="text-gray-900 font-bold text-lg dark:text-white">Username</p>
            <p className="text-gray-400 text-xs">Захиалга #12345</p>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2 mt-1">
        <span className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded-full dark:bg-blue-900 dark:text-blue-100 ">
          Шинэ захиалга
        </span>
        <span className="text-gray-300 text-xs">•</span>
        <span className="text-gray-400 text-xs">2 цагийн өмнө</span>
      </div>
      <div className="grid grid-cols-2 gap-2 mt-auto">
        <button className="py-2 rounded-md text-xs font-semibold flex justify-center items-center cursor-pointer gap-1
    bg-purple-50 text-purple-600 hover:bg-purple-100 hover:scale-105
    dark:bg-purple-900 dark:text-purple-300 dark:hover:bg-purple-800"
        >
          <MessageCircle size={14} />
          <span>Чат</span>
        </button>
        <button
          className="py-2 rounded-md text-xs font-semibold flex flex-col justify-center items-center cursor-pointer
      bg-blue-50 text-blue-600 hover:bg-blue-100 hover:scale-105
      dark:bg-blue-900 dark:text-blue-300 dark:hover:bg-blue-800"
          onClick={handleSendReport}
        >
          <FileText size={14} />
          <span>Тайлан илгээх</span>
        </button>
      </div>
      {sendReport && (
        <ShowReportAgent
          handleFalseReportClick={handleFalseReportClick}
          handleOrderMore={handleOrderMore}
          handlePriceInf={handlePriceInf}
          InfTitle="Мэдээлэл оруулах"
        />
      )}
      {orderMore && (
        <OrderMoreReport
          handleFalseOrderMore={handleFalseOrderMore}
          handlePriceInf={handlePriceInf}
          text="Мэдээлэл оруулах"
        />
      )}
      {priceInf && <PriceInf handleFalsePriceInf={handleFalsePriceInf} />}
    </div>
  );
};
