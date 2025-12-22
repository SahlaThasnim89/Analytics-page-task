import { Card } from "@/components/ui/card";

type FAQCardsProps = {
  head: string;
  description: string;
};

const FAQCards = ({ head, description }:FAQCardsProps) => {
  return (
    <div>
      <Card className="text-start w-full max-w-2xl rounded-4xl border border-gray-600 p-8 bg-gray-800">
        <h5 className="text-[#FFFFFFF] font-semibold text-[17px] tracking-[0px] mb-4">
          {head}
        </h5>
        <p className="text-[#FFFFFB3] text-[15px]">{description}</p>
      </Card>
    </div>
  );
};

export default FAQCards;
