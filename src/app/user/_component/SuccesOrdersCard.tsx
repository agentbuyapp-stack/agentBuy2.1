import { Package, Check, Clock, CheckCircle2, Eye, MoreVertical } from 'lucide-react';
export const SuccesOrdersCard = () => {
    return (
        <div className="w-110 h-50 bg-white shadow-lg hover:shadow-xl rounded-xl transition-all duration-300 p-4 flex flex-col gap-3 border border-gray-100">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="w-11 h-11 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex flex-col items-center justify-center shadow-md">
                        <Package className="w-4 h-4 text-white mb-0.5" />
                        <span className="text-white font-bold text-xs">#2</span>
                    </div>
                    <div>
                        <p className="text-sm font-bold text-gray-800">Багц захиалга</p>
                        <p className="text-xs text-gray-500">3 цагийн өмнө</p>
                    </div>
                </div>
                <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">Дууссан</span>
            </div>

            <div className="flex items-center gap-2">
                <div className="flex flex-col items-center gap-1 flex-1">
                    <div className="w-7 h-7 bg-green-500 rounded-full flex items-center justify-center">
                        <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-[9px] text-green-600 font-semibold">Захиалсан</span>
                </div>
                <div className="flex-1 h-1 bg-green-500"></div>
                <div className="flex flex-col items-center gap-1 flex-1">
                    <div className="w-7 h-7 bg-green-500 rounded-full flex items-center justify-center">
                        <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-[9px] text-green-600 font-semibold">Төлбөр</span>
                </div>
                <div className="flex-1 h-1 bg-green-500"></div>
                <div className="flex flex-col items-center gap-1 flex-1">
                    <div className="w-7 h-7 bg-green-500 rounded-full flex items-center justify-center">
                        <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-[9px] text-green-600 font-semibold">Батал...</span>
                </div>
            </div>

            <button className="w-full py-2 bg-green-50 hover:bg-green-100 text-green-600 rounded-lg text-xs font-semibold transition-all mt-auto">
                Дэлгэрэнгүй
            </button>
        </div>

    )
}