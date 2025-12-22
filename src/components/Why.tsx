import WhyCards from "./WhyCards";


export function Why() {
  return (
    <section className="py-20 px-32 bg-gray-900">
              <div className="flex flex-col gap-2">
        <p className="text-[#41E5E4] font-semibold text-[12px] tracking-[1.4px]">
          WHY SUPERBYERN
        </p>

        <h2 className="font-bold text-[48px] text-primary leading-14 w-1/2 mt-4 tracking-[-1px]">
          Others build dashboards.

          <span className="bg-gradient-to-r from-violet-500 to-cyan-400 bg-clip-text text-transparent">
            We build
          </span>{" "}
understanding.
        </h2>
        <p className="text-[17px] w-1/2 mt-4 leading-8 text-[#FFFFFFB3]">
The first voice AI platform built by speech recognition researchers—for the problems they've spent their careers solving.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center text-center">
        <div className="my-12 flex justify-center gap-10">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="grid md:grid-cols-2 gap-8">
              <WhyCards number={"01"}
                head={"Comprehensive Evals"}
                description={
                  "Generate test scenarios from your company's data sources before going live. Then run evals on production traffic to measure what actually happens with real customers."
                }
              />
              <WhyCards number={"02"}
                head={"Comprehensive Evals"}
                description={
                  "Generate test scenarios from your company's data sources before going live. Then run evals on production traffic to measure what actually happens with real customers."
                }
              />

              <WhyCards number={"03"}
                head={"Comprehensive Evals"}
                description={
                  "Generate test scenarios from your company's data sources before going live. Then run evals on production traffic to measure what actually happens with real customers."
                }
              />

              <WhyCards number={"04"}
                head={"Comprehensive Evals"}
                description={
                  "Generate test scenarios from your company's data sources before going live. Then run evals on production traffic to measure what actually happens with real customers."
                }
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
