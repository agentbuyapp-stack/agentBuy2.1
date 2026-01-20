import { DollarSign, X } from "lucide-react"
type PriceInf = {
    handleFalsePriceInf: () => void;
}
export const PriceInf = (props: PriceInf) => {
    const { handleFalsePriceInf } = props;
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md p-4">
            <div className="w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col">
                <div className="bg-gradient-to-r from-green-500 to-green-600 p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                            <DollarSign className="w-5 h-5 text-white" />
                        </div>
                        <div className="text-white">
                            <h2 className="text-lg font-bold">Бусад мэдээлэл оруулах</h2>
                            <p className="text-xs text-white/90">baraanii medeelel</p>
                        </div>
                    </div>
                    <button
                        className="w-8 h-8 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center transition-all"
                        onClick={handleFalsePriceInf}
                    >
                        <X className="text-white" size={20} />
                    </button>
                </div>
                <div className="p-6 space-y-4">
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Барааны үнэ (₮) *
                        </label>
                        <input
                            type="number"
                            placeholder="Үнэ оруулна уу"
                            // value={priceData.price}
                            // onChange={(e) => setPriceData({ ...priceData, price: e.target.value })}
                            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Тэмдэглэл
                        </label>
                        <textarea
                            placeholder="Барааны холбоос, нэмэлт мэдээлэл..."
                            // value={priceData.notes}
                            // onChange={(e) => setPriceData({ ...priceData, notes: e.target.value })}
                            rows={4}
                            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all resize-none"
                        />
                    </div>
                    <div className="p-4 border-gray-200 flex gap-2">
                        <button
                            className="flex-1 py-2.5 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-lg font-semibold transition-all text-sm"
                            onClick={handleFalsePriceInf}
                        >
                            Цуцлах
                        </button>
                        <button
                            className="flex-1 py-2.5 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-lg font-semibold transition-all hover:scale-[1.02] shadow-md text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                        // onClick={handleSubmit}
                        // disabled={!priceData.price}
                        >
                            Хадгалах
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}