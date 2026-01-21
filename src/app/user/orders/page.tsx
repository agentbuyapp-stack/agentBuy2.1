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
    <div className="w-full min-h-screen flex justify-center pt-10 min-[640px]:pt-20 px-3 min-[640px]:px-4 bg-linear-to-br from-gray-50 via-blue-50/30 to-gray-100">
      <div className="w-full max-w-90 min-[640px]:max-w-235 h-fit bg-white rounded-xl min-[640px]:rounded-2xl shadow-xl min-[640px]:shadow-2xl border border-gray-200 flex flex-col gap-4 min-[640px]:gap-6 p-4 min-[640px]:p-8">
        <div className="flex w-full bg-linear-to-r from-gray-100 to-gray-50 rounded-xl min-[640px]:rounded-2xl p-1 min-[640px]:p-1.5 gap-1 min-[640px]:gap-2 shadow-inner">
          <button
            className={`flex-1 flex items-center justify-center gap-1.5 min-[640px]:gap-3 rounded-lg min-[640px]:rounded-xl py-2 min-[640px]:py-3 px-2 min-[640px]:px-4 font-semibold transition-all duration-300 relative ${
              activeTab === "all"
                ? "bg-linear-to-r from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/50 scale-105"
                : "text-gray-600 hover:bg-white/50"
            }`}
            onClick={() => setActiveTab("all")}
          >
            <Package className="w-4 h-4 min-[640px]:w-5.5 min-[640px]:h-5.5" />
            <span className="text-xs min-[640px]:text-base">Бүх захиалга</span>
            {allOrdersCount > 0 && (
              <span
                className={`absolute -top-1 -right-1 w-5 h-5 min-[640px]:w-6 min-[640px]:h-6 rounded-full flex items-center justify-center text-[10px] min-[640px]:text-xs font-bold ${
                  activeTab === "all" ? "bg-yellow-400 text-blue-900" : "hidden"
                }`}
              >
                {allOrdersCount}
              </span>
            )}
          </button>
          <button
            className={`flex-1 flex items-center justify-center gap-1.5 min-[640px]:gap-3 rounded-lg min-[640px]:rounded-xl py-2 min-[640px]:py-3 px-2 min-[640px]:px-4 font-semibold transition-all duration-300 relative ${
              activeTab === "completed"
                ? "bg-linear-to-r from-green-500 to-green-600 text-white shadow-lg shadow-green-500/50 scale-105"
                : "text-gray-600 hover:bg-white/50"
            }`}
            onClick={() => setActiveTab("completed")}
          >
            <CheckCircle2 className="w-4 h-4 min-[640px]:w-5.5 min-[640px]:h-5.5" />
            <span className="text-xs min-[640px]:text-base">Амжилттай</span>
            {completedOrdersCount > 0 && (
              <span
                className={`absolute -top-1 -right-1 w-5 h-5 min-[640px]:w-6 min-[640px]:h-6 rounded-full flex items-center justify-center text-[10px] min-[640px]:text-xs font-bold ${
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
          <div className="flex flex-col gap-4 min-[640px]:gap-6 animate-in fade-in duration-300">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2.5 min-[640px]:gap-4">
                <div className="w-10 h-10 min-[640px]:w-14 min-[640px]:h-14 bg-linear-to-br from-blue-500 to-blue-600 rounded-xl min-[640px]:rounded-2xl flex items-center justify-center shadow-lg">
                  <Package className="text-white w-5 h-5 min-[640px]:w-7 min-[640px]:h-7" />
                </div>
                <div>
                  <h1 className="text-xl min-[640px]:text-3xl font-bold text-gray-800">
                    Миний захиалгууд
                  </h1>
                  <p className="text-gray-500 text-xs min-[640px]:text-sm mt-0.5 min-[640px]:mt-1">
                    Нийт {allOrdersCount} захиалга
                  </p>
                </div>
              </div>
              <button
                className="group w-10 h-10 min-[640px]:w-14 min-[640px]:h-14 bg-linear-to-r from-[#0b4ce5] to-[#4a90e2] hover:from-[#0a42c7] hover:to-[#3d7ec7] flex justify-center items-center rounded-xl min-[640px]:rounded-2xl cursor-pointer transition-all duration-200 ease-out hover:scale-110 active:scale-95 shadow-lg hover:shadow-xl relative overflow-hidden"
                onClick={handleNavigateToUser}
              >
                <Plus className="text-white relative z-10 w-5 h-5 min-[640px]:w-7 min-[640px]:h-7" />
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-200"></div>
              </button>
            </div>

            {!activeOrders && (
              <div className="bg-linear-to-br from-blue-50 to-transparent rounded-lg min-[640px]:rounded-xl p-6 min-[640px]:p-8 text-center border-2 border-dashed border-blue-200">
                <Package className="w-10 h-10 min-[640px]:w-12 min-[640px]:h-12 text-blue-300 mx-auto mb-2 min-[640px]:mb-3" />
                <p className="text-gray-500 font-medium text-sm min-[640px]:text-base">
                  Захиалгууд энд харагдана
                </p>
              </div>
            )}

            {activeOrders && (
              <div className="flex flex-col min-[640px]:flex-row w-full gap-3 min-[640px]:gap-4">
                <OrdersCard />
              </div>
            )}
          </div>
        )}

        {activeTab === "completed" && (
          <div className="flex flex-col gap-4 min-[640px]:gap-6 animate-in fade-in duration-300">
            <div className="flex items-center gap-2.5 min-[640px]:gap-4">
              <div className="w-10 h-10 min-[640px]:w-14 min-[640px]:h-14 bg-linear-to-br from-green-400 to-green-600 rounded-xl min-[640px]:rounded-2xl flex items-center justify-center shadow-lg">
                <CheckCircle2 className="text-white w-5 h-5 min-[640px]:w-7 min-[640px]:h-7" />
              </div>
              <div>
                <div className="flex items-center gap-1.5 min-[640px]:gap-2">
                  <h1 className="text-xl min-[640px]:text-3xl font-bold text-gray-800">
                    Амжилттай захиалгууд
                  </h1>
                  <Sparkles className="text-yellow-500 w-4 h-4 min-[640px]:w-5 min-[640px]:h-5" />
                </div>
                <p className="text-gray-500 text-xs min-[640px]:text-sm mt-0.5 min-[640px]:mt-1">
                  Нийт {completedOrdersCount} амжилттай дууссан
                </p>
              </div>
            </div>

            {!succesOrders && (
              <div className="bg-linear-to-br from-green-50 to-transparent rounded-lg min-[640px]:rounded-xl p-6 min-[640px]:p-8 text-center border-2 border-dashed border-green-200">
                <CheckCircle2 className="w-10 h-10 min-[640px]:w-12 min-[640px]:h-12 text-green-300 mx-auto mb-2 min-[640px]:mb-3" />
                <p className="text-gray-500 font-medium text-sm min-[640px]:text-base">
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
