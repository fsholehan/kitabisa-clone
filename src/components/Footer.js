import {
  HeartIcon,
  VideoCameraIcon,
  UserIcon,
  ClipboardListIcon,
  InboxInIcon,
} from "@heroicons/react/solid";

function Footer() {
  return (
    <div className="bg-white fixed bottom-0 z-50 border-t-2 w-full py-2 px-1">
      <nav className="grid grid-cols-5 gap-2 max-w-xl mx-auto whitespace-nowrap">
        <div className="flex flex-col items-center justify-center cursor-pointer">
          <HeartIcon className="h-7 text-blue-500" />
          <p className="text-xs text-blue-500 font-semibold">Donasi</p>
        </div>
        <div className="flex flex-col items-center justify-center cursor-pointer">
          <VideoCameraIcon className="h-7 text-gray-400" />
          <p className="text-xs text-gray-400 font-semibold">Galang Dana</p>
        </div>
        <div className="flex flex-col items-center justify-center cursor-pointer">
          <ClipboardListIcon className="h-7 text-gray-400" />
          <p className="text-xs text-gray-400 font-semibold">Donasi Saya</p>
        </div>
        <div className="flex flex-col items-center justify-center cursor-pointer">
          <InboxInIcon className="h-7 text-gray-400" />
          <p className="text-xs text-gray-400 font-semibold">Inbox</p>
        </div>
        <div className="flex flex-col items-center justify-center cursor-pointer">
          <UserIcon className="h-7 text-gray-400" />
          <p className="text-xs text-gray-400 font-semibold">Akun</p>
        </div>
      </nav>
    </div>
  );
}

export default Footer;
