import { MobileNav } from "@/components/navbar/MobileNav";
import { navItems } from "@/config/nav";

export default function Home() {
  return (
    <main className="">
      <MobileNav navItems={navItems}/>
    </main>
  );
}
