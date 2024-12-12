"use client"

import { toast } from "sonner"

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main>
      <h1>hello world</h1>
      <Button onClick={() => toast.success("hello")}>Wo hooo</Button>
    </main>
  )
}
