import { Trash } from "lucide-react"

import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Textarea } from "./ui/textarea"

export default function OrganizationCard() {
  return (
    <div className="space-y-2 rounded-lg border-2 p-4">
      <div id="organization-title">
        <Label htmlFor="email-2">Organization Name</Label>
        <Input type="text" id="email-2" placeholder="NASA" />
      </div>

      <div id="organization">
        <Label htmlFor="email-2">Role</Label>
        <Input type="email" id="email-2" placeholder="Social media admin" />
      </div>

      <div className="grid w-full gap-1.5">
        <Label htmlFor="message">Organization Description</Label>
        <Textarea
          placeholder="I worked for 6 months; managing social media posts ..."
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
