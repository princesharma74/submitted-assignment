import Accordion from "@/components/ui/Accordion";
import DownloadAppSection from "@/components/navbar/DownloadAppSection";
import { NavItem } from "@/config/nav";

type MobileNavMenuProps = {
  navItems: NavItem[];
  isOpen: boolean;
};

const MobileNavMenu = ({ navItems, isOpen }: MobileNavMenuProps) => {
  return (
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
      <DownloadAppSection />
    </div>
  );
};

export default MobileNavMenu;