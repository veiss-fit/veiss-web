"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useMutation } from "convex/react";
import { api } from "../../../../../../convex/_generated/api";

export default function WaitlistModal({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [experience, setExperience] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const createWaitlistEntry = useMutation(api.waitlist.createWaitlistEntry);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      setSubmitted(false);
      return;
    }

    try {
      await createWaitlistEntry({ name, email, age, experience });
      setError("");
      setSubmitted(true);

      setName("");
      setEmail("");
      setAge("");
      setExperience("");
    } catch (err) {
      console.error(err);
      setError("Failed to submit. Please try again.");
      setSubmitted(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Join our Waitlist!</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <Label htmlFor="age">Age</Label>
            <Input
              id="age"
              type="number"
              min="0"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
            />
          </div>

          <div>
            <Label htmlFor="experience">Years of Experience at the Gym</Label>
            <Input
              id="experience"
              type="number"
              min="0"
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
              required
            />
          </div>

          <Button type="submit" className="w-full">
            Submit
          </Button>

          {error && (
            <p className="text-red-600 text-sm text-center mt-2">{error}</p>
          )}

          {submitted && (
            <p className="text-green-600 text-sm text-center mt-2">
              Waitlist joined successfully!
            </p>
          )}
        </form>
      </DialogContent>
    </Dialog>
  );
}
