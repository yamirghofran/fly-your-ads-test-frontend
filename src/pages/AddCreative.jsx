import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Helmet } from "react-helmet";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

function AddCreative() {
  return (
    <>
    <Helmet>
        <title>Creatives</title>
    </Helmet>
    <div className="h-full">
        <h1 className="text-2xl font-bold">Add Creative</h1>
        <section className="flex flex-col justify-center items-center h-full mt-12">
            <Card className="w-full max-w-2xl">
                <CardHeader>
                    <CardTitle>Upload New Creative</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <Label className="font-semibold text-base">Creative Name</Label>
                        <Input placeholder="Enter Creative Name" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <Label className="font-semibold text-base">Assets</Label>
                        <Input type="file" multiple />
                    </div>
                    <div className="flex flex-col gap-2">
                        <Label className="font-semibold text-base">Description</Label>
                        <Textarea placeholder="Enter Description" />
                    </div>
                    <Button>Add New Creative</Button>
                    
                </CardContent>
            </Card>
        </section>
    </div>
    </>
  )
}

export default AddCreative