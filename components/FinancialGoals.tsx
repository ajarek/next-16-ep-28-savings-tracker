"use client"

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card"
import { Progress } from "@/components/ui/progress"
import {
  Landmark,
  Plus,
  PiggyBank,
  Gem,
  House,
  Car,
  HelpCircle,
} from "lucide-react"
import Link from "next/link"
import { useFinancialGoals } from "@/store/financialGoals"

const iconMap: Record<string, React.ElementType> = {
  Landmark,
  PiggyBank,
  Gem,
  House,
  Car,
}

function GoalIcon({ name }: { name: string }) {
  if (typeof name !== "string") return <Landmark />
  const IconComponent = iconMap[name] || HelpCircle
  return <IconComponent />
}

const FinancialGoals = () => {
  const { items } = useFinancialGoals()
  return (
    <div className='w-full max-w-8xl mx-auto flex flex-col gap-4 px-8 py-4'>
      <h1 className='text-2xl font-bold'>Active Financial Goals</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {items.map((goal) => (
          <Card key={goal.id} className=''>
            <CardHeader className='text-primary'>
              <GoalIcon name={goal.icon} />
              <CardAction>
                <CardDescription className='text-accent uppercase'>
                  <span className='text-muted-foreground lowercase'>
                    Priority:
                  </span>
                  {goal.priority}
                </CardDescription>
              </CardAction>
            </CardHeader>
            <CardContent className='flex flex-col gap-2'>
              <CardTitle>{goal.name}</CardTitle>
              <p>
                <span className='text-muted-foreground mr-2'>
                  Target Amount:
                </span>
                ${goal.targetAmount}
              </p>
              <p>
                <span className='text-muted-foreground mr-2'>
                  Current Amount:
                </span>
                ${goal.currentAmount}
              </p>
              <div className='flex flex-col gap-2'>
                <div className='flex items-center justify-between'>
                  <p className='text-muted-foreground'>Progress:</p>
                  <p className='text-primary'>
                    {(goal.currentAmount / goal.targetAmount) * 100}%
                  </p>
                </div>
                <Progress
                  value={(goal.currentAmount / goal.targetAmount) * 100}
                />
              </div>
            </CardContent>
            <CardFooter>
              <p>
                <span className='text-muted-foreground mr-2'>Deadline:</span>
                {goal.deadline}
              </p>
            </CardFooter>
          </Card>
        ))}
        <Card className='border-2 transition-all duration-300 ease-in-out hover:border-dashed hover:border-accent'>
          <Link
            href='/vaults'
            className=' h-full flex flex-col items-center justify-center gap-4 '
          >
            <CardHeader className='w-full flex items-center justify-center gap-4'>
              <CardAction className='flex items-center justify-center text-primary w-10 h-10 rounded-full border border-accent'>
                <Plus />
              </CardAction>
            </CardHeader>
            <CardContent className='flex flex-col items-center justify-center gap-2'>
              <CardTitle className='text-xl'>Create New Goal</CardTitle>
              <CardDescription className=''>
                Define a new financial milestone
              </CardDescription>
            </CardContent>
          </Link>
        </Card>
      </div>
    </div>
  )
}

export default FinancialGoals
