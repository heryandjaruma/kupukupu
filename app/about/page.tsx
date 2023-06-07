import Image from "next/image"

import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Icons } from "@/components/icons"
import SiteFooter from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"

import { cofounders, lecturers } from "./data"

export default function Page() {
  return (
    <div>
      <SiteHeader />
      <section className="container grid place-items-center gap-6 pb-8 pt-6 md:py-10">
        <div className="flex flex-col items-center">
          <Icons.logo />
          <p className="text-2xl font-bold">KupuKupu</p>
        </div>

        <Separator />

        <div>
          <h1 className="mb-5 w-full text-center text-xl font-semibold">
            Meet Our Co-Founders
          </h1>

          <div className="grid grid-cols-3 place-items-center">
            <div className="my-3 flex flex-col items-center">
              <Image
                src={`/images/cofounders/${cofounders.heryan.pic}.jpg`}
                alt={cofounders.heryan.name}
                width={640}
                height={640}
                className="w-32 rounded-full"
              />
              <span className="mt-2">
                {cofounders.heryan.nim} - {cofounders.heryan.name}
              </span>
              <p>{cofounders.heryan.major}</p>
              <Badge
                variant={"outline"}
                className="mt-3 bg-gradient-to-r from-sky-400 to-blue-500"
              >
                Developer
              </Badge>
            </div>

            <div className="my-3 flex flex-col items-center">
              <Image
                src={`/images/cofounders/${cofounders.rasyid.pic}.jpg`}
                alt={cofounders.rasyid.name}
                width={640}
                height={640}
                className="w-32 rounded-full"
              />
              <span className="mt-2">
                {cofounders.rasyid.nim} - {cofounders.rasyid.name}
              </span>
              <p>{cofounders.rasyid.major}</p>
              <Badge
                variant={"outline"}
                className="mt-3 bg-gradient-to-r from-fuchsia-600 to-pink-600"
              >
                Lead & UI/UX Designer
              </Badge>
            </div>

            <div className="my-3 flex flex-col items-center">
              <Image
                src={`/images/cofounders/${cofounders.firsha.pic}.jpg`}
                alt={cofounders.firsha.name}
                width={640}
                height={640}
                className="w-32 rounded-full"
              />
              <span className="mt-2">
                {cofounders.firsha.nim} - {cofounders.firsha.name}
              </span>
              <p>{cofounders.firsha.major}</p>
              <Badge
                variant={"outline"}
                className="mt-3 bg-gradient-to-r from-fuchsia-600 to-pink-600"
              >
                UI/UX Designer
              </Badge>
            </div>
          </div>
        </div>

        <Separator />

        <div>
          <h1 className="mb-5 w-full text-center text-xl font-semibold">
            Meet Our Lecturers
          </h1>

          <div className="grid w-full grid-cols-2 place-items-center">
            <div className="flex flex-col items-center justify-center rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 p-4 text-white">
              <span className="">{lecturers.indra.name}</span>
              <p>{lecturers.indra.code}</p>
            </div>

            <div className="flex flex-col items-center justify-center rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 p-4 text-white">
              <span className="">{lecturers.erlisa.name}</span>
              <p>{lecturers.erlisa.code}</p>
            </div>
          </div>
        </div>
      </section>
      <SiteFooter />
    </div>
  )
}
