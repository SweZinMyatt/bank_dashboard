import { DataTable } from '#/components/organisms/data-table'
import { columns } from './columns'
import type { Transaction } from '#/service/type'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '#/components/molecules/tabs'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '#/components/atoms/card'

function getData(): Transaction[] {
  // Fetch data from your API here.
  return [
    {
      id: 1,
      description: 'Spotify Subscription',
      transactionId: '#12548796',
      type: 'Shopping',
      card: '1234 ****',
      date: '28 Jan, 12:30 AM',
      amount: -2500,
      receipt: 'Download',
    },
    {
      id: 2,
      description: 'Freepik Sales',
      transactionId: '#12548797',
      type: 'Transfer',
      card: '1234 ****',
      date: '25 Jan, 10:40 PM',
      amount: 750,
      receipt: 'Download',
    },
    {
      id: 3,
      description: 'Mobile Service',
      transactionId: '#12548798',
      type: 'Service',
      card: '1234 ****',
      date: '20 Jan, 10:40 PM',
      amount: -150,
      receipt: 'Download',
    },
    {
      id: 4,
      description: 'Wilson',
      transactionId: '#12548799',
      type: 'Transfer',
      card: '1234 ****',
      date: '15 Jan, 03:29 PM',
      amount: -1050,
      receipt: 'Download',
    },
    {
      id: 5,
      description: 'Emily',
      transactionId: '#12548800',
      type: 'Transfer',
      card: '1234 ****',
      date: '14 Jan, 10:40 PM',
      amount: 840,
      receipt: 'Download',
    },
  ]
}

export default function TransactionTable() {
  const data = getData()

  return (
    <div>
      <Tabs defaultValue="allTransactions" className="w-full">
        <TabsList className="bg-trasparent text-[13px] text-card-muted-foreground">
          <TabsTrigger value="allTransactions">All Transactions</TabsTrigger>
          <TabsTrigger value="income">Income</TabsTrigger>
          <TabsTrigger value="expense">Expense</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>
        <TabsContent value="allTransactions">
          <div className="container mx-auto py-5">
            <DataTable columns={columns} data={data} />
          </div>
        </TabsContent>
        <TabsContent value="income" className="py-10">
          <Card className="bg-white">
            <CardHeader>
              <CardTitle>Income</CardTitle>
              <CardDescription>
                Track performance and user engagement metrics. Monitor trends
                and identify growth opportunities.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Page views are up 25% compared to last month.
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="expense" className="py-10">
          <Card className="bg-white">
            <CardHeader>
              <CardTitle>Expense</CardTitle>
              <CardDescription>
                Generate and download your detailed reports. Export data in
                multiple formats for analysis.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              You have 5 reports ready and available to export.
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="settings" className="py-10">
          <Card className="bg-white">
            <CardHeader>
              <CardTitle>Settings</CardTitle>
              <CardDescription>
                Manage your account preferences and options. Customize your
                experience to fit your needs.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Configure notifications, security, and themes.
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
