"use client";

import { NavItem } from "@/config/nav";
import { AlignRight, Headset, Search, X } from "lucide-react";
import { useState } from "react";
import Accordion from "@/components/ui/accordion";
import Link from "next/link";
import Image from "next/image";

type MobileNavProps = {
  navItems: NavItem[];
};

export const MobileNav = ({ navItems }: MobileNavProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleNavBar = () => setIsOpen(!isOpen);

  return (
    <nav className="relative flex flex-col">
      {/* Header with Logo and Icons */}
      <div className="fixed top-0 left-0 right-0 flex justify-between items-center h-12 px-4 bg-white shadow-md z-10">
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

      {/* Mobile Navigation Menu */}
      <div
        className={`fixed top-12 right-0 w-full h-full bg-white border-l shadow-lg transition-transform duration-300 ease-in-out z-20 overflow-y-auto border ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        data-state={isOpen ? "open" : "closed"}
      >
        <div className="flex flex-col p-4 space-y-4 justify-center items-center">
          <button className="rounded-full py-2 px-6 text-white bg-green-600">
            Open Demat Account
          </button>
          <div>
            <Accordion data={navItems} />
          </div>
        </div>
        <div className="flex flex-col bg-slate-200 p-4 m-4 rounded-lg border border-gray-300 gap-2">
            <div className="flex gap-2 items-center">
                <div className="font-bold text-sm">DOWNLOAD APP</div>
                <div className="text-xs text-green-500">1 Crore+ Downloads</div>
            </div>
            <div className="flex justify-between">
                <div className="flex items-center gap-2">
                <div>
                    <Image
                        src="https://indcdn.indmoney.com/cdn-cgi/image/quality=auto,format=auto,width=48/https://indcdn.indmoney.com/cdn/images/seo/website/apple_round_logo.png"
                        alt="Logo"
                        width={20}
                        height={20}
                    />
                </div>
                <div className="text-xs">4.7 ⭐️⭐️⭐️⭐️⭐️</div>
                </div>
                <div className="flex items-center gap-2">
                <div>
                    <Image
                        src="https://indcdn.indmoney.com/cdn-cgi/image/quality=auto,format=auto,width=48/https://indcdn.indmoney.com/cdn/images/seo/website/playstore_round_logo.png"
                        alt="Logo"
                        width={20}
                        height={20}
                    />
                </div>
                <div className="text-xs">4.7 ⭐️⭐️⭐️⭐️⭐️</div>
                </div>
            </div>
            </div>
      </div>
    </nav>
  );
};