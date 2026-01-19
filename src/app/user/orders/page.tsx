"use client";
import { useRouter } from "next/navigation";
import { Plus, Package, CheckCircle2, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { OrdersCard } from "../_component/OrdersCard";
import { SuccesOrdersCard } from "../_component/SuccesOrdersCard";

export default function Page() {
  const router = useRouter();
  const handleNavigateToUser = () => {
    router.push("/user");
  };
  const [activeOrders, setActiveOrders] = useState(false);
  const handleActiveOrders = () => {
    setActiveOrders(!activeOrders);
  };
  const [succesOrders, setSuccesOrders] = useState(false);
  const handlesuccesOrders = () => {
    setSuccesOrders(!succesOrders);
  };
  const [activeTab, setActiveTab] = useState("all");
  const allOrdersCount = 12;
  const completedOrdersCount = 5;

  useEffect(() => {
    setActiveTab("all");
    handleActiveOrders();
  }, []);
  useEffect(() => {
    setActiveTab("completed");
    handlesuccesOrders();
  }, []);
  return (
    <div className="w-full min-h-screen flex justify-center pt-20 bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-100">
      <div className="w-235 h-fit bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col gap-6 p-8">
        <div className="flex w-full bg-gradient-to-r from-gray-100 to-gray-50 rounded-2xl p-1.5 gap-2 shadow-inner">
          <button
            className={`flex-1 flex items-center justify-center gap-3 rounded-xl py-3 px-4 font-semibold transition-all duration-300 relative ${
              activeTab === "all"
                ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/50 scale-105"
                : "text-gray-600 hover:bg-white/50"
            }`}
            onClick={() => setActiveTab("all")}
          >
            <Package size={22} />
            <span className="text-base">Бүх захиалга</span>
            {allOrdersCount > 0 && (
              <span
                className={`absolute -top-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                  activeTab === "all" ? "bg-yellow-400 text-blue-900" : "hidden"
                }`}
              >
                {allOrdersCount}
              </span>
            )}
          </button>
          <button
            className={`flex-1 flex items-center justify-center gap-3 rounded-xl py-3 px-4 font-semibold transition-all duration-300 relative ${
              activeTab === "completed"
                ? "bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg shadow-green-500/50 scale-105"
                : "text-gray-600 hover:bg-white/50"
            }`}
            onClick={() => setActiveTab("completed")}
          >
            <CheckCircle2 size={22} />
            <span className="text-base">Амжилттай</span>
            {completedOrdersCount > 0 && (
              <span
                className={`absolute -top-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                  activeTab === "completed"
                    ? "bg-yellow-400 text-green-900"
                    : "hidden"
                }`}
              >
                {completedOrdersCount}
              </span>
            )}
          </button>
        </div>
        {activeTab === "all" && (
          <div className="flex flex-col gap-6 animate-in fade-in duration-300">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <Package className="text-white" size={28} />
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-gray-800">
                    Миний захиалгууд
                  </h1>
                  <p className="text-gray-500 text-sm mt-1">
                    Нийт {allOrdersCount} захиалга
                  </p>
                </div>
              </div>
              <button
                className="group w-14 h-14 bg-gradient-to-r from-[#0b4ce5] to-[#4a90e2] hover:from-[#0a42c7] hover:to-[#3d7ec7] flex justify-center items-center rounded-2xl cursor-pointer transition-all duration-200 ease-out hover:scale-110 active:scale-95 shadow-lg hover:shadow-xl relative overflow-hidden"
                onClick={handleNavigateToUser}
              >
                <Plus className="text-white relative z-10" size={28} />
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-200"></div>
              </button>
            </div>
            {!activeOrders && (
              <div className="bg-gradient-to-br from-blue-50 to-transparent rounded-xl p-8 text-center border-2 border-dashed border-blue-200">
                <Package className="w-12 h-12 text-blue-300 mx-auto mb-3" />
                <p className="text-gray-500 font-medium">
                  Захиалгууд энд харагдана
                </p>
              </div>
            )}

            {activeOrders && (
              <div className="flex w-full gap-4 ">
                <OrdersCard />
              </div>
            )}
          </div>
        )}

        {activeTab === "completed" && (
          <div className="flex flex-col gap-6 animate-in fade-in duration-300">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center shadow-lg">
                <CheckCircle2 className="text-white" size={28} />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-3xl font-bold text-gray-800">
                    Амжилттай захиалгууд
                  </h1>
                  <Sparkles className="text-yellow-500" size={20} />
                </div>
                <p className="text-gray-500 text-sm mt-1">
                  Нийт {completedOrdersCount} амжилттай дууссан
                </p>
              </div>
            </div>
            {!succesOrders && (
              <div className="bg-gradient-to-br from-green-50 to-transparent rounded-xl p-8 text-center border-2 border-dashed border-green-200">
                <CheckCircle2 className="w-12 h-12 text-green-300 mx-auto mb-3" />
                <p className="text-gray-500 font-medium">
                  Амжилттай захиалгууд энд харагдана
                </p>
              </div>
            )}
            {succesOrders && <SuccesOrdersCard />}
          </div>
        )}
      </div>
    </div>
  );
}
