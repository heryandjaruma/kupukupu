"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

interface RedirectInterface {
  to: string
  delay: number
}

const Redirect = ({ to, delay }: RedirectInterface) => {
  const router = useRouter()

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.push(to) // Redirect to the specified page
    }, delay)

    return () => clearTimeout(timeout) // Clear the timeout if the component is unmounted
  }, [to, delay, router])

  return null // Render nothing, as this component only handles the redirection
}

export default Redirect
