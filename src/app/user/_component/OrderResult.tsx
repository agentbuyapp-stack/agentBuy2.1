// import { Pencil, Trash2, } from "lucide-react";
import { Pencil, Trash2, Package, Calendar, Clock } from "lucide-react";
type Click = {
  handleEditOrder: () => void;
  handleDeleteOrder: () => void;
};
export const OrderResult = (props: Click) => {
  const { handleEditOrder, handleDeleteOrder } = props;
  return (
    <div className="h-16 min-[640px]:h-20 w-full max-w-85 min-[640px]:max-w-4xl bg-white rounded-lg min-[640px]:rounded-xl shadow-md hover:shadow-xl transition-all duration-300 flex justify-between px-3 min-[640px]:px-6 py-3 min-[640px]:py-4 items-center border border-gray-100 group hover:border-blue-200">
      <div className="flex items-center gap-2 min-[640px]:gap-4">
        <div className="relative">
          <div className="w-10 h-10 min-[640px]:w-14 min-[640px]:h-14 bg-linear-to-br from-blue-500 to-blue-600 rounded-lg min-[640px]:rounded-xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
            <div className="text-center flex flex-col items-center">
              <Package className="w-3 h-3 min-[640px]:w-5 min-[640px]:h-5 text-white mb-0.5 hidden min-[640px]:block" />
              <span className="text-white font-bold text-[10px] min-[640px]:text-xs">
                #1
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-0.5 min-[640px]:gap-1">
          <p className="text-xs min-[640px]:text-lg font-bold text-gray-800">
            Захиалга #1 (baraanii ner)
          </p>
          <div className="flex items-center gap-2 min-[640px]:gap-3 text-[9px] min-[640px]:text-xs text-gray-500">
            <div className="flex items-center gap-0.5 min-[640px]:gap-1">
              <Calendar className="w-3 h-3 min-[640px]:w-4 min-[640px]:h-4" />
              <span>Өнөөдөр</span>
            </div>
            <div className="flex items-center gap-0.5 min-[640px]:gap-1">
              <Clock className="w-3 h-3 min-[640px]:w-4 min-[640px]:h-4" />
              <span>14:30</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-1.5 min-[640px]:gap-2">
        <button
          className="h-8 min-[640px]:h-10 px-2 min-[640px]:px-3 flex gap-1 min-[640px]:gap-2 items-center bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-lg cursor-pointer transition-all duration-200 hover:scale-105 active:scale-95 shadow-sm hover:shadow-md font-medium text-[10px] min-[640px]:text-sm"
          onClick={handleEditOrder}
        >
          <Pencil className="w-3 h-3 min-[640px]:w-4 min-[640px]:h-4" />
          <span className="hidden min-[640px]:inline">Засах</span>
        </button>
        <button
          className="w-8 h-8 min-[640px]:w-10 min-[640px]:h-10 flex justify-center items-center bg-red-50 hover:bg-red-100 text-red-600 rounded-lg cursor-pointer transition-all duration-200 ease-out hover:scale-105 active:scale-95 shadow-sm hover:shadow-md"
          onClick={handleDeleteOrder}
          title="Устгах"
        >
          <Trash2 className="w-3.5 h-3.5 min-[640px]:w-5 min-[640px]:h-5" />
        </button>
      </div>
    </div>
  );
};
