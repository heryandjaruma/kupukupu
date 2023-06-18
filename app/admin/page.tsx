import { User } from "lucide-react"

import { Separator } from "@/components/ui/separator"
import { Skeleton } from "@/components/ui/skeleton"

export default function Page() {
  return (
    <div className="w-full bg-background p-4">
      <div className="w-full pb-8 pt-4">
        <h1 className="text-2xl font-semibold text-primary">Admin Dashboard</h1>
      </div>

      <div className="flex w-full flex-row space-x-3">
        <div className="flex flex-row items-center space-x-3 rounded-xl bg-white p-4 text-foreground dark:bg-slate-800">
          <User className="h-10 w-10" />
          <div className="flex flex-col">
            <p className="text-sm text-foreground">Users</p>
            <p>1,000</p>
          </div>
        </div>

        <div className="flex flex-row items-center space-x-3 rounded-xl bg-white p-4 text-foreground dark:bg-slate-800">
          <User className="h-10 w-10" />
          <div className="flex flex-col">
            <p className="text-sm text-foreground">Active Users</p>
            <p>100</p>
          </div>
        </div>
      </div>

      <Separator className="my-4" />

      <div className="my-4 grid w-full grid-cols-2 place-items-center gap-4">
        <Skeleton className="aspect-[4/3] w-96" />
        <Skeleton className="aspect-[4/3] w-96" />
        <Skeleton className="aspect-[4/3] w-96" />
        <Skeleton className="aspect-[4/3] w-96" />
      </div>
    </div>
  )
}
