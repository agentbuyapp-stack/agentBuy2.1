"use client";
import { ShowDetails } from "@/app/user/_component/ShowDetails";
import { DollarSign, FileText, MessageCircle, Package, ShoppingBag, X } from "lucide-react";
import { useTime } from "motion/react";
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
    setOrderMore(!orderMore)
  }
  const handleFalseOrderMore = () => {
    setOrderMore(false);
  }
  const [priceInf, setPriceInf] = useState(false);
  const handlePriceInf = () => {
    setPriceInf(!priceInf)
  }
  const handleFalsePriceInf = () => {
    setPriceInf(false)
  }
  return (
    <div className="border border-zinc-200 shadow-xl w-90 h-37.5 rounded-lg flex flex-col p-4 ">
      <div className="flex w-fit gap-2">
        <img className="w-9 h-9 rounded-xl object-cover" src={"/alipay.png"} />
        <p className="text-black text-lg font-bold mt-1">username</p>
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
          <span>Тайлан илгээх</span>
        </button>
      </div>
      {sendReport && (
        <ShowReportAgent handleFalseReportClick={handleFalseReportClick} handleOrderMore={handleOrderMore} handlePriceInf={handlePriceInf} />
      )}
      {orderMore && (
        <OrderMoreReport handleFalseOrderMore={handleFalseOrderMore} handlePriceInf={handlePriceInf} />
      )}
      {priceInf && (
        <PriceInf handleFalsePriceInf={handleFalsePriceInf} />
      )}
    </div>
  );
};
