import { Button } from "./ui/button";
import { ArrowRight } from "@phosphor-icons/react";


export function CTASection() {
  return (
    <section className="bg-gray-900 text-white text-center pb-24 px-8 flex flex-col gap-4 pt-20">
        <div className="bg-[linear-gradient(135deg,_theme(colors.gray.950)_0%,_theme(colors.indigo.900)_30%,_theme(colors.indigo.900)_70%,_theme(colors.gray.950)_100%)] rounded-4xl mx-24 p-20">
            <h1 className="font-semibold text-[48px] text-primary leading-16 tracking-[-1.8px]">
              Ready to understand why your voice agents fail?
            </h1>
            <p className="text-[17px] text-muted px-40 leading-8 tracking-[0px] mt-4">
              See SuperBryn in action. We'll show you what's actually happening in your production calls.
            </p>
            <div className="flex justify-center gap-4 mt-8">
              <Button
                variant="default"
                size="lg"
                className="text-white bg-violet-500 rounded-full h-16 px-8 text-md cursor-pointer text-[16px] hover:bg-transparent hover:border-2"
               >Book a Demo  
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
              </div>
    </section>
  );
}
