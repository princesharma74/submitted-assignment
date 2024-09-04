import { NavItem } from "@/config/nav";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

interface AccordionItemProps {
  level?: number;
  data: NavItem;
}

export const AccordionItem = ({ level = 0, data }: AccordionItemProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [height, setHeight] = useState<number | string>("0px");  
  const ref = useRef<HTMLDivElement | null>(null);
  const router = useRouter();

  const toggle = () => {
    if (data.subItems?.length) {
      setIsOpen(!isOpen);
    }
    if (data.url) router.push(data.url);
  };

  useEffect(() => {
    if (isOpen) setHeight(ref.current!.getBoundingClientRect().height);
    else setHeight(0);
  }, [isOpen]);

  useEffect(() => {
    if (!height || !isOpen || !ref.current) return undefined;
    const resizeObserver = new ResizeObserver((el) => {
      setHeight(el[0].contentRect.height);
    });
    resizeObserver.observe(ref.current);
    return () => {
      resizeObserver.disconnect();
    };
  }, [height, isOpen]);

  return (
    <li
      className={`flex flex-col
                    w-screen cursor-pointer 
                    ${data.url && level > 1 ? "border-b-0 text-sm" : "border-b"} 
                    ${level % 2 !== 0 ? "bg-slate-200" : "bg-white"} border-slate-300`}
    >
      {/* Parent title & arrow */}
      <div className={`flex justify-between p-4`}
        onClick={toggle}>
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
              }`
            }
            />
          </div>
        )}
      </div>
      {/* Children */}
      <ul
        style={{ height: height, overflow: "hidden", transition: "height 0.2s ease-in-out" }}
      >
        <div ref={ref}>
          {
            data.subItems?.map((item, index) => (
              <AccordionItem key={index} level={level + 1} data={item} />
            ))
          }
        </div>
      </ul>
    </li>
  );
};

type AccordionProps = {
  data: NavItem[]
}

export const Accordion = ({ data }: AccordionProps) => {
  return ( 
    <ul>
      {data.map((item) => (
        <AccordionItem key={item.name} data={item} />
      ))}
    </ul>
  );
}

export default Accordion;