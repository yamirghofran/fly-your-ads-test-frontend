import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Helmet } from "react-helmet";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { Calendar as CalendarIcon } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import {Calendar} from '@/components/ui/calendar'
import {format} from "date-fns";
import { useQuery } from "react-query";
import { fetchCreatives } from "@/util/fetchers";
import { addNewAdvertisement } from "@/util/functions";


function AddAdvertisement() {
  const { data: creatives, isLoading: isLoadingCreatives } = useQuery('creatives', fetchCreatives);
  const [startDate, setStartDate] = useState(new Date());
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [creative, setCreative] = useState("");
  const [timePeriod, setTimePeriod] = useState("");

  if (isLoadingCreatives) return <div>Loading creatives...</div>;
  
  return (
    <>
      <Helmet>
        <title>Add Advertisement</title>
      </Helmet>
      <div className="h-full">
        <h1 className="text-2xl font-bold">Add Advertisement</h1>
        <section className="flex flex-col justify-center items-center h-full mt-12">
          <Card className="w-full max-w-2xl">
            <CardHeader>
              <CardTitle>Upload New Advertisement</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <Label className="font-semibold text-base">
                  Advertisement Name
                </Label>
                <Input placeholder="Enter Advertisement Name" value={name} onChange={(e) => setName(e.target.value)} />
              </div>
              <div className="flex flex-col gap-2">
                <Label className="font-semibold text-base">Creatives</Label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select creative" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Creatives</SelectLabel>
                      {creatives.map((creative) => (
                        <SelectItem value={creative._id}>{creative.title}</SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="start-date"
            >
              Start Date
            </label>
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
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="end-date"
            >
              Time period
            </label>
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
                <Label className="font-semibold text-base">
                  Location
                </Label>
                <Input placeholder="Enter location" value={location} onChange={(e) => setLocation(e.target.value)} />
              </div>
        

              <div className="flex flex-col gap-2">
                <Label className="font-semibold text-base">Description</Label>
                <Textarea placeholder="Enter Description" value={description} onChange={(e) => setDescription(e.target.value)} />
              </div>
              <Button onClick={() => addNewAdvertisement(name, creative, startDate, timePeriod, location, description)} >Add New Advertisement</Button>
            </CardContent>
          </Card>
        </section>
      </div>
    </>
  );
}

export default AddAdvertisement;
