const Message = () => {
  return (
    <div className="chat chat-end">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            src="/client/src/assets/Screenshot 2023-12-08 001032.png"
            alt="tailwind css chat bubble componenet"
          />
        </div>
      </div>

     <div className={`chat-bubble text-white bg-blue-500`}> hi vineesh</div>
     <div className='chat-footer opacity-50 text-xs gap-1 items-center '>12:42</div>
    </div>
  );
};

export default Message;
