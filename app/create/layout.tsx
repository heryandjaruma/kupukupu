import Link from "next/link"
import { ChevronLeft } from "lucide-react"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { ThemeToggle } from "@/components/theme-toggle"

export default function CreateLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className="flex flex-col items-center justify-center p-4">
      <div className="grid w-full grid-cols-3 place-items-center gap-x-3">
        <Link
          href="/dashboard"
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "max-w-fit justify-self-start"
          )}
        >
          <ChevronLeft className="mr-2 h-4 w-4" />
          Dashboard
        </Link>

        <div className="text-center text-lg font-semibold">
          Personal Information
        </div>

        <div className="justify-self-end">
          <ThemeToggle />
        </div>
      </div>

      <Separator className="my-3" />

      <div className="w-full max-w-xl">{children}</div>
    </section>
  )
}
