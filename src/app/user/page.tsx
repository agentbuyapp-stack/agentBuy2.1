"use client";
import { Plus, Trash, X } from "lucide-react";
import { useState } from "react";
export default function Page() {
  const [addNewOrder, setAddNewOrder] = useState(false);
  const handleAddNewOrder = () => {
    setAddNewOrder(!addNewOrder);
  };
  return (
    <div className="w-full h-screen flex justify-center pt-20 bg-gray-50">
      <div className="w-225 h-fit bg-white rounded-xl border shadow-amber-100 flex justify-between items-center px-4 ">
        <p className="text-[30px] font-bold">Шинэ захиалга үүсгэх</p>
        <button
          className="w-10 h-10 bg-red-500 flex justify-center items-center rounded-full"
          onClick={handleAddNewOrder}
        >
          <Plus className="text-white" />
        </button>
      </div>
      {addNewOrder && (
        <div className="fixed z-10 top-0 left-0 w-screen h-screen flex justify-center items-center bg-[rgba(0,0,0,0.2)]">
          <div className="w-125 h-155 bg-white rounded-md  border  flex flex-col justify-center items-center gap-4">
            <div className="w-113 h-13 flex justify-between items-center">
              <p className="text-[22px] text-black font-bold">Шинэ захиалга</p>
              <button
                className="w-10 h-10 flex justify-center items-center rounded-md bg-gray-100 cursor-pointer"
                onClick={() => {
                  setAddNewOrder(false);
                }}
              >
                <X />
              </button>
            </div>
            <div className="w-113 h-28 flex gap-2 flex-col">
              <p className="text-[16px] text-black ">Барааны нэр</p>
              <textarea
                placeholder="Захиалах барааныхаа нэрийг оруулна уу."
                className="w-113 h-17 border rounded-md text-black"
                // value={addfood.ingredients}
                // onChange={(e) =>
                //   setAddFood({ ...addfood, ingredients: e.target.value })
                // }
              />
            </div>
            <div className="w-113 h-28 flex gap-2 flex-col">
              <p className="text-[16px] text-black ">Барааны тайлбар</p>
              <textarea
                placeholder="Захиалах бараагаа дэлгэрэнгүй тайлбарлан оруулна уу."
                className="w-113 h-17 border rounded-md text-black"
                // value={addfood.ingredients}
                // onChange={(e) =>
                //   setAddFood({ ...addfood, ingredients: e.target.value })
                // }
              />
            </div>

            <div className="w-113 h-40 flex gap-2 flex-col">
              <p className="text-[16px] text-black">Захиалах барааны зураг </p>
              <div className="bg-gray-100  w-113 h-35 border-2 border-dashed flex justify-center items-center rounded-md">
                <div className="w-95  flex flex-col items-center">
                  {/* {!logoUrl && (
                    <>
                      <button className="w-8 h-8 bg-white rounded-full flex justify-center items-center absolute mt-13">
                        <ImageIcon />
                      </button>
                      <input
                        type="file"
                        className="text-gray-100 cursor-pointer w-[412px] h-[138px]"
                        accept="image/*"
                        onChange={handleLogoUpload}
                        name="file"
                      />
                      {uploading && (
                        <p className="text-black absolute z-10 mb-10">
                          Uploading...
                        </p>
                      )}
                    </>
                  )} */}
                  {/* {logoUrl && (
                    <div className="relative  w-[412px] h-[138px]  ">
                      <Image
                        src={logoUrl}
                        alt="Uploaded logo"
                        fill
                        className="rounded-md mb-10"
                      />

                      <div className="flex justify-end m-2">
                        <button
                          className="bg-black absolute z-10 w-4 h-4 rounded-full flex justify-center items-center"
                          onClick={() => {
                            setLogoUrl(false);
                          }}
                        >
                          <img
                            src="./remove.png"
                            style={{
                              width: "8px",
                              height: "8px",
                            }}
                          />
                        </button>
                      </div>
                    </div>
                  )} */}
                </div>
              </div>
            </div>

            <div className="w-113 h-16 flex justify-end items-end">
              <button
                className="w-113 h-10 bg-green-400 rounded-md flex justify-center items-center text-white text-[14px] cursor-pointer"
                // onClick={handleAddFood}
              >
                Захиалга үүсгэх
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
