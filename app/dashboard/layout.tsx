"use client"

import React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  ChevronLeft,
  FileText,
  Home,
  LayoutDashboard,
  LogOut,
  User,
} from "lucide-react"
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
        <div className="sticky top-0 flex h-screen flex-col justify-between p-4">
          <div className="space-y-3">
            <div className="flex max-w-fit items-center justify-between space-x-1">
              <Link
                href="/"
                className={cn(
                  buttonVariants({ variant: "outline" }),
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
              <LayoutDashboard className="mr-2 h-4 w-4" />
              Dashboard
            </Link>

            <Link
              href={`/account`}
              className={cn(
                buttonVariants({ variant: "ghost" }),
                "w-full justify-start"
              )}
            >
              <User className="mr-2 h-4 w-4" />
              Account Settings
            </Link>
          </div>

          <div className="space-y-3">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium capitalize leading-none">
                {session?.user?.name}
              </p>
              <p className="text-xs leading-none text-muted-foreground">
                {session?.user?.email}
              </p>
            </div>

            <Separator />

            <Button
              variant="ghost"
              className="w-full justify-start text-red-500"
              onClick={() => signOut({ callbackUrl: "/" })}
            >
              <LogOut className="mr-2 h-4 w-4" />
              Log Out
            </Button>
          </div>
        </div>
        <div className="p-4">{children}</div>
      </div>
    </section>
  )
}
