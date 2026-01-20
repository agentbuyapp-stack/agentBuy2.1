import { DollarSign, Image, LoaderIcon, X } from "lucide-react";
import { useState } from "react";
type PriceInf = {
  handleFalsePriceInf: () => void;
};
export const PriceInfSee = (props: PriceInf) => {
  const { handleFalsePriceInf } = props;
  const [agentSeeImg, setAgentSeeImg] = useState<string[]>([]);
  const [uploading, setUploading] = useState(false);
  const handleSeeReport = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target;
    if (!input.files || input.files.length || agentSeeImg.length >= 3) return;
    const file = input.files[0];
    setUploading(true);
    try {
      const imgUrl = URL.createObjectURL(file);
      setAgentSeeImg((prev) => [...prev, imgUrl]);
      input.value = "";
    } catch (err) {
      console.log(err);
    } finally {
      setUploading(false);
    }
  };
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md p-4">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col">
        <div className="bg-linear-to-r from-green-500 to-green-600 p-4 flex items-center justify-between">
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
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Зураг оруулах
            </label>
            <div className="flex gap-3">
              {agentSeeImg.map((img, index) => (
                <div
                  className="relative w-35 h-35 rounded-xl overflow-hidden group shadow-md hover:shadow-lg transition-shadow"
                  key={index}
                >
                  <img
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    src={img}
                  />
                  <div className="absolute inset-0 hover:bg-black/40 transition-color duration-300" />
                  <button
                    className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 w-6 h-6 rounded-lg flex justify-center items-center text-white shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-200 transform hover:scale-110"
                    onClick={() =>
                      setAgentSeeImg((prev) =>
                        prev.filter((_, i) => i !== index),
                      )
                    }
                  >
                    <X size={14} />
                  </button>
                </div>
              ))}
              {agentSeeImg.length < 3 && (
                <div className="relative bg-linear-to-br from-gray-50 to-gray-100 w-35 h-35 border-2 border-dashed border-gray-300 rounded-xl flex flex-col justify-center items-center cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition-all duration-300 group shadow-sm hover:shadow-md">
                  <Image
                    className="text-gray-400 group-hover:text-blue-500 transition-colors mb-1"
                    size={28}
                  />
                  <p className="text-xs text-gray-500 gruop-hover:text-blue-600 font-medium">
                    Зураг нэмэх
                  </p>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleSeeReport}
                    className="absolute inset-0 opacity-0 cursor-pointer"
                  />
                  {uploading && (
                    <div className="absolute inset-0 bg-white/90 flex flex-col items-center justify-center rounded-xl">
                      <div className="w-8 h-8 border-3 border-blue-500 border-t-transparent rounded-full animate-spin mb-2"></div>
                      <div className="text-black text-xs font-medium">
                        <LoaderIcon />
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
            {uploading && (
              <div className="absolute inset-0 bg-white/90 flex flex-col items-center justify-center rounded-xl">
                <div className="w-8 h-8 border-3 border-blue-500 border-t-transparent rounded-full animate-spin mb-2"></div>
                <div className="text-black text-xs font-medium">
                  <LoaderIcon />
                </div>
              </div>
            )}
          </div>
          <div className="p-4 border-gray-200 flex gap-2">
            <button
              className="flex-1 py-2.5 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-lg font-semibold transition-all text-sm"
              onClick={handleFalsePriceInf}
            >
              Цуцлах
            </button>
            <button
              className="flex-1 py-2.5 bg-linear-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-lg font-semibold transition-all hover:scale-[1.02] shadow-md text-sm disabled:opacity-50 disabled:cursor-not-allowed"
              // onClick={handleSubmit}
              // disabled={!priceData.price}
            >
              Хадгалах
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
