"use client";
import { Image, Pencil, Plus, Trash, Trash2, X } from "lucide-react";
import { button } from "motion/react-client";
import { useState } from "react";
import { OrderResult } from "./_component/OrderResult";
import { NewOrderBtn } from "./_features/NewOrderBtn";
interface newOrder {
  id: number;
  name: string;
  description: string;
  images: string[];
}
export default function Page() {
  const [addNewOrder, setAddNewOrder] = useState(false);
  const [editOrder, setEditOrder] = useState(false);
  const [deleteOrder, setDeleteOrder] = useState(false);
  const [succesOrder, setSuccesOrder] = useState(false);
  const handleAddNewOrder = () => setAddNewOrder(!addNewOrder);
  const handleEditOrder = () => {
    setEditOrder(!editOrder)
  }
  const handleDeleteOrder = () => {
    setDeleteOrder(!deleteOrder)
  }
  const handleSuccesOrder = () => {
    setSuccesOrder(!succesOrder)
  }
  const [addOrders, setAddOrders] = useState<newOrder[]>([])
  const [orderImgs, setOrderImgs] = useState<string[]>([]);
  const [uploading, setUploading] = useState(false);
  const [newOrderName, setNewOrderName] = useState("");
  const [newOrderDescription, setNewOrderDescription] = useState("");
  const handleOrderImgUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target;
    if (!input.files || input.files.length === 0 || orderImgs.length >= 3) return;

    const file = input.files[0];
    setUploading(true);

    try {
      const imgUrl = URL.createObjectURL(file);
      setOrderImgs((prev) => [...prev, imgUrl]);
      input.value = "";
    } catch (err) {
      console.error(err);
    } finally {
      setUploading(false);
    }
  };
  const handleAddOrder = () => {

  }
  return (
    <div className="w-full h-screen flex justify-center pt-20 bg-gray-50">
      <div className="w-235 h-fit bg-white rounded-xl border shadow-amber-100 flex flex-col justify-center items-center px-4 gap-6">
        <NewOrderBtn handleAddNewOrder={handleAddNewOrder} />
        <OrderResult handleEditOrder={handleEditOrder} handleDeleteOrder={handleDeleteOrder} />
        <button className="h-13 w-225 flex bg-linear-to-r from-[#0b4ce5] to-[#4a90e2] mb-5 rounded-xl text-white flex justify-center items-center cursor-pointer transition-transform duration-200 ease-out hover:scale-102 active:scale-95" onClick={handleSuccesOrder}>
          Захиалга үүсгэх
        </button>
      </div>
      {addNewOrder && (
        <div className="fixed z-10 top-0 left-0 w-screen h-screen flex justify-center items-center bg-[rgba(0,0,0,0.2)] backdrop-blur-sm">
          <div className="w-125 h-155 bg-white rounded-xl border shadow-xl flex flex-col justify-center items-center gap-4 p-6">
            <div className="w-113 h-13 flex justify-between items-center">
              <p className="text-[22px] text-black font-bold">Шинэ захиалга #1</p>
              <button
                className="w-10 h-10 flex justify-center items-center rounded-lg bg-gray-100 hover:bg-gray-200 cursor-pointer transition-all duration-200 ease-out hover:scale-105 active:scale-95"
                onClick={() => setAddNewOrder(false)}
              >
                <X />
              </button>
            </div>

            <div className="w-113 h-28 flex flex-col gap-2">
              <p className="text-[16px] text-black font-medium">Барааны нэр</p>
              <textarea
                placeholder="Захиалах барааныхаа нэрийг оруулна уу."
                className="w-113 h-17 border border-gray-300 rounded-lg text-black p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                value={newOrderName}
                onChange={(e) => setNewOrderName(e.target.value)}
              />
            </div>

            <div className="w-113 h-28 flex flex-col gap-2">
              <p className="text-[16px] text-black font-medium">Барааны тайлбар</p>
              <textarea
                placeholder="Захиалах бараагаа дэлгэрэнгүй тайлбарлан оруулна уу."
                className="w-113 h-17 border border-gray-300 rounded-lg text-black p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                value={newOrderDescription}
                onChange={(e) => setNewOrderDescription(e.target.value)}
              />
            </div>
            <div className="w-113 flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <p className="text-[16px] text-black font-medium">Захиалах барааны зураг</p>
                <span className="text-sm text-gray-500">({orderImgs.length}/3)</span>
              </div>

              <div className="flex gap-3 w-113 h-35">
                {orderImgs.map((img, index) => (
                  <div
                    key={index}
                    className="relative w-35 h-35 rounded-xl overflow-hidden group shadow-md hover:shadow-lg transition-shadow"
                  >
                    <img
                      src={img}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />
                    <button
                      className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 w-6 h-6 rounded-lg flex justify-center items-center text-white shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-200 transform hover:scale-110"
                      onClick={() =>
                        setOrderImgs((prev) => prev.filter((_, i) => i !== index))
                      }
                    >
                      <X size={14} />
                    </button>
                  </div>
                ))}

                {orderImgs.length < 3 && (
                  <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 w-35 h-35 border-2 border-dashed border-gray-300 rounded-xl flex flex-col justify-center items-center cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition-all duration-300 group shadow-sm hover:shadow-md">
                    <Image className="text-gray-400 group-hover:text-blue-500 transition-colors mb-1" size={28} />
                    <p className="text-xs text-gray-500 group-hover:text-blue-600 font-medium">Зураг нэмэх</p>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleOrderImgUpload}
                      className="absolute inset-0 opacity-0 cursor-pointer"
                    />
                    {uploading && (
                      <div className="absolute inset-0 bg-white/90 flex flex-col items-center justify-center rounded-xl">
                        <div className="w-8 h-8 border-3 border-blue-500 border-t-transparent rounded-full animate-spin mb-2"></div>
                        <p className="text-black text-xs font-medium">Uploading...</p>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {orderImgs.length === 0 && (
                <p className="text-xs text-gray-400 italic">Та дээд тал нь 3 зураг оруулах боломжтой</p>
              )}
            </div>

            <div className="w-113 h-16 flex justify-end items-end">
              <button
                className="w-113 h-10 bg-gradient-to-r from-[#0b4ce5] to-[#4a90e2] hover:from-[#0a42c7] hover:to-[#3d7ec7] rounded-lg flex justify-center items-center text-white text-[14px] font-semibold cursor-pointer transition-all duration-200 ease-out hover:scale-105 active:scale-95 shadow-md hover:shadow-lg"
                onClick={handleAddOrder}
              >
                Бараа нэмэх
              </button>
            </div>
          </div>
        </div>
      )}
      {editOrder && (
        <div className="fixed z-10 top-0 left-0 w-screen h-screen flex justify-center items-center bg-[rgba(0,0,0,0.2)] backdrop-blur-sm">
          <div className="w-125 h-155 bg-white rounded-xl border shadow-xl flex flex-col justify-center items-center gap-4 p-6">
            <div className="w-113 h-13 flex justify-between items-center">
              <p className="text-[22px] text-black font-bold">#1 захиалга засах</p>
              <button
                className="w-10 h-10 flex justify-center items-center rounded-lg bg-gray-100 hover:bg-gray-200 cursor-pointer transition-all duration-200 ease-out hover:scale-105 active:scale-95"
                onClick={() => setEditOrder(false)}
              >
                <X />
              </button>
            </div>

            <div className="w-113 h-28 flex flex-col gap-2">
              <p className="text-[16px] text-black font-medium">Барааны нэр</p>
              <textarea
                placeholder="Захиалах барааныхаа нэрийг оруулна уу."
                className="w-113 h-17 border border-gray-300 rounded-lg text-black p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                value={newOrderName}
                onChange={(e) => setNewOrderName(e.target.value)}
              />
            </div>

            <div className="w-113 h-28 flex flex-col gap-2">
              <p className="text-[16px] text-black font-medium">Барааны тайлбар</p>
              <textarea
                placeholder="Захиалах бараагаа дэлгэрэнгүй тайлбарлан оруулна уу."
                className="w-113 h-17 border border-gray-300 rounded-lg text-black p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                value={newOrderDescription}
                onChange={(e) => setNewOrderDescription(e.target.value)}
              />
            </div>
            <div className="w-113 flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <p className="text-[16px] text-black font-medium">Захиалах барааны зураг</p>
                <span className="text-sm text-gray-500">({orderImgs.length}/3)</span>
              </div>

              <div className="flex gap-3 w-113 h-35">
                {orderImgs.map((img, index) => (
                  <div
                    key={index}
                    className="relative w-35 h-35 rounded-xl overflow-hidden group shadow-md hover:shadow-lg transition-shadow"
                  >
                    <img
                      src={img}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />
                    <button
                      className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 w-6 h-6 rounded-lg flex justify-center items-center text-white shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-200 transform hover:scale-110"
                      onClick={() =>
                        setOrderImgs((prev) => prev.filter((_, i) => i !== index))
                      }
                    >
                      <X size={14} />
                    </button>
                  </div>
                ))}

                {orderImgs.length < 3 && (
                  <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 w-35 h-35 border-2 border-dashed border-gray-300 rounded-xl flex flex-col justify-center items-center cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition-all duration-300 group shadow-sm hover:shadow-md">
                    <Image className="text-gray-400 group-hover:text-blue-500 transition-colors mb-1" size={28} />
                    <p className="text-xs text-gray-500 group-hover:text-blue-600 font-medium">Зураг нэмэх</p>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleOrderImgUpload}
                      className="absolute inset-0 opacity-0 cursor-pointer"
                    />
                    {uploading && (
                      <div className="absolute inset-0 bg-white/90 flex flex-col items-center justify-center rounded-xl">
                        <div className="w-8 h-8 border-3 border-blue-500 border-t-transparent rounded-full animate-spin mb-2"></div>
                        <p className="text-black text-xs font-medium">Uploading...</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
              {orderImgs.length === 0 && (
                <p className="text-xs text-gray-400 italic">Та дээд тал нь 3 зураг оруулах боломжтой</p>
              )}
            </div>
            <div className="w-113 h-16 flex justify-end items-end">
              <button
                className="w-113 h-10 bg-gradient-to-r from-[#0b4ce5] to-[#4a90e2] hover:from-[#0a42c7] hover:to-[#3d7ec7] rounded-lg flex justify-center items-center text-white text-[14px] font-semibold cursor-pointer transition-all duration-200 ease-out hover:scale-105 active:scale-95 shadow-md hover:shadow-lg"
                onClick={handleAddOrder}
              >
                Хадгалах
              </button>
            </div>
          </div>
        </div>
      )}
      {deleteOrder && (
        <div className="fixed z-10 top-0 left-0 w-screen h-screen flex justify-center items-center bg-black/40 backdrop-blur-sm">
          <div className="w-100 bg-white rounded-xl shadow-2xl border flex flex-col items-center justify-center gap-6 p-6 animate-in fade-in zoom-in duration-200">
            <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center">
              <svg
                className="w-8 h-8 text-red-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            </div>
            <div className="w-90 flex flex-col items-center text-center gap-2">
              <p className="text-[17px] text-gray-500 font-medium">Захиалга #1</p>
              <p className="text-[20px] font-bold text-gray-800">Та устгахдаа итгэлтэй байна уу?</p>
              <p className="text-sm text-gray-500 mt-1">Энэ үйлдлийг буцаах боломжгүй</p>
            </div>
            <div className="w-90 flex gap-3">
              <button
                className="flex-1 flex justify-center items-center h-11 rounded-lg border-2 border-gray-300 bg-white hover:bg-gray-50 text-gray-700 font-semibold cursor-pointer transition-all duration-200 ease-out hover:scale-105 active:scale-95 shadow-sm"
                onClick={() => setDeleteOrder(false)}
              >
                Цуцлах
              </button>
              <button
                className="flex-1 flex justify-center items-center h-11 rounded-lg bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold cursor-pointer transition-all duration-200 ease-out hover:scale-105 active:scale-95 shadow-md hover:shadow-lg"
              >
                Устгах
              </button>
            </div>
          </div>
        </div>
      )
      }
      {succesOrder && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="relative w-[500px] bg-white rounded-2xl shadow-2xl p-10 flex flex-col items-center gap-6 animate-in fade-in zoom-in duration-300">
            <div className="relative">
              <div className="absolute inset-0 bg-green-100 rounded-full animate-ping opacity-75"></div>
              <div className="relative bg-gradient-to-br from-green-400 to-green-600 rounded-full p-6">
                <svg
                  className="w-16 h-16 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            </div>
            <div className="text-center space-y-2">
              <h3 className="text-2xl font-bold text-gray-800">
                Амжилттай!
              </h3>
              <p className="text-gray-600">
                Таны захиалга амжилттай хийгдлээ
              </p>
            </div>
            <button
              onClick={() => setSuccesOrder(false)}
              className="w-full py-3 px-6 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              Үргэлжлүүлэх
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
