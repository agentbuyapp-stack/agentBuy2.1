"use client";
import { useState } from "react";
import { NewOrderBtn } from "./_features/NewOrderBtn";
import { OrderResult } from "./_component/OrderResult";
import { AddNewOrder } from "./_component/AddNewOrder";
import { EditOrder } from "./_component/EditOrder";
import { DeleteOrder } from "./_component/DeleteOrder";
import { SuccessCard } from "./_component/SuccesCard";
import { Header } from "./_component/Header";

export default function HomePage() {
  const [addNewOrder, setAddNewOrder] = useState(false);
  const [editOrder, setEditOrder] = useState(false);
  const [deleteOrder, setDeleteOrder] = useState(false);
  const [succesOrder, setSuccesOrder] = useState(false);
  const handleAddNewOrder = () => setAddNewOrder(true);
  const handleFalseNewOrder = () => setAddNewOrder(false);
  const handleEditOrder = () => setEditOrder(true);
  const handleFalseEditOrder = () => setEditOrder(false);
  const handleDeleteOrder = () => setDeleteOrder(true);
  const handleFalseDelete = () => setDeleteOrder(false);
  const handleSuccesOrder = () => setSuccesOrder(true);
  const handleFalseSuccess = () => setSuccesOrder(false);

  return (
    <div className="w-full bg-gray-50 dark:bg-gray-900">
      <Header />
      <main className=" flex flex-col items-center pt-6 min-[640px]:pt-10 px-3 min-[640px]:px-4 pb-8">
        <div className="w-full max-w-85 min-[640px]:max-w-5xl bg-white dark:bg-gray-800 rounded-xl min-[640px]:rounded-2xl shadow-lg dark:shadow-gray-900/50 border border-gray-100 dark:border-gray-700 flex flex-col items-center px-3 min-[640px]:px-6 gap-4 min-[640px]:gap-6 py-4 min-[640px]:py-6 transition-colors duration-300">
          <NewOrderBtn handleAddNewOrder={handleAddNewOrder} />

          <OrderResult
            handleEditOrder={handleEditOrder}
            handleDeleteOrder={handleDeleteOrder}
          />

          <button
            className="h-11 min-[640px]:h-12 w-full max-w-85 min-[640px]:max-w-4xl flex bg-linear-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 rounded-lg min-[640px]:rounded-xl text-white text-sm min-[640px]:text-base font-semibold justify-center items-center cursor-pointer transition-all duration-200 ease-out hover:scale-[1.02] active:scale-95 shadow-md hover:shadow-lg"
            onClick={handleSuccesOrder}
          >
            Захиалга үүсгэх
          </button>
        </div>
      </main>
      {addNewOrder && <AddNewOrder handleFalseNewOrder={handleFalseNewOrder} />}
      {editOrder && <EditOrder handleFalseEditOrder={handleFalseEditOrder} />}
      {deleteOrder && <DeleteOrder handleFalseDelete={handleFalseDelete} />}
      {succesOrder && <SuccessCard handleFalseSuccess={handleFalseSuccess} />}
    </div>
  );
}
