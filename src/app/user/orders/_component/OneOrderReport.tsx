import { DollarSign, FileText, Image, Package, X } from "lucide-react";
type Report = {
  handleFalseShowReport: () => void;
};
export const OneOrderReport = (props: Report) => {
  const { handleFalseShowReport } = props;
  const reportData = {
    images: ["/image1.jpg", "/image2.jpg", "/image3.jpg"],
  };
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md p-3 min-[640px]:p-4">
      <div className="w-full max-w-85 min-[640px]:max-w-125 max-h-[90vh] bg-white rounded-xl min-[640px]:rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-in fade-in zoom-in duration-300">
        <div className="bg-linear-to-r from-green-500 to-emerald-600 p-3 min-[640px]:p-4 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2 min-[640px]:gap-3">
            <div className="w-8 h-8 min-[640px]:w-10 min-[640px]:h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
              <FileText className="w-4 h-4 min-[640px]:w-5 min-[640px]:h-5 text-white" />
            </div>
            <div className="text-white">
              <h2 className="text-base min-[640px]:text-lg font-bold">
                Агентын тайлан
              </h2>
              <p className="text-[10px] min-[640px]:text-xs text-white/90">
                Захиалга #1
              </p>
            </div>
          </div>
          <button
            className="w-7 h-7 min-[640px]:w-8 min-[640px]:h-8 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center transition-all"
            onClick={handleFalseShowReport}
          >
            <X className="text-white w-4 h-4 min-[640px]:w-5 min-[640px]:h-5" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-3 min-[640px]:p-4 space-y-3 min-[640px]:space-y-4">
          <div className="bg-gray-50 rounded-lg p-3 min-[640px]:p-4">
            <div className="flex items-center gap-2 mb-1.5 min-[640px]:mb-2">
              <Package className="w-3.5 h-3.5 min-[640px]:w-4 min-[640px]:h-4 text-green-600" />
              <span className="text-[10px] min-[640px]:text-xs font-medium text-gray-500">
                Барааны нэр
              </span>
            </div>
            <p className="text-sm min-[640px]:text-base font-bold text-gray-800">
              iPhone 15 Pro Max
            </p>
          </div>
          <div className="bg-gray-50 rounded-lg p-3 min-[640px]:p-4">
            <div className="flex items-center gap-2 mb-1.5 min-[640px]:mb-2">
              <FileText className="w-3.5 h-3.5 min-[640px]:w-4 min-[640px]:h-4 text-green-600" />
              <span className="text-[10px] min-[640px]:text-xs font-medium text-gray-500">
                Тайлбар
              </span>
            </div>
            <p className="text-xs min-[640px]:text-sm text-gray-700 leading-relaxed">
              medeelel
            </p>
          </div>
          <div className="bg-gray-50 rounded-lg p-3 min-[640px]:p-4">
            <div className="flex items-center gap-2 mb-2 min-[640px]:mb-3">
              <Image className="w-3.5 h-3.5 min-[640px]:w-4 min-[640px]:h-4 text-green-600" />
              <span className="text-[10px] min-[640px]:text-xs font-medium text-gray-500">
                Зургууд
              </span>
            </div>
            <div className="grid grid-cols-3 gap-2 min-[640px]:gap-3">
              {reportData.images.map((img, index) => (
                <div
                  key={index}
                  className="relative aspect-square rounded-lg min-[640px]:rounded-xl overflow-hidden bg-gray-200 group cursor-pointer"
                >
                  <img
                    src={img}
                    alt={`Product ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="bg-linear-to-br from-green-50 to-emerald-50 rounded-lg p-3 min-[640px]:p-4 border border-green-100">
            <div className="flex items-center gap-2 mb-2 min-[640px]:mb-3">
              <DollarSign className="w-3.5 h-3.5 min-[640px]:w-4 min-[640px]:h-4 text-green-600" />
              <span className="text-[10px] min-[640px]:text-xs font-medium text-gray-500">
                Үнийн мэдээлэл
              </span>
            </div>
            <div className="space-y-2 min-[640px]:space-y-2.5">
              <div className="h-px bg-green-200 my-1"></div>
              <div className="flex justify-between items-center">
                <span className="text-sm min-[640px]:text-base font-bold text-gray-800">
                  үнэ
                </span>
                <span className="text-base min-[640px]:text-lg font-bold text-green-600">
                  999'000
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="p-3 min-[640px]:p-4 bg-gray-50 border-t border-gray-200 shrink-0">
          <button
            className="w-full py-2 min-[640px]:py-2.5 bg-linear-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white rounded-lg font-semibold transition-all text-xs min-[640px]:text-sm shadow-md"
            onClick={handleFalseShowReport}
          >
            Хаах
          </button>
        </div>
      </div>
    </div>
  );
};
