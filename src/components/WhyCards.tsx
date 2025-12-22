import { Card } from "@/components/ui/card";


const WhyCards = ({number,head,description}: {
  number: string;
  head: string;
  description: string;
}) => {
  return (

    <div>
      <Card className="text-start w-full max-w-2xl rounded-4xl border border-gray-600 p-8 bg-gray-800">
        <div className='flex flex-row gap-4'>
        <div className='text-[32px] text-[#855CF1] font-semibold'>{number}</div>
        <div>
        <h5 className="text-[#FFFFFFF] font-semibold text-[17px] tracking-[0px] mb-2">
          {head}
        </h5>
        <p className="text-[#FFFFFB3] text-[15px]">{description}</p>
        </div>
        </div>
      </Card>
    </div>
  );
};



export default WhyCards