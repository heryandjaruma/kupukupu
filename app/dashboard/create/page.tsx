"use client"

import Link from "next/link"
import { PlusSquare } from "lucide-react"

export default function Page() {
  return (
    <div className="grid w-full grid-cols-4 gap-4">
      {/* <Button onClick={() => signOut()}>Sign Out</Button> */}
      <div className="aspect-[3/4] w-64 rounded-lg border-2 border-dashed bg-slate-800">
        <Link
          href={`/create`}
          className="flex h-full w-full flex-col items-center justify-center"
        >
          <PlusSquare className="mb-2" />
          Create New CV
        </Link>
      </div>

      {/* dummies */}
      {Array.from({ length: 11 }).map((_, i) => (
        <div
          className="aspect-[3/4] w-64 animate-pulse rounded-lg bg-slate-800"
          key={i}
        ></div>
      ))}
    </div>
  )
}
