import Image from "next/image"
import Link from "next/link"
import { Download, File, FileText, LayoutDashboard } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "@/components/ui/button"

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center space-y-5 py-4">
      <h1 className="text-2xl">Your CV is Ready!</h1>

      <Image
        src={`/images/create/example.jpg`}
        width={1080}
        height={1080}
        alt="example-cv"
        className="w-56 blur-sm"
      />

      <p>Download your PDF or edit in Google Docs</p>

      <div className="grid grid-cols-3 place-items-center">
        <Link href="/dashboard" className={cn(buttonVariants({}), "")}>
          <LayoutDashboard /> Back to Dashboard
        </Link>
        <Button className="">
          <Download /> Download PDF
        </Button>
        <Button className="">
          <FileText /> Edit in Google Docs
        </Button>
      </div>
    </div>
  )
}
