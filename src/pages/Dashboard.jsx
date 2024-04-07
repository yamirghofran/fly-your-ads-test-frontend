import { Helmet } from "react-helmet";
import { ViewsVsImpressions } from "@/components/charts/ViewsVsImpressions";
import GendersPie from "@/components/charts/GendersPie";
import EthnicitiesPie from "@/components/charts/EthnicitiesPie";
import CreativeItem from "@/components/CreativeItem";

function Dashboard() {
  return (
    <>
    <Helmet>
        <title>Dashboard</title>
    </Helmet>
    <div className="h-full">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <div className="flex flex-col mt-4">
      <h2 className="text-lg font-semibold">Current Ad</h2>
      <CreativeItem />
      </div>
      <div className='mt-4 grid md:grid-cols-[2fr_1fr_1fr] gap-x-2'>
          <div className='bg-white rounded-md border p-4'>
            <h3 className="text-xl font-semibold">Views vs Impressions</h3>
            <ViewsVsImpressions />
          </div>
          <div className='bg-white rounded-md border p-4'>
            <h3 className="text-xl font-semibold">Genders</h3>
            <GendersPie />
          </div>
          <div className='bg-white rounded-md border p-4'>
            <h3 className="text-xl font-semibold">Ethnicities</h3>
            <EthnicitiesPie />
          </div>
        </div>
    </div>
    </>
  )
}

export default Dashboard