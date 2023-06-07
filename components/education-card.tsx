import { Trash } from "lucide-react"

import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Textarea } from "./ui/textarea"

export default function EducationCard() {
  return (
    <div className="space-y-2 rounded-lg border-2 p-4">
      <div id="edu-level">
        <Label htmlFor="email-2">Education Level</Label>
        <Input type="email" id="email-2" placeholder="Bachelor of Science" />
      </div>

      <div id="major">
        <Label htmlFor="email-2">Education Major</Label>
        <Input type="email" id="major" placeholder="Computer Science" />
      </div>

      <div id="association">
        <Label htmlFor="email-2">Association</Label>
        <Input type="email" id="email-2" placeholder="B University" />
      </div>

      <div className="grid w-full gap-1.5">
        <Label htmlFor="message">Education Description</Label>
        <Textarea
          placeholder="I won a competition; I have a good score 3.6 GPA ..."
          id="message"
        />
      </div>

      <div className="w-full text-end">
        <Button className="bg-red-700">
          Delete <Trash className="ml-2 h-4 w-4" />{" "}
        </Button>
      </div>
    </div>
  )
}
