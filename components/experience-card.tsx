import { Trash } from "lucide-react"

import { Button } from "./ui/button"
import { Checkbox } from "./ui/checkbox"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Separator } from "./ui/separator"
import { Textarea } from "./ui/textarea"

export default function ExperienceCard() {
  return (
    <div className="space-y-2 rounded-lg border-2 p-4">
      <div id="full-name" className="space-y-2">
        <Label htmlFor="email-2">Experience Title</Label>
        <Input
          type="email"
          id="email-2"
          placeholder="Part-time Laboratory Center"
        />
        <div className="flex w-full items-center justify-end space-x-2">
          <Checkbox id="terms" />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Display title as it is on CV
          </label>
        </div>
      </div>

      <Separator />

      <div id="role">
        <Label htmlFor="email-2">Role</Label>
        <Input type="email" id="email-2" placeholder="Teaching Assistant" />
      </div>

      <div id="association">
        <Label htmlFor="email-2">Association</Label>
        <Input type="email" id="email-2" placeholder="B University" />
      </div>

      <div className="grid w-full gap-1.5">
        <Label htmlFor="message">Experience Description</Label>
        <Textarea
          placeholder="I teach 100 students; Fun; Challenging ..."
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
