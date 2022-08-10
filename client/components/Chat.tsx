import Image from "next/image";
const Chat = () => {
  return (
    <>
      <div className="flex items-center justify-start bg-white  px-2 py-4">
        <div className="flex">
          <Image
            className="cursor-pointer hover:opacity-0 opacity-80 rounded-full "
            src="/aris.png"
            alt="profile"
            height={50}
            width={50}
          />
        </div>
        <div className="flex justify-between ml-4 flex-1 ">
          <div className="space-y-1 ">
            <h2 className="font-semibold  text-sm">Ngoran Aristide</h2>
            <h4 className="text-slate-500 text-xs">Hello Ngoran</h4>
          </div>
          <div className="text-right space-y-2">
            <h5 className="text-slate-500 text-xs">yesterday</h5>
            <span className="text-white bg-blue-500 rounded-full px-1  text-xs font-semibold">
              4
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chat;
