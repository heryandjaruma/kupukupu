import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

import { Icons } from "./icons"

export default function SiteFooter() {
  return (
    <footer className="flex flex-col items-center justify-center bg-slate-100 pt-6">
      <div className="flex w-full flex-row items-center justify-around">
        <Icons.logo className="h-36 w-36" />

        <div className="grid grid-cols-4 place-items-start gap-6 py-6">
          <div className="space-y-8">
            <h1 className="text-lg font-semibold">Services</h1>

            <div className="flex flex-col space-y-4 text-gray-600">
              <Link href={`/`} className="duration-200 hover:text-gray-800">
                ATS Template
              </Link>
              <Link href={`/`} className="duration-200 hover:text-gray-800">
                CV Builder
              </Link>
              <Link href={`/`} className="duration-200 hover:text-gray-800">
                CV Examples
              </Link>
              <Link href={`/`} className="duration-200 hover:text-gray-800">
                AI Generator
              </Link>
            </div>
          </div>

          <div className="space-y-8">
            <h1 className="text-lg font-semibold">Product</h1>

            <div className="flex flex-col space-y-4 text-gray-600">
              <Link href={`/`} className="duration-200 hover:text-gray-800">
                Pricing
              </Link>
              <Link href={`/`} className="duration-200 hover:text-gray-800">
                Reviews
              </Link>
            </div>
          </div>

          <div className="space-y-8">
            <h1 className="text-lg font-semibold">Support</h1>

            <div className="flex flex-col space-y-4 text-gray-600">
              <Link href={`/`} className="duration-200 hover:text-gray-800">
                FAQ
              </Link>
              <Link href={`/`} className="duration-200 hover:text-gray-800">
                Terms and Conditions
              </Link>
              <Link href={`/`} className="duration-200 hover:text-gray-800">
                Privacy
              </Link>
              <Link href={`/`} className="duration-200 hover:text-gray-800">
                Locations
              </Link>
            </div>
          </div>

          <div className="space-y-8">
            <h1 className="text-lg font-semibold">Contact Us</h1>

            <div className="space-y-4">
              <div>
                <h1 className="font-semibold">Phone</h1>

                <p>+1 (305) 912-9260</p>
              </div>

              <div>
                <h1 className="font-semibold">Email</h1>

                <p>help@kupukupugroup.com</p>
              </div>

              <div>
                <div className="flex flex-row space-x-6 text-indigo-900">
                  <Twitter />

                  <Facebook />

                  <Instagram />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-blue-100 py-6 text-center text-sm font-light text-gray-700">
        © Kupukupugroup8. All Rights Reserved
      </div>
    </footer>
  )
}
