import { Card } from "@/components/ui/card";
import { AddressBookTabs } from "@phosphor-icons/react";

type EvalCardsProps = {
  head: string;
  description: string;
};

export const EvalCards = ({ head, description }: EvalCardsProps) => {
  return (
    <div>
      <Card className="text-start w-full max-w-xl rounded-4xl border border-gray-600 p-12 bg-gray-800">
        <div className="bg-gray-500 h-12 w-12 rounded-full flex items-center justify-center">
          <AddressBookTabs size={32} />
        </div>
        <h5 className="text-[#FFFFFFF] font-semibold text-[20px] tracking-[0px] my-4">
          {head}
        </h5>
        <p className="text-[#FFFFFB3] text-[15px]">{description}</p>
      </Card>
    </div>
  );
};

export default EvalCards;
