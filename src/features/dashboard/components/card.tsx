import {
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '#/components/atoms/card'
import { Separator } from '#/components/atoms/separator'
import { Images } from '#/constant/image'

function CardList() {
  return (
    <div className="w-full flex md:flex-row gap-15  lg:gap-13 xl:gap-6 flex-col">
      <div
        className="flex gap-5 overflow-x-auto pb-3
      sm:flex-2 sm:justify-between
      sm:overflow-visible
      sm:max-w-[65%]
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

      <div className="w-full sm:max-w-[35%]">
        <p className="font-bold text-[18px] mb-4 mt-3 text-card-foreground">
          Recent Transaction
        </p>
        <div className="bg-white h-[195px] rounded-xl">
          <CardContent className="md:space-y-4 lg:space-y-3 xl:space-y-5 space-y-5 pt-5 xl:px-10 lg:px-3 md:px-2 px-15">
            <div className="flex xl:gap-5 md:gap-3 lg:gap-2 justify-between items-center">
              <div className="size-8 rounded-full bg-[#FFF5D9] flex items-center justify-center">
                <img src={Images.deposite} alt="deposit"></img>
              </div>
              <div>
                <p className="lg:text-[13px] text-[12px] text-[#232323]">Deposit from my</p>
                <p className="text-card-muted-foreground lg:text-[12px] text-[10px]">
                  28 January 2021
                </p>
              </div>
              <div className="text-[#FF4B4A] text-[11px]">-$850</div>
            </div>

            <div className="flex xl:gap-5 md:gap-3 lg:gap-2 justify-between items-center">
              <div className="size-8 rounded-full bg-[#E7EDFF] flex items-center justify-center">
                <img src={Images.paypal} alt="paypal"></img>
              </div>
              <div>
                <p className="lg:text-[13px] text-[12px] text-[#232323]">Deposit Paypaly</p>
                <p className="text-card-muted-foreground text-[10px] lg:text-[12px]">
                  25 January 2021
                </p>
              </div>
              <div className="text-[#41D4A8] text-[11px]">+$2,500</div>
            </div>

            <div className="flex ms:gap-5 md:gap-3 lg:gap-2 justify-between items-center">
              <div className="size-8 rounded-full bg-[#E7EDFF] flex items-center justify-center">
                <img src={Images.wilsom} alt="wilsom"></img>
              </div>
              <div>
                <p className="lg:text-[13px] text-[12px] text-[#232323]">Jemi Wilson</p>
                <p className="text-card-muted-foreground text-[10px] lg:text-[12px]">
                  21 January 2021
                </p>
              </div>
              <div className="text-[#41D4A8] text-[11px]">+$5,4000</div>
            </div>
          </CardContent>
        </div>
      </div>
    </div>
  )
}

export default CardList
