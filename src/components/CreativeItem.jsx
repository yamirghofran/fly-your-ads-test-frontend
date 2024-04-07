import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

function CreativeItem({ title="Nike Fat", description="The ad to inspire fat people", assets=["https://filestage.io/wp-content/uploads/2023/02/image-1.webp"], id=1 }) {
  return (
    <Card className="w-full max-w-xl my-2">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4">
          <img src={assets[0]} alt="Creative Item" className="rounded-md shadow-sm" />
          <p>{description}</p>
          <Button asChild>
            <Link to={`/creatives/${id}`}>View Details</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default CreativeItem