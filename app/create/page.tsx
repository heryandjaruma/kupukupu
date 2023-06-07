import Link from "next/link"
import { ChevronRight } from "lucide-react"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"

export default function Page() {
  return (
    <div className="w-full space-y-2">
      <div className="mb-5 text-slate-600">
        <span className="font-semibold">Note:</span> This will be shown in your
        introduction part of your CV
      </div>

      <div id="full-name">
        <Label htmlFor="email-2">Full Name</Label>
        <Input type="email" id="email-2" placeholder="Agus Doe" />
      </div>

      <div id="phone">
        <Label htmlFor="email-2">Phone Number</Label>
        <Input type="text" id="email-2" placeholder="+62 XXXXXXXXXX" />
      </div>

      <div id="email">
        <Label htmlFor="email-2">E-mail Address</Label>
        <Input type="email" id="email-2" placeholder="example@domain.com" />
      </div>

      <div id="dom" className="grid grid-cols-2 gap-x-2">
        <div>
          <Label htmlFor="email-2">Country</Label>
          <Input type="text" id="email-2" placeholder="Indonesia" />
        </div>
        <div>
          <Label htmlFor="email-2">City</Label>
          <Input type="text" id="email-2" placeholder="Tangerang" />
        </div>
      </div>

      <div id="linkedin">
        <Label htmlFor="email-2">LinkedIn Profile URL</Label>
        <Input type="url" id="email-2" placeholder="linkedin.com/in/agusdoe" />
      </div>

      <div id="portfolio">
        <Label htmlFor="email-2">Portfolio URL</Label>
        <Input type="url" id="email-2" placeholder="my-portfolio.domain.com" />
      </div>
    </div>
  )
}
