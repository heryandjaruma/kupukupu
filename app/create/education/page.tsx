import { Plus } from "lucide-react"

import { Button } from "@/components/ui/button"
import EducationCard from "@/components/education-card"

export default function Page() {
  return (
    <div className="w-full space-y-2">
      <div className="mb-5 text-slate-600">
        <span className="font-semibold">Tip:</span> Fill fill out the{" "}
        <span>description</span> with some simple words, and let our AI do the
        rest for you.
      </div>

      <div className="space-y-4">
        <EducationCard />
        <Button className="w-full">
          <Plus /> Add education
        </Button>
      </div>
    </div>
  )
}
