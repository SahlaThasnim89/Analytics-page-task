

import { Pie, PieChart } from "recharts"

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"

export const description = "A donut chart"

const chartData = [
  { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
  { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
  { browser: "other", visitors: 90, fill: "var(--color-other)" },
]

const chartConfig = {
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

export function ChartPieDonut() {
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
              data={chartData}
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
