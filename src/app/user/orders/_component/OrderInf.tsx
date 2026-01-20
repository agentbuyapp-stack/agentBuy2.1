export const OrderInf = () => {
    return (
        <div className="bg-gray-50 rounded-lg p-3">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 flex-1 min-w-0">
                    <span className="w-5 h-5 bg-green-500 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                        1
                    </span>
                    <div className="min-w-0 flex-1">
                        <p className="font-semibold text-gray-800 text-md truncate">
                            iPhone 15 Pro Max
                        </p>
                    </div>
                </div>
                <button className="text-xs text-green-600 font-bold rounded-md p-2 bg-green-100 hover:bg-green-200 hover:scale-105 cursor-pointer">Тайлан харах</button>
            </div>
        </div>
    )
}