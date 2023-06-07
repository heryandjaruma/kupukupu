"use client"

import React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronLeft, FileText, Home, LogOut } from "lucide-react"
import { signOut, useSession } from "next-auth/react"

import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "@/components/ui/button"

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
        <div className="sticky top-0 h-screen w-56 space-y-3 border-r-white p-4">
          <Link
            href="/"
            className={cn(buttonVariants({ variant: "ghost" }), "")}
          >
            <>
              <ChevronLeft />
              {"  "}Home
            </>
          </Link>

          <Link
            href={`/dashboard`}
            className={cn(buttonVariants({ variant: "ghost" }), "w-full")}
          >
            <Home className="mr-2 h-4 w-4" />
            Dashboard
          </Link>

          {/* <Link
            href={`/dashboard/create`}
            className={cn(buttonVariants({ variant: "ghost" }), "w-full")}
          >
            <FileText className="mr-2 h-4 w-4" />
            Create
          </Link> */}

          <Button
            variant="ghost"
            className="w-full text-red-500"
            onClick={() => signOut()}
          >
            <LogOut className="mr-2 h-4 w-4" />
            Log Out
          </Button>
        </div>
        <div className="p-4">{children}</div>
      </div>
    </section>
  )
}
