"use client";

import { useState } from "react";
import { NavItem } from "@/config/nav";
import Header from "@/components/navbar/MenuHeader";
import MobileNavMenu from "@/components/navbar/MobileNavMenu";

type MobileNavProps = {
  navItems: NavItem[];
};

export const MobileNav = ({ navItems }: MobileNavProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleNavBar = () => setIsOpen(!isOpen);

  return (
    <nav className="relative flex flex-col">
      <Header isOpen={isOpen} toggleNavBar={toggleNavBar} />
      <MobileNavMenu navItems={navItems} isOpen={isOpen} />
    </nav>
  );
};