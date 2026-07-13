import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
type Info = {
  name: string
  solde: number
  description: string
  isRevenus?: boolean
}
export default function CardCustom(info: Info) {
  const { name, solde, description, isRevenus = false } = info
  const euroSolde = new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
  }).format(solde)
  return (
    <Card
      size="sm"
      className="p-[22px 24px] p[24] flex content-stretch justify-start gap-[6] rounded-[16] border border-solid outline-white"
    >
      <CardHeader>
        <CardTitle className="text-sm">{name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className={`text-3xl font-extrabold ${isRevenus && "text-primary"}`}>
          {euroSolde}
        </p>
      </CardContent>
      <CardFooter>
        <p className="text-xs">{description} </p>
      </CardFooter>
    </Card>
  )
}
