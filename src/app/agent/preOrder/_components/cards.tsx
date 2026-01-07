export const Card = () => {
  return (
    <div className="border border-zinc-200 w-[350px] h-[390px] rounded-lg flex flex-col p-4 ">
      <div>
        <div className="flex border-b border-dashed w-fit pb-2 h-fit gap-2">
          <img
            className="w-9 h-9 rounded-xl object-cover"
            src={"/alipay.png"}
          />
          <div className="flex flex-col">
            <p className="text-[12px]">Username</p>
            <p className="text-[12px]">Some random</p>
          </div>
        </div>
      </div>
    </div>
  );
};
