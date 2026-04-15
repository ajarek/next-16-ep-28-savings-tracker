import { Car, House, Landmark, PiggyBank } from "lucide-react";

export const financialGoals = [
    {
        id: 1,
        name: "Emergency Fund",
        targetAmount: 10000,
        currentAmount: 5000,
        icon: <Landmark />,
        deadline: "2029-12-31",
        priority: "high",
    },
    {
        id: 2,
        name: "House Down Payment",
        targetAmount: 50000,
        currentAmount: 20000,
        icon: <House />,
        deadline: "2035-12-31",
        priority: "medium",
    },
    {
        id: 3,
        name: "Retirement",
        targetAmount: 100000,
        currentAmount: 30000,
        icon: <PiggyBank />,
        deadline: "2030-12-31",
        priority: "medium",
    },
    {
        id: 4,
        name: "Electric Roadster",
        targetAmount: 100000,
        currentAmount: 30000,
        icon: <Car />,
        deadline: "2030-12-31",
        priority: "high",
    }
];