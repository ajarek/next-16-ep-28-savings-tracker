"use client"

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"

export const description = "A bar chart"

const chartData = [
  { month: "January", desktop: 186 },
  { month: "February", desktop: 305 },
  { month: "March", desktop: 237 },
  { month: "April", desktop: 73 },
  { month: "May", desktop: 209 },
  { month: "June", desktop: 214 },
  { month: "July", desktop: 219 },
  { month: "August", desktop: 224 },
  { month: "September", desktop: 229 },
  { month: "October", desktop: 234 },
  { month: "November", desktop: 239 },
  { month: "December", desktop: 244 },
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-3)",
  },
} satisfies ChartConfig

export function ChartBarDefault() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className='text-2xl font-bold'>Monthly Deposits</CardTitle>
        <CardDescription>Capital inflow velocity per month</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={chartConfig}
          className='max-h-[360px] min-h-[360px] w-full'
        >
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey='month'
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey='desktop' fill='var(--color-desktop)' radius={8} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
