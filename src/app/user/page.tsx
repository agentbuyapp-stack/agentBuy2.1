"use client";
import { Image, Plus, X } from "lucide-react";
import { useState } from "react";

export default function Page() {
  const [addNewOrder, setAddNewOrder] = useState(false);
  const handleAddNewOrder = () => setAddNewOrder(!addNewOrder);
  const [addOrders, setAddOrders ]= useState([]);
  const [orderImgs, setOrderImgs] = useState<string[]>([]);
  const [uploading, setUploading] = useState(false);

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
  const handleAddOrder = ()=>{
    setAddOrders(addOrders)
  }
  return (
    <div className="w-full h-screen flex justify-center pt-20 bg-gray-50">
          <div className="w-235 h-fit bg-white rounded-xl border shadow-amber-100 flex flex-col justify-center items-center px-4 gap-6">
            <div className="h-17 w-225 flex justify-between items-center">
              <p className="text-[30px] font-bold">Шинэ захиалга үүсгэх</p>
        <button
          className="w-10 h-10 bg-red-500 flex justify-center items-center rounded-full"
          onClick={handleAddNewOrder}
        >
          <Plus className="text-white" />
        </button>
            </div>
        
        {addOrders && (
          <div className="h-17 w-225 flex bg-red-200 "></div>
        )}
        {addOrders && (
          <div className="h-17 w-225 flex bg-blue-100 mb-5"></div>
        )}
      </div>    
      {addNewOrder && (
        <div className="fixed z-10 top-0 left-0 w-screen h-screen flex justify-center items-center bg-[rgba(0,0,0,0.2)]">
          <div className="w-125 h-155 bg-white rounded-md border flex flex-col justify-center items-center gap-4 p-4">
            <div className="w-113 h-13 flex justify-between items-center">
              <p className="text-[22px] text-black font-bold">Шинэ захиалга</p>
              <button
                className="w-10 h-10 flex justify-center items-center rounded-md bg-gray-100 cursor-pointer transition-transform duration-200 ease-out hover:scale-105 active:scale-95"
                onClick={() => setAddNewOrder(false)}
              >
                <X />
              </button>
            </div>
            <div className="w-113 h-28 flex flex-col gap-2">
              <p className="text-[16px] text-black">Барааны нэр</p>
              <textarea
                placeholder="Захиалах барааныхаа нэрийг оруулна уу."
                className="w-113 h-17 border rounded-md text-black p-2"
              />
            </div>
            <div className="w-113 h-28 flex flex-col gap-2">
              <p className="text-[16px] text-black">Барааны тайлбар</p>
              <textarea
                placeholder="Захиалах бараагаа дэлгэрэнгүй тайлбарлан оруулна уу."
                className="w-113 h-17 border rounded-md text-black p-2"
              />
            </div>
            <div className="w-113 flex flex-col gap-2">
              <p className="text-[16px] text-black">Захиалах барааны зураг</p>
              <div className="flex gap-3 w-113 h-35">
                {orderImgs.map((img, index) => (
                  <div key={index} className="relative w-35 h-35 rounded-md overflow-hidden">
                    <img src={img} className="absolute inset-0 w-full h-full object-cover" />
                    <button
                      className="absolute top-2 right-2 bg-red-500 w-5 h-5 rounded-md flex justify-center items-center text-white"
                      onClick={() =>
                        setOrderImgs((prev) => prev.filter((_, i) => i !== index))
                      }
                    >
                      <X size={12} />
                    </button>
                  </div>
                ))}
                {orderImgs.length < 3 && (
                  <div className="relative bg-gray-100 w-35 h-35 border-2 border-dashed rounded-md flex justify-center items-center cursor-pointer">
                    <Image className="text-gray-400" />
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleOrderImgUpload}
                      className="absolute inset-0 opacity-0 cursor-pointer"
                    />
                    {uploading && (
                      <p className="absolute text-black text-sm">Uploading...</p>
                    )}
                  </div>
                )}
              </div>
            </div>
            <div className="w-113 h-16 flex justify-end items-end">
              <button
                className="w-113 h-10 bg-linear-to-r from-[#0b4ce5] to-[#4a90e2] rounded-md flex justify-center items-center text-white text-[14px] cursor-pointer transition-transform duration-200 ease-out hover:scale-105 active:scale-95"
                 onClick={handleAddOrder}
              >
                Бараа нэмэх
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
