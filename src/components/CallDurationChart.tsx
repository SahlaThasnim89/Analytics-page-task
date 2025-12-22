import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";

export const description = "A simple area chart";

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

export function ChartAreaDefault({ chartData }: { chartData: any }) {
  return (
    <>
      <ChartContainer config={chartConfig} className="h-[320px] w-full">
        <AreaChart
          accessibilityLayer
          data={chartData}
          margin={{
            left: 1,
            right: 1,
          }}
        >
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent indicator="line" />}
          />
          <Area
            dataKey="desktop"
            type="natural"
            fill="#855CF1"
            fillOpacity={0.4}
            stroke="#855CF1"
          />
        </AreaChart>
      </ChartContainer>
    </>
  );
}
