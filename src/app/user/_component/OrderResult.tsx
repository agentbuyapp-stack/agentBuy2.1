// import { Pencil, Trash2, } from "lucide-react";
import { Pencil, Trash2, Package, Calendar, Clock } from 'lucide-react';
type Click = {
    handleEditOrder: () => void;
    handleDeleteOrder: () => void;
}
export const OrderResult = (props: Click) => {
    const { handleEditOrder, handleDeleteOrder } = props;
    return (
        <div className="min-h-20 w-225 bg-white dark:bg-gray-900 dark:border-gray-900 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 flex justify-between px-6 py-4 items-center border border-gray-100 group hover:border-blue-200">
            <div className="flex items-center gap-4">
                <div className="relative">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
                        <div className="text-center">
                            <Package className="w-5 h-5 text-white mb-0.5" />
                            <span className="text-white font-bold text-xs">#1</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-1">
                    <p className="text-lg font-bold text-gray-800 dark:text-white">Захиалга #1 (baraanii ner)</p>
                    <div className="flex items-center gap-3 text-xs text-gray-500">
                        <div className="flex items-center gap-1 dark:text-white">
                            <Calendar size={12} />
                            <span>Өнөөдөр</span>
                        </div>
                        <div className="flex items-center gap-1 dark:text-white">
                            <Clock size={12} />
                            <span>14:30</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex gap-2">
                <button
                    className="flex items-center gap-2 px-4 h-10 bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-lg cursor-pointer transition-all duration-200 ease-out hover:scale-105 active:scale-95 shadow-sm hover:shadow-md font-medium text-sm"
                    onClick={handleEditOrder}
                >
                    <Pencil size={16} />
                    <span className="hidden sm:inline">Засах</span>
                </button>
                <button
                    className="w-10 h-10 flex justify-center items-center bg-red-50 hover:bg-red-100 text-red-600 rounded-lg cursor-pointer transition-all duration-200 ease-out hover:scale-105 active:scale-95 shadow-sm hover:shadow-md"
                    onClick={handleDeleteOrder}
                    title="Устгах"
                >
                    <Trash2 size={16} />
                </button>
            </div>
        </div>
    )
}