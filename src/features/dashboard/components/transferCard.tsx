import livia from "#/assets/images/livia.svg"
import randy from "#/assets/images/randy.svg"
import workman from "#/assets/images/workman.svg"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "#/components/molecules/carousel"

import { Label } from "#/components/atoms/label"
import { Input } from "#/components/atoms/input"
import { Button } from "#/components/atoms/button"

import { Send } from "lucide-react"
import { CardContent } from "#/components/atoms/card"


const data = [
  {
    name: "Livia",
    role: "CEO",
    img: livia,
  },
  {
    name: "Randy Press",
    role: "Director",
    img: randy,
  },
  {
    name: "Workman",
    role: "Designer",
    img: workman,
  },
  {
    name: "Livia",
    role: "CEO",
    img: livia,
  },
  {
    name: "Randy Press",
    role: "Director",
    img: randy,
  },
]


function TransferCard() {
  return (
    <CardContent className="space-y-6 bg-white lg:py-5 py-2 rounded-xl w-full md:w-[250px] lg:max-h-[300px]">

      <Carousel className="w-full">
        <CarouselContent>
          {data.map((d, index) => (
            <CarouselItem
              key={index}
              className="basis-1/3"
            >
              <div className="flex flex-col items-center text-center gap-2">
                <img
                  src={d.img}
                  alt={d.name}
                  className="h-14 w-14 rounded-full"
                />

                <p className="font-semibold lg:text-[16px] text-[14px]">
                  {d.name}
                </p>

                <p className="text-sm text-muted-foreground lg:text-[14px] text-[12px]">
                  {d.role}
                </p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />

      </Carousel>


      <form className="flex gap-4 items-center justify-center h-[120px]">

        <Label htmlFor="amount" className="lg:text-[14px] text-[12px] leading-4">
          Write Amount
        </Label>

        <Input
          id="amount"
          className="lg:w-50 w-30 lg:placeholder:text-[14px] placeholder:text-[12px] h-5 lg:h-10 rounded-xl border-0 bg-transparent outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
          placeholder="525.50"
          required
        />

        <Button
          type="submit"
          className="flex lg:gap-2 gap-1 lg:w-28 w-12 h-5 lg:h-10 rounded-xl bg-card lg:text-[14px] text-[10px]"
        >
          Send
          <Send className="lg:size-[18px] size-[10px] "/>
        </Button>

      </form>

    </CardContent>
  )
}

export default TransferCard