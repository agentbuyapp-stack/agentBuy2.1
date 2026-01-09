import { Package, Plus, ShoppingBag, Sparkles, X } from "lucide-react";
type NewOrder = {
    handleAddNewOrder: () => void;
}
export const NewOrderBtn = (props: NewOrder) => {
    const { handleAddNewOrder } = props;
    return (<>
        {/* <div className="h-17 w-225 flex justify-between items-center">
            <p className="text-[30px] font-bold">Шинэ захиалга үүсгэх</p>
            <button
                className="w-10 h-10 bg-gradient-to-r from-[#0b4ce5] to-[#4a90e2] hover:from-[#0a42c7] hover:to-[#3d7ec7] flex justify-center items-center rounded-2xl cursor-pointer transition-all duration-200 ease-out hover:scale-110 active:scale-95 shadow-lg hover:shadow-xl relative overflow-hidden"
                onClick={handleAddNewOrder}
            >
                <Plus className="text-white" />
            </button>
        </div> */}
        <div className="h-24 w-225 flex justify-between items-center bg-gradient-to-r from-white via-blue-50/50 to-white rounded-2xl px-6 border border-blue-100 shadow-sm ">
            <div className="flex items-center gap-4">
                <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-300">
                        <ShoppingBag className="text-white" size={32} />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-3 border-white shadow-md flex items-center justify-center">
                        <Plus size={16} className="text-white" />
                    </div>
                </div>
                <div>
                    <h2 className="text-3xl font-bold text-gray-800">Шинэ захиалга үүсгэх</h2>
                    <div className="flex items-center gap-2 mt-1">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <p className="text-xs text-gray-500 flex items-center gap-1 mt-1">
                            <Sparkles size={12} className="text-yellow-500" />
                            Барааны мэдээлэл оруулна уу
                        </p>
                    </div>
                </div>
            </div>
            <button
                className="w-13 h-13 bg-gradient-to-r from-[#0b4ce5] to-[#4a90e2] hover:from-[#0a42c7] hover:to-[#3d7ec7] flex justify-center items-center rounded-2xl cursor-pointer transition-all duration-200 ease-out hover:scale-110 active:scale-95 shadow-lg hover:shadow-xl relative overflow-hidden"
                onClick={handleAddNewOrder}
            >
                <Plus className="text-white" />
            </button>
        </div>
    </>

    )
}