"use client"
import { ChartLine } from "@/components/ChartLine"
import { Progress } from "@/components/ui/progress"
import { MoveUpRight, Zap } from "lucide-react"
import Link from "next/link"
import {useFinancialGoals} from "@/store/financialGoals"

const AnalyticsPage = () => {
  const {items} = useFinancialGoals()
  return (
    <div className='w-full max-w-8xl mx-auto flex flex-col gap-4 px-8 py-4'>
      <div>
        <h1 className='text-3xl font-bold'>Financial Overview</h1>
        <p className='text-lg text-muted-foreground text-wrap'>
          Welcome back. Your assets grew by 4.2% this month.
        </p>
      </div>
      <div className='w-full grid md:grid-cols-[2fr_1fr_1fr] grid-cols-1 gap-4'>
        <div className='flex flex-col justify-between gap-4 rounded-2xl p-4 bg-muted/20 border border-foreground/10 shadow-2xl'>
          <div className='flex flex-col gap-4'>
            <p className='text-base '>Net Worth Growth</p>
            <h1 className='text-5xl font-bold'>
              ${items.reduce((acc, item) => acc + item.currentAmount, 0).toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}
            </h1>
          </div>
          <div className='flex flex-col gap-2'>
            <div className='flex items-center justify-between text-xl'>
              <p className='text-muted-foreground'>Progress:</p>
              <p className='text-primary'>  {(items.reduce((acc, item) => acc + item.currentAmount, 0)/items.reduce((acc, item) => acc + item.targetAmount, 0)*10 ).toFixed(2)}%</p>
            </div>
            <Progress value={(items.reduce((acc, item) => acc + item.currentAmount, 0)/items.reduce((acc, item) => acc + item.targetAmount, 0)*10 )} />
          </div>
        </div>

        <div className='flex items-center justify-between gap-4 rounded-2xl p-4  border border-foreground/10 shadow-2xl'>
          <div className='min-h-60 flex flex-col justify-between gap-4'>
            <p className='text-base '>Projected Wealth (5Y)</p>
            <h1 className='text-3xl font-bold'>${(items.reduce((acc, item) => acc + item.targetAmount, 0)/1000000).toFixed(2)}M</h1>
            <p className='text-muted-foreground'>
              Based on current trajectory and{" "}
              <span className='text-accent '>8.2% avg. annual return.</span>
            </p>
          </div>
        </div>
        <div className='flex items-center justify-between gap-4 rounded-2xl p-4   border border-foreground/10 shadow-2xl'>
          <div className='w-full min-h-60 flex flex-col justify-between  '>
            <div className='flex items-center justify-between'>
              <p className='text-base '>Active Portfolio</p>
              <Zap className=' size-6 text-primary ' />
            </div>
            <h1 className='text-3xl font-bold'>{items.length} Goals</h1>
            <div className='flex flex-col gap-2'>
              <div className='flex items-center justify-between '>
                <div className='text-sm text-muted-foreground'>
                  Top Performer
                </div>
                <div className='text-accent text-sm '>BTC +24.8%</div>
              </div>
              <div className='flex items-center justify-between  '>
                <div className='text-sm text-muted-foreground'>
                  Yielding Assets
                </div>
                <div className='text-accent text-sm '>8 (57.1%)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ChartLine />

      <div className='w-full grid md:grid-cols-[1fr_2fr] grid-cols-1 gap-4'>
        <div className='flex flex-col justify-between gap-4 rounded-2xl p-4 bg-muted/20 border border-foreground/10 shadow-2xl'>
          <div className='flex flex-col gap-4'>
            <p className='text-base '>Net Worth Growth</p>
            <h1 className='text-5xl font-bold'>
              $248,592<span className='text-primary'>.84</span>
            </h1>
          </div>
          <div className='flex flex-col gap-2'>
            <div className='flex items-center justify-between text-xl'>
              <p className='text-muted-foreground'>Progress:</p>
              <p className='text-primary'>64%</p>
            </div>
            <Progress value={64} />
          </div>
        </div>
        <div className='grid grid-cols-2 gap-4'>
          <div className='flex items-center justify-between gap-4 rounded-2xl p-4  border border-foreground/10 shadow-2xl'>
            <div className='min-h-60 flex flex-col justify-between gap-4'>
              <p className='text-base '>Projected Wealth (5Y)</p>
              <h1 className='text-3xl font-bold'>$2.4M</h1>
              <p className='text-muted-foreground'>
                Based on current trajectory and{" "}
                <span className='text-accent '>8.2% avg. annual return.</span>
              </p>
            </div>
          </div>
          <div className='flex items-center justify-between gap-4 rounded-2xl p-4   border border-foreground/10 shadow-2xl'>
            <div className='w-full min-h-60 flex flex-col justify-between  '>
              <div className='flex items-center justify-between'>
                <p className='text-base '>Active Portfolio</p>
                <Zap className=' size-6 text-primary ' />
              </div>
              <h1 className='text-3xl font-bold'>14 Assets</h1>
              <div className='flex flex-col gap-2'>
                <div className='flex items-center justify-between '>
                  <div className='text-sm text-muted-foreground'>
                    Top Performer
                  </div>
                  <div className='text-accent text-sm '>BTC +24.8%</div>
                </div>
                <div className='flex items-center justify-between  '>
                  <div className='text-sm text-muted-foreground'>
                    Yielding Assets
                  </div>
                  <div className='text-accent text-sm '>8 (57.1%)</div>
                </div>
              </div>
            </div>
          </div>
          <div className='flex items-center col-span-2 justify-between gap-4 rounded-2xl p-4   border border-foreground/10 shadow-2xl'>
            <div className='w-full flex flex-col justify-between  '>
              <div className='flex items-center justify-between'>
                <p className='text-base '>Market Sentiment</p>
                <Link href="/analytics/sentiment" className="w-10 h-10 rounded-full bg-primary text-background flex items-center justify-center hover:group/link hover:rotate-45 transition-all duration-300">

                <MoveUpRight className=' size-6 ' />
                </Link>
              </div>
              <h1 className='text-2xl font-bold'>
                &quot;Institutional accumulation phase detected in Mid-Cap
                Tech.&quot;
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AnalyticsPage
