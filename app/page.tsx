import { MobileNav } from "@/components/navbar/mobile-nav";
import { navItems } from "@/config/nav";

export default function Home() {
  return (
    <main className="">
      <MobileNav navItems={navItems}/>
    </main>
  );
}
