"use client"

import React from "react"
import Link from "next/link"
import { FileText, Home, LogOut } from "lucide-react"
import { signOut, useSession } from "next-auth/react"

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

  return (
    <section>
      <div className="flex">
        <div className="w-56 space-y-3 border-r-2 p-4">
          <Link
            href={`/dashboard`}
            className={`${buttonVariants({ variant: "ghost" })} w-full`}
          >
            Dashboard
            <Home className="ml-2" />
          </Link>

          <Link
            href={`/dashboard/create`}
            className={`${buttonVariants({ variant: "ghost" })} w-full`}
          >
            Create
            <FileText className="ml-2" />
          </Link>

          <Button
            variant="ghost"
            className="w-full text-red-500"
            onClick={() => signOut()}
          >
            Log Out
            <LogOut className="ml-2" />
          </Button>
        </div>
        <div className="p-4">{children}</div>
      </div>
    </section>
  )
}
