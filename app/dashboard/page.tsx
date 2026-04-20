import { ChartBarDefault } from "@/components/ChartBar"
import FinancialGoals from "@/components/FinancialGoals"
import HeroDashboard from "@/components/HeroDashboard"

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
      <HeroDashboard />
      <ChartBarDefault />
      <FinancialGoals />
    </div>
  )
}

export default Dashboard
