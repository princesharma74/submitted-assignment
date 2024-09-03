import { NavItem } from "@/config/nav";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface AccordionItemProps {
  index?: number;
  level?: number;
  data: NavItem;
}

export const AccordionItem = ({ index, level = 0, data }: AccordionItemProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const router = useRouter();

  const toggle = () => {
    if (data.subItems?.length) {
      setIsOpen(!isOpen);
    }
    if (data.url) router.push(data.url);
  };

  return (
    <div
      className={`flex flex-col p-2 
                    data-[level=other]:-translate-x-2 data-[child-first=yes]:mt-2 data-[child=first]:border-t data-[disable-bottom-border-root=yes]:pb-0 
                    w-screen cursor-pointer 
                    ${data.url && level > 1 ? "border-b-0 text-sm" : "border-b"} 
                    ${level % 2 !== 0 ? "bg-slate-200" : "bg-white"} border-slate-300`}
      data-state={isOpen ? "open" : "closed"}
      data-level={level === 0 ? "root" : "other"}
      data-child-first={index === 0 && level != 0 ? "yes" : "no"}
      data-disable-bottom-border-root={data.subItems && isOpen ? "yes" : "no"}
    >
      {/* Parent */}
      <div className="flex justify-between" onClick={toggle}>
        {data.url ? (
          <Link href={data.url}>{data.name}</Link>
        ) : (
          <div>{data.name}</div>
        )}
        {data.subItems && (
          <div>
            <ChevronDown
              className={`h-5 w-5 transition-transform ${
                isOpen && "rotate-180"
              }`}
            />
          </div>
        )}
      </div>
      {/* Children */}
      <div className="transition-all">
        {isOpen &&
          data.subItems?.map((item, index) => (
            <AccordionItem key={index} index={index} level={level + 1} data={item} />
          ))}
      </div>
    </div>
  );
};
  

  type AccordionProps = {
    data: NavItem[]
  }
  export const Accordion = ({
    data
  }: AccordionProps) => {
    return ( 
      <div>
        {data.map((item, index) => (
          <AccordionItem key={item.name} index={index} data={item} />
        ))}
      </div>
    );
  }
  
  export default Accordion;