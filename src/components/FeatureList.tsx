import {
  Card,
} from "@/components/ui/card";
import { ArrowRight } from "@phosphor-icons/react";

export function FeatureList() {
  return (
    <section className="pt-20 px-36 bg-gray-900">
      <div className="flex flex-col gap-2">
        <p className="text-[#41E5E4] font-semibold text-[12px] tracking-[1.4px]">
          ANALYSE YOUR DATA
        </p>

        <h2 className="font-bold text-[48px] text-primary leading-14 w-1/2 mt-4 tracking-[-1px]">
          Your <span className="text-[#855CF1]">voice</span>{" "}
          <span className="bg-gradient-to-r from-violet-500 to-cyan-400 bg-clip-text text-transparent">
            agents
          </span>{" "}
          <span className="text-[#41E5E4]">pass</span> every test. Then they
          fail real customers.
        </h2>
        <p className="text-[17px] w-1/2 mt-4 leading-8 text-[#FFFFFFB3]">
          Demos work perfectly. Production breaks silently. The gap between
          testing and reality is where trust dies.
        </p>
      </div>
      <div className="flex text-center">
        <div className="my-24">
          <div className="flex flex-col items-center justify-center text-center ">
            <div className="grid md:grid-cols-2 gap-20">
              <Card className="text-start w-full max-w-xl rounded-4xl border-[1px] border-gray-600 p-12 bg-gray-800">
                <p className="text-[#FFFFFFB3] font-semibold text-[12px] tracking-[1.4px]">
                  MANY VARIATIONS OF PASSAGES
                </p>
                <h3 className="text-[24px] mt-4 mb-6 font-semibold text-white">
                  You're flying blind in production.
                </h3>
                <ul className="flex flex-col gap-4">
                  <hr className="text-gray-600 h-[1px]" />
                  <li className="flex flex-row gap-2">
                    <span>
                      <ArrowRight size={16} color="#f7f3f3" />
                    </span>
                    Demos work. Real calls don't. You can't reproduce the
                  </li>
                  <hr className="text-gray-600 h-[1px]" />
                  <li className="flex flex-row gap-2">
                    <span>
                      <ArrowRight size={16} color="#f7f3f3" />
                    </span>
                    Demos work. Real calls don't. You can't reproduce the
                    failures.
                  </li>
                   <hr className="text-gray-600 h-[1px]" />
                  <li className="flex flex-row gap-2">
                    <span>
                      <ArrowRight size={16} color="#f7f3f3" />
                    </span>
                    Demos work. Real calls don't. You can't reproduce the
                  </li>
                   <hr className="text-gray-600 h-[1px]" />
                  <li className="flex flex-row gap-2">
                    <span>
                      <ArrowRight size={16} color="#f7f3f3" />
                    </span>
                    Demos work. Real calls don't. You can't reproduce the
                    failures.
                  </li>
                </ul>
              </Card>
              <Card className="w-full max-w-xl rounded-4xl border-[1px] border-gray-600 p-12 bg-violet-500 text-start">
                <p className="text-[#FFFFFFB3] font-semibold text-[12px] tracking-[1.4px]">
                  MANY VARIATIONS OF PASSAGES
                </p>
                <h3 className="text-[24px] mt-4 mb-6 font-semibold text-white">
                  You're flying blind in production.
                </h3>
                <ul  className="flex flex-col gap-4">
                   <hr className="text-white h-[1px]" />
                  <li className="flex flex-row gap-2">
                    <span>
                      <ArrowRight size={16} color="#f7f3f3" />
                    </span>
                    Demos work. Real calls don't. You can't reproduce the
                  </li>
                    <hr className="text-white h-[1px]" />
                  <li className="flex flex-row gap-2">
                    <span>
                      <ArrowRight size={16} color="#f7f3f3" />
                    </span>
                    Demos work. Real calls don't. You can't reproduce thedf d
                  </li>
                    <hr className="text-white h-[1px]" />
                  <li className="flex flex-row gap-2">
                    <span>
                      <ArrowRight size={16} color="#f7f3f3" />
                    </span>
                    Demos work. Real calls don't. You can't reproduce
                  </li>
                    <hr className="text-white h-[1px]" />
                  <li className="flex flex-row gap-2">
                    <span>
                      <ArrowRight size={16} color="#f7f3f3" />
                    </span>
                    Demos work. Real calls don't. You can't reproduce the sgfjgj
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
