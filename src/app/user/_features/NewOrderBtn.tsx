import { Plus } from "lucide-react";
type NewOrder = {
    handleAddNewOrder: () => void;
}
export const NewOrderBtn = (props: NewOrder) => {
    const { handleAddNewOrder } = props;
    return (
        <div className="h-17 w-225 flex justify-between items-center">
            <p className="text-[30px] font-bold">Шинэ захиалга үүсгэх</p>
            <button
                className="w-10 h-10 bg-linear-to-r from-[#0b4ce5] to-[#4a90e2] flex justify-center items-center rounded-full cursor-pointer transition-transform duration-200 ease-out hover:scale-105 active:scale-95"
                onClick={handleAddNewOrder}
            >
                <Plus className="text-white" />
            </button>
        </div>
    )
}