import { Button } from "./ui/button";

export function EmailForm() {
  return (
    <section className="bg-gray-900 text-white text-center py-16 px-8 flex flex-col gap-4">
      <div className="bg-[linear-gradient(135deg,_theme(colors.slate.950)_0%,_theme(colors.indigo.950)_50%,_theme(colors.violet.400)_100%)] rounded-4xl mx-24 px-20 py-12 border-1 border-gray-600">
        <p className="text-[#FFFFFF] font-semibold text-[12px] tracking-[1.4px]">
          STAY UPDATED
        </p>
        <h1 className="font-semibold text-[48px] text-primary leading-16 tracking-[-1.8px] mt-4">
          <span className="bg-gradient-to-r from-violet-500 to-cyan-400 bg-clip-text text-transparent">
           The Voice AI Reliability Newsletter
          </span>{" "}
        </h1>
        <p className="text-[17px] text-muted px-40 leading-8 tracking-[0px] mt-4">
          Weekly insights on voice AI production challenges, reliability
          patterns, and what we're learning building SuperBryn. No spam.
          Unsubscribe anytime.
        </p>
        <div className="flex justify-center gap-4 mt-8">
           <input className="text-white rounded-full h-16 px-8 text-md cursor-pointer text-[16px] border-white-600 border-1" placeholder="you@gmail.com"
          />
          <Button
            variant="default"
            size="lg"
            className="text-white bg-violet-500 rounded-full h-16 px-8 text-md cursor-pointer text-[16px] hover:bg-white hover:text-violet-500 hover:font-semibold"
          >
            Subscribe
          </Button>
         
        </div>
      </div>
    </section>
  );
}
