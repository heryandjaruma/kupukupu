"use client"

import React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronLeft, FileText, Home, LogOut } from "lucide-react"
import { signOut, useSession } from "next-auth/react"

import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { ThemeToggle } from "@/components/theme-toggle"

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  const { data: session } = useSession({
    required: true,
    // onUnauthenticated() {
    //   redirect("/dashboard/home")
    // },
  })

  const pathname = usePathname()

  return (
    <section>
      <div className="flex">
        <div className="sticky top-0 h-screen w-56 space-y-3 p-4">
          <div className="flex ">
            <Link
              href="/"
              className={cn(
                buttonVariants({ variant: "ghost" }),
                "w-full justify-start"
              )}
            >
              <>
                <ChevronLeft className="mr-2 h-4 w-4" />
                {"  "}Home
              </>
            </Link>

            <ThemeToggle />
          </div>

          <Separator />

          <Link
            href={`/dashboard`}
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "w-full justify-start"
            )}
          >
            <Home className="mr-2 h-4 w-4" />
            Dashboard
          </Link>

          <Button
            variant="ghost"
            className="w-full justify-start text-red-500"
            onClick={() => signOut()}
          >
            <LogOut className="mr-2 h-4 w-4" />
            Log Out
          </Button>

          <Separator />
        </div>
        <div className="p-4">{children}</div>
      </div>
    </section>
  )
}
