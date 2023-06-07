"use client"

import { redirect } from "next/navigation"
import { useSession } from "next-auth/react"

interface AuthLayoutProps {
  children: React.ReactNode
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  const { data: session } = useSession()

  if (session) {
    redirect("/dashboard")
  }

  return <div className="min-h-screen">{children}</div>
}
