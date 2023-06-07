"use client"

import Link from "next/link"
import { PlusSquare } from "lucide-react"

export default function Page() {
  return (
    <div className="grid w-full grid-cols-4">
      {/* <Button onClick={() => signOut()}>Sign Out</Button> */}
      <div className="aspect-[3/4] w-64 rounded-lg border-2 border-dashed bg-slate-800">
        <Link
          href={`/dashboard`}
          className="flex items-center justify-center h-full w-full"
        >
          Dashboard
          <PlusSquare className="ml-2" />
        </Link>
      </div>
    </div>
  )
}
