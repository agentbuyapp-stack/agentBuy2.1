import { AlertTriangle, X } from "lucide-react";
type Delete = {
  handleFalseDelete: () => void;
};
export const DeleteOrder = (props: Delete) => {
  const { handleFalseDelete } = props;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={handleFalseDelete}
      />
      <div className="relative bg-white w-100 rounded-2xl p-6 shadow-2xl animate-in fade-in zoom-in duration-200">
        <button
          className="absolute top-4 right-4 p-1 hover:bg-gray-100 rounded-lg transition-colors"
          onClick={handleFalseDelete}
        >
          <X size={20} className="text-gray-400" />
        </button>
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
            <AlertTriangle size={32} className="text-red-500" />
          </div>
        </div>
        <div className="text-center mb-6">
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Захиалга устгах
          </h3>
          <p className="text-gray-500 text-sm">
            <span className="font-semibold text-gray-700">username</span>
            -ийн захиалгыг устгахдаа итгэлтэй байна уу?
          </p>
          <p className="text-gray-400 text-xs mt-2">
            Энэ үйлдлийг буцаах боломжгүй.
          </p>
        </div>
        <div className="flex gap-3">
          <button
            className="flex-1 py-3 px-4 rounded-xl text-sm font-semibold bg-gray-100 text-gray-700 hover:bg-gray-200 transition-all"
            onClick={handleFalseDelete}
          >
            Цуцлах
          </button>
          <button className="flex-1 py-3 px-4 rounded-xl text-sm font-semibold bg-red-500 text-white hover:bg-red-600 shadow-lg shadow-red-200 hover:shadow-red-300 transition-all">
            Устгах
          </button>
        </div>
      </div>
    </div>
  );
};
