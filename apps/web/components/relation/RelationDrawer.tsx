import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription } from "@workspace/ui/components/drawer"
import { useState } from "react"
import { RelationTabs } from "./RelationTabs"


interface RelationDrawerProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export const RelationDrawer = ({ open, onOpenChange }: RelationDrawerProps) => {
  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Relations</DrawerTitle>
          <DrawerDescription>Manage your relations</DrawerDescription>
        </DrawerHeader>
        <RelationTabs />
      </DrawerContent>
    </Drawer>
  )
}