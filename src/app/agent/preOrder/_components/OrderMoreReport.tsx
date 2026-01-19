import { Package, X } from "lucide-react"
type orderMore = {
    handleFalseOrderMore: () => void;
    handlePriceInf: () => void;
}
export const OrderMoreReport = (props: orderMore) => {
    const { handleFalseOrderMore, handlePriceInf } = props;
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md p-4">
            <div className="w-full max-w-2xl max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col">
                <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                            <Package className="w-5 h-5 text-white" />
                        </div>
                        <div className="text-white">
                            <h2 className="text-lg font-bold">Барааны мэдээлэл</h2>
                            <p className="text-xs text-white/90">baraanii ner</p>
                        </div>
                    </div>
                    <button
                        className="w-8 h-8 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center transition-all"
                        onClick={handleFalseOrderMore}
                    >
                        <X className="text-white" size={20} />
                    </button>
                </div>

                <div className="flex-1 flex p-6 gap-4">

                    <div className=" bg-gray-100 w-[300px] h-[250px] rounded-xl overflow-hidden aspect-video flex items-center justify-center">
                        <img
                            src="./alipay.png"
                            alt="orderImgErr"
                            className="w-full h-full"
                        />

                    </div>
                    <div className="flex flex-col">
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">
                            Барааны нэр
                        </h3>
                        <p className="text-sm text-gray-600 mb-4">
                            Тайлбар
                        </p>
                    </div>

                </div>

                <div className="p-4 bg-gray-50 border-t border-gray-200 flex gap-2">
                    <button
                        className="flex-1 py-2.5 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-lg font-semibold transition-all text-sm"
                        onClick={handleFalseOrderMore}
                    >
                        Буцах
                    </button>
                    <button
                        className="flex-1 py-2.5 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-lg font-semibold transition-all hover:scale-[1.02] shadow-md text-sm"
                        onClick={handlePriceInf}
                    >
                        Үнэ оруулах
                    </button>
                </div>
            </div>
        </div>
    )
}