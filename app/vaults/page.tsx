import { FormAddGoal } from "@/components/FormAddGoal"
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card"
import { Sparkles } from "lucide-react"

const VaultsPage = () => {
  return (
    <div className='min-h-screen w-full max-w-8xl mx-auto flex flex-col justify-center px-8 py-4'>
      <div className='grid md:grid-cols-2 grid-cols-1 gap-4 place-items-center '>
        <div className='w-full md:max-w-md flex flex-col gap-8 '>
          <h1 className='text-5xl font-bold'>Define Your Future.</h1>
          <p className='text-muted-foreground text-lg'>
            Financial independence isn&apos;t a destination; it&apos;s a
            deliberate sequence of calculated goals. Shape your ledger below.
          </p>
          <Card className='flex flex-col gap-8 px-4 py-8'>
            <CardTitle className='text-xl text-primary uppercase tracking-wider'>
              Expert Insight
            </CardTitle>
            <CardDescription>
              &quot;Setting a specific deadline increases the probability of
              reaching your savings milestone by 42%.&quot;
            </CardDescription>
            <CardContent className='flex items-center gap-2'>
              <span className='flex items-center justify-center w-10 h-10 rounded-full bg-primary text-black'>
                <Sparkles />
              </span>
              <p className='text-lg text-muted-foreground'>
                Ember Intelligence Engine
              </p>
            </CardContent>
          </Card>
        </div>
        <div className='w-full '>
          <FormAddGoal />
        </div>
      </div>
    </div>
  )
}

export default VaultsPage
