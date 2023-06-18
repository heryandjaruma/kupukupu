import Link from "next/link"
import { BellRing, ChevronLeft, Lock, Mail, UserCheck } from "lucide-react"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { SiteHeader } from "@/components/site-header"

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className="bg-slate-100 dark:bg-slate-900">
      <SiteHeader />

      <div className="flex flex-col p-4">
        <Link
          href="/dashboard"
          className={cn(buttonVariants({ variant: "ghost" }), "w-fit")}
        >
          <>
            <ChevronLeft />
            {"  "}Back
          </>
        </Link>

        <h1 className="mx-4 my-3 text-3xl">Account Settings</h1>

        <Separator />

        <div className="my-4 flex flex-row">
          <div className="flex w-64 flex-col">
            <Link
              href={`/account/email`}
              className={cn(
                buttonVariants({ variant: "ghost" }),
                "w-full justify-start"
              )}
            >
              <Mail className="mr-2 h-4 w-4" />
              Email Address
            </Link>

            <Link
              href={`/account/email`}
              className={cn(
                buttonVariants({ variant: "ghost" }),
                "w-full justify-start"
              )}
            >
              <Lock className="mr-2 h-4 w-4" />
              Password
            </Link>

            <Link
              href={`/account/notification`}
              className={cn(
                buttonVariants({ variant: "ghost" }),
                "w-full justify-start"
              )}
            >
              <BellRing className="mr-2 h-4 w-4" />
              Notification
            </Link>

            <Link
              href={`/account/membership`}
              className={cn(
                buttonVariants({ variant: "ghost" }),
                "w-full justify-start"
              )}
            >
              <UserCheck className="mr-2 h-4 w-4" />
              Membership
            </Link>
          </div>

          <div className="p-4">{children}</div>
        </div>
      </div>
    </section>
  )
}
