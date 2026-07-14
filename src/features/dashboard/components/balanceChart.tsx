import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "#/components/atoms/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig } from "#/components/atoms/chart"
import React from "react"
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts"

export const description = "An interactive line chart"
const chartData = [
  { month: "July", desktop: 0 },
  { month: "August", desktop: 250},
  { month: "September", desktop: 200},
  { month: "October", desktop: 400},
  { month: "November", desktop: 700},
  { month: "December", desktop: 250},
  { month: "January", desktop: 200},
  
  
]
const chartConfig = {
  views: {
    label: "Page Views",
  },
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
  
} satisfies ChartConfig

function BalanceChart() {
  const [activeChart, setActiveChart] =
    React.useState<keyof typeof chartConfig>("desktop")
  const total = React.useMemo(
    () => ({
      desktop: chartData.reduce((acc, curr) => acc + curr.desktop, 0),
      
    }),
    []
  )
  return (
    <Card className="py-4 sm:py-0  bg-white w-full h-[300px]">
      
      <CardContent className="sm:p-2">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <YAxis
              domain={[0,800]}
              ticks={[0,200,400,600,800]}
              tickLine={false}
              axisLine={true}
              tickMargin={10}
              
            />
             <CartesianGrid
            strokeDasharray="5 5"
            vertical
            stroke="#E6EFF5"
          />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={16}
              tickFormatter={(value) => value.slice(0,3)}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[200px]"
                  nameKey="views"
                  labelFormatter={(value) => value}
                />
              }
            />
            <Line
              dataKey={activeChart}
              type="monotone"
              stroke={`var(--color-${activeChart})`}
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

export default BalanceChart