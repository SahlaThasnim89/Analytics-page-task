import FAQCards from "./FAQCards";


export function FAQ() {
  return (
    <section className="py-20 px-32 bg-gray-900">
      <div className="flex flex-col gap-2">
        <p className="text-[#41E5E4] font-semibold text-[12px] tracking-[1.4px]">
          QUICK QUESTIANS
        </p>

        <h2 className="font-bold text-[48px] text-primary leading-14 w-3/5 mt-4 tracking-[-1px]">
          Frequently asked.
        </h2>
      </div>
      <div className="flex flex-col items-center justify-center text-center">
        <div className="my-12 flex justify-center gap-10">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="grid md:grid-cols-2 gap-8">
              <FAQCards
                head={"Comprehensive Evals"}
                description={
                  "Generate test scenarios from your company's data sources before going live. Then run evals on production traffic to measure what actually happens with real customers."
                }
              />
              <FAQCards
                head={"Comprehensive Evals"}
                description={
                  "Generate test scenarios from your company's data sources before going live. Then run evals on production traffic to measure what actually happens with real customers."
                }
              />

              <FAQCards
                head={"Comprehensive Evals"}
                description={
                  "Generate test scenarios from your company's data sources before going live. Then run evals on production traffic to measure what actually happens with real customers."
                }
              />

              <FAQCards
                head={"Comprehensive Evals"}
                description={
                  "Generate test scenarios from your company's data sources before going live. Then run evals on production traffic to measure what actually happens with real customers."
                }
              />

              <FAQCards
                head={"Comprehensive Evals"}
                description={
                  "Generate test scenarios from your company's data sources before going live. Then run evals on production traffic to measure what actually happens with real customers."
                }
              />

              <FAQCards
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
