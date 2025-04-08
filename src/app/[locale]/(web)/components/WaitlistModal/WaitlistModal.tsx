"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useMutation } from "convex/react"
import { api } from "../../../../../../convex/_generated/api" // Import the generated api

type WaitlistModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function WaitlistModal({ open, onOpenChange }: WaitlistModalProps) {
  const [formValid, setFormValid] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [age, setAge] = useState("")
  const [experience, setExperience] = useState("")

  // Initialize the mutation
  const createWaitlistEntry = useMutation(api.waitlist.createWaitlistEntry)

  const handleSubmit = async (e: React.FormEvent) => {
    console.log("Something")
    e.preventDefault()

    // Use the mutation to submit data to the "waitlist" table
    try {
      await createWaitlistEntry({
        name,
        email,
        age,
        experience,
      })
      console.log("Form submitted and data added to the waitlist!")
      onOpenChange(false)  // Close the modal after submitting
    } catch (error) {
      console.error("Error submitting the form:", error)
    }
  }

  const checkFormValidity = (e: React.FormEvent) => {
    const form = e.target as HTMLFormElement
    setFormValid(form.checkValidity())
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Waitlist Sign Up</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} onChange={checkFormValidity} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name <span className="text-red-500">*</span></Label>
            <Input
              id="name"
              required
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email <span className="text-red-500">*</span></Label>
            <Input
              id="email"
              type="email"
              required
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="age">Age <span className="text-red-500">*</span></Label>
              <Input
                id="age"
                type="number"
                required
                min="1"
                max="120"
                placeholder="Your age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="experience">Years of Experience <span className="text-red-500">*</span></Label>
              <Input
                id="experience"
                type="number"
                required
                min="0"
                max="100"
                placeholder="Years at gym"
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
              />
            </div>
          </div>
          <Button type="submit" className="w-full" disabled={!formValid}>
            Submit
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}

