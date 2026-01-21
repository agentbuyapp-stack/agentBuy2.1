"use client";
import { Image, LoaderIcon, X } from "lucide-react";
import { button } from "motion/react-client";
import { useState } from "react";
import { OrderResult } from "./_component/OrderResult";
import { NewOrderBtn } from "./_features/NewOrderBtn";
import { EditOrder } from "./orders/_component/EditOrder";
import { AddNewOrder } from "./orders/_component/AddNewOrder";
import { DeleteOrder } from "./orders/_component/DeleteOrder";
import { SuccessCard } from "./orders/_component/SuccesCard";
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
  const handleFalseNewOrder = () => {
    setAddNewOrder(false);
  };
  const handleEditOrder = () => {
    setEditOrder(!editOrder);
  };
  const handleFalseEditOrder = () => {
    setEditOrder(false);
  };
  const handleDeleteOrder = () => {
    setDeleteOrder(!deleteOrder);
  };
  const handleFalseDelete = () => {
    setDeleteOrder(false);
  };
  const handleSuccesOrder = () => {
    setSuccesOrder(!succesOrder);
  };
  const handleFalseSuccess = () => {
    setSuccesOrder(false);
  };
  return (
    <div className="w-full min-h-screen flex justify-center pt-10 min-[640px]:pt-20 px-3 min-[640px]:px-4 bg-gray-50">
      <div className="w-full max-w-90 min-[640px]:max-w-5xl h-fit bg-white rounded-xl shadow-amber-100 flex flex-col justify-center items-center px-3 min-[640px]:px-4 gap-4 min-[640px]:gap-6 pt-4 min-[640px]:pt-6 pb-4 min-[640px]:pb-5">
        <NewOrderBtn handleAddNewOrder={handleAddNewOrder} />
        <OrderResult
          handleEditOrder={handleEditOrder}
          handleDeleteOrder={handleDeleteOrder}
        />
        <button
          className="h-11 min-[640px]:h-13 w-full max-w-85 min-[640px]:max-w-4xl flex bg-linear-to-r from-[#0b4ce5] to-[#4a90e2] rounded-lg min-[640px]:rounded-xl text-white text-sm min-[640px]:text-base font-semibold justify-center items-center cursor-pointer transition-transform duration-200 ease-out hover:scale-[1.02] active:scale-95 shadow-md"
          onClick={handleSuccesOrder}
        >
          Захиалга үүсгэх
        </button>
      </div>
      {addNewOrder && <AddNewOrder handleFalseNewOrder={handleFalseNewOrder} />}
      {editOrder && <EditOrder handleFalseEditOrder={handleFalseEditOrder} />}
      {deleteOrder && <DeleteOrder handleFalseDelete={handleFalseDelete} />}
      {succesOrder && <SuccessCard handleFalseSuccess={handleFalseSuccess} />}
    </div>
  );
}
