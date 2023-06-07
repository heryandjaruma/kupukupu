import Link from "next/link"

import { siteConfig } from "@/config/site"
import { Button, buttonVariants } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"

export default function IndexPage() {
  return (
    <div>
      <SiteHeader />

      <section className="container grid place-items-center gap-6 pb-8 pt-6 md:py-10">
        <div className="flex max-w-[980px] flex-col items-center gap-2 text-center">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
            Automate your CV creation <br className="hidden sm:inline" />
            with our AI resume builder
          </h1>
          <p className="max-w-[700px] text-lg text-muted-foreground">
            Some people simply don&apos;t enjoy writing resumes as much as we
            do. That&apos;s okay. Our AI Resume Writer is for you.
          </p>
        </div>
        <div className="flex gap-4">
          <Button asChild>
            <Link href="/dashboard">Dashboard</Link>
          </Button>

          {/* <Link
            // href={siteConfig.links.docs}
            href={`/dashboard/home`}
            target="_blank"
            rel="noreferrer"
            className={buttonVariants()}
          >
            Dashboard
          </Link> */}

          {/* <Link
            target="_blank"
            rel="noreferrer"
            href={siteConfig.links.github}
            className={buttonVariants({ variant: "outline" })}
          >
            GitHub
          </Link> */}
        </div>
      </section>
    </div>
  )
}
