import { ChartBarDefault } from "@/components/ChartBar"
import FinancialGoals from "@/components/FinancialGoals"
import {
  ChartNoAxesCombined,
  Check,
  Flag,
  Plus,
  TrendingUp,
} from "lucide-react"
import Image from "next/image"

const Dashboard = () => {
  const user = {
    name: "John Doe",
    email: "john_doe@gmail.com",
    image: "/images/user.jpg",
  }
  return (
    <div className='w-full max-w-8xl mx-auto flex flex-col gap-4 px-8 py-4'>
      <div className='flex justify-between items-center'>
        <div>
          <h1 className='text-3xl font-bold'>Advanced Analytics</h1>
        </div>
        <div className='flex items-center flex-wrap gap-2'>
          <Image
            src={user.image}
            alt='User'
            width={50}
            height={50}
            className='rounded-full'
          />
          <div className='flex flex-col '>
            <p>{user.name}</p>
            <p className='text-muted-foreground'>{user.email}</p>
          </div>
        </div>
      </div>
      <div className='grid md:grid-cols-[4fr_3fr] grid-cols-1 gap-4'>
        <div className='flex flex-col justify-between gap-4 rounded-2xl p-4 bg-muted/20 border border-foreground/10 shadow-2xl'>
          <div className='flex flex-col gap-4'>
            <p className='text-base text-primary uppercase tracking-wider'>
              Total Ledger Balance.
            </p>
            <h1 className='text-5xl font-bold'>
              $248,592<span className='text-primary'>.84</span>
            </h1>
          </div>
          <div className='flex items-center gap-2'>
            <p className='flex items-center gap-2 text-accent'>
              <TrendingUp />
              +12.5%
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
              <p className='text-2xl font-bold'>12</p>
            </div>
            <div className='flex flex-col justify-between gap-4 rounded-2xl p-4 bg-muted/20 border border-foreground/10 shadow-2xl'>
              <span className='flex items-center justify-center text-black w-10 h-10 rounded-full bg-accent'>
                <Check />
              </span>
              <p>Completed</p>
              <p className='text-2xl font-bold'>48</p>
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
                <p className='text-2xl font-semibold'>$12,450</p>
                <p className=' '> by Dec</p>
              </div>
            </div>
            <div className='flex items-center justify-center w-12 h-12 rounded-xl text-black bg-orange-300'>
              <ChartNoAxesCombined />
            </div>
          </div>
        </div>
      </div>
      <ChartBarDefault />
      <FinancialGoals />
    </div>
  )
}

export default Dashboard
