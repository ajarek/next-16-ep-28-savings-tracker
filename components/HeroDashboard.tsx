'use client'

import {
  ChartNoAxesCombined,
  Check,
  Flag,
  Plus,
  TrendingUp,
} from "lucide-react"
import {useFinancialGoals} from "@/store/financialGoals"
const HeroDashboard = () => {
  const {items} = useFinancialGoals()
  return (
        <div className='grid md:grid-cols-[4fr_3fr] grid-cols-1 gap-4'>
        <div className='flex flex-col justify-between gap-4 rounded-2xl p-4 bg-muted/20 border border-foreground/10 shadow-2xl'>
          <div className='flex flex-col gap-4'>
            <p className='text-base text-primary uppercase tracking-wider'>
              Total Ledger Balance.
            </p>
            <h1 className='text-5xl font-bold'>
              ${items.reduce((acc, item) => acc + item.targetAmount, 0).toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}
            </h1>
          </div>
          <div className='flex items-center gap-2'>
            <p className='flex items-center gap-2 text-accent'>
              <TrendingUp />
              {(items.reduce((acc, item) => acc + item.currentAmount, 0)/items.reduce((acc, item) => acc + item.targetAmount, 0)*10 ).toFixed(2)}%
            </p>
            <p className='text-muted-foreground'>Since last quarter</p>
          </div>
        </div>
        <div className='flex flex-col gap-4'>
          <div className='grid grid-cols-2 gap-4'>
            <div className='flex flex-col justify-between gap-4 rounded-2xl p-4 bg-muted/20 border border-foreground/10 shadow-2xl'>
              <span className='flex items-center justify-center text-primary w-10 h-10 rounded-full bg-black'>
                <Flag />
              </span>
              <p>Active Goals</p>
              <p className='text-2xl font-bold'>{items.length}</p>
            </div>
            <div className='flex flex-col justify-between gap-4 rounded-2xl p-4 bg-muted/20 border border-foreground/10 shadow-2xl'>
              <span className='flex items-center justify-center text-black w-10 h-10 rounded-full bg-accent'>
                <Check />
              </span>
              <p>Completed</p>
              <p className='text-2xl font-bold'>{items.filter((item) => item.targetAmount === item.currentAmount).length}</p>
            </div>
          </div>
          <div className='flex items-center justify-between gap-4 rounded-2xl p-4 bg-primary border border-foreground/10 shadow-2xl'>
            <div className='flex flex-col gap-2'>
              <p className='text-base text-black uppercase tracking-wider'>
                Projected Growth
              </p>
              <div className='flex items-center gap-2 text-black'>
                <div className='flex items-center justify-center   '>
                  <Plus />
                </div>
                <p className='text-2xl font-semibold'>${items.reduce((acc, item) => acc + item.currentAmount, 0).toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</p>
                <p className=' '> by Dec</p>
              </div>
            </div>
            <div className='flex items-center justify-center w-12 h-12 rounded-xl text-black bg-orange-300'>
              <ChartNoAxesCombined />
            </div>
          </div>
        </div>
      </div>
  )
}

export default HeroDashboard