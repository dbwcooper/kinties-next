"use client"

import { RelationDrawer } from "@/components/relation/RelationDrawer"
import { useState } from "react"
import { ChartFlow } from "@/components/chart-flow/ChartFlow"

export default function Page() {
  const [open, setOpen] = useState(false)
  return (

    <div className="flex items-center justify-center min-h-svh overflow-auto">
      <ChartFlow />
      <RelationDrawer open={open} onOpenChange={setOpen} />
    </div>
  )
}
