"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { ThemeToggle } from "@/components/theme-toggle"

import { step } from "./step"

function getLastPathname(pathname: string) {
  const pathSegments = pathname.split("/") // Split the pathname into an array of segments
  const lastSegment = pathSegments[pathSegments.length - 1] // Retrieve the last segment

  return lastSegment
}

function getCurrentObject(pathname: string) {
  if (pathname === "create") return step.create
  else if (pathname === "experience") return step.experience
  else if (pathname === "education") return step.education
  else if (pathname === "organization") return step.organization
  else if (pathname === "finalize") return step.finalize
}

export default function CreateLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const current = getCurrentObject(getLastPathname(usePathname()))

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

        <div className="text-center text-lg font-semibold">{current?.name}</div>

        <div className="justify-self-end">
          <ThemeToggle />
        </div>
      </div>

      <Separator className="my-3" />

      <div className="w-full max-w-xl space-y-2">
        {children}

        <Separator />

        <div>
          <div className="grid grid-cols-2 place-items-center">
            <div className="justify-self-start">
              {current?.prevStep && (
                <>
                  <Link
                    href={current.prevStep}
                    className={cn(buttonVariants(), "max-w-fit bg-blue-600")}
                  >
                    <ChevronLeft className="h-4 w-4" />
                    Back
                  </Link>
                </>
              )}
            </div>

            <div className="justify-self-end">
              {current?.nextStep && (
                <>
                  <Link
                    href={current.nextStep}
                    className={cn(buttonVariants(), "max-w-fit bg-blue-600")}
                  >
                    Next
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
