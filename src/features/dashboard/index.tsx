import { AppSidebar } from '#/components/templates/app-sidebar'

import Chart from './components/barChart'
import { PieChartBar } from './components/pieChart'
import TransferCard from './components/transferCard'
import CardList from './components/card'
import BalanceChart from './components/balanceChart'

function Dashboard() {
  return (
    <div className="w-full">
      <AppSidebar />
      <div className="lg:mt-5 mt-2 max-w-6xl mx-auto lg:px-10 px-5">
        <CardList />
      </div>
      <div className="flex md:flex-row flex-col lg:mt-5 mt-2 md:gap-8 gap-5 mx-auto max-w-6xl lg:px-10 px-5">
        <div className="md:flex-1">
          <h2 className="text-[18px] text-[#343C6A] lg:my-5 my-3 font-bold">
            Weekly Activity
          </h2>
          <Chart />
        </div>
        <div className="md:max-w-[40%] md:max-h-[300px]">
          <h2 className="text-[18px] text-[#343C6A] lg:my-5 my-3 font-bold">
            Expense Statistics
          </h2>
          <PieChartBar />
        </div>
      </div>
      <div className="flex  md:flex-row flex-col lg:mt-10 mt-5 gap-8   max-w-6xl mx-auto lg:px-10 px-5">
        <div className='lg:max-w-[350px]'>
          <h2 className="text-[18px] text-[#343C6A] my-5 font-bold">
            Quick Transfer
          </h2>
          <TransferCard />
        </div>
        <div className='flex-[3]'>
          <h2 className="text-[18px] text-left text-[#343C6A] my-5 font-bold">
            Balance History
          </h2>
          <BalanceChart/>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
