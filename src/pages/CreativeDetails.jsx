import { Helmet } from "react-helmet"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Upload } from "lucide-react"
import { Button } from "@/components/ui/button"



function CreativeDetails() {
  return (
    <>
    <Helmet>
        <title>Creative Details</title>
    </Helmet>
    <div className="h-full">
      <div className="flex justify-between">

      <h1 className="text-2xl font-bold">Creative Details</h1>

      </div>
      <section className="flex flex-col gap-4 items-center justify-center mt-12">
    <Card className='w-full max-w-2xl'>
      <CardHeader>
        <CardTitle>Creative Details</CardTitle>
        <CardDescription>
          Set up or edit your creative details.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6">
          <div className="grid gap-3">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              type="text"
              className="w-full"
              defaultValue="Gamer Gear Pro Controller"
            />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl nec ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl nec nunc."
              className="min-h-32"
            />
          </div>
          <Button>Save</Button>
        </div>
      </CardContent>
    </Card>
      <Card className="overflow-hidden w-full max-w-2xl">
      <CardHeader>
        <CardTitle>Product Images</CardTitle>
        <CardDescription>
          Lipsum dolor sit amet, consectetur adipiscing elit
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-2">
          <img
            alt="Product image"
            className="aspect-square w-full rounded-md object-cover"
            height="300"
            src="https://filestage.io/wp-content/uploads/2023/02/image-1.webp"
            width="300"
          />
          <div className="grid grid-cols-3 gap-2">
            <button>
              <img
                alt="Product image"
                className="aspect-square w-full rounded-md object-cover"
                height="84"
                src="https://filestage.io/wp-content/uploads/2023/02/image-1.webp"
                width="84"
              />
            </button>
            <button>
              <img
                alt="Product image"
                className="aspect-square w-full rounded-md object-cover"
                height="84"
                src="https://filestage.io/wp-content/uploads/2023/02/image-1.webp"
                width="84"
              />
            </button>
            <button className="flex aspect-square w-full items-center justify-center rounded-md border border-dashed">
              <Upload className="h-4 w-4 text-muted-foreground" />
              <span className="sr-only">Upload</span>
            </button>
          </div>
        </div>
      </CardContent>
    </Card>
      </section>
    </div>
    </>
  )
}

export default CreativeDetails