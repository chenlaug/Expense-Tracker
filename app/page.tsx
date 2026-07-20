import BarBudgets from "@/components/commun/BarBudgets"
import CardCustom from "@/components/commun/CardCustom"
import ChardSolde from "@/components/commun/ChardSolde"
import Header from "@/components/commun/Header"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export default function Page() {
  return (
    <>
      <Header />

      <section className="grid grid-cols-1 gap-[20] sm:grid-cols-2 lg:grid-cols-3">
        <CardCustom
          name="Solde"
          solde={2800.0}
          description="Revenus − Dépenses, sur la période"
        />
        <CardCustom
          name="Revenus"
          solde={2800.0}
          description="Entrées d'argent"
          isRevenus={true}
        />
        <CardCustom
          name="Dépenses"
          solde={0.0}
          description="Sorties d'argent"
        />
      </section>

      <ChardSolde />
      <BarBudgets />

      <Card>
        <CardHeader className="flex items-center justify-between">
          <p>Transactions</p>
          <Input
            placeholder="Rechercher..."
            type="search"
            className="w-[200]"
          />
        </CardHeader>
        <CardDescription className="px-[14]">
          <div className="flex justify-between">
            <div>
              <p>test</p>
              <p>Autres . 10 juin</p>
            </div>
            <div className="flex items-center">
              <p>-15000€</p>
              <Button>x</Button>
            </div>
          </div>
        </CardDescription>
      </Card>
    </>
  )
}
