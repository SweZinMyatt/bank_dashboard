import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '#/components/atoms/card'
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from '#/components/atoms/chart'


import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts'

export const description = 'A bar chart'
const chartData = [
  { day: 'Saturday', diposit: 500, withdrow: 90 },
  { day: 'Sunday', diposit: 305, withdrow: 150 },
  { day: 'Monday', diposit: 237, withdrow: 200 },
  { day: 'Tuesday', diposit: 500, withdrow: 300 },
  { day: 'Wednesday', diposit: 209, withdrow: 90 },
  { day: 'Thusday', diposit: 214, withdrow: 400 },
  { day: 'Friday', diposit: 200, withdrow: 70 },
]
const chartConfig = {
  diposit: {
    label: 'diposit',
    color: 'var(--chart-1)',
  },
  withdrow: {
    label: 'withdrow',
    color: 'var(--chart-2)',
  },
} satisfies ChartConfig

function Chart() {
  return (
    <Card className="bg-white h-[300px]">
      <CardHeader>
        <div className="flex gap-5 justify-end">
          <CardTitle className="flex gap-3 ">
            <div className="size-4 rounded-full bg-chart-1"></div>
            <p>Diposit</p>
          </CardTitle>
          <CardTitle className="flex gap-3">
            <div className="size-4 rounded-full bg-chart-2"></div>
            <p>Withdrow</p>
          </CardTitle>
        </div>

        
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="max-h-[200px] w-full">
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid horizontal={false} />
            <YAxis
              domain={[0, 500]}
              ticks={[0, 100, 200, 300, 400, 500]}
              tickLine={false}
              tickMargin={10}
              axisLine={false}
            />
            <CartesianGrid vertical={false} />

            <XAxis
              dataKey="day"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="diposit" fill="var(--color-diposit)" radius={8} />
            <Bar dataKey="withdrow" fill="var(--color-withdrow)" radius={8} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      
    </Card>
  )
}

export default Chart
