import { Button } from "@/components/ui/button";

export function SiteNav() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-36 h-24 backdrop-blur-md supports-backdrop-filter:bg-black/0">
      <div className="text-3xl font-semibold text-white">SuperBryn-Clone</div>
      <div className="flex gap-4 h-12">
        <Button variant="link" className="text-white cursor-pointer text-[15px]">Features</Button>
        <Button variant="default" className="text-white bg-violet-500 rounded-full h-12 cursor-pointer px-8 text-[15px] hover:border-2 hover:bg-transparent">Book a Demo</Button>
      </div>
    </nav>
  );
}
