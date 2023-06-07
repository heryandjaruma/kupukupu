"use client"

import Link from "next/link"
import { PlusSquare } from "lucide-react"

import { Separator } from "@/components/ui/separator"

export default function Page() {
  return (
    <div>
      <div className="w-full">
        <h1 className="mb-4 text-2xl">Template</h1>

        <div className="grid grid-cols-4 gap-4">
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
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              className="aspect-[3/4] w-64 animate-pulse rounded-lg bg-slate-800"
              key={i}
            ></div>
          ))}
        </div>
      </div>

      <Separator className="my-6" />

      <div className="w-full">
        <h1 className="mb-4 text-2xl">Your CV</h1>

        <div className="grid w-full grid-cols-4 gap-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              className="aspect-[3/4] w-64 animate-pulse rounded-lg bg-slate-800"
              key={i}
            ></div>
          ))}
        </div>
      </div>
    </div>
  )
}
