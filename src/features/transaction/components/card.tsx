import {
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '#/components/atoms/card'
import { Separator } from '#/components/atoms/separator'
import { Images } from '#/constant/image'
import ExpenseChart from './expenseChart'

function CardList() {
  return (
    <div className="w-full flex md:flex-row gap-6 flex-col">
      <div
        className="flex gap-5 overflow-x-auto pb-3
      sm:flex-1 sm:justify-between
      sm:overflow-visible
      sm:max-w-[70%]
      mt-3"
      >
        <div className="min-w-[250px] sm:w-full">
          <h2 className="font-bold text-[16px] md:text-[18px] mb-4 text-card-foreground">
            My Cards
          </h2>
          <div className="bg-card py-3 rounded-xl h-[195px] text-white space-y-5">
            <CardHeader>
              <CardTitle>
                <div className="flex items-center justify-between">
                  <div className="space-y-2">
                    <p className="text-[12px]">Balance</p>
                    <p className="text-[16px]  font-bold">$ 5,756</p>
                  </div>
                  <div>
                    <img src={Images.card} alt="card img"></img>
                  </div>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="space-y-2">
                  <p className="text-[10px] text-card-muted-foreground">
                    CARD HOLDER
                  </p>
                  <p className="text-[13px] text-bold">Eddy Cusuma</p>
                </div>
                <div className="space-y-2">
                  <p className="text-[10px] text-card-muted-foreground">
                    VALID THRU
                  </p>
                  <p className="text-[13px] text-bold">12/22</p>
                </div>
              </div>
            </CardContent>
            <Separator />
            <CardFooter className="bg-card-footer">
              <div className="flex w-full items-center justify-between">
                <p>3778 **** **** 1234</p>
                <p className="relative flex items-center">
                  <img
                    src={Images.whiteCircle}
                    alt="white circle"
                    className="size-6"
                  ></img>
                  <img
                    src={Images.whiteCircle}
                    alt="white circle"
                    className="absolute size-6 left-3"
                  ></img>
                </p>
              </div>
            </CardFooter>
          </div>
        </div>
        <div className="min-w-[250px] sm:w-full">
          <div className="flex items-center">
            <p className="font-semibold md:text-[15px] text-[14px] text-right w-full text-card-foreground mb-4 mt-1">
              See All
            </p>
          </div>
          <div className="border h-[195px] border-[#DFEAF2] bg-white py-3 rounded-xl space-y-5">
            <CardHeader>
              <CardTitle>
                <div className="flex items-center justify-between">
                  <div className="space-y-2">
                    <p className="text-[12px] text-card-muted-foreground">
                      Balance
                    </p>
                    <p className="text-[16px] font-bold text-card-foreground">
                      $ 5,756
                    </p>
                  </div>
                  <div>
                    <img src={Images.cardBlack} alt="card img"></img>
                  </div>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="space-y-2">
                  <p className="text-[10px] text-card-muted-foreground">
                    CARD HOLDER
                  </p>
                  <p className="text-[13px] font-bold text-card-foreground">
                    Eddy Cusuma
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="text-[10px] text-card-muted-foreground">
                    VALID THRU
                  </p>
                  <p className="text-[13px] font-bold text-card-foreground">
                    12/22
                  </p>
                </div>
              </div>
            </CardContent>
            <Separator />
            <CardFooter>
              <div className="flex items-center justify-between w-full">
                <p className="text-card-foreground font-bold">
                  3778 **** **** 1234
                </p>
                <p className="relative flex items-center">
                  <img
                    src={Images.blackCircle}
                    alt="black circle"
                    className="size-6"
                  ></img>
                  <img
                    src={Images.blackCircle}
                    alt="black circle"
                    className="absolute size-6 left-3"
                  ></img>
                </p>
              </div>
            </CardFooter>
          </div>
        </div>
      </div>

      <div className="max-w-[400px] sm:max-w-[30%]">
        <p className="font-bold text-[18px] mb-4 mt-3 text-card-foreground">
          My Expense
        </p>
        <div className="bg-white h-[195px]  rounded-xl">
          <ExpenseChart />
        </div>
      </div>
    </div>
  )
}

export default CardList
