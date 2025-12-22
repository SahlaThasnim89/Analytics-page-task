import { Button } from "./ui/button";
import { ArrowRight } from "@phosphor-icons/react";

export function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center px-64 h-[80vh] gap-8">
        <p className="text-[#41E5E4] font-semibold text-[13px] tracking-[1.4px]">MANY VARIATIONS OF PASSAGES</p>

      <h1 className="font-semibold text-[60px] text-primary leading-16 tracking-[-1.8px]">
        There are many variations of passages of <span className="text-[#855CF1] italic">Lorem</span> Ipsum
      </h1>
      <p className="text-[20px] text-muted px-44 leading-8 tracking-[0px] mt-4">
        There are many variations of passages of Lorem Ipsum available, but the majority in some form, by injected humour.
      </p>
      <div className="flex justify-center gap-4 mt-8">
        <Button
                        variant="outline"
                            size="lg"
                         className="text-white rounded-full h-16 px-8 text-md cursor-pointer bg-violet-500 text-[16px] hover:text-[#FFFFFF] hover:border-2 hover:bg-transparent hover:border-amber-50">
         Book a Demo  
        <ArrowRight size={32} color="#f7f3f3"/>
        </Button>
        <Button
          variant="outline"
          size="lg"
          className="text-white rounded-full h-16 px-8 text-md cursor-pointer text-[16px] hover:text-violet-500 hover:bg-white"
        >
          Watch Demo
        </Button>
      </div>
    </section>
  );
}
