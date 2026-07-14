import { Card, CardContent } from '#/components/atoms/card'
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from '#/components/atoms/chart'
import { LabelList, Pie, PieChart } from 'recharts'

export const description = 'A pie chart with a label list'
const chartData = [
  { type: 'entertainment', visitors: 30, fill: 'var(--color-entertainment)' },
  { type: 'billExpense', visitors: 15, fill: 'var(--color-billExpense)' },
  { type: 'other', visitors: 35, fill: 'var(--color-other)' },
  { type: 'investment', visitors: 20, fill: 'var(--color-investment)' },
]
const chartConfig = {
  visitors: {
    label: 'Visitors',
  },
  entertainment: {
    label: 'Entertainment',
    color: 'var(--chart-1)',
  },
  billExpense: {
    label: 'Bill Expense',
    color: 'var(--chart-2)',
  },
  other: {
    label: 'Other',
    color: 'var(--chart-3)',
  },
  investment: {
    label: 'Investment',
    color: 'var(--chart-4)',
  },
} satisfies ChartConfig
export function PieChartBar() {
  return (
    <Card className="flex flex-col bg-white h-full">
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-squareh-full h-[300px] w-full [&_.recharts-text]:fill-background"
        >
          <PieChart>
            <ChartTooltip
              content={<ChartTooltipContent nameKey="visitors" hideLabel />}
            />
            <Pie data={chartData} dataKey="visitors" >
              <LabelList
              
                dataKey="type"
                className="fill-background"
                stroke="none"
                fontSize={10}
                formatter={(value) =>
                  chartConfig[value as keyof typeof chartConfig]?.label
                }
              />
            </Pie>
            
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

export default PieChart
