import { Check } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import SiteFooter from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"

export default function Page() {
  return (
    <div>
      <SiteHeader />
      <section className="container grid place-items-center gap-6 pb-8 pt-6 md:py-10">
        <div className="flex max-w-2xl flex-col items-center justify-center text-center">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
            Download Your Attention-Grabbing Resume Now!
          </h1>
          <p>
            To download your resume simply sign up for your Premium Membership.
            As an added bonus, you&apos;ll gain instant full access to our suite
            of expertly crafted career services.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="flex aspect-[4/5] w-80 flex-col items-center justify-center bg-slate-100">
            <Badge className="bg-green-400">Most Popular</Badge>
            <div className="my-3 text-center">
              <h1 className="text-xl font-semibold">Rp 49.000,-</h1>
              <p>7-Day Subscription</p>
            </div>
            <div className="flex w-full flex-col items-center p-4">
              <p className="flex w-full items-center text-start">
                <Check className="mr-2 h-4 w-5 text-green-600" /> Unlimited PDF
                Download
              </p>
              <p className="flex w-full items-center text-start">
                <Check className="mr-2 h-4 w-5 text-green-600" /> Unlimited
                Resumes
              </p>
              <p className="flex w-full items-center text-start">
                <Check className="mr-2 h-4 w-5 text-green-600" /> Unlimited
                Cover Letter
              </p>
              <p className="flex w-full items-center text-start">
                <Check className="mr-2 h-4 w-5 text-green-600" /> After 7 days,
                auto-renews to Rp 199.000,- billed every 4 weeks
              </p>
            </div>

            <Button className="bg-green-500">Choose Plan</Button>
          </div>

          <div className="flex aspect-[4/5] w-80 flex-col items-center justify-center bg-slate-100">
            <div className="my-3 text-center">
              <h1 className="text-xl font-semibold">Rp 699.000,-</h1>
              <p>6 Months</p>
            </div>
            <div className="flex w-full flex-col items-center p-4">
              <p className="flex w-full items-center text-start">
                <Check className="mr-2 h-4 w-5 text-green-600" /> Unlimited PDF
                Download
              </p>
              <p className="flex w-full items-center text-start">
                <Check className="mr-2 h-4 w-5 text-green-600" /> Unlimited
                Resumes
              </p>
              <p className="flex w-full items-center text-start">
                <Check className="mr-2 h-4 w-5 text-green-600" /> Unlimited
                Cover Letter
              </p>
              <p className="flex w-full items-center text-start">
                <Check className="mr-2 h-4 w-5 text-green-600" /> Non-recurring
                payment. Pay once.
              </p>
              <p className="flex w-full items-center text-start">
                <Check className="mr-2 h-4 w-5 text-green-600" /> Free resume
                critique from an HR expert
              </p>
            </div>

            <Button className="bg-blue-500">Choose Plan</Button>
          </div>
        </div>
      </section>
      <SiteFooter />
    </div>
  )
}
