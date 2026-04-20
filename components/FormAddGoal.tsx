"use client"

import * as React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import { toast } from "sonner"
import * as z from "zod"
import { Landmark, PiggyBank, Gem } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { useFinancialGoals } from "@/store/financialGoals"

const formSchema = z.object({
  name: z
    .string()
    .min(5, "Bug title must be at least 5 characters.")
    .max(32, "Bug title must be at most 32 characters."),
  targetAmount: z
    .number({ message: "Target amount must be a number." })
    .min(1, "Target amount must be at least 1.")
    .max(1000000, "Target amount must be at most 1,000,000."),
  currentAmount: z
    .number({ message: "Current amount must be a number." })
    .min(0, "Current amount must be at least 0.")
    .max(1000000, "Current amount must be at most 1,000,000."),
  deadline: z
    .string()
    .min(1, "Deadline must be at least 1.")
    .max(1000000, "Deadline must be at most 1,000,000."),
  priority: z
    .string()
    .min(1, "Priority must be at least 1.")
    .max(1000000, "Priority must be at most 1,000,000."),
  icon: z
    .string()
    .min(1, "Icon must be at least 1.")
    .max(100, "Icon must be at most 100."),
})

export function FormAddGoal() {
  const { addItemToRecords } = useFinancialGoals()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      targetAmount: 0,
      currentAmount: 0,
      deadline: "",
      priority: "",
      icon: "",
    },
  })

  function onSubmit(data: z.infer<typeof formSchema>) {
    toast("You submitted the following values:", {
      description: (
        <pre className='mt-2 w-[320px] overflow-x-auto rounded-md bg-code p-4 text-code-foreground'>
          <code>{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
      position: "bottom-right",
      classNames: {
        content: "flex flex-col gap-2",
      },
      style: {
        "--border-radius": "calc(var(--radius)  + 4px)",
      } as React.CSSProperties,
    })
    const newGoal = {
      id: crypto.randomUUID(),
      name: data.name,
      targetAmount: data.targetAmount,
      currentAmount: data.currentAmount,
      icon: data.icon,
      deadline: data.deadline,
      priority: data.priority,
    }
    addItemToRecords(newGoal)
    form.reset()
  }

  return (
    <Card className='w-full'>
      <CardHeader>
        <CardTitle>Add Goal</CardTitle>
        <CardDescription>
          Add a new goal to your savings tracker.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form id='form-rhf-demo' onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            <Controller
              name='name'
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor='form-rhf-demo-name'>
                    Goal name
                  </FieldLabel>
                  <Input
                    {...field}
                    id='form-rhf-demo-name'
                    aria-invalid={fieldState.invalid}
                    placeholder='e.g. New Car'
                    autoComplete='off'
                    className='h-16 text-xl md:text-xl'
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <Controller
                name='targetAmount'
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor='form-rhf-demo-targetAmount'>
                      Target amount
                    </FieldLabel>
                    <Input
                      {...field}
                      onChange={(e) =>
                        field.onChange(
                          e.target.value ? Number(e.target.value) : 0,
                        )
                      }
                      id='form-rhf-demo-targetAmount'
                      aria-invalid={fieldState.invalid}
                      placeholder='e.g. $1000'
                      autoComplete='off'
                      className='h-16 text-xl md:text-xl'
                      type='number'
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <Controller
                name='currentAmount'
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor='form-rhf-demo-currentAmount'>
                      Current amount
                    </FieldLabel>
                    <Input
                      {...field}
                      onChange={(e) =>
                        field.onChange(
                          e.target.value ? Number(e.target.value) : 0,
                        )
                      }
                      id='form-rhf-demo-currentAmount'
                      aria-invalid={fieldState.invalid}
                      placeholder='e.g. $1000'
                      autoComplete='off'
                      className='h-16 text-xl md:text-xl'
                      type='number'
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <Controller
                name='deadline'
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor='form-rhf-demo-deadline'>
                      Deadline
                    </FieldLabel>
                    <Input
                      {...field}
                      id='form-rhf-demo-deadline'
                      aria-invalid={fieldState.invalid}
                      placeholder='e.g. 2025-12-31'
                      autoComplete='off'
                      className='h-16 text-xl md:text-xl'
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <Controller
                name='priority'
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor='form-rhf-demo-priority'>
                      Priority
                    </FieldLabel>
                    <Input
                      {...field}
                      id='form-rhf-demo-priority'
                      aria-invalid={fieldState.invalid}
                      placeholder='e.g. High'
                      autoComplete='off'
                      className='h-16 text-xl md:text-xl'
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
            </div>

            <Controller
              name='icon'
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel className='text-xs uppercase tracking-wider mb-2 font-semibold text-muted-foreground'>
                    Funding Source
                  </FieldLabel>
                  <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                    {[
                      { id: "Landmark", label: "Main Vault", icon: Landmark },
                      {
                        id: "PiggyBank",
                        label: "Liquid Assets",
                        icon: PiggyBank,
                      },
                      { id: "Gem", label: "Investments", icon: Gem },
                    ].map((option) => {
                      const Icon = option.icon
                      const isSelected = field.value === option.id
                      return (
                        <button
                          type='button'
                          key={option.id}
                          onClick={() => field.onChange(option.id)}
                          className={`flex flex-col items-start gap-3 rounded-xl border p-4 text-left transition-all ${
                            isSelected
                              ? "border-primary bg-background shadow-sm"
                              : "border-transparent bg-muted hover:bg-muted/80 text-muted-foreground"
                          }`}
                        >
                          <Icon
                            className={`h-6 w-6 ${isSelected ? "text-foreground" : "text-muted-foreground"}`}
                          />
                          <span
                            className={`font-semibold text-sm ${isSelected ? "text-foreground" : "text-foreground"}`}
                          >
                            {option.label}
                          </span>
                        </button>
                      )
                    })}
                  </div>
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter>
        <Field orientation='horizontal'>
          <Button
            type='button'
            variant='outline'
            onClick={() => form.reset()}
            className='w-1/2 h-16 text-lg'
          >
            Reset
          </Button>
          <Button
            type='submit'
            form='form-rhf-demo'
            className='w-1/2 h-16 text-lg'
          >
            Submit
          </Button>
        </Field>
      </CardFooter>
    </Card>
  )
}
