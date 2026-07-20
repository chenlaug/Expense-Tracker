import React from "react"
import { getCurrentDate } from "@/utils/CurrentDate"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <div className="flex flex-col gap-[20] lg:flex-row lg:justify-between">
      <div>
        <p className="text-2xl font-extrabold">Tableau de bord</p>
        <p className="capitalize"> {getCurrentDate()}</p>
      </div>

      <div className="flex flex-row items-center gap-[12]">
        <Tabs defaultValue="mois">
          <TabsList>
            <TabsTrigger value="semaine">Semaine</TabsTrigger>
            <TabsTrigger value="mois">Mois</TabsTrigger>
            <TabsTrigger value="annee">Année</TabsTrigger>
          </TabsList>
        </Tabs>
        <Button className="bg-primary px-[11] py-[20] font-bold">
          + Nouvelle dépense
        </Button>
      </div>
    </div>
  )
}
