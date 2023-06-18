"use client"

import Link from "next/link"
import { BarChart, LayoutDashboard, LogOut, Users } from "lucide-react"
import { signOut } from "next-auth/react"

import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Icons } from "@/components/icons"
import { ThemeToggle } from "@/components/theme-toggle"

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className="flex flex-row items-start">
      <div className="flex w-56 flex-col justify-center p-4">
        <Icons.logo className="w-full" />

        <h1 className="w-full text-center font-mono text-yellow-500">Admin</h1>

        <Separator className="my-4" />

        <div className="flex flex-row items-center justify-around text-sm">
          <p>Toogle Theme</p>
          <ThemeToggle />
        </div>

        <Separator className="my-4" />

        <div className="flex flex-col">
          <Link
            href={`/admin/dashboard`}
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "w-full justify-start"
            )}
          >
            <LayoutDashboard className="mr-2 h-4 w-4" />
            Dashboard
          </Link>

          <Link
            href={`/admin/reports`}
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "w-full justify-start"
            )}
          >
            <BarChart className="mr-2 h-4 w-4" />
            Reports
          </Link>

          <Link
            href={`/admin/users`}
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "w-full justify-start"
            )}
          >
            <Users className="mr-2 h-4 w-4" />
            Manage Users
          </Link>

          <Separator className="my-4" />

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

      <div>{children}</div>
    </section>
  )
}
