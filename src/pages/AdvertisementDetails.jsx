import { useState } from "react"
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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Calendar as CalendarIcon } from "lucide-react"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import {format} from "date-fns";
import {Calendar} from '@/components/ui/calendar'


function AdvertisementDetails() {
  const [startDate, setStartDate] = useState(new Date());
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [creative, setCreative] = useState("");
  const [timePeriod, setTimePeriod] = useState("");

  return (
    <>
    <Helmet>
        <title>Advertisement Details</title>
    </Helmet>
    <div className="h-full">
      <div className="flex justify-between">

      <h1 className="text-2xl font-bold">Advertisement Details</h1>

      </div>
      <section className="flex flex-col gap-4 items-center justify-center mt-12">
      <Card className='w-full max-w-2xl'>
      <CardHeader>
        <CardTitle>Advertisement Details</CardTitle>
        <CardDescription>
          Set up or edit your advertisement details.
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
          <div className="flex flex-col gap-2">
                <Label>Creatives</Label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select creative" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Creatives</SelectLabel>
                        <SelectItem value="creative1">Creative 1</SelectItem>
                        <SelectItem value="creative2">Creative 2</SelectItem>
                        <SelectItem value="creative3">Creative 3</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-2 gap-4">
          <div>
          <Label htmlFor="start-date">Start Date</Label>
            <div className="relative mt-1 rounded-md shadow-sm">
              <Input
                id="start-date"
                placeholder="Select Date"
                value={format(startDate, "dd/MM/yyyy")}
                onChange={(e) => setStartDate(new Date(e.target.value))}
              />
              <Popover>
                <div className="hover:cursor-pointer absolute inset-y-0 right-0 flex items-center pr-3">
                  <PopoverTrigger asChild>
                    <CalendarIcon
                      className="h-5 w-5"
                      aria-hidden="true"
                      strokeWidth={2}
                    />
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={startDate}
                      onSelect={setStartDate}
                      initialFocus
                    />
                  </PopoverContent>
                </div>
              </Popover>
            </div>
          </div>
          <div>
          <Label htmlFor="time-period">Time Period</Label>
            <div className="relative mt-1 rounded-md shadow-sm">
              <Input
                placeholder="Enter time period"
                value={timePeriod}
                onChange={(e) => setTimePeriod(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
                <Label>
                  Location
                </Label>
                <Input placeholder="Enter location" value={location} onChange={(e) => setLocation(e.target.value)} />
              </div>
          <Button>Save</Button>
        </div>
      </CardContent>
    </Card>
      </section>
    </div>
    </>
  )
}

export default AdvertisementDetails