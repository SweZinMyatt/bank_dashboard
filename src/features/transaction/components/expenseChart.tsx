import {
  Card,
  CardContent,

} from '#/components/atoms/card'
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from '#/components/atoms/chart'


import { Bar, BarChart, CartesianGrid, LabelList, XAxis} from 'recharts'

export const description = 'A bar chart'
const chartData = [
  { month: 'August', expense:1000 },
  { month: 'September', expense: 190},
  { month: 'October', expense: 500},
  { month: 'November', expense: 950},
  { month: 'December', expense: 1250},
  { month: 'January', expense: 400},
]
const chartConfig = {
  expense: {
    label: 'expense',
    color: 'var(--chart-3)',
  },

} satisfies ChartConfig

function ExpenseChart() {
  return (
    <div>
      <CardContent>
        <ChartContainer config={chartConfig} className=" w-full min-h-[195px]">
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid horizontal={false} />
            
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            
            
            <Bar dataKey="expense" fill="var(--color-expense)" radius={8}>
              <LabelList
                position="top"
                offset={5}
                formatter={(value) => `$${(value as number).toLocaleString()}`}
                className="text-primary font-bold"
                fontSize={12}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
      
    </div>
  )
}

export default ExpenseChart
