const Conversation = () => {
  return (
    <>
      <div className="flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer">
        <div className="avatar online">
            <div className="w-12 rounded-full">
                <img src="/client/src/assets/Screenshot 2023-12-08 001032.png" alt="user avatar" />
            </div>
        </div>

        <div className="flex flex-col flex-1">
            <div className="flex gap-3 justify-between">
                <p className="font-bold text-gray-200">vineesh</p>
                <span className="text-xl">emo</span>
            </div>
        </div>
      </div>


      <div className="divider my-0 py-0 h-1 " />
    </>
  );
};

export default Conversation;
