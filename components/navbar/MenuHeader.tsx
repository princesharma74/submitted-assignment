import { AlignRight, Headset, Search, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type HeaderProps = {
  isOpen: boolean;
  toggleNavBar: () => void;
};

const Header = ({ isOpen, toggleNavBar }: HeaderProps) => {
  return (
    <div className="fixed left-0 right-0 flex justify-between items-center h-20 px-4 bg-white shadow-md z-10">
      <div className="flex items-center">
        <Image
          src="https://indcdn.indmoney.com/public/ind-marketing/indmoney-weblogo.png"
          alt="Logo"
          width={40}
          height={40}
        />
      </div>
      <div className="flex items-center gap-4">
        <Link
          href="/"
          className="text-green-500 border border-green-500 rounded-full py-1 px-3"
        >
          Log In
        </Link>
        <div className="cursor-pointer">
          <Headset className="h-5 w-5" />
        </div>
        <div className="cursor-pointer">
          <Search className="h-5 w-5" />
        </div>
        <div className="cursor-pointer" onClick={toggleNavBar}>
          {isOpen ? <X className="h-5 w-5" /> : <AlignRight className="h-5 w-5" />}
        </div>
      </div>
    </div>
  );
};

export default Header;