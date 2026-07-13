import CardCustom from "@/components/commun/CardCustom"
import Header from "@/components/commun/Header"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

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

      <section>
        <Card>
          <CardHeader>Dépenses par catégorie</CardHeader>
          <CardContent></CardContent>
        </Card>
      </section>
    </>
  )
}
