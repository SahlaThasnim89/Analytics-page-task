

import { Pie, PieChart } from "recharts"

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"
import type { BrowserKey } from "./PieAnalyticsFormDialog"

export const description = "A donut chart"

const chartConfig: ChartConfig & Record<BrowserKey, { label: string; color: string }> = {

  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "#5b21b6",
  },
  safari: {
    label: "Safari",
    color: "#7c3aed",
  },
  firefox: {
    label: "Firefox",
    color: "#855CF1",
  },
  edge: {
    label: "Edge",
    color: "#a78bfa",
  },
  other: {
    label: "Other",
    color: "#ddd6fe",
  },
} satisfies ChartConfig




interface PieDatum {
  browser: string;
  visitors: number;
  fill: string;
}


export function ChartPieDonut({ pieData }: { pieData: PieDatum[] }) {

  const pieWithColors = pieData.map((item: any) => ({
  ...item,
  fill: chartConfig[item.browser]?.color,
}));


  return (
<>
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-80"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={pieWithColors}
              dataKey="visitors"
              nameKey="browser"
              innerRadius={80}
              outerRadius={140}
            />
          </PieChart>
        </ChartContainer>
  </>
  )
}
