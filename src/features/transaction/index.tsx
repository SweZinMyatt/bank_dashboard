import CardList from "./components/card"
import Pagation from "./components/pagation"
import TransactionTable from "./components/transactionTable"

function Transaction() {
  return (
    <div className="w-full">
        <div className="max-w-6xl mx-auto lg:px-10 px-5">
            <CardList/>
            <h2 className="text-[18px] text-primary font-bold my-3">Recent Transactions</h2>
            <TransactionTable/>
            <div className="flex justify-end w-full">
              <Pagation/>
            </div>
        </div>
    </div>
  )
}

export default Transaction