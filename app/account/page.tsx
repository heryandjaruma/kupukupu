"use client"

import { useSession } from "next-auth/react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function Page() {
  const { data: session } = useSession({
    required: true,
    // onUnauthenticated() {
    //   redirect("/dashboard/home")
    // },
  })

  return (
    <div className="flex w-full flex-col">
      <div className="w-full space-y-3 rounded-md bg-white p-4 dark:bg-slate-950">
        <h1 className="text-md font-semibold">Change Email Address</h1>

        <p className="text-sm text-slate-500">
          Keep in mind that your account is personal to you. If the new email
          address is not a simple correction but an overall change, please
          contact us.
        </p>

        {session?.user?.email && (
          <div id="email">
            <Label htmlFor="email-2">Email Address</Label>
            <Input
              type="email"
              id="email-2"
              placeholder={session?.user?.email}
            />
          </div>
        )}

        <Button variant="secondary">Save</Button>
      </div>
    </div>
  )
}
