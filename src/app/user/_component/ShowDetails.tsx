import { ShoppingBag, X } from "lucide-react"
type ShowDetailsClick = {
    showDetialsClick: () => void;
}
export const ShowDetails = (props: ShowDetailsClick) => {
    const { showDetialsClick } = props;
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md p-4">
            <div className="w-125 max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-in fade-in zoom-in duration-300">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                            <ShoppingBag className="w-5 h-5 text-white" />
                        </div>
                        <div className="text-white">
                            <h2 className="text-lg font-bold">Барааны дэлгэрэнгүй</h2>
                            <p className="text-xs text-white/90">Нийт 5 бараа</p>
                        </div>
                    </div>
                    <button
                        className="w-8 h-8 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center transition-all"
                        onClick={showDetialsClick}
                    >
                        <X className="text-white" size={20} />
                    </button>
                </div>
                <div className="flex-1 overflow-y-auto p-4">
                    <div className="space-y-2">
                        <div className="bg-white border border-gray-200 rounded-lg p-3 hover:border-blue-300 hover:shadow-md transition-all">
                            <div className="flex gap-3 items-center">
                                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <span className="text-sm font-bold text-white">1</span>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h4 className="text-sm font-bold text-gray-800 truncate">iPhone 15 Pro Max</h4>
                                    <p className="text-xs text-gray-500 truncate">Хар өнгө, 256GB</p>
                                </div>
                                <div className="px-2 py-1 bg-blue-100 text-blue-700 font-bold rounded text-xs flex-shrink-0">
                                    2x
                                </div>
                            </div>
                        </div>
                        <div className="bg-white border border-gray-200 rounded-lg p-3 hover:border-blue-300 hover:shadow-md transition-all">
                            <div className="flex gap-3 items-center">
                                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <span className="text-sm font-bold text-white">2</span>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h4 className="text-sm font-bold text-gray-800 truncate">AirPods Pro 2</h4>
                                    <p className="text-xs text-gray-500 truncate">USB-C холбоостой</p>
                                </div>
                                <div className="px-2 py-1 bg-blue-100 text-blue-700 font-bold rounded text-xs flex-shrink-0">
                                    1x
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-4 bg-gray-50 border-t border-gray-200">
                    <button
                        className="w-full py-2.5 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-lg font-semibold transition-all hover:scale-103 shadow-md text-sm"
                        onClick={showDetialsClick}
                    >
                        Хаах
                    </button>
                </div>
            </div>
        </div>
    )
}