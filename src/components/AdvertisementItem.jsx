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

function AdvertisementItem() {
  return (
    <Card className="w-full max-w-xl my-2">
      <CardHeader>
        <CardTitle>Nike Fat Ad 1</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4">
          <img src="https://filestage.io/wp-content/uploads/2023/02/image-1.webp" alt="Creative Item" className="rounded-md shadow-sm" />
          <div>
            <p><span className="font-bold">Date:</span> 2023-02-01</p>
            <p><span className="font-bold">Status:</span> Active</p>
            <p><span className="font-bold">Location:</span> Puerta del Sol</p>
            <p><span className="font-bold">Duration:</span> 10:00</p>
          </div>
          <Button asChild>
            <Link to={`/advertisements/${1}`}>View Details</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default AdvertisementItem

